import Card from "./Card"

export default function MovieList({ movies }) {
    return(
        <>
        { movies.result.map((movie, index) => {
          return(
            <Card key={index} movie={movie}/>
          )
        })}
        </>
    )
}