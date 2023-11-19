import {useCallback} from "react";
import { StarIcon } from "@heroicons/react/20/solid";
import { classNames } from "../../../utils/utilFunctions";
import RatingComponent from "../RatingComponent";
import { IReviewsDto } from "../../../interfaces";

type ReviewsSectionProps = {
  reviews: IReviewsDto | null;
}

interface IReviewData {
  average: number;
  totalCount: number;
  counts: { rating: number; count: number }[];
}

const ReviewsSection = ({ reviews }: ReviewsSectionProps) => {

  const transformReviewsData = useCallback((reviews: IReviewsDto): any => {
    // Calculate average rating
    const averageRating = reviews?.rating ?? 0;
  
    // Calculate total count
    const totalCount = reviews.reviews.length;
  
    // Calculate rating counts
    const ratingCounts = Array.from({ length: 5 }, (_, index) => {
      const rating = 5 - index;
      const count = reviews.reviews.filter((review) => review.rating === rating)
        .length;
      return { rating, count };
    });
  
    // Create reviewsFake object
    const data: IReviewData = {
      average: averageRating,
      totalCount: totalCount,
      counts: ratingCounts,
    };
  
    return data;
  }, []);

  const reviewsData: IReviewData = reviews ? transformReviewsData(reviews) : null;

  return (
    <div className="overViewContainer">
      <div className="mx-auto max-w-2xl md:px-4 md:py-8 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-12 lg:gap-x-8 lg:px-8">
        <div className="lg:col-span-4">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">
            Customer Reviews
          </h2>

          <div className="mt-3 flex items-center">
            <div>
              <div className="flex items-center">
                <RatingComponent average={reviews?.rating ?? 0} />
              </div>
              <p className="sr-only">{reviews?.rating} out of 5 stars</p>
            </div>
            <p className="ml-2 text-sm text-gray-900">
              Based on {reviews?.reviews.length} reviews
            </p>
          </div>

          <div className="mt-6">
            <h3 className="sr-only">Review data</h3>

            <dl className="space-y-3">
            {reviewsData?.counts?.map((count) => (
                <div key={count.rating} className="flex items-center text-sm">
                  <dt className="flex flex-1 items-center">
                    <p className="w-3 font-medium text-gray-900">
                      {count.rating}
                      <span className="sr-only"> star reviews</span>
                    </p>
                    <div aria-hidden="true" className="ml-1 flex flex-1 items-center">
                      <StarIcon
                        className={classNames(
                          count.count > 0 ? 'text-yellow-400' : 'text-gray-300',
                          'h-5 w-5 flex-shrink-0'
                        )}
                        aria-hidden="true"
                      />

                      <div className="relative ml-3 flex-1">
                        <div className="h-3 rounded-full border border-gray-200 bg-gray-100" />
                        {count.count > 0 ? (
                          <div
                            className="absolute inset-y-0 rounded-full border border-yellow-400 bg-yellow-400"
                            style={{ width: `calc(${count.count} / ${reviewsData.totalCount} * 100%)` }}
                          />
                        ) : null}
                      </div>
                    </div>
                  </dt>
                  <dd className="ml-3 w-10 text-right text-sm tabular-nums text-gray-900">
                    {Math.round((count.count / reviewsData.totalCount) * 100)}%
                  </dd>
                </div>
              ))}
            </dl>
          </div>    
        </div>

        <div className="mt-16 lg:col-span-7 lg:col-start-6 lg:mt-0">
          <h3 className="sr-only">Recent reviews</h3>

          <div className={`flow-root overflow-y-auto print-overflow-hidden py-6 scrollbar-thin border border-gray-100 rounded-md`}>
            <div className="-my-12 divide-y divide-gray-200">
              {reviews?.reviews?.map((review) => (
                <div key={review.profile_photo_url} className="py-6 pl-6">
                  <div className="flex items-center">
                    <img
                      src={review.profile_photo_url}
                      alt={`${review.author_name}.`}
                      className="h-12 w-12 rounded-full"
                    />
                    <div className="ml-4">
                      <h4 className="text-sm font-bold text-gray-900 !mb-0">
                        {review.author_name}
                      </h4>
                      <div>{review.relative_time_description}</div>
                      <div className="mt-1 flex items-center">
                        {[0, 1, 2, 3, 4].map((rating) => (
                          <StarIcon
                            key={rating}
                            className={classNames(
                              review.rating > rating
                                ? "text-yellow-400"
                                : "text-gray-300",
                              "h-5 w-5 flex-shrink-0"
                            )}
                            aria-hidden="true"
                          />
                        ))}
                      </div>
                      <p className="sr-only">{review.rating} out of 5 stars</p>
                    </div>
                  </div>

                  <div
                    className="mt-4 space-y-6 text-base italic text-gray-600"
                    dangerouslySetInnerHTML={{ __html: review.text }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewsSection;
