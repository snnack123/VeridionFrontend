import { ICompanyResponseDto, IReviewsDto } from "../../../interfaces";
import Spinner from "../../Spinner";
import Stars from "../Stars";

type DetailsSectionProps = {
  details: ICompanyResponseDto | null;
  loadingReviews: boolean;
  reviews: IReviewsDto | null;
}

const DetailsSection = ({ details, loadingReviews, reviews }: DetailsSectionProps) => {
  return (
    <div className="mb-10">
      <h3 className="!mb-0">{details?.company_name}</h3>
      {loadingReviews ? (
        <Spinner styles="text-left" />
      ) : (
        <Stars
          average={reviews?.rating ?? 0}
          reviewsNumber={reviews?.reviews?.length}
        />
      )}
    </div>
  );
};

export default DetailsSection;