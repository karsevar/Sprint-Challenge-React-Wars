import React, {useState, useEffect} from 'react';
import axios from 'axios';

function Characters() {
    const [characters, setCharacters] = useState();

    useEffect(() => {

        // Will use a for loop to get more than ten characters per initial mount.
        const counter = 10;

        axios  
            .get(`https://swapi.co/api/people/`)
            .then(response => {

                // Checking if the call is receiving back data.
                // console.log(response.data) // Test was a success. data is being received by component.
            })
            .catch(error => {
                console.log('error', error);
            })

    }, [])

    return (
        <div>

        </div>
    )
}

export default Characters;