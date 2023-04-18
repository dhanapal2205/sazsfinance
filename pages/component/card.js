import React from "react";

const Card = (props) => {
  const {cardTitle,children, className} = props;
  return (
    <div className={`bg-white p-4 m-2 shadow-sm ${className}`}>
      {cardTitle && <p className="pb-2">{cardTitle}</p> }
      {children}
    </div>
  );
};

export default Card;
