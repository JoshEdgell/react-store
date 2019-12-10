import React from 'react';
import { Button } from 'reactstrap'

function Delete(props){
    return(
        <div id='delete-products' className='product-divs'>
            <Button className='toggle'>Delete Items</Button>
        </div>
    )
};

export default Delete;