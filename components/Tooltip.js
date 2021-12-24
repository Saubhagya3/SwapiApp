import { useState, useEffect } from "react";
import tooltipstyles from "../styles/Component.module.scss";

export default function Tooltip(props) {
  const [charDetails, setCharDetails] = useState([]);
  const [loadingTooltip, setLoadingTooltip] = useState(true);

  const fetchDetails = (url) => {
    if (charDetails.length === 0 && charDetails !== null) {
      setTimeout(async () => {
        const data = await fetch(`${url}`);
        const json = await data.json();

        setCharDetails(json.result);
        setLoadingTooltip(false);
      }, 2000);
    }
  };

  useEffect(() => {
    fetchDetails(props.url);
    return () => {
      setCharDetails([]);
    };
  }, []);

  return (
    <>
      {loadingTooltip ? (
        <span className={tooltipstyles.tooltiptext}>
          Loading character info..
        </span>
      ) : (
        <span className={tooltipstyles.tooltiptext}>
          Name: {charDetails.properties.name}
          <br />
          Date of Birth: {charDetails.properties.birth_year}
          <br />
          Gender: {charDetails.properties.gender}
          <br />
          Height: {charDetails.properties.height}
          <br />
          Weight: {charDetails.properties.mass}
          <br />
          Hair Color: {charDetails.properties.hair_color}
          <br />
          Eye Color: {charDetails.properties.eye_color}
          <br />
          Skin Color: {charDetails.properties.skin_color}
          <br />
        </span>
      )}
    </>
  );
}
