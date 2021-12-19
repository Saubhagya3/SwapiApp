import Link from 'next/link'
import Characters from '../../../components/Characters'
import Vehicles from '../../../components/Vehicles';
import Planets from '../../../components/Planets';
import Starships from '../../../components/Starships';
import Species from '../../../components/Species';

export default function Movie({ movie, characters, planets, starships, vehicles, species }) {

    const movieChar = []
    for (let i = 0; i < characters.length; i++){
        for(let j = 0; j < movie.properties.characters.length; j++){
            if (characters[i].url === movie.properties.characters[j]) {
                movieChar.push(characters[i])
            }
        }
    }

    const moviePlan = []
    for (let i = 0; i < planets.length; i++){
        for(let j = 0; j < movie.properties.planets.length; j++){
            if (planets[i].url === movie.properties.planets[j]) {
                moviePlan.push(planets[i])
            }
        }
    }

    const movieStar = []
    for (let k = 0; k < starships.length; k++){
        for(let l = 0; l < movie.properties.starships.length; l++){
            if (starships[k].url === movie.properties.starships[l]) {
                movieStar.push(starships[k])
            }
        }
    }

    const movieVehi = []
    for (let k = 0; k < vehicles.length; k++){
        for(let l = 0; l < movie.properties.vehicles.length; l++){
            if (vehicles[k].url === movie.properties.vehicles[l]) {
                movieVehi.push(vehicles[k])
            }
        }
    }

    const movieSpec = []
    for (let i = 0; i<species.length; i++){
        for(let j = 0; j< movie.properties.species.length; j++){
            if (species[i].url === movie.properties.species[j]) {
                movieSpec.push(species[i])
            }
        }
    }

    return(
        <div>
            <Link href='/'>Back to Home</Link>
            <h1>{movie.properties.title}</h1>
            <h3>Episode: {movie.properties.episode_id}</h3>
            <h3>Released on: {movie.properties.release_date}</h3>
            <h3>Summary: {movie.properties.opening_crawl}</h3>
            <h3>Director: {movie.properties.director}</h3>
            <h3>Producer: {movie.properties.producer}</h3>
            <Characters characters={movieChar}/>
            <Planets planets={moviePlan} />
            <Starships starships={movieStar}/>
            <Vehicles vehicles={movieVehi}/>
            <Species species={movieSpec}/>
        </div>
    )
}

export const getStaticProps = async (context) => {
    
    const res = await fetch(`https://www.swapi.tech/api/films/${context.params.id}`)
    const json = await res.json()
    const movieData = json.result

    const charData = []
    const planData = []
    const starData = []
    const vehiData = []
    const specData = []

    for (let i=1; i<10; i++){
        const data = await fetch(`https://www.swapi.tech/api/people/?page=${i}&limit=10`)
        const json = await data.json()
        charData.push(...json.results)
    }

    for (let j=1; j<7; j++){
        const data2 = await fetch(`https://www.swapi.tech/api/planets/?page=${j}&limit=10`)
        const json2 = await data2.json()
        planData.push(...json2.results)
    }

    for (let m=1; m<5; m++){
        const data5 = await fetch(`https://www.swapi.tech/api/starships/?page=${m}&limit=10`)
        const json5 = await data5.json()
        starData.push(...json5.results)
    }

    for (let k=1; k<5; k++){
        const data3 = await fetch(`https://www.swapi.tech/api/vehicles/?page=${k}&limit=10`)
        const json3 = await data3.json()
        vehiData.push(...json3.results)
    }

    for (let l=1; l<5; l++){
        const data4 = await fetch(`https://www.swapi.tech/api/species/?page=${l}&limit=10`)
        const json4 = await data4.json()
        specData.push(...json4.results)
    }

    return {props: { 
                movie: movieData,
                characters: charData,
                planets: planData,
                starships: starData,
                vehicles: vehiData,
                species: specData 
            } 
        }
}

export const getStaticPaths = async () => {
    const res = await fetch(`https://www.swapi.tech/api/films/`)

    const movies = await res.json()
    
    const ids = movies.result.map(movie => movie.uid)
    const paths = ids.map(id => ({params: {id: id.toString()}}))

    return{ paths, fallback: false }
}