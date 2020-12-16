import React from 'react';
import './Header.css';
class Header extends React.Component{
    constructor(props){
        super(props);
    }
render(){
    return(
        <div className="header">
            <div className="hayg">
                <div className="up"></div>
                <a href="getting-started.html">Нүүр хуудас</a>
                <a href="http://localhost:3000/p2.html">Хуудас 2</a>
                <a href="p4.html">Хуудас 4</a>
                <a href="p5.html">Хуудас 5</a>
                <div className="down"></div>
            </div>
            <div className="img">
                <img src="logo.jpg" alt="ug n stanford-n logo"></img>
            </div>
        </div>
    );
    }
}
export default Header;