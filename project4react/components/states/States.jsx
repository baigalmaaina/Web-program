import React from 'react';
import './States.css';

/**
 * Define States, a React componment of CS142 project #4 problem #2.  The model
 * data for this view (the state names) is available
 * at window.cs142models.statesModel().
 */
class States extends React.Component {
  constructor(props) {
    super(props);
    console.log("window.cs142models.statesModel()", window.cs142models.statesModel());
    this.state={ muj:window.cs142models.statesModel(), searchValue:"", zaalt: true, };
    this.handleChangeBound=(event)=>this.handleChange(event);
  }
  handleChange(event){
    this.setState({ searchValue: event.target.value});
    for(let i=0; i<this.state.muj.length; i++){
      if(this.state.array[i].toUpperCase()
        .includes(this.state.searchValue.toUpperCase()))
        {
          this.state.zaalt === true;
          break;
        }
        else { this.state.zaalt===false;}
     }
    }
  render() {
    return (
      <div className="container">
        <div className="search">
          <input id="search" type="text" 
          onChange={this.handleChangeBound} 
          placeholder="Search state: "/>
        </div>
        <div className="haih">
          {this.state.muj.map((el)=>el.toUpperCase().includes(this.state.searchValue.toUpperCase())?(<div>{el}</div>):(""))}
          {!this.state.zaalt ? "OOPS! There is no match." : " "}
        </div>
      </div>
    );
  }
}

export default States;
