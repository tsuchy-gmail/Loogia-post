import React, { Component } from 'react';
import View from './view'
import Button from '@material-ui/core/Button'
class Get extends Component {
  constructor(props) {
    super(props)
    this.state = {
      id: 'LpFHbFmRaKtrftN5iMyk'
    }
  }
  get(e){
    e.preventDefault()
      fetch(`https://loogia.tech/api/v0/projects/${this.state.id}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'X-Loogia-App-Id': 'puxDwn2GbSemVg7J07iLCce8kuj1',
          'X-Loogia-API-Key': '01948a05fefdc190e5cf6abedc91790a15bfe15db2a2f5ae98dcd4f395abddcd',
        },
        mode: 'cors',
      })
        .then(res => res.json())
        .then(data => {
          console.log(data.option.ignoreReturnTrip)

          const arr = [data.name, data.depotId, data.carrierCount, data.spotCount, data.jobCount, data.status, data.recalculationSetting, JSON.stringify(data.option)]
          const p = ['name', 'depotId', 'carrierCount', 'spotCount', 'jobCount',  'status', 'recalculationSetting', 'option']
          const view=arr.map((ar, index) => {
            return (
              <table border='1' >
                <tr >
                  <td style={{width:'300px'}}><b>{p[index]}</b></td>
                  <td style={{width:'300px'}}>{ar}</td>
                </tr>
              </table>
            )
          })
          console.log(view)
          this.setState({
            project: view,
          })
        })
        .catch(er => console.log(er))



//SOLUTIONS
        //////////////////////////////////////////////////////////


  
      fetch(`https://loogia.tech/api/v0/projects/${this.state.id}/solution`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'X-Loogia-App-Id': 'puxDwn2GbSemVg7J07iLCce8kuj1',
          'X-Loogia-API-Key': '01948a05fefdc190e5cf6abedc91790a15bfe15db2a2f5ae98dcd4f395abddcd',
        },
        mode: 'cors',
      })
        .then(res => res.json())
        .then(data => {
          const arr = [data.status, data.estimatedCalculationTime, data.errorMessage	, data.requestedAt, data.calculatedAt, JSON.stringify(data.result)
          ]
          const p = ['status', 'estimatedCalculationTime', 'errorMessage', 'requestedAt', 'calculatedAt', 'result']
          const options=[]
          const view=arr.map((ar, index) => {
            return (
              <table border='1'>
                <tr >
                  <td style={{width:'300px'}}><b>{p[index]}</b></td>
                  <td style={{width:'300px'}}>{ar}</td>
                </tr>
              </table>
            )
          })
          console.log(view)
          this.setState({
            solution: view,
          })
        })
        .catch(er => console.log(er))




        //////CCCCCCCCCC/////////////////////CARRIER/////////////////////////////
  
      fetch(`https://loogia.tech/api/v0/projects/${this.state.id}/carriers`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'X-Loogia-App-Id': 'puxDwn2GbSemVg7J07iLCce8kuj1',
          'X-Loogia-API-Key': '01948a05fefdc190e5cf6abedc91790a15bfe15db2a2f5ae98dcd4f395abddcd',
        },
        mode: 'cors',
      })
        .then(res => res.json())
        .then(data => {
          console.log(data.name)
          const arr = [JSON.stringify(data.carriers)]
          const p = ['carrier']
          const view=arr.map((ar, index) => {
            return (
              <table border='1' >
                <tr >
                  <td style={{width:'300px'}}><b>{p[index]}</b></td>
                  <td style={{width:'300px'}}>{ar}</td>
                </tr>
              </table>
            )
          })
          console.log(view)
          this.setState({
            carrier: view,
          })
        })
        .catch(er => console.log(er))
  






//SPOTS




      fetch(`https://loogia.tech/api/v0/projects/${this.state.id}/spots`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'X-Loogia-App-Id': 'puxDwn2GbSemVg7J07iLCce8kuj1',
          'X-Loogia-API-Key': '01948a05fefdc190e5cf6abedc91790a15bfe15db2a2f5ae98dcd4f395abddcd',
        },
        mode: 'cors',
      })
        .then(res => res.json())
        .then(data => {
          console.log(data.name)
          const arr = [JSON.stringify(data.spots)]
          const p = ['spot']
          const view=arr.map((ar, index) => {
            return (
              <table border='1' >
                <tr >
                  <td style={{width:'300px'}}><b>{p[index]}</b></td>
                  <td style={{width:'300px'}}>{ar}</td>
                </tr>
              </table>
            )
          })
          console.log(view)
          this.setState({
            spot: view,
          })
        })
        .catch(er => console.log(er))
  








//JOBS




      fetch(`https://loogia.tech/api/v0/projects/${this.state.id}/jobs`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'X-Loogia-App-Id': 'puxDwn2GbSemVg7J07iLCce8kuj1',
          'X-Loogia-API-Key': '01948a05fefdc190e5cf6abedc91790a15bfe15db2a2f5ae98dcd4f395abddcd',
        },
        mode: 'cors',
      })
        .then(res => res.json())
        .then(data => {
          console.log(data.name)
          const arr = [JSON.stringify(data.jobs)]
          const p = ['job']
          const view=arr.map((ar, index) => {
            return (
              <table border='1' >
                <tr >
                  <td style={{width:'300px'}}><b>{p[index]}</b></td>
                  <td style={{width:'300px'}}>{ar}</td>
                </tr>
              </table>
            )
          })
          console.log(view)
          this.setState({
            job: view,
          })
        })
        .catch(er => console.log(er))
  
  }
  input(e){
    this.setState({
      id: e.target.value
     })
    console.log(this.state.id)
  }

  render(){
    
    return (
      <div>
        <form action="" onSubmit={(e)=>this.get(e)}>
          <span><b>projectId </b></span>
          <input type="text" onChange={(e)=>this.input(e)} placeholder={this.state.id}/>
          <input type="submit" value='GET'/>
        </form>
        <div className='m-5'>
          <h2>Project</h2>
          {this.state.project}
        </div>
        <div className='m-5'>
          <h2>Carrier</h2>
         {this.state.carrier} 
        </div>
        <div className='m-5'>
          <h2>Solution</h2>
         {this.state.solution} 
        </div>
        <div className='m-5'>
          <h2>Spot</h2>
         {this.state.spot} 
        </div>
        <div className='m-5'>
          <h2>Job</h2>
         {this.state.job} 
        </div>

      </div>
    )
  }

}



export default Get