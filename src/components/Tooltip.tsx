import React, { useState } from 'react';

type TooltipProps = {
    text: string;
    children: React.ReactNode;
};

const Tooltip = ({ text, children }: TooltipProps) => {
  const [showTooltip, setShowTooltip] = useState(false);

  const handleMouseEnter = () => {
    setShowTooltip(true);
  };

  const handleMouseLeave = () => {
    setShowTooltip(false);
  };

  return (
    <div className="relative inline-block" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      {children}
      {showTooltip && (
        <div className="absolute top-full left-1/2 transform -translate-x-1/2 bg-gray-800 text-white p-2 rounded min-w-[20rem]">
          {text}
        </div>
      )}
    </div>
  );
};

export default Tooltip;