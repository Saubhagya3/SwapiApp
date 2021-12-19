import { useState, useEffect } from 'react'
import Character from './Character'
import styles from '../styles/Component.module.scss'

export default function Characters(props) {
    const [ charList, setCharList ] = useState([])
    const [ loading, setLoading ] = useState(true)
    
    useEffect(() => {
        const fetchCharData = async () => {
                
            const charData = []
            const data = await fetch(`https://www.swapi.tech/api/people/?page=1&limit=85`)
            const json = await data.json()
            charData.push(...json.results)

            if(charList.length===0){
                for (let i = 0; i < charData.length; i++){
                    for(let j = 0; j < props.movie.properties.characters.length; j++){
                        if (charData[i].url === props.movie.properties.characters[j]) {
                            charList.push(charData[i])
                        }
                    }
                }
            }
                
            console.log(charList)
            setLoading(false)
        }
        fetchCharData()
    }, [])

    return(
        <div>
            <h3>Characters</h3>
            <div>
                <ul className={styles.list}>
                    {
                        loading ? <li className={styles.listitem}>Loading Characters...</li> :
                        charList.map(char => {
                            return(
                                <>
                                    <li key={char.uid} className={styles.listitem}>{char.name}</li>
                                </>
                            )
                        })
                    }
                </ul>
            </div>
        </div>
    )
}