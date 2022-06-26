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


const PageNavigator = ({ step, setStep, error, response }) => {
    const { errorHandler, updateData, saveData } = utils;

    // page navigation next button click handler
    const nextFormStep = (step, setStep) => {
        // console.log(setStep);

        setStep((currentStep) => currentStep + 1);
    }

    // page navigation Back button click handler
    const prevFormStep = (step) => {
        if (step > 1) setStep((currentStep) => currentStep - 1);
    }


    return (
        <div className='navigator'>
            {error ? <h5 className='text-danger text-center'> <i class="fa-solid fa-triangle-exclamation" />  <span>{error}</span> </h5> : ""}
            <div className={`d-flex ${response?.status === 'success' ? 'd-none' : ''} ${step > 1 ? 'justify-content-between' : 'justify-content-end'} `}>
                {step > 1 && <button type="button" class="btn btn-secondary" onClick={() => prevFormStep(step, setStep)}>Back</button>}
                {step < 7 && <button type="submit" class="btn btn-primary" >{step === 6 ? "Submit" : "Next"}</button>}
            </div>
        </div >

    );
};

export default PageNavigator;