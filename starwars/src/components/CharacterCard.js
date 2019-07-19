import React from 'react';
import styled from 'styled-components';

// Styled components section for CharacterCard component markup:
const CardDiv = styled.div`
    width: 300px;
    margin-bottom: 10px;
    margin-top: 10px;
    background-color: white;
    opacity: 0.7;
`;

const CharacterH3 = styled.h3`
    padding: 5px;
    font-size: 30px;
`;

const CharacterContent = styled.p`
    font-size: 20px;
`;

function CharacterCard({name, gender, hair_color, birth_year, mass, height}) {
    return (
        <CardDiv>
            <CharacterH3>Name: {name}</CharacterH3>
            <CharacterContent>Birth Year: {birth_year}</CharacterContent>
            <CharacterContent>Hair Color: {hair_color}</CharacterContent>
            <CharacterContent>Mass: {mass}</CharacterContent>
            <CharacterContent>Height: {height}</CharacterContent>
            <CharacterContent>gender: {gender}</CharacterContent>
        </CardDiv>
    )
}

export default CharacterCard;