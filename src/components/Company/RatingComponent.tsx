import { StarIcon } from "@heroicons/react/20/solid";
import Rating from "react-rating";

type RatingComponentProps = {
    average: number;
}

const RatingComponent = ({ average }: RatingComponentProps) => {
    return (
        <Rating
        initialRating={average}
        placeholderSymbol={<StarIcon className="h-5 w-5 flex-shrink-0 text-gray-300" aria-hidden="true" />}
        emptySymbol={<StarIcon className="h-5 w-5 flex-shrink-0 text-gray-300" aria-hidden="true" />}
        fullSymbol={<StarIcon className="h-5 w-5 flex-shrink-0 text-yellow-400" aria-hidden="true" />}
        readonly
      />
    )
};

export default RatingComponent;