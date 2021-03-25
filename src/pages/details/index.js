import React, { Component } from 'react';
import './style.css';
import Navbar from '../../components/navbar';
class Details extends Component {
    state = {
        pokemon: {},
        isLoading: true,
    }

    getSinglePoke = () => {
        const { match } = this.props;
        const newUrl = match.params.name
        fetch(`https://pokeapi.co/api/v2/pokemon/${newUrl}`)
            .then(data =>
                data.json())
            .then(response => {
                this.setState({
                    pokemon: response,
                    isLoading: false,
                });
            })
            .catch((err) => {
                console.log(err)
            });
    }

    componentDidMount = () => {
        this.getSinglePoke();
    }

    render() {
        const { pokemon } = this.state
        console.log(this.state)
        let status
        if (this.state.isLoading != true) {
            status =
                <>
                    <section className="detail-view" >
                        <div className='data-wrapper'>
                            <div className='imgWrap'>
                                <img alt="pokemon" src={`https://img.pokemondb.net/artwork/large/${this.props.match.params.name}.jpg`} />
                            </div>
                            <p className='data-name'>ID : {pokemon.id} </p>
                            <p className='data-name'>Name : {pokemon.name}</p>
                            {
                                pokemon.types.map(({ type, index }) => {
                                    if (index != 0) {
                                    return (
                                        <>
                                            <p className="data-name">Type : {type.name}</p>
                                        </>
                                    )}
                                })
                            }
                        </div>
                    </section>
                </>
        } else {
            <h1>Loading</h1>
        }
        return (
            <>
                <Navbar />
                { status}
            </>
        );
    }
}


export default Details;