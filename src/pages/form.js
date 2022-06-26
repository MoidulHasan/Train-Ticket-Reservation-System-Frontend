/**
 * Title: Multipart Form
 * Description: This module provide the multipart form
 * Author: Moidul Hasan Khan
 * Date: 25/06/2022
 */

// Dependencies
import React, { useEffect, useRef, useState } from 'react';
import Header from '../components/header'
import FormContent from '../components/FormContent'
import Spinner from '../components/spinner';
import utils from '../utils/utils';
import { useFormData } from '../context';


const Form = () => {
    // get context api 
    const { formData, setFormValues } = useFormData();

    // form states
    const [step, setStep] = useState(1);
    const [stepChange, setStepChange] = useState(false);



    // change stepChange state value
    const changeStepStatus = () => {
        setStepChange(true);
    }

    // call stepChangeStatus for making stepChange true on step change for render loader
    const stepRender = useRef(true);

    useEffect(() => {
        if (stepRender.current) {
            stepRender.current = false;
            changeStepStatus();
        }
    }, [step]);

    // change stepChange state to false for removing loader and render current step after 1 second
    setTimeout(() => {
        setStepChange(false);
    }, 1000);





    // utilities
    const { stepContent, decrypt } = utils;

    console.log(step);

    const currentFormContent = stepContent(step, setStep);
    // console.log(currentFormContent)

    // get form data from local storage if it is saved and set it to formData state
    useEffect(() => {
        if (localStorage.getItem('formData')) {
            //console.log(localStorage.getItem('formData'));
            const formLocalData = JSON.parse(decrypt(localStorage.getItem('formData')));
            //console.log("local form formLocalData: ", formLocalData);
            if (formLocalData) {
                setFormValues(formLocalData);
            }
        }
    }, []);

    return (
        <div className='form'>
            <Header />
            <FormContent>
                {stepChange ? <Spinner /> : currentFormContent}
            </FormContent>
        </div>
    );

}

export default Form;