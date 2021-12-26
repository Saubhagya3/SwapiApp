import { useState, useEffect } from "react";
import Tooltip from "./Tooltip";
import styles from "../styles/Component.module.scss";

export default function Characters(props) {
  const [charList, setCharList] = useState([]);
  const [ charDetails, setCharDetails ] = useState([])
  const [loading, setLoading] = useState(true);
  const [loadingTooltip, setLoadingTooltip] = useState(true);

  useEffect(() => {
    const fetchCharData = async () => {
      const charData = [];
      const data = await fetch(
        `https://www.swapi.tech/api/people/?page=1&limit=85`
      );
      const json = await data.json();
      charData.push(...json.results);

      if (charList.length === 0 && charList !== null) {
        for (let i = 0; i < charData.length; i++) {
          for (let j = 0; j < props.movie.properties.characters.length; j++) {
            if (charData[i].url === props.movie.properties.characters[j]) {
              charList.push(charData[i]);
            }
          }
        }
      }
      setLoading(false);
    };
    fetchCharData();
  }, []);

  const handleMouseEnter = async (url) => {
    setCharDetails([])
    const data = await fetch(`${url}`);
    const json = await data.json();

    setCharDetails(json.result);
    setLoadingTooltip(false);
  }

  const handleMouseLeave = () => {
    setLoadingTooltip(true)
    setCharDetails([])
  }

  return (
    <div>
      <h3>Characters</h3>
      <div>
        <ul className={styles.charlist}>
          {loading ? (
            <li className={styles.charlistitem}>Loading Characters...</li>
          ) : (
            charList.map((char) => {
              return (
                <li 
                  key={char.uid} 
                  className={styles.charlistitem} 
                  onMouseEnter={() => handleMouseEnter(char.url)}
                  onMouseLeave={handleMouseLeave}
                >
                  <Tooltip charDets={charDetails} loading={loadingTooltip} />
                  {char.name}
                </li>
              );
            })
          )}
        </ul>
      </div>
    </div>
  );
}
