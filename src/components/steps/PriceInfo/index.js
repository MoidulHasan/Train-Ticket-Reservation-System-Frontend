/**
 * Title: Multipart Form Step 4
 * Description: This module provide the multipart form's step 3's content
 * Author: Moidul Hasan Khan
 * Date: 23/06/2022
 */

// Dependencies
import React, { useState } from 'react';
import utils from '../../../utils/utils';
import { useFormData } from '../../../context';
import { useForm } from 'react-hook-form';
import PageNavigator from '../../pageNavigator';

const PriceInfo = ({ step, setStep }) => {

    const { randomNumber, commaSeparator } = utils;


    const { formData, setFormValues } = useFormData();

    console.log("Form Data from Price info: ", formData)

    if (!formData.Price) {
        let newFormData = formData;

        newFormData.Price = randomNumber();

        setFormValues(newFormData);
    }


    const {
        handleSubmit,
        formState: { errors },
        register,
        watch
    } = useForm({
        mode: "all",
        defaultValues: {
            Price: formData.Price
        },
    });

    const onSubmit = (values) => {

        setFormValues(values);
        console.log('values form PriceInfo: ', values);
        console.log('formData form Time: ', formData);
        setStep((currentStep) => currentStep + 1);
    };



    return (
        <form onSubmit={handleSubmit(onSubmit)} className={'d-flex justify-content-between flex-column h-100'}>
            <div className='mt-5'>
                <div className='row d-flex justify-content-center'>
                    <div class="col-6 border border-1 d-flex justify-content-between">
                        <span>৳</span>
                        <span>{commaSeparator(formData.Price)}</span>
                        <input className='d-none' name="Price" value={formData.Price}  {...register("Price")} />
                    </div>
                </div>
            </div >
            <PageNavigator step={step} setStep={setStep} />
        </form>
    );
};

export default PriceInfo;