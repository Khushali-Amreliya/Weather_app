import React, { Component } from 'react'
import Search from './Search'
import Result from './Result'
import axios from 'axios'
import Recent from './Recent'

export class Weather extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       city:"",
       lon:"",
       lat:"",
       WeatherData:null,
       loading:false,
       recent: []
    }
  }
  onChangeHandler = (e) =>{
    // alert("cxvsd")
    // console.log(e.target.name)
    const name = e.target.name
    if(name === "city"){
      this.setState({
        city: e.target.value
      })
    }else if(name === "lat"){
      this.setState({
        lat: e.target.value
      })
    }else if(name === "lon"){
      this.setState({
        lon: e.target.value
      })
    }else{
      console.log("Not Valid");
    }
  }
  locationHandler = (e) => {
    // alert("Hello")
    e.preventDefault();
    this.setState({
      loading:true
    })
    if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition(
        (res) => {
          console.log(res);
          setTimeout(() => {
            this.setState({
              lat: res.coords.latitude,
              lon:res.coords.longitude
            })
            const {latitude,longitude} = res.coords
            axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=41e22a3017e77ca20299bf80c63e2a46`)
            .then((res) => {
              console.log(res);
              this.setState({
                city: res.data.name,
                WeatherData: res.data,
                loading:false
              }, () => {
                this.recentDataHandler();
              })
            }).catch((err) => {
              console.log(err);
            })
          },2000)
      })
    }else{
      console.log("Geolocation Not Supported...!");
    }
  }
  searchHandler = (e) => {
    e.preventDefault();
    // alert("Hello")
    axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${this.state.lat}&lon=${this.state.lon}&appid=41e22a3017e77ca20299bf80c63e2a46`)
    .then((res) => {
      console.log(res);
      this.setState({
        city: res.data.name,
        WeatherData:res.data
      }, () => {
        this.recentDataHandler();
      })
    })
    .catch((err) => {
        console.log(err);
    })
    // axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${this.state.city}&appid=41e22a3017e77ca20299bf80c63e2a46`)
    // .then((res) => {
    //   console.log(res);
    //   this.setState({
    //     lat:res.data.coord.lat,
    //     lon:res.data.coord.lon,
    //     WeatherData:res.data
    //   }, () => {
    //     this.recentDataHandler();
    //   })
    // })
    // .catch((err) => {
    //     console.log(err);
    // })
  }

  recentDataHandler = () => {
    const Recent= this.state.recent;
    console.log(Recent);
    Recent.push({
      city:this.state.city,
      lat:this.state.lat,
      lon:this.state.lon
    })
    this.setState({ Recent })
  }

  researchHandler = (lat , lon) => {
    // alert(lon)
    axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=41e22a3017e77ca20299bf80c63e2a46`)
    .then((res) => {
      console.log(res);
      this.setState({
        city: res.data.name,
        WeatherData: res.data,
        lat: res.data.coord.lat,
        lon: res.data.coord.lon,
        loading:false
      })
    }).catch((err) => {
      console.log(err);
    })
  }

  render() {
    return (
      <div>
        <Search city={this.state.city} lon={this.state.lon} lat={this.state.lat} change={this.onChangeHandler} location={this.locationHandler} search={this.searchHandler}></Search>
        <Result loading={this.state.loading} WeatherData={this.state.WeatherData}></Result>
        <Recent recent={this.state.recent} research={this.researchHandler}></Recent>
      </div>
    )
  }
}

export default Weather;