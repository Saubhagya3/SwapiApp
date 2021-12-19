import { useState, useEffect } from 'react'
import Character from './Character'

export default function Characters(props) {
    const [ charList, setCharList ] = useState([])
    const [ loading, setLoading ] = useState(true)
    
    // console.log(props.characters)
    // console.log(props.movie)

    // for (let i = 0; i < props.characters.length; i++){
    //     for(let j = 0; j < props.movie.properties.characters.length; j++){
    //         if (props.characters[i].url === props.movie.properties.characters[j]) {
    //             charList.push(props.characters[i])
    //         }
    //     }
    // }

    // console.log(charList)

    // console.log(characters.characters.length)
    useEffect(() => {
        const fetchCharData = async () => {
            // if(charList === []){
            //     setLoading(true)
                const charData = []
                const data = await fetch(`https://www.swapi.tech/api/people/?page=1&limit=85`)
                const json = await data.json()
                charData.push(...json.results)

                for (let i = 0; i < charData.length; i++){
                    for(let j = 0; j < props.movie.properties.characters.length; j++){
                        if (charData[i].url === props.movie.properties.characters[j]) {
                            charList.push(charData[i])
                        }
                    }
                }
            // }
            // if(charList.length !== characters.characters.length && charList[1] !== characters.characters[1]){
            //     let i=0
            //     setLoading(true)
            //     for (i; i<characters.characters.length; i++){
            //         const data = await fetch(`${characters.characters[i]}`)
            //         const json = await data.json()
            //         charList.push(json.result)
            //         console.log(charList.length)
            //     }
            // }
            console.log(charList)
            setLoading(false)
        }
        fetchCharData()
    }, [])
    return(
        
        <div>
            <h3>Characters</h3>
            <div>
                <ul>
                    {
                        loading ? <li>Loading Characters...</li> :
                        charList.map(char => {
                            return(
                                <>
                                    <li key={char.uid}>{char.name}</li>
                                </>
                            )
                        })
                    }
                </ul>
            </div>
        </div>
    )
}