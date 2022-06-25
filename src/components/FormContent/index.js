/**
 * Title: Form Content
 * Description: This module provide the from content
 * Author: Moidul Hasan Khan
 * Date: 21/06/2022
 */

// Dependencies
import React from 'react';
import './FormContent.css';
const FormContent = ({ children }) => {
    return (
        <div className='contentContainer d-flex align-items-center justify-content-center'>
            <div className='formDetails'>
                <div className='form-inputs'>
                    {children}
                </div>
            </div>
        </div>
    );
};
export default FormContent;