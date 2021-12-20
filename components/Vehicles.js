import { useState, useEffect } from 'react'
import styles from '../styles/Component.module.scss'

export default function Vehicles(props) {
    const [ vehiList, setVehiList ] = useState([])
    const [ loading, setLoading ] = useState(true)
    
    useEffect(() => {
        const fetchVehiData = async () => {
                const vehiData = []
                const data = await fetch(`https://www.swapi.tech/api/vehicles/?page=1&limit=40`)
                const json = await data.json()
                vehiData.push(...json.results)

                if(vehiList.length===0){
                    for (let i = 0; i < vehiData.length; i++){
                        for(let j = 0; j < props.movie.properties.vehicles.length; j++){
                            if (vehiData[i].url === props.movie.properties.vehicles[j]) {
                                vehiList.push(vehiData[i])
                            }
                        }
                    }
                }
            setLoading(false)
        }
        fetchVehiData()
    }, [])
    return(
        
        <div>
            <h3>Vehicles</h3>
            <div>
                <ul className={styles.list}>
                    {
                        loading ? <li className={styles.listitem}>Loading Vehicles...</li> :
                        vehiList.map(vehi => {
                            return(
                                <li key={vehi.uid} className={styles.listitem}>{vehi.name}</li>
                            )
                        })
                    }
                </ul>
            </div>
        </div>
    )
}