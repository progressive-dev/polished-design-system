import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import Spinner, { SpinnerProps } from '.';
import styled from 'styled-components';

export default {
  title: 'Atoms/Spinner',
  component: Spinner,
} as Meta;

const Template: Story<SpinnerProps> = (args) => <Spinner {...args} />;

export const Default = Template.bind({});
Default.args = {
    size: 50
}

const DarkBackground = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  background-color: #2c2c59;
`;

export const Light: React.FC = () => (
  <DarkBackground>
    <Spinner size={50} light />
  </DarkBackground>
)