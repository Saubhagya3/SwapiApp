import { useState, useEffect } from 'react'

export default function Species(props) {
    const [ specList, setSpecList ] = useState([])
    const [ loading, setLoading ] = useState(true)
    
    useEffect(() => {
        const fetchSpecData = async () => {
                const specData = []
                const data = await fetch(`https://www.swapi.tech/api/species/?page=1&limit=40`)
                const json = await data.json()
                specData.push(...json.results)

                for (let i = 0; i < specData.length; i++){
                    for(let j = 0; j < props.movie.properties.species.length; j++){
                        if (specData[i].url === props.movie.properties.species[j]) {
                            specList.push(specData[i])
                        }
                    }
                }
            console.log(specList)
            setLoading(false)
        }
        fetchSpecData()
    }, [])
    return(
        
        <div>
            <h3>Species</h3>
            <div>
                <ul>
                    {
                        loading ? <li>Loading Species...</li> :
                        specList.map(spec => {
                            return(
                                <>
                                    <li key={spec.uid}>{spec.name}</li>
                                </>
                            )
                        })
                    }
                </ul>
            </div>
        </div>
    )
}