import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/header/Header';
import States from './components/states/States';
import Example from './components/example/Example';

class Switch extends React.Component{
    constructor(props){
        super(props);
        this.state={
            click:true,
        }
    }
    render(){
        return(
            <div>
                <Header/>
                <button type="button" onClick={()=>{this.setState({click:!this.state.click})}}>
                    {this.state.click ? "to States":"to Example"}
                </button>
                {this.state.click ? <Example/> : <States/>}
            </div>
        );
    }
}
ReactDOM.render(
   <Switch/>,
   document.getElementById('reactapp'),
);