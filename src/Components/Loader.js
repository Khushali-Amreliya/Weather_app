import React, { Component } from 'react'
import RingLoader from "react-spinners/RingLoader";

export class Loader extends Component {
  render() {
    return (
      <div>
        <RingLoader
            color="rgba(176, 2, 255, 1)"
            size={50}
        />
      </div>
    )
  }
}

export default Loader