import React, { Component } from 'react';
import Create from './Create';
import ViewAll from './ViewAll';
import Update from './Update';
import Delete from './Delete';

class ManagerHome extends Component {
    constructor(props){
        super(props)
        this.state = {

        }
    }

    render(){
        return(
            <div id='manager-components'>
                <Create/>
                <ViewAll/>
                <Update/>
                <Delete/>
            </div>
        )
    }
}

export default ManagerHome;