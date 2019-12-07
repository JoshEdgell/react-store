import React from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

class Menu extends React.Component {
    constructor(props){
        super(props);
        this.toggle = this.toggle.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.state = {
            dropdownOpen: false
        };
    };
    toggle(){
        this.setState(prevState => ({
            dropdownOpen: !prevState.dropdownOpen
        }))
    };
    handleClick = event => {
        const product_class = event.target.value
        this.props.changeProductClass(this.props.group, product_class)
    };

    render(){
        const dropdownItems = this.props.categories.map((title) => {
            //Wherever I'm building loops, I have to put a key on everything
            return(
                <DropdownItem 
                    key = {`${this.props.group} ${title}`} 
                    value = {title}
                    onClick = {this.handleClick}    
                >
                        {title.replace('_',' ')}
                </DropdownItem>)
        }
         
        )
        return(
            <Dropdown
                isOpen={this.state.dropdownOpen}
                toggle={this.toggle}>
                <DropdownToggle caret className='header-link'>
                    {this.props.title}
                </DropdownToggle>
                <DropdownMenu>
                    {dropdownItems}
                </DropdownMenu>
            </Dropdown>
        )
    }
};

export default Menu;



