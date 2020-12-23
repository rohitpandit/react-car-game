import React from 'react';
import Car from './Car.js';
import Truck from './Truck.js';

function Objects(){
    return (
        <div>
            <Truck className="truck1"/>
            <Truck className="truck1"/>
            <Truck className="truck1"/>
            
            <Car />
        </div>
    );
}

export default Objects;