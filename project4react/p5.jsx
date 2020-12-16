//import '.p5/.css'; 
import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/header/Header';
import States from './components/states/States';
import Example from './components/example/Example';

import{HashRouter, Route, Link, Switch} from "react-router-dom";


class Menu extends React.Component{
    constructor(props){
        super(props);
        this.state={
            routes: [
                {
                    name: "Home",
                    path: "/",
                    exact: true,
                    main: ()=><div>Hello! Page 5</div>
                },
                {
                    name: "Example",
                    path: "/Example",
                    exact: true,
                    main: ()=><Example/>
                },
                {
                    name: "States",
                    path: "/States",
                    exact: true,
                    main: ()=><States/>
                }
            ]
        };
    }
    render(){
        let link={
             textDecoration: 'none',
             color: "red"
            };
        return(
            <div>
                <Header/>
                <HashRouter>
                <div>
                    {
                        <ul className="menu"> 
                        {this.state.routes.map((route, index)=>
                        (<li key={index}><Link to={route.path} style={link}> {route.name}</Link></li>))}
                        </ul>
                    }
                </div>
                <Switch>
                    {this.state.routes.map((route, index)=>
                    (<Route key={index} path={route.path} exact={route.exact} props={<route.main/>}/>))}
                </Switch>
                </HashRouter>
            </div>
        );
    }
}
ReactDOM.render(
   <Menu/>,
   document.getElementById('reactapp'),
);