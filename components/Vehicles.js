export default function Vehicles(movieVehi) {
    return(
        <div>
            <h3>Vehicles</h3>
            <div>
                <ul> 
                    {
                        movieVehi.vehicles.map(vehi => {
                            return(
                                <>
                                    <li key={vehi.uid}>{vehi.name}</li>
                                </>
                            )
                        })
                    }
                </ul>
            </div>
        </div>
    )
}