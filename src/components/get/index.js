import React, { Component } from 'react';
import { id, key, tamanoId, tamanoKey } from '../id';

export default class Get extends Component {
  constructor() {
    super()
    this.state = {
      id: 'jgKni3Psyf9vzdQYD3J5',
      polyline: []
    }
  }
  fetch(e) {
    e.preventDefault()
    fetch(`https://loogia.tech/api/v0/projects/${this.state.id}/solution`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'X-Loogia-App-Id': tamanoId,
        'X-Loogia-API-Key': tamanoKey
      },
      mode: 'cors',
    })
      .then(res => res.json())
      .then(data => {
        console.log(data.result)
        console.log(data.result.carrierRoutes[0].route)
        console.log(data.result.carrierRoutes[0].route[0].polyline)
        const newArr = []
        for (let i = 0; i < data.result.carrierRoutes[0].route.length; i++) {
          newArr.push(data.result.carrierRoutes[0].route[i].polyline)
        }
        this.setState({ polyline: newArr })
        console.log(data.result.unassignedJobs)
      })

  }
  handleChange(e) {
    this.setState({ id: e.target.value })
  }

  render() {
    return (
      <div>
        <form onSubmit={(e) => this.fetch(e)}>
          <input type='text' placeholder='projectId' onChange={(e) => this.handleChange(e)}></input>
          <input type='submit' value='Get' ></input>
        </form>
        <div >
          ID : {this.state.id}
        </div>
        <div>
          <div style={{ color: 'blue' }}>POLYLINE :</div> {this.state.polyline.map(item => <div>{item}</div>)}
        </div>
      </div>
    )
  }
}

