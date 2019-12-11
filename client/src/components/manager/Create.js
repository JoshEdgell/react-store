import React from 'react';
import { Button } from 'reactstrap';

function Create(props){

    const handleToggle = event =>{
        event.preventDefault();
        props.toggleManagerViews('create');
    }
    return(
        <div id='create-products' className={props.display ? 'product-divs expanded' : 'product-divs collapsed'}>
            <Button className='toggle' onClick={(event)=>{handleToggle(event)}}>Create Items</Button>
        </div>
    )
};

export default Create;