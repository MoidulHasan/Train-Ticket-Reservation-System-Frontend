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


const Note = ({ step, setStep }) => {

    const { formData, setFormValues } = useFormData();


    let text = `"
    ,'"" ./\=?!:;
    "",""a"",""b""
    ヲンヰヱヴーヾ・
    ｧｰｭｿﾏﾞﾟ
    ㌶Ⅲ⑳㏾☎㈱髙﨑
    ¢£¬‖−〜―
    <script>alert('Bug!!!');</script>
    &lt;&copy;&amp;
    జ్ఞాజ్ఞాజ్ఞాజ్ఞాజ్ఞాజ్ఞాజ్ఞాజ్ఞాజ్ఞాజ్ఞా
    జ్ఞాజ్ఞాజ్ఞాజ్ఞాజ్ఞాజ్ఞాజ్ఞాజ్ఞాజ్ఞాజ్ఞా
    §¦ЙЁКД§∪§¦ЙЁКД§
    t҉̠̩̰͔͇͔͓̤͕̪̱̗̖̳̭͒̊̓̆̂͌̐̿̎̈́͂̓̇̆e҉͉̤̣̤͕̙̖͓͍͇̤͔͎̦̗̣͎͓̖̫͂̌̿͂͐̈̽̋͛̈̀̂́̂̐̽̂̓̇̆̅͗ͅx҉̰̤̰͉͕̪̙͖̭̜̪͎̮̗̞͇̞̫̬̝̲͈̔́̔͋̿̆̒̋͗͋̀͌͋̈́͂̃̒ͅt̸͚͖͙̮̘̥̯̞͈̲͚̱͚́͒̐̾̋͋̔̓̉̋̈́̉͗̌͑́͌̉̀͂̂͂̌"				
                    
                    
                    
                    
                    
                    
                    
                    `;

    const {
        handleSubmit,
        formState: { errors },
        register,
        watch
    } = useForm({
        mode: "all",
        defaultValues: {
            Note: formData.Note ? formData.Note : text
        },
    });

    const onSubmit = (values) => {

        setFormValues(values);

        // Save from data to local storage
        const { saveData } = utils;
        saveData({ ...formData, ...values });

        //console.log('values form text: ', values);
        //console.log('formData form text: ', formData);
        setStep((currentStep) => currentStep + 1);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className={'d-flex justify-content-between flex-column h-100'}>
            <div className='mt-5'>
                <div className='row d-flex justify-content-center'>
                    <div class="col-6  d-flex justify-content-between">
                        <textarea className='form-control shadow-none position-relative' rows={10}  {...register("Note", { required: true })} />
                    </div>
                </div>
            </div >
            <PageNavigator step={step} setStep={setStep} error={errors.Note ? "Note is required" : false} />
        </form >
    );
};

export default Note;