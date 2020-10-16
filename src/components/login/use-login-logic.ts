import React, { useEffect, useState } from "react";
import { LoginModel, SubmitHandler } from "./login";
import { validate as validateEmail } from 'email-validator';

export type ErrorModel = {[key in keyof LoginModel]?: string};

const validate = (
    values: LoginModel,
  ) => {
    const errors: ErrorModel = {};
  
    if (!values.password) {
        errors.password = 'Field is required';
    }
  
    if (!values.email) {
        errors.email = 'Field is required';
    } else if (!validateEmail(values.email)) {
        errors.email = 'Please type a valid email address'
    }

    return errors;
  };

const useLoginLogic = (
    onSubmit: SubmitHandler,
    initialValues: LoginModel,
  ): {
    values: LoginModel,
    errors: ErrorModel,
    handleChange: (fieldName: string) => (value: any) => void,
    handleSubmit: (event: any) => void,
  } => {
    const [values, setValues] = useState<LoginModel>(initialValues);
    const [errors, setErrors] = useState<ErrorModel>({});
    const [isSubmitting, setIsSubmitting] = useState(false);
  
  
    useEffect(() => {
      if (Object.keys(errors).length === 0 && isSubmitting) {
        onSubmit(values);
      }
      setIsSubmitting(false);
    }, [errors]);
  
    const handleSubmit = (
      event: any,
    ) => {
      if (event) event.preventDefault();
  
      setErrors(validate(values));
      setIsSubmitting(true);
    };
  
    const handleChange = (fieldName: string) => (value: any) => {
      setValues((values: LoginModel): LoginModel => ({
        ...values,
        [fieldName]: value,
      }));
    };
  
    return {
      handleChange,
      handleSubmit,
      values,
      errors,
    };
  };
  
  export default useLoginLogic;