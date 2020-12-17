import React from 'react';

const counterOutput = (props) => (
    <div className="CounterOutput">
        Current Counter: {props.value}
    </div>
);

export default counterOutput;