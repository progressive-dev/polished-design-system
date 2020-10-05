import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import Skeleton, { SkeletonProps } from '.';

export default {
  title: 'Atoms/Skeleton',
  component: Skeleton,
} as Meta;

const Template: Story<SkeletonProps> = (args) => <Skeleton {...args} />;

export const Default = Template.bind({});
Default.args = {
    width: 150,
    height: 150,
}

export const BorderRadius = Template.bind({});
BorderRadius.args = {
    width: 150,
    height: 150,
    borderRadius: '50%',
}