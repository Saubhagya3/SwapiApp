export default function Planets(moviePlan) {
    return(
        <div>
            <h3>Planets</h3>
            <div>
                <ul> 
                    {
                        moviePlan.planets.map(plan => {
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