import React from 'react';
import {
  AppBar, Toolbar, Typography
} from '@material-ui/core';
import './TopBar.css';
// import { ThumbDown } from '@material-ui/icons';

/**
 * Define TopBar, a React componment of CS142 project #5
 */
class TopBar extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      view: this.props.view,
      version: ""
    };
  }
  componentDidUpdate(){
    const url=this.props.view;
    if(this.url.view!==this.props.view){
      this.props.view=url;
      if(url===this.props.view){
        this.changed();
      }
    }
  }
  componentDidMount(){
    this.changed();
  }
changed(){
  let zaah=this.props.view.split("/");
  let userModel=window.cs142models.userModel(zaah[2]);
  if(zaah[1]==="users"){
    this.setState({name: userModel.first_name});
  }
  else if(zaah[1]==="photos"){
    this.setState({name: "photos" + userModel.firs_name});
  }
  }
  render() {
    return (
      <AppBar className="cs142-topbar-appBar" position="absolute">
        <Toolbar>
          <Typography variant="h5" color="inherit">
             {this.props.view}
          </Typography>
        </Toolbar>
      </AppBar>
    );
  }
}

export default TopBar;
