import React, { Component } from 'react';

class Details extends Component {
    state = {
        pokemon: [],
    }

    getSinglePoke = () => {
        const { match } = this.props;
        const imgurl = match.params.name
        fetch(`https://pokeapi.co/api/v2/pokemon/${imgurl}`)
            .then(({ data }) => {
                console.log(data)
                this.setState({
                    pokemon: data,
                })
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
        return (
            <section className="detail-view" >
                <div className='data-wrapper'>
                    {
                        pokemon && pokemon.map(({ id, name, type, sprite }) => {
                            return (
                                <>
                                    <img src={sprite.front_default} className='sprite-image' alt="sprite" />
                                    <h1 className='data-name'>ID: {id} {name}</h1>
                                    <p className="data-char">Type: {type}</p>
                                </>
                            )
                        })
                    }


                </div>
            </section>
        );
    }
}

export default Details;