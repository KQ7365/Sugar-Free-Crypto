import { useState, useEffect } from "react";
import "./Education.css";
import { getResources } from "../../services/getResources";
import { ResourcesPost } from "../../services/ResourcePost";

export const EducationList = ({ currentUser }) => {
  const [allResources, setAllResources] = useState([]);
  const [message, setMessage] = useState("");

  const Notification = ({ message }) => {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
      if (message) {
        setVisible(true);

        setTimeout(() => {
          setVisible(false);
        }, 4000); // Hide after 3 seconds (adjust the timeout as needed)
      }
    }, [message]);

    return visible ? (
      <div className="custom-notification">{message}</div>
    ) : null;
  };

  useEffect(() => {
    getResources().then((resourceObj) => {
      setAllResources(resourceObj);
    });
  }, []);

  const handleAddToFavoritesUrl = (link) => {
    const newLinkFavoriteObject = {
      resourceId: link.id,
      userId: currentUser.id,
    };
    setMessage("Favorite Link Added");
    ResourcesPost(newLinkFavoriteObject);
  };

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
                <button
                  className="linkButton"
                  onClick={() => handleAddToFavoritesUrl(linkObj)}
                >
                  Add Link to Favorites
                </button>
                <Notification message={message} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
