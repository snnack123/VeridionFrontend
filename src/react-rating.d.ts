declare module "react-rating" {
  interface RatingProps {
    // Define the properties used by the Rating component
    initialRating?: number;
    placeholderSymbol?: React.ReactNode;
    emptySymbol?: React.ReactNode;
    fullSymbol?: React.ReactNode;
    readonly?: boolean;
    // Add other properties as needed
  }

  // Define the Rating component
  const Rating: React.FC<RatingProps>;
  export default Rating;
}
