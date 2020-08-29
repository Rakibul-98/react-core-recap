import React from 'react';
import { Jumbotron, Button } from 'react-bootstrap';


const Reduce = (props) => {
    return (
        <div>
            <Jumbotron>
                <h1>Hello, world!</h1>
                <p>
                    This is a simple hero unit, a simple jumbotron-style component for calling
                    extra attention to featured content or information.
                </p>
                <p>
                    <Button variant="primary">Learn more</Button>
                </p>
            </Jumbotron>
            <h1>The total amount : {props.totalMoney} </h1>
        </div>
    );
};

export default Reduce;