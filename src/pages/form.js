/**
 * Title: Multipart Form
 * Description: This module provide the multipart form
 * Author: Moidul Hasan Khan
 * Date: 25/06/2022
 */

// Dependencies
import React, { useEffect, useState } from 'react';
import Header from '../components/header'
import FormContent from '../components/FormContent'


const Form = () => {
    const [step, setStep] = useState(1);

    // set step state to next
    const nextFormStep = () => setStep((currentStep) => currentStep + 1);

    // set step state to previous
    const prevFormStep = () => setStep((currentStep) => currentStep - 1);

    return (
        <div className='form'>
            <Header />
            <FormContent>

            </FormContent>
            {/* <FormContent handleSubmit={handleSubmit} formSubmitHandler={formSubmitHandler} >
                {stepChange ? <Spinner /> : stepNow}
                <PageNavigator step={step} setStep={setStep} watch={watch} formData={formData} setFormData={setFormData} />
            </FormContent> */}
        </div>
    );

}

export default Form;