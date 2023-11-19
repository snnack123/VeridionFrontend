import { useCallback, useEffect, useState } from "react";

type DisplayDescriptionProps = {
  description?: string;
  name: string;
  styles: string;
}

const DisplayDescription = ({ name, description, styles }: DisplayDescriptionProps) => {
  const [isTruncated, setIsTruncated] = useState<boolean>(true);

  const toggleTruncate = useCallback(() => {
    setIsTruncated(!isTruncated);
  }, [isTruncated]);

  useEffect(() => {
    const handleBeforePrint = () => {
      setIsTruncated(false);
    };

    const handleAfterPrint = () => {
      setIsTruncated(true);
    };

    window.addEventListener("beforeprint", handleBeforePrint);
    window.addEventListener("afterprint", handleAfterPrint);

    return () => {
      window.removeEventListener("beforeprint", handleBeforePrint);
      window.removeEventListener("afterprint", handleAfterPrint);
    };
  }, []);

  return (
    <div className={`mt-10 w-full print-no-truncate ${styles}`}>
      <h4>{name}</h4>
      <p className={`whitespace-pre-line print-no-truncate ${isTruncated ? "line-clamp-3 " : ""}`}>
        {description}
      </p>
      {description && description?.length > 100 && (
        <button
          className="mt-2 text-primary hover:text-opacity-80 focus:outline-none print-no-display"
          onClick={toggleTruncate}
        >
          {isTruncated ? "Read More" : "Read Less"}
        </button>
      )}
    </div>
  );
};

export default DisplayDescription;
