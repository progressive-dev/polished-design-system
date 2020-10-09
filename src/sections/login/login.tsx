import React, { HTMLAttributes } from 'react';
import useLoginLogic from './use-login-logic';
import FormControl from '../../components/form-control';
import TextInput from '../../components/text-input';
import Button from '../../components/button';
import { ButtonWrapper, StyledForm } from './styled';
import { H3 } from '../../components/typography';
import Link from '../../components/link';

export interface LoginModel {
    email?: string;
    password?: string;
}

export type SubmitHandler = (fieldValues: LoginModel) => void;

export interface LoginProps extends Omit<HTMLAttributes<HTMLFormElement>, 'onSubmit'> {
    onSubmit?: SubmitHandler;
    initialValues?: LoginModel;
    loading?: boolean;
}

const Login: React.ForwardRefRenderFunction<HTMLFormElement, LoginProps> = (props, ref) => {
    const {
        onSubmit = () => {},
        initialValues = {},
        loading = false,
    } = props;

    const {
        values,
        errors,
        handleChange,
        handleSubmit,
      } = useLoginLogic(
        onSubmit,
        initialValues,
      );
    return (
        <StyledForm>
            <H3 align='center'>Sign In</H3>
            <FormControl
                label='Email'
                htmlFor='email'
                error={errors.email}
                forceLabel
            >
                <TextInput
                    id='email'
                    value={values.email}
                    placeholder='Enter email'
                    onChange={(e) => handleChange('email')(e.currentTarget.value)}
                    error={!!errors.email}
                />
            </FormControl>
            <FormControl
                label='Password'
                htmlFor='password'
                error={errors.password}
                forceLabel
            >
                <TextInput
                    id='password'
                    value={values.password}
                    placeholder='Enter password'
                    onChange={(e) => handleChange('password')(e.currentTarget.value)}
                    error={!!errors.password}
                />
            </FormControl>
            <ButtonWrapper>
                <Link href='#'>Create account</Link>
                <Button
                    onClick={handleSubmit}
                    loading={loading}
                >Register</Button>
            </ButtonWrapper>
        </StyledForm>
    );
}


export default React.forwardRef<HTMLFormElement, LoginProps>(Login);