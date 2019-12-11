import React, { Component } from 'react';
import Create from './Create';
import ViewAll from './ViewAll';
import Update from './Update';
import Delete from './Delete';

class ManagerHome extends Component {
    constructor(props){
        super(props)
        this.state = {
            display: {
                create: null,
                read: null,
                update: null,
                delete: null
            }
        }
    };

    toggleManagerViews = term => {
        console.log("toggling manager views");
        let newDisplay = {
            create: false,
            read: false,
            update: false,
            delete: false
        }
        newDisplay[term] = true;
        this.setState({
            display: newDisplay
        })
    }

    render(){
        return(
            <div id='manager-components'>
                <Create
                    toggleManagerViews={this.toggleManagerViews}
                    display={this.state.display.create}
                />
                <ViewAll
                    toggleManagerViews={this.toggleManagerViews}
                    display={this.state.display.create}
                />
                <Update/>
                <Delete/>
            </div>
        )
    }
}

export default ManagerHome;