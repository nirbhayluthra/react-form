
import React from 'react';
import ReactDOM from 'react-dom';

class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      age: null,
      errormessage: ''
    };
 
 
    
}
  myChangeHandler = (event) => {
    let nam = event.target.name;
    let val = event.target.value;
    let err = '';
    if (nam === "age") {
      if (val !="" && !Number(val)) {
        err = <strong>Your age must be a number</strong>;
      }
    }
    this.setState({errormessage: err});
    this.setState({[nam]: val});
  }


  render() {
    return (
      <form >

      <h1 style={{color:"red"}}>Hello {this.state.username} {this.state.age}</h1>
      <p>Enter your name:</p>
      <input
        type='text'
        name='username'
        onChange={this.myChangeHandler}
      />
      <p>Enter your age:</p>
      <input
        type='text'
        name='age'
        onChange={this.myChangeHandler}
      />
      {this.state.errormessage}
       

     <p>  </p>
     <p>Please specify your gender </p>
    
     <input type="radio" value="MALE" name="gender"/> Male
     <input type="radio" value="FEMALE" name="gender"/> Female
      <p> select your country of origin : 
      <select value={this.state.country}>
        <option value="g">India</option>
        <option value="m">America</option>
        <option value="f">Canada</option>
        <option value="o">new Zealand</option>
        <option value="k">Australia</option>
      </select>
       </p>
     
      <p>select random boxes: 
      <input type="checkbox" onChange={this.handleCheck} defaultChecked={this.state.checked}/>
      <input type="checkbox" onChange={this.handleCheck} defaultChecked={this.state.checked}/>
      <input type="checkbox" onChange={this.handleCheck} defaultChecked={this.state.checked}/>
      <input type="checkbox" onChange={this.handleCheck} defaultChecked={this.state.checked}/>
      </p>
      <p>Enter Email ID:        <input
      type="email"
      name="txtEmail"
      placeholder="Email"
      required
  /></p> 
   
  <p>Enter Phone Number: <input
  type="text"
  name="num"
  placeholder="phone"
  required
/></p>
   
      </form>
    );
  }
}

ReactDOM.render(<MyForm />, document.getElementById('root'));