/**
 * Title: Page Navigator
 * Description: This module provide page navigation related functionalities
 * Author: Moidul Hasan Khan
 * Date: 21/06/2022
 */

// Dependencies
import React, { useState } from 'react';
import utils from '../../utils/utils';
import './pageNavigatorStyles.css'


const PageNavigator = ({ step, setStep, watch, formData, setFormData }) => {
    const { errorHandler, updateData, saveData } = utils;

    const [error, setError] = useState();

    // page navigation next button click handler
    const nextClickHandler = (step) => {
        if ((step < 4 || step > 4) && step < 6) {
            // check error
            const err = errorHandler(step, watch);
            if (err === '') {
                // get updated from data and update state
                const updatedData = updateData(watch, step, formData);
                // console.log(updatedData);
                setFormData(() => updatedData);

                // save data to local storage
                saveData(formData);

                // set empty error
                setError(err);

                // increase step number
                setStep((step) => step + 1);
            }
            else {
                // set error
                setError(err);
            }
        }
        else if (step === 4) {
            // check error
            const err = errorHandler(step, watch);
            // save data to local storage
            saveData(formData);

            // set empty error
            setError(err);

            // increase step number
            setStep((step) => step + 1);
        }

        // else if(step === 5 ){

        // }
    }

    // page navigation Back button click handler
    const backClickHandler = (step) => {
        if (step > 1) setStep((step) => step - 1);
    }


    return (
        <div className='navigator'>
            {error}
            <div className={`d-flex ${step > 1 ? 'justify-content-between' : 'justify-content-end'} `}>
                {step > 1 && <button type="button" class="btn btn-secondary" onClick={() => backClickHandler(step)}>Back</button>}
                <button type="button" class="btn btn-primary" onClick={() => nextClickHandler(step)}>{step === 6 ? "Submit" : "Next"}</button>
            </div>
        </div >

    );
};

export default PageNavigator;