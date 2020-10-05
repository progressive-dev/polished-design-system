import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import TextInput, { TextInputProps } from '../atoms/text-input';
import styled from 'styled-components';
import { ReactComponent as UserIcon } from '../icons/user.svg';


export default {
  title: 'Atoms/TextInput',
  component: TextInput,
} as Meta;

const Template: Story<TextInputProps> = (args) => <TextInput {...args} />;

export const Default = Template.bind({});
Default.args = {
  // width: '250px'
}

export const Placeholder = Template.bind({});
Placeholder.args = {
  placeholder: 'Placeholder',
  width: '250px'
}

export const WithIcon = Template.bind({});
WithIcon.args = {
  placeholder: 'Login',
  icon: UserIcon,
  width: '250px'
}

export const WithError = Template.bind({});
WithError.args = {
  placeholder: 'Wrong input',
  width: '250px',
  error: true
}

export const Disabled = Template.bind({});
Disabled.args = {
  placeholder: 'Disabled',
  width: '250px',
  disabled: true,
}

export const NonInteractive = Template.bind({});
NonInteractive.args = {
  placeholder: 'Not focusable',
  width: '250px',
  nonInteractive: true,
}

const Row = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 10px;
  & > * {
    margin-right: 10px;
  }
`;

export const Sizes = () => {
  return (
    <>
      <Row>
        <TextInput placeholder='large' size='large' />
        <TextInput placeholder='default' size='default' />
        <TextInput placeholder='small' size='small' />
      </Row>
    </>
  );
};