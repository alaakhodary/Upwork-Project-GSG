import React, { useState } from "react";

const ReadMore = ({ children }) => {
  const text = children;
  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };
  return (
    <p style={{ display: "inline", width: "100%" }}>
      {isReadMore ? text?.slice(0, 150) : text}
      <span
        onClick={toggleReadMore}
        style={{
          color: "rgb(192,192,192)",
          cursor: "pointer",
        }}
      >
        {isReadMore ? (
          <p style={{ color: "green", display: "inline" }}>... more</p>
        ) : (
          <p style={{ color: "green", display: "inline" }}> less</p>
        )}
      </span>
    </p>
  );
};

export default ReadMore;
