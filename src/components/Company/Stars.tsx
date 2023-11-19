import RatingComponent from "./RatingComponent";

type StarsSectionProps = {
  average: number;
  reviewsNumber?: number;
}

const Stars = ({ average, reviewsNumber }: StarsSectionProps) => {
  return (
    <div className="starsContainer">
      <RatingComponent average={average} />
      <div className="ml-3 text-lg font-bold">{average}</div>
      <div className="ml-3">{`(${reviewsNumber} reviews)`}</div>
    </div>
  );
};

export default Stars;
