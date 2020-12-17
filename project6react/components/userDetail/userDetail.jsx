import React from 'react';
import {
  Typography
} from '@material-ui/core';
import fetchModel from "../../fetchModelData";
import './userDetail.css';


/**
 * Define UserDetail, a React componment of CS142 project #5
 */
class UserDetail extends React.Component {
  constructor(props) {
    super(props);
    fetchModel("/user/"+this.props.match.params.userId).then((res)=>this.setState({UserDetail: res.data}));
    this.state={
      userId: this.props.match.params.userId,
      UserDetail: [],
    };
  }
componentDidUpdate(prevProps){
  let prevId=prevProps.match.params.userId;
  let turId=this.props.match.params.userId;
  if(prevId!==turId){
    // eslint-disable-next-line react/no-direct-mutation-state
    this.state.userId=turId;
    fetchModel("user/"+this.state.userId).then((res)=>this.setState({UserDetail:res.data}));
  }
}
  render() {
    return (
      <div className="card">
        <Typography variant="h">
          {this.state.userDetail.first_name} {this.state.userDetail.last_name}
        </Typography>
        <Typography variant="subtitle2" className="item">
          Desctiption: {this.state.userDetail.description}
        </Typography>
        <div className="occu item">
          Occupation: {this.state.userDetail.occupation}
        </div>
        <div className="loc item">
          Location: {this.state.userDetail.location}
        </div>
        <link to={"/photos/" + this.state.userId}>
          <button variant="outlined" color="primary">
            View Pictures
          </button>
        </link>
      </div>
    );
  }
}

export default UserDetail;
