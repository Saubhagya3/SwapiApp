import { useState, useEffect } from "react";
import styles from "../styles/Component.module.scss";

export default function Species(props) {
  const [specList, setSpecList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSpecData = async () => {
      const specData = [];
      const data = await fetch(
        `https://www.swapi.tech/api/species/?page=1&limit=40`
      );
      const json = await data.json();
      specData.push(...json.results);

      if (specList.length === 0) {
        for (let i = 0; i < specData.length; i++) {
          for (let j = 0; j < props.movie.properties.species.length; j++) {
            if (specData[i].url === props.movie.properties.species[j]) {
              specList.push(specData[i]);
            }
          }
        }
      }
      setLoading(false);
    };
    fetchSpecData();
  }, []);
  return (
    <div>
      <h3>Species</h3>
      <div>
        <ul className={styles.list}>
          {loading ? (
            <li className={styles.listitem}>Loading Species...</li>
          ) : (
            specList.map((spec) => {
              return (
                <li key={spec.uid} className={styles.listitem}>
                  {spec.name}
                </li>
              );
            })
          )}
        </ul>
      </div>
    </div>
  );
}
