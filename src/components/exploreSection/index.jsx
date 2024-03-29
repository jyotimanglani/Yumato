import React from "react";
import ExploreCard from "./exploreCard";
import "./exploreSection.css";

const ExploreSection = ({ restaurants, collectionName }) => {
  return (
    <div className="max-width explore-section">
      <div className="collection-title">{collectionName}</div>
      <div className="explore-grid">
        {restaurants &&
          restaurants.map((restaurant, i) => (
            <ExploreCard restaurant={restaurant} key={i} />
          ))}
      </div>
    </div>
  );
};

export default ExploreSection;
