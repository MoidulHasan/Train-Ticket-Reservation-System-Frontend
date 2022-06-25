/**
 * Title: Spinner
 * Description: This module provide page loading spinner
 * Author: Moidul Hasan Khan
 * Date: 21/06/2022
 */

// Dependencies
import React from 'react';

const Spinner = () => {
    return (
        <div className='d-flex align-items-center justify-content-center h-100'>
            <div className="spinner-border text-primary " role="status" />
            <h3 className='ms-3'>Page Loading...</h3>
        </div>
    );
};

export default Spinner;