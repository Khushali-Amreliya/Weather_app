import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class Header extends Component {
  render() {
    return (
      <div>
        <div className='container-fluid background'>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-1 col-md-2 col-sm-2 col-2'>
                        <img alt='' src='assets/img/unnamed.png' className='img-fluid'></img>
                    </div>
                    <div className='col-lg-7 col-md-6 col-sm-6 col-6'></div>
                    <div className='col-lg-4 col-md-4 col-sm-4 col-4'>
                        <nav className="navbar navbar-expand-lg navbar-light">
                            <div className="container-fluid pt-2">
                                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                                </button>
                                <div className="collapse navbar-collapse" id="navbarNav">
                                    <ul className="navbar-nav">
                                        <li className="nav-item">
                                        <Link className="nav-link active link" aria-current="page" to="/" style={{color:"#fff"}}>Home</Link>
                                        </li>
                                        <li className="nav-item">
                                        <Link className="nav-link active link" to="/weather"style={{color:"#fff"}}>Weather</Link>
                                        </li>                 
                                    </ul>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
      </div>
    )
  }
}

export default Header