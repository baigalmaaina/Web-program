import React from 'react';
import {
  Typography
} from '@material-ui/core';
import './userPhotos.css';


const Comment = props =>(
  <div>
    <p>{props.comment.comment} {props.comment.date_time}</p>
  </div>
)

var commentList=function(comments){
  if(comments!==undefined){
    return comments.map(currentcomment=>{
      // eslint-disable-next-line react/jsx-key
      return <Comment comment = {currentcomment}/>
    })
  }
  
}
const Photo = props => (
  <div className="card">
    <img src={`../../images/${props.photo.file_name}`}></img>
      <p>{props.photo.date_time}</p>
      <div className="card-body">
        Comments
        {commentList(props.photo.comments)}
      </div>
  </div>
)
class UserPhotos extends React.Component {
  constructor(props) {
    super(props);
    this.state ={
      photos:[]
    }
  }
  componentDidMount() {
    fetch("http://localhost:3000/photosOfUser/"+this.props.match.params.userId)
    .then(res => res.json())
    .then(data => this.setState({photos:data}));
  } 

  photosList() {
    return this.state.photos.map(currentphotos => {
      return <Photo photo={currentphotos} key={currentphotos._id}/>;
    })
  }
  render() {
    console.log(this.state.photos); 
    return (

      <Typography variant="body1">
      {this.photosList()}
      </Typography>

    );
  }
}

export default UserPhotos;