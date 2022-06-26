/**
 * Title: Multipart Form Step 3
 * Description: This module provide the multipart form's step 3's content
 * Author: Moidul Hasan Khan
 * Date: 22/06/2022
 */

// Dependencies
import React, { useEffect, useState } from 'react';
import { useFormData } from '../../../context';
import { Controller, useForm } from 'react-hook-form';
import PageNavigator from '../../pageNavigator';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './styles.css'
import utils from '../../../utils/utils'


const DateTime = ({ step, setStep }) => {
    const { formData, setFormValues } = useFormData();

    console.log("formData from Date time: ", formData);
    // const [dateNow, setDateNow] = useState(new Date());
    // const [currentTime, setCurrentTime] = useState(new Date());

    const [firstRender, setFirstRender] = useState(true);

    const dateNow = new Date();
    const currentTime = new Date();

    const {
        control,
        handleSubmit,
        formState: { errors },
        register,
        watch
    } = useForm({
        mode: "all",
        defaultValues: {
            Date: dateNow,
            Time: currentTime
        },
    });

    const onSubmit = (values) => {
        // console.log("values of form ", values)

        values.Date = new Date(values.Date).toLocaleDateString('en-CA');
        values.Time = values.Time.toLocaleTimeString([], {
            hourCycle: 'h23',
            hour: '2-digit',
            minute: '2-digit',
        });

        setFormValues(values);


        // Save from data to local storage
        const { saveData } = utils;
        saveData(formData);

        // console.log('values form Time: ', values);
        // console.log('formData form Time: ', formData);
        setStep((currentStep) => currentStep + 1);
    };

    // cheange firstRender State after first rendering
    useEffect(() => {
        setFirstRender(false);
    }, [])

    console.log("Step: : ", step);
    return (
        <form onSubmit={handleSubmit(onSubmit)} className={'d-flex justify-content-between flex-column h-100'}>
            <div className='mt-5'>
                <div className='row d-flex justify-content-center'>
                    <div class="col-8 form-group">
                        <label>Date</label>
                        <br />
                        <Controller
                            control={control}
                            name='Date'
                            rules={{ required: true }}
                            render={({ field }) => (
                                <DatePicker
                                    className='form-control'
                                    dateFormat='yyyy/MM/dd'
                                    // selected={dateNow}
                                    // onChange={(date) => setdateNow(date)}
                                    onChange={(date) => field.onChange(date)}
                                    selected={firstRender ? dateNow : field.value}
                                />
                            )}
                        />


                        {/* <input className='form-control' type={"date"} name="Date"  {...register("Date")} /> */}
                    </div>
                </div>
                <div class="row d-flex justify-content-center mt-3">
                    <div class="col-8 form-group">
                        <label>Time</label>
                        <br />
                        <Controller
                            control={control}
                            name='Time'
                            rules={{ required: true }}
                            render={({ field }) => (
                                <DatePicker
                                    className='form-control'
                                    selected={firstRender ? currentTime : field.value}
                                    onChange={(time) => field.onChange(time)}
                                    showTimeSelect
                                    showTimeSelectOnly
                                    timeIntervals={1}
                                    timeCaption='Time'
                                    dateFormat='HH:mm'
                                    timeFormat='HH:mm'
                                />
                            )}
                        />

                        {/* <input className='form-control' name="Time" type="text" {...register("Time")} /> */}
                    </div>
                </div>
            </div >
            <PageNavigator step={step} setStep={setStep} error={errors.Date ? "Date is Required" : errors.Time ? "Time is required" : false} />
        </form>
    );
};

export default DateTime;