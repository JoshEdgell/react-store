import React from 'react';
import { Button } from 'reactstrap';

function ViewAll(props){
    
    const handleToggle = event =>{
        event.preventDefault();
        props.toggleManagerViews('read');
    }

    return(
        <div id='view-products' className={props.display ? 'product-divs expanded' : 'product-divs collapsed'}>
            <Button className='toggle' onClick={(event)=>{handleToggle(event)}}>View Items</Button>
        </div>
    )
};

export default ViewAll;