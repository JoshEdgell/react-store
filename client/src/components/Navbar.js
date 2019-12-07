import React from 'react';
import logo from '../assets/images/react_store_logo.png'
import { Button } from 'reactstrap';
// import Dropdown from './Dropdown';

class Navbar extends React.Component {
    constructor(props){
        super()
    };
    toggleView = () =>{
        this.props.toggleViews();
    }
    render(){
        const buttonText = () =>{
            return this.props.managerView ? "Switch to Store View" : "Switch to Manager View"
        }
        return(
            <div className='navbar'>
                <Button onClick={this.toggleView} id='view-toggle'>{buttonText()}</Button>
                <img src={logo} alt='React Store' id='navbar-logo'></img>
            </div>
        )
    }
};

export default Navbar;