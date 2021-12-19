import { useState, useEffect } from 'react'

export default function Starships(props) {
    const [ starList, setStarList ] = useState([])
    const [ loading, setLoading ] = useState(true)
    
    useEffect(() => {
        const fetchStarData = async () => {
                const starData = []
                const data = await fetch(`https://www.swapi.tech/api/starships/?page=1&limit=40`)
                const json = await data.json()
                starData.push(...json.results)

                for (let i = 0; i < starData.length; i++){
                    for(let j = 0; j < props.movie.properties.starships.length; j++){
                        if (starData[i].url === props.movie.properties.starships[j]) {
                            starList.push(starData[i])
                        }
                    }
                }
            console.log(starList)
            setLoading(false)
        }
        fetchStarData()
    }, [])
    return(
        
        <div>
            <h3>Starships</h3>
            <div>
                <ul>
                    {
                        loading ? <li>Loading Starships...</li> :
                        starList.map(star => {
                            return(
                                <>
                                    <li key={star.uid}>{star.name}</li>
                                </>
                            )
                        })
                    }
                </ul>
            </div>
        </div>
    )
}