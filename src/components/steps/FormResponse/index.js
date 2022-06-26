/**
 * Title: Multipart Form Step 4
 * Description: This module provide the multipart form's step 3's content
 * Author: Moidul Hasan Khan
 * Date: 23/06/2022
 */

// Dependencies
import React, { useEffect, useRef, useState } from 'react';
import { useFormData } from '../../../context';
import PageNavigator from '../../pageNavigator';
import Spinner from '../../spinner';
import Response from '../Response';


const FormResponse = ({ step, setStep }) => {

    const { formData, setFormValues } = useFormData();

    const [loading, setLoading] = useState(true);
    const [response, setResponse] = useState();


    const callEffect = useRef(true)

    useEffect(() => {

        if (callEffect.current) {

            callEffect.current = false;
            fetchData();
            //console.log('useEffect on FormSUbmit')
        }

    }, []);


    const fetchData = () => {

        const requestOptions = {
            method: 'POST',
            mode: 'cors',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData)
        };

        fetch("https://ttrs-backend.herokuapp.com/formsubmit", requestOptions)
            .then((response) => response.json())
            .then((data) => {
                if (data.status === 'success') localStorage.removeItem("formData");
                setResponse(data);
                setLoading(false);
            })
            .catch((error) => {
                //console.log(error);
                setLoading(false);
            });
    };

    return (

        <div className={'d-flex justify-content-between flex-column h-100'}>
            <div className='mt-5 ps-5 d-flex align-items-center justify-content-center'>
                {loading ? <Spinner /> : <Response response={response ? response : {}} />}
            </div >
            <PageNavigator step={step} setStep={setStep} response={response ? response : {}} />

        </div >
    );
};

export default FormResponse;