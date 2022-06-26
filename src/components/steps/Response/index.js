// Dependencies
import React from 'react';

const Response = ({ response }) => {

    return (
        <div className={''}>
            <h3>{response?.status}</h3>
            <h4>{response?.message}</h4>
        </div >
    );
};

export default Response;