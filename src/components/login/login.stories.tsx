import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import Login, { LoginProps } from '.';

export default {
  title: 'Components/Login',
  component: Login,
} as Meta;

const Template: Story<LoginProps> = (args) => <Login {...args} />;

export const Default = Template.bind({});
Default.args = {
    onSubmit: (values) => alert(JSON.stringify(values, undefined, 2))
}