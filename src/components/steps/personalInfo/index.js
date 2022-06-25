/**
 * Title: Multipart Form Step 1
 * Description: This module provide the multipart form's step one's content
 * Author: Moidul Hasan Khan
 * Date: 21/06/2022
 */

// Dependencies
import React from 'react';
import { useFormData } from '../../../context';
import { useForm } from 'react-hook-form';
import PageNavigator from '../../pageNavigator';



const PersonalInfo = ({ step, setStep }) => {
    const { formData, setFormValues } = useFormData();


    const {
        handleSubmit,
        formState: { errors },
        register,
    } = useForm({
        mode: "all",
        defaultValues: {
            Name: formData?.Name,
            Gender: formData?.Gender
        },
    });

    const onSubmit = (values) => {
        setFormValues(values);
        console.log(values);
        setStep((currentStep) => currentStep + 1);
    };

    console.log("Step: : ", step);

    const Male = formData?.Gender === 'Male' ? true : false;
    const feMale = formData?.Gender === 'Female' ? true : false;


    return (
        <form onSubmit={handleSubmit(onSubmit)} className={'d-flex justify-content-between flex-column h-100'}>
            <div className='mt-5'>
                <div className='row d-flex justify-content-center'>
                    <div class="col-8 form-group">
                        <label>Name</label>
                        <input type="text" class="form-control shadow-none" autoComplete="off" name='Name' {...register("Name", { required: "Name is required" })} />
                    </div>
                </div>
                <div class="row d-flex justify-content-center mt-3">
                    <div class="col-8 form-group">
                        <label>Gender</label>
                        <div className='ms-5'>
                            <div class="form-check">
                                {Male && <input class="form-check-input" type="radio" checked name="Gender" value="Male" {...register("Gender")}
                                />}

                                {!Male && <input class="form-check-input" type="radio" name="Gender" value="Male" {...register("Gender")}
                                />}

                                <label class="form-check-label" >
                                    Male
                                </label>
                            </div>
                            <div class="form-check">
                                {feMale && <input class="form-check-input" type="radio" checked name="Gender" value="Female" {...register("Gender")} />}
                                {!feMale && <input class="form-check-input" type="radio" name="Gender" value="Female" {...register("Gender")} />}

                                <label class="form-check-label" >
                                    Female
                                </label>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <PageNavigator step={step} setStep={setStep} error={errors.Name ? "Name is Required" : false} />
        </form>
    );
};

export default PersonalInfo;