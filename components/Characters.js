import { useState, useEffect } from 'react'
import Character from './Character'

export default function Characters(movieChar) {
    return(
        <div>
            <h3>Characters</h3>
            <div>
                <ul> 
                    {
                        movieChar.characters.map(char => {
                            return(
                                <>
                                    <li key={char.uid}>{char.name}</li>
                                </>
                            )
                        })
                    }
                </ul>
            </div>
        </div>
    )
}