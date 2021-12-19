import { useState, useEffect } from 'react'

export default function Planets(props) {
    const [ planList, setPlanList ] = useState([])
    const [ loading, setLoading ] = useState(true)
    
    useEffect(() => {
        const fetchPlanData = async () => {
                const planData = []
                const data = await fetch(`https://www.swapi.tech/api/planets/?page=1&limit=65`)
                const json = await data.json()
                planData.push(...json.results)

                for (let i = 0; i < planData.length; i++){
                    for(let j = 0; j < props.movie.properties.planets.length; j++){
                        if (planData[i].url === props.movie.properties.planets[j]) {
                            planList.push(planData[i])
                        }
                    }
                }
            console.log(planList)
            setLoading(false)
        }
        fetchPlanData()
    }, [])
    return(
        
        <div>
            <h3>Planets</h3>
            <div>
                <ul>
                    {
                        loading ? <li>Loading Planets...</li> :
                        planList.map(plan => {
                            return(
                                <>
                                    <li key={plan.uid}>{plan.name}</li>
                                </>
                            )
                        })
                    }
                </ul>
            </div>
        </div>
    )
}