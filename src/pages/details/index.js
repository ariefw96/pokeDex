import React, { Component } from 'react';
import { connect } from 'react-redux'
import { addPokemon, removePokemon, deleteAllPokemon } from './../../utils/redux/action/pokemonAction'
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

    addPokemon = () => {
        this.props.dispatch(addPokemon({
            id: this.state.pokemon.id,
            name: this.state.pokemon.name
        }))
    }

    removePokemon = () => {
        this.props.dispatch(removePokemon({
            id: this.state.pokemon.id,
            name: this.state.pokemon.name
        }))
    }

    removeAllPokemon = () => {
        this.props.dispatch(deleteAllPokemon())
    }

    render() {
        const { pokemon } = this.state
        console.log(this.props.reduxPokemon)
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
                                pokemon.types.map(({ type }, index) => {
                                    if (index == 0) {
                                        return (
                                            <>
                                                <div style={{ display: 'flex' }} >
                                                    <p className="data-name" style={{ width: '60px' }}>Type :</p>
                                                    <p className="data-name" style={{ width: '100px' }}> - {type.name}</p>
                                                </div>
                                            </>
                                        )
                                    } else {
                                        return (
                                            <>
                                                <div style={{ display: 'flex' }} >
                                                    <p className="data-name" style={{ width: '60px' }}></p>
                                                    <p className="data-name" style={{ width: '100px' }}> - {type.name}</p>
                                                </div>
                                            </>
                                        )
                                    }
                                })
                            }
                        </div>
                        <div>
                            <button onClick={this.addPokemon}>Add to Redux</button>
                        </div>
                        <div>
                            <button onClick={this.removePokemon}>Remove from Redux</button>
                        </div>
                        <div>
                            <button onClick={this.removeAllPokemon}>Remove All from Redux</button>
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


const mapStateToProps = ({ pokemon }) => {
    return {
        reduxPokemon: pokemon
    };
};

export default connect(mapStateToProps)(Details);