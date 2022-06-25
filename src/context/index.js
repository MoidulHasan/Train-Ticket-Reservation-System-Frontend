import { useState, createContext, useContext } from "react";

export const FormContext = createContext();

const ContextProvider = ({ children }) => {
    const [formData, setFormData] = useState({});


    const setFormValues = (values) => {

        console.log("Set form values called")
        setFormData((prevValues) => ({
            ...prevValues,
            ...values,
        }));
    };

    return (
        <FormContext.Provider value={{ formData, setFormValues }}>
            {children}
        </FormContext.Provider>
    );
}

export default ContextProvider;

export const useFormData = () => useContext(FormContext);
