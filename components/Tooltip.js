import { useState, useEffect } from 'react'
import tooltipstyles from '../styles/Component.module.scss'

export default function Tooltip (props) {
    const [ charDetails, setCharDetails ] = useState([])
    const [ loadingTooltip, setLoadingTooltip ] = useState(true)

    // const fetchDetails = (url) => {
    //     if(charDetails.length === 0) {
    //         setTimeout(async () => {
    //             const data = await fetch(`${url}`)
    //             const json = await data.json()
                
    //             setCharDetails(json)
    //             setLoadingTooltip(false)

    //             console.log(charDetails)
    //         }, 2000);
    //     }
    // }

    // useEffect(() => {
    //     fetchDetails(props.url)
    // }, [])

    return(
        <>  
            { loadingTooltip ? 
                <span className={tooltipstyles.tooltiptext}>
                    Loading character info..
                </span> :
                <span className={tooltipstyles.tooltiptext}>
                    {/* {props.details} */}
                    hello
                </span>
            }
        </>
    )
}