import React from "react";
import PortfolioItem from "./PortfolioItem";
import portfolio from "../data/portfolio";

function Portfolio() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center px-3">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {portfolio.map((project) => (
          <PortfolioItem
            key={project.title}
            imgURL={project.imgURL}
            title={project.title}
            stack={project.stack}
            link={project.link}
          />
        ))}
      </div>
    </div>
  );
}

export default Portfolio;
