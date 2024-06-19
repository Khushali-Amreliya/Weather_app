import React, { Component } from 'react'

export class Recent extends Component {
    constructor(props){
        super(props)
        this.props = props
    }
  render() {
    return (
      <div className='container mt-5'>
        <h2 className='text-center'>Recent Data</h2>
        <ul className='text-left list-unstyled'>
            {
                this.props.recent.map((data,index) => {
                    return <li key={index} onClick={() => this.props.research(data.lat, data.lon)}>{data.city}</li>
                })
            }
        </ul>
      </div>
    )
  }
}

export default Recent