import React from 'react';
import { Button } from 'reactstrap';

function ViewAll(props){
    return(
        <div id='view-products' className='product-divs'>
            <Button className='toggle'>View Items</Button>
        </div>
    )
};

export default ViewAll;