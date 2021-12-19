import { useState, useEffect } from 'react'

export default function Character({ url }) {

    // useEffect(() => {
    //     getDataSeries(movie.properties.characters)
    // }, [])
    

    // const delay = (ms = 100) => new Promise(r => setTimeout(r, ms));

    // const getDataSeries = async items => {
    //     let results = [];
    //     for (let index = 0; index < items.length; index++) {
    //         await delay();
    //         const res = await axios.get(`${items[index]}`)
    //         results.push(res);
    //     }
    //     console.log(results);
    //     return results;
    // };

    console.log(url)

    return(
        <>
           <li>hello</li>
        </>
    )
}