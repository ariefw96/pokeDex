import React, { Component } from 'react';
import './styles.css';

class Card extends Component {

    render() {
        const { name, url } = this.props
        return (
            <div className="card-container">
                <a href={`https://www.pokemon.com/us/pokedex/${name}`} target="_blank" rel="noreferrer">
                    <img alt="pokemon" src={`https://img.pokemondb.net/artwork/large/${name}.jpg`} />
                    <h2>{name[0].toUpperCase() + name.slice(1)}</h2>
                </a>
            </div>
        );
    }
}

export default Card;
