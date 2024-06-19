import React, { Component } from 'react'

export class Search extends Component {
    constructor(props){
        super(props)

        this.props = props;
    }
  render(){
    return (
      <div>
        <div className='bg-result'>
        <div className='container'>
            <div className='row'>
            <div className='col-lg-6 col-md-6 col-sm-12 col-12'>
                <form>
                    <div>
                        <label className='form-label'>Enter City Name</label>
                        <input type='text' placeholder='Enter City Name' className='form-control' name='city' value={this.props.city} onChange={this.props.change}></input>
                    </div>
                    <div className='mt-4'>
                        <span>Get Co-ordinate&nbsp;</span>
                        <button className='btn' onClick={this.props.location}><span className="material-symbols-outlined fs-5 location">my_location</span></button>
                    </div> 
                    <div>
                        <label className='form-label'>Lat:</label>
                        <input type='number' placeholder='Enter Latitude' className='form-control' name='lat' value={this.props.lat}onChange={this.props.change}></input>
                    </div>
                    <div>
                        <label className='form-label'>Lon:</label>
                        <input type='number' placeholder='Enter Longtitude' className='form-control' name='lon' value={this.props.lon}onChange={this.props.change}></input>
                    </div>
                    <div className='mt-2'>
                        <button className='btn' onClick={this.props.search}>Search<span class="material-symbols-outlined fs-5 location ps-2">search</span></button>
                    </div>
                </form>
            </div>
            <div className='col-lg-6 col-md-6 col-sm-12 col-12'>
                <img alt='' src='assets/img/Yahoo_Weather_screen_shots_480x480.webp' className='img-fluid'></img>
            </div>
            </div>
        </div>
        </div>
      </div>
    )
  }
}

export default Search