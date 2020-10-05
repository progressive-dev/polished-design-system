import React, { useState } from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import Search, { SearchProps } from '.';

export default {
  title: 'Molecules/Search',
  component: Search,
} as Meta;

const Template: Story<SearchProps> = (args) => <Search {...args} />;

export const Default = () => {
  const [value, setValue] = useState('');

  return (
    <Search
      placeholder='Search the site'
      width='400px'
      value={value}
      onChange={e => setValue(e.currentTarget.value)}
    />
  );
}