import { useCallback, useState, useRef } from "react";
import { Form } from "formik";
import { companySearchInitialValues } from "../../../utils/constants";
import { companySearchSchema } from "../../../utils/yupSchemas";
import FormikBase, { DefaultOnSubmit } from "../../Forms/FormikBase";
import SearchCompanyInput from "../SearchCompanyInput";
import { API } from "../../../app/api";
import { ICompanyResponseDto, ICompanySearchDto, IReviewsDto } from "../../../interfaces";
import Spinner from "../../Spinner";
import { AxiosResponse } from "axios";
import { InformationCircleIcon, PrinterIcon } from "@heroicons/react/20/solid";
import OverviewSection from "./OverviewSection";
import DetailsSection from "./DetailsSection";
import AddressSection from "./AddressSection";
import ContactSection from "./ContactSection";
import ReviewsSection from "./ReviewsSection";
import { useReactToPrint } from "react-to-print";
import { useSelector } from "react-redux";
import { RootState } from "../../../app/store";
import Tooltip from "../../Tooltip";

const SearchSection = () => {
  const [loadingDetails, setLoadingDetails] = useState<boolean>(false);
  const [loadingReviews, setLoadingReviews] = useState<boolean>(false);
  const [details, setDetails] = useState<ICompanyResponseDto | null>(null);
  const [reviews, setReviews] = useState<IReviewsDto | null>(null);
  const [error, setError] = useState<string | null>(null);
  const token = useSelector((state: RootState) => state.user.token);

  const getCompanyDetails = useCallback(async (values: any) => {
    if (!token) return;

    try {
      const searchData: ICompanySearchDto = {
        commercial_names: [values.commercial_names],
        address_txt: values.address_txt,
        phone_number: values.phone_number,
        website: values.website,
      };
      // check if at least two fields are filled

      const filledFields = Object.values(searchData).filter((value) => value !== '' && value !== undefined);

      if (filledFields.length < 2) {
        setError('At least one of the phone number, website or address text fields is required');
        return;
      }
  
      setLoadingDetails(true);
      const companyDataResponse: AxiosResponse<ICompanyResponseDto> = await API.company.getCompany(searchData, token);
  
      const companyData = companyDataResponse.data;
  
      setDetails(companyData);
      setLoadingDetails(false);
      setError(null);
  
      if(companyData?.soleadify_id) {
        getCompanyReviews(companyData.company_name);
      }
    } catch {
      setLoadingDetails(false);
      setDetails(null);
      setReviews(null);
    }
  }, [token]);

  const getCompanyReviews = useCallback(async (companyName: string) => {
    if (!token) return;

    try {
      const transformedCompanyName = encodeURIComponent(companyName);

      setLoadingReviews(true);
      const reviewsDataResponse: AxiosResponse<IReviewsDto> = await API.company.getReviews(transformedCompanyName, token);
  
      const reviewsData = reviewsDataResponse.data;
  
      setReviews(reviewsData);
      setLoadingReviews(false);
    } catch {
      setLoadingReviews(false);
      setReviews(null);
    }
  }, [token]);

  const componentRef = useRef();

  const handlePrint = useReactToPrint({
    content: () => componentRef.current as any,
    documentTitle: `Company details - ${details?.company_name}`
  });

  return (
    <div className="mx-10 mt-10 flex flex-col justify-center items-center">
      <h1>
        Search for a company 
      </h1>
      <FormikBase
        validateOnBlur
        validationSchema={companySearchSchema}
        initialValues={companySearchInitialValues}
        onSubmit={getCompanyDetails as DefaultOnSubmit}
      >
        {() => (
          <Form className="max-w-[30rem] bg-gray-100 p-10 rounded-xl border border-gray-300 relative">
            <div className="absolute right-2 top-2">
            <Tooltip text="The search will be performed using the company name and at least one of the other fields.">
              <InformationCircleIcon className="w-6 h-6 text-gray-500" />
            </Tooltip>
            </div>
            <div className="flex flex-col justify-center flex-wrap space-y-6 md:justify-between md:flex-row md:space-x-6 md:space-y-0">
              <SearchCompanyInput
                label="Company name"
                name="commercial_names"
                type="text"
                placeholder="Company name"
                required
              />

              <SearchCompanyInput
                label="Company address"
                name="address_txt"
                type="text"
                placeholder="Company address"
              />
            </div>

            <div className="flex flex-col justify-center flex-wrap space-y-6 md:justify-between md:flex-row md:space-x-6 md:space-y-0 mt-5">
              <SearchCompanyInput
                label="Company phone"
                name="phone_number"
                type="text"
                placeholder="Company phone"
              />

              <SearchCompanyInput
                label="Company website"
                name="website"
                type="text"
                placeholder="Company website"
              />
            </div>

            <div className="flex justify-center mt-10">
              <button type="submit" className="formButton" disabled={loadingDetails}>
                Search company
              </button>
            </div>
          </Form>
        )}
      </FormikBase>
      <div className="mt-6">
      {error && <p className="text-red-500 max-w-[30rem]">{error}</p>}
      </div>
      {loadingDetails ? <Spinner /> : details &&
        <div className="my-10 px-10 bg-gray-100 print-search-section-container w-full border border-gray-300 rounded-xl max-w-[80rem]" ref={componentRef as any}>
          <h2 className="text-center my-10">Company details</h2>
          <div className="flex flex-wrap justify-between">
            <DetailsSection details={details} loadingReviews={loadingReviews} reviews={reviews} />
            {details && (details?.primary_phone?.length > 0 || details?.primary_email?.length > 0) && <ContactSection details={details} />}
          </div>
          <AddressSection details={details} />
          <OverviewSection details={details} />
          {loadingReviews ? <Spinner /> : <ReviewsSection reviews={reviews} />}
          <div className="py-6 flex justify-center no-print">
            <button className="formButton items-center" onClick={handlePrint}> 
              <PrinterIcon className="w-8 h-8 pr-2" /> 
              <span className="text-lg">Print</span>
            </button>
          </div>
        </div>
      }
    </div>
  );
};

export default SearchSection;