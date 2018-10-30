// Code ControlledInput Component Here

import React, {component} from 'react';


export default class ControlledInput extends Component{


state = {
  value: ''
}


handleChange=(e)=>{
  this.setState({
    value: e.target.value,
  })
}

render(){
  return(
    <form onSubmit={e => this.handleSubmit(e)}>
    <input type = "text" value = {this.state.value} onChange = {this.handleChange}
    </form>
  )
}


}
