import React, {useState, useEffect} from 'react';
import axios from 'axios';
import styled from 'styled-components';
import CharacterCard from './CharacterCard';

// Styling for characters div layer;
const CharactersDiv = styled.div`
    font-family: 'sans-serif';
    margin: 0 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

`;

function Characters() {
    const [characters, setCharacters] = useState([]);

    useEffect(() => {

        axios  
            .get(`https://swapi.co/api/people/`)
            .then(response => {

                // Checking if the call is receiving back data.
                console.log(response.data.results) // Test was a success. data is being received by component.

                const charactersArray = response.data.results;
                
                setCharacters(charactersArray);
            })
            .catch(error => {
                console.log('error', error);
            })

    }, [])

    return (
        <CharactersDiv>
         {characters.map((character, index) => <CharacterCard
                                        key={index} 
                                        name={character.name}
                                        gender={character.gender} 
                                        hair_color={character.hair_color} 
                                        mass={character.mass}
                                        height={character.height}
                                        birth_year={character.birth_year} />)} 
        </CharactersDiv>
    )
}

export default Characters;