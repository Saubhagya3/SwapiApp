export default function Starships(movieStar) {
    return(
        <div>
            <h3>Starships</h3>
            <div>
                <ul> 
                    {
                        movieStar.starships.map(star => {
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