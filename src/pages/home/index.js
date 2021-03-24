import React, { Component } from 'react';
import Navbar from '../../components/navbar';
import CardList from '../../components/card'


class home extends Component {
    constructor() {
        super();

        this.state = {
            pokemons: [],
        };
    }

    componentDidMount() {
        fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
            .then(response => response.json())
            .then(name => this.setState({ pokemons: name.results }));
    }
    render() {
        const {pokemons} = this.state
        // console.log(this.state.pokemons)
        return (
            <>
                <Navbar />
                <h1>Pokemon Database</h1>
                {
                            pokemons && pokemons.map(({ name, url }) => {
                                return (
                                    <CardList name={name} url={url} />
                                )
                            })
                        }
            </>
        );
    }
}

export default home;