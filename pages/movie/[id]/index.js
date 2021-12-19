import Link from 'next/link'
import Characters from '../../../components/Characters'
import Vehicles from '../../../components/Vehicles';
import Planets from '../../../components/Planets';
import Starships from '../../../components/Starships';
import Species from '../../../components/Species';
import moviestyles from '../../../styles/Movie.module.scss'

export default function Movie({ movie }) {

    return(
        <div className={moviestyles.body}>
            <div className={moviestyles.back}>
                <Link href='/'>
                    <h2 className={moviestyles.backbutton}> 
                        Back to Home
                    </h2>
                </Link>
            </div>
            <div className={moviestyles.content}>
                <div className={moviestyles.head}>
                    <h1 className={moviestyles.title}>{movie.properties.title}</h1>
                    <h3>Episode {movie.properties.episode_id}</h3>
                    <h3>Release date: {movie.properties.release_date}</h3>
                </div>
                <h3>Summary</h3>
                <p className={moviestyles.text}>{movie.properties.opening_crawl}</p>
                <div className={moviestyles.staff}>
                    <div>
                        <h3>Director </h3>
                        <p className={moviestyles.text}>{movie.properties.director}</p>
                    </div>
                    <div>
                        <h3>Producers </h3>
                        <p className={moviestyles.text}>{movie.properties.producer}</p>
                    </div>
                </div>
                <Characters movie={movie}/>
                <Planets movie={movie} />
                <Starships movie={movie}/>
                <Vehicles movie={movie}/>
                <Species movie={movie} />
            </div>
        </div>
    )
}

export const getStaticProps = async (context) => {
    
    const res = await fetch(`https://www.swapi.tech/api/films/${context.params.id}`)
    const json = await res.json()
    const movieData = json.result

    return {props: { 
                movie: movieData,
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