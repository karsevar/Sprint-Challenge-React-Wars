import React from 'react';
import styled from 'styled-components';

function CharacterCard({name, gender, hair_color, birth_year}) {
    return (
        <div className='character-card'>
            <h3>Name: {name}</h3>
            <p>Birth Year: {birth_year}</p>
            <p>Hair Color: {hair_color}</p>
            <p>gender: {gender}</p>
        </div>
    )
}

export default CharacterCard;