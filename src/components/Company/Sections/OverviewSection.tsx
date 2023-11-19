import { Link } from "react-router-dom";
import { ICompanyResponseDto } from "../../../interfaces";
import DisplayDescription from "../DisplayDescription";

const OverviewSection = ({details}: {details: ICompanyResponseDto | null}) => {

  return (
    <div className="overViewContainer">
      <h3>{details?.company_name} Overview</h3>
      <div className="overViewLine print-flex-row">
        <div className="md:max-w-[60%] w-full">
          <div className="truncate">
            <Link
              to={details?.website_url ?? ""}
              target="_blank"
              className="text-primary hover:underline"
            >
              {details?.website_url}
            </Link>
          </div>
          <div className="my-2">{details?.employee_count ?? ''} Employees</div>
          <div className="mb-2">{`Type: Company - ${details?.company_type ?? ''}`}</div>
        </div>
        <div className="md:max-w-[40%] w-full">
          <div>{`${details?.main_city ?? ''}, ${details?.main_country_code ?? ''}`}</div>
          <div className="my-2">{`${details?.locations.length} location${details?.locations && details?.locations?.length > 1 ? 's' : ''}`} </div>
          <div>{`Industry: ${details?.main_industry ?? ''}`}</div>
        </div>
      </div>

      <div className="overViewLine">
        <DisplayDescription name="Description" description={details?.long_description} styles="md:max-w-[60%]" />
        <DisplayDescription name="Mission" description={details?.short_description} styles="md:max-w-[40%]" />
      </div>
    </div>
  );
};

export default OverviewSection;
