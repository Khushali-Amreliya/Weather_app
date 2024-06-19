import React, { Component } from 'react'
import Loader from './Loader';

export class Result extends Component {
  constructor(props){
    super(props)
    this.props = props;
  }
  render() {
    // console.log(this.props.WeatherData);
    let {WeatherData: wdata} = this.props;
    // console.log("wdata" , wdata);

    const ktoc = (k) => {
      return (k - 273.15).toFixed(2) + " °C"
    }

    const getTime = (time) => {
      const date = new Date(time * 1000);
      // console.log(date);
      return date.toLocaleTimeString()
    }

    let ShowData;
    if(this.props.WeatherData === null){
      // ShowData = <Loader></Loader>
      if(this.props.loading === true){
        ShowData = <Loader></Loader>
      }else{
        ShowData =""
      }
    }else{
      ShowData = (
      <div>
        <table className='mx-auto my-5 w-75'>
          <h4>
            <img alt='' src={`https://openweathermap.org/img/wn/${wdata.weather[0].icon}@2x.png`}></img>
            <span>{wdata.weather[0].description}</span>
          </h4>
            <tr>
                <td>Feels Like</td>
                <td>{ktoc(wdata.main.feels_like)}</td>
            </tr>
            <tr>
                <td>Min Temp</td>
                <td>{ktoc(wdata.main.temp_min)}</td>
            </tr>
            <tr>
                <td>Max Temp</td>
                <td>{ktoc(wdata.main.temp_max)}</td>
            </tr>
            <tr>
                <td>Sun Rise</td>
                <td>{getTime(wdata.sys.sunrise)}</td>
            </tr>
            <tr>
                <td>Sun Set</td>
                <td>{getTime(wdata.sys.sunset)}</td>
            </tr>
        </table>
      </div>
      )
    }
    return (
      <>
        {ShowData}
      </>
    )
  }
}

export default Result