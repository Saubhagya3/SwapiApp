export default function Species(movieSpec) {
    return(
        <div>
            <h3>Species</h3>
            <div>
                <ul> 
                    {
                        movieSpec.species.map(spec => {
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