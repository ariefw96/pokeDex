import React, { Component } from 'react';
import Navbar from '../../components/navbar';
import CardList from '../../components/card'
import axios from 'axios'
import './../style.css'

class home extends Component {
    constructor() {
        super();

        this.state = {
            pokemons: [],
            nextpage: '',
            prevpage: '',
        };
    }

    componentDidMount() {
        axios.get('https://pokeapi.co/api/v2/pokemon?limit=20')
            .then(({ data }) => {
                this.setState({
                    pokemons: data.results,
                    prevpage: data.previous,
                    nextpage: data.next,
                })
            }).catch((error) => {
                console.log(error)
            })
    }


    nextPage = () => {
        // console.log(this.state.nextpage)
        const nextPage = this.state.nextpage
        console.log(nextPage)
        if (nextPage != '') {
            axios.get(this.state.nextpage)
                .then(({ data }) => {
                    this.setState({
                        pokemons: data.results,
                        prevpage: data.previous,
                        nextpage: data.next,
                    })
                }).catch((error) => {
                    console.log(error)
                })
        }
    }

    prevPage = () => {
        const prevPage = this.state.prevpage
        if (prevPage != null) {
            axios.get(prevPage)
                .then(({ data }) => {
                    this.setState({
                        pokemons: data.results,
                        prevpage: data.previous,
                        nextpage: data.next,
                    })
                }).catch((error) => {
                    console.log(error)
                })
        }
    }


    render() {
        const { pokemons, nextpage, prevpage } = this.state
        console.log(this.state)
        // console.log(this.state.pokemons)
        return (
            <>
                <Navbar />
                <button className='btn-primary'
                    onClick={this.prevPage}
                >
                    <p style={{ paddingHorizontal: 10 }}>{`<< `}Prev</p>
                </button>

                <button className='btn-primary'
                    onClick={this.nextPage}
                >
                    <p style={{ paddingHorizontal: 10 }}>{` >>`}Next</p>
                </button>

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