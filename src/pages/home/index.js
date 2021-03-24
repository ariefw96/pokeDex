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
                {
                            pokemons && pokemons.map(({ id, name, url }) => {
                                return (
                                    <CardList key={id} name={name} url={url} />
                                )
                            })
                        }
            </>
        );
    }
}

export default home;