import React from 'react';
import { Story, Meta } from '@storybook/react';
import { ThemeProvider } from '@emotion/react';
import { TemplateName, TemplateNameProps } from './TemplateName';
import { theme } from '../../Theme';

export default {
  title: 'Components/TemplateName',
  component: TemplateName,
} as Meta;
const Template: Story<TemplateNameProps> = (args) => (
  <ThemeProvider theme={theme}>
    <TemplateName {...args} />
  </ThemeProvider>
);
export const Primary = Template.bind({});
Primary.args = {};
