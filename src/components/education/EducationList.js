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
        <h1 className="headText">Resources</h1>
        <img className="mainIMG" alt="cyber img" src="/resource.png" />
      </div>

      <div className="resourceContainer">
        {allResources.map((linkObj) => {
          return (
            <div key={linkObj.urlLink} className="resourceItem">
              <img
                className="resourceIMG"
                src={`${process.env.PUBLIC_URL}/${linkObj.image}`}
                alt="myImg"
              />

              <div className="resourceContent">
                <div className="divItem">
                  <b>Article Snapshot:</b> {linkObj.description}
                </div>

                <div className="resourceLink">
                  <a
                    className="linkCSS"
                    href={linkObj.urlLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {linkObj.urlLink}
                  </a>
                </div>
                <button className="linkButton">Add Link to Favorites</button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
