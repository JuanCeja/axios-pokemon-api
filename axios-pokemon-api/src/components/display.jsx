import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Pokemon = props => {
    const [pokemon, setpokemon] = useState([]);

    const fetchPokemon = () => {
            axios.get('https://pokeapi.co/api/v2/pokemon?limit=807')
            .then(res => {setpokemon(res.data.results)})
    }

    return(
        <div>
            <fieldset>
                <legend>display</legend>
                <h1>Pokemon</h1>
                <button onClick={fetchPokemon}>Get Pokemon</button>
                <br />
                <ol>
                    {
                        pokemon.map((pokemon, i) => {
                            return (
                                <li key={i}>{pokemon.name}</li>
                            )
                        })
                    }
                </ol>
            </fieldset>
        </div>
    )
}

export default Pokemon