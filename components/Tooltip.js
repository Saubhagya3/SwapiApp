import { useState, useEffect } from "react";
import tooltipstyles from "../styles/Component.module.scss";

export default function Tooltip(props) {
  return (
    <>
      {props.loading || props.charDets.length === 0 ? (
        <span className={tooltipstyles.tooltiptext}>
          Loading character info..
        </span>
      ) : (
        <span className={tooltipstyles.tooltiptext}>
          Name: {props.charDets.properties.name}
          <br />
          Date of Birth: {props.charDets.properties.birth_year}
          <br />
          Gender: {props.charDets.properties.gender}
          <br />
          Height: {props.charDets.properties.height}
          <br />
          Weight: {props.charDets.properties.mass}
          <br />
          Hair Color: {props.charDets.properties.hair_color}
          <br />
          Eye Color: {props.charDets.properties.eye_color}
          <br />
          Skin Color: {props.charDets.properties.skin_color}
          <br />
        </span>
      )}
    </>
  );
}
