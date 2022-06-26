/**
 * Title: Multipart Form Step 2
 * Description: This module provide the multipart form's step 2's content
 * Author: Moidul Hasan Khan
 * Date: 22/06/2022
 */

// Dependencies
import React from 'react';
import { useFormData } from '../../../context';
import { useForm } from 'react-hook-form';
import PageNavigator from '../../pageNavigator';
import utils from '../../../utils/utils'


const StationInfo = ({ step, setStep }) => {
    const { formData, setFormValues } = useFormData();
    console.log('formData form destination: ', formData);

    const {
        handleSubmit,
        formState: { errors },
        register,
        watch
    } = useForm({
        mode: "all",
        defaultValues: {
            From: formData?.From,
            To: formData?.To
        },
    });

    const onSubmit = (values) => {
        setFormValues(values);

        // Save from data to local storage
        const { saveData } = utils;
        saveData({ ...formData, ...values });


        console.log('values form destination: ', values);
        setStep((currentStep) => currentStep + 1);
    };

    console.log("Step: : ", step);
    return (
        <form onSubmit={handleSubmit(onSubmit)} className={'d-flex justify-content-between flex-column h-100'}>
            <div className='mt-5'>
                <div className='row d-flex justify-content-center'>
                    <div class="col-8 form-group">
                        <label>From</label>
                        <select class="form-select" {...register("From", { required: true })}>
                            <option></option>
                            {formData.From === "東京" ? <option selected value={'東京'}>東京</option> : <option value={'東京'}>東京</option>}
                            {formData.From === "横浜" ? <option selected value={'横浜'}>横浜</option> : <option value={'横浜'}>横浜</option>}
                            {formData.From === "名古屋" ? <option selected value={'名古屋'}>名古屋</option> : <option value={'名古屋'}>名古屋</option>}
                            {formData.From === "大阪" ? <option selected value={'大阪'}>大阪</option> : <option value={'大阪'}>大阪</option>}

                        </select>
                    </div>
                </div>
                <div class="row d-flex justify-content-center mt-3">
                    <div class="col-8 form-group">
                        <label>To</label>
                        <select class="form-select" {...register("To", { required: true })}>
                            <option></option>
                            {formData.To === "東京" ? <option selected value={'東京'}>東京</option> : <option value={'東京'}>東京</option>}
                            {formData.To === "横浜" ? <option selected value={'横浜'}>横浜</option> : <option value={'横浜'}>横浜</option>}
                            {formData.To === "名古屋" ? <option selected value={'名古屋'}>名古屋</option> : <option value={'名古屋'}>名古屋</option>}
                            {formData.To === "大阪" ? <option selected value={'大阪'}>大阪</option> : <option value={'大阪'}>大阪</option>}
                        </select>
                    </div>
                </div>
            </div >
            <PageNavigator step={step} setStep={setStep} error={errors.From ? " Departure station name is required" : errors.To ? " Destination station name is required" : watch('From') === watch('To') && watch('To') !== undefined ? " Both stations can not be same." : false} />
        </form >
    );
};

export default StationInfo;