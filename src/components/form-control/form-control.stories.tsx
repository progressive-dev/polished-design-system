import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Meta } from '@storybook/react/types-6-0';

import FormControl from '.';
import TextInput from '../text-input';
import Select, { SelectOption } from '../select';
import { validate as validateEmail } from 'email-validator';

export default {
  title: 'Components/FormControl',
  component: FormControl,
} as Meta;

export const FormInput = () => {
    const [value, setValue] = React.useState('');
    const [isValid, setIsValid] = React.useState(false);
    const [isVisited, setIsVisited] = React.useState(false);
    const shouldShowError = !isValid && isVisited;
    const onChange = (event: React.FormEvent<HTMLInputElement>) => {
        const {value} = event.currentTarget;
        setIsValid(validateEmail(value));
        setValue(value);
    };

    return (
        <FormControl
            label='Email'
            htmlFor='email'
            error={
                shouldShowError
                ? 'Please type a valid email address'
                : undefined
            }
            hint="You won't be able to change it later"
            onBlur={() => setIsVisited(true) }
        >
            <TextInput
                id='email'
                width='250px'
                value={value}
                placeholder='Enter your email'
                onChange={onChange}
                error={shouldShowError}
            />
        </FormControl>
    )
}

export const DisabledFormInput = () => {
    
    return (
        <FormControl
            label='Username'
            htmlFor='username'
            hint="You can't change this field"
            disabled
        >
            <TextInput
                id='username'
                width='250px'
                value='john_doe'
                disabled
            />
        </FormControl>
    )
}



const selectOptions = [
    { label: 'Country 1', value: 'country-1' },
    { label: 'Country 2', value: 'country-2' },
    { label: 'Country 3', value: 'country-3' },
]
  
export const FormSelect = () => {
    const [option, setOption] = React.useState<SelectOption | undefined>(
        selectOptions[0]
    );
    const [isVisited, setIsVisited] = React.useState(false);
    const shouldShowError = !option && isVisited;

    return (
        <FormControl
            label='Country'
            htmlFor='country'
            error={
                shouldShowError
                ? 'Required field'
                : undefined
            }
            hint="The country of residence"
            forceLabel={!!option}
            onBlur={() => setIsVisited(true) }
        >
            <Select
                id='country'
                error={shouldShowError}
                width='250px'
                placeholder='Select option'
                option={option}
                listOptions={selectOptions}
                onChange={(option) => { 
                setOption(option);
                }}
            />
        </FormControl>
    )
}