/**
 * Title: Multipart Form Step 4
 * Description: This module provide the multipart form's step 3's content
 * Author: Moidul Hasan Khan
 * Date: 23/06/2022
 */

// Dependencies
import React from 'react';
import utils from '../../../utils/utils';
import { useFormData } from '../../../context';
import { useForm } from 'react-hook-form';
import PageNavigator from '../../pageNavigator';


const Summary = ({ step, setStep }) => {

    const { commaSeparator } = utils;

    const { formData, setFormValues } = useFormData();


    const {
        handleSubmit,
        formState: { errors },
        register,
        watch
    } = useForm();

    const onSubmit = (values) => {

        setFormValues(values);
        console.log('values form text: ', values);
        console.log('formData form text: ', formData);
        setStep((currentStep) => currentStep + 1);
    };


    const { Name, Gender, From, To, Date, Time, Price, Note } = formData;


    return (
        <form onSubmit={handleSubmit(onSubmit)} className={'d-flex justify-content-between flex-column h-100'}>
            <div className='mt-5'>
                <div className='row ps-5'>
                    <h6>Name: {Name}</h6>
                    <h6>Gender: {Gender}</h6>
                    <h6>From: {From}</h6>
                    <h6>To: {To}</h6>
                    <h6>Date: {Date}</h6>
                    <h6>Time: {Time}</h6>
                    <h6>Amount: {commaSeparator(Math.floor((parseInt(Price) * 1.47)))}</h6>
                </div>
                <div class="col-6 ms-5">
                    <textarea className='form-control shadow-none position-relative' value={Note} rows={10} readOnly="readonly" />
                </div>
            </div >
            <PageNavigator step={step} setStep={setStep} />

        </form >
    );
};

export default Summary;