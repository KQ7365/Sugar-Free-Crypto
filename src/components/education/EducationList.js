import { useState, useEffect } from "react";
import "./Education.css";
import { getResources } from "../../services/getResources";

export const EducationList = ({ currentUser }) => {
  const [allResources, setAllResources] = useState([]);

  useEffect(() => {
    getResources().then((resourceObj) => {
      setAllResources(resourceObj);
    });
  }, []);

  return (
    <div>
      <div className="header-container">
        <h1 className="headText">Resources </h1>
        <img className="mainIMG" alt="cyber img" src="/resource.png" />
      </div>
      <div className="resourceBorder">
        {allResources.map((linkObj) => {
          return (
            <div
              className="resourceItems"
              key={linkObj.urlLink}
              value={linkObj}
            >
              <div key={linkObj.image}>
                <img
                  className="resourceIMG"
                  src={`${process.env.PUBLIC_URL}/${linkObj.image}`}
                  alt="myImg"
                />
              </div>
              <div className="divItem" key={linkObj.description}>
                <b> Description:</b> {linkObj.description}
              </div>

              <div className="resourceLink" key={linkObj.urlLink}>
                <b>URL: </b>
                <a
                  className="linkCSS"
                  href="https://bitcoin.org/en/resources"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {linkObj.urlLink}
                </a>
              </div>
              <button className="linkButton">Add Link to Favorites</button>
            </div>
          );
        })}
      </div>
    </div>
  );
};
