import './home.css'
import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faFilter, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import '../../pages/style.css'

class Navbar extends Component {
    render() {
        return (
            <header className="sticky-top">
                <nav className="navbar navbar-expand-lg navbar-light shadow rounded">
                    <div className="container">
                        <h2 className='navbar-brand mr-auto' >
                            Pokedex</h2>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <div className="row">
                                <div className="col col-sm-12 col-md-auto">
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </header>
        );
    }
}

export default Navbar;