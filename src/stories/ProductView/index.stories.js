import React from 'react';
import { ProductView as Component } from 'components'
import { mockProductView } from 'mocks'
import { TemplateStyled } from 'utils';
export default {
    title: 'rentamelo/ProductView',
    component: Component,
    decorators: [TemplateStyled]
};
const Template = (args) => <Component{...args} />;

export const Primary = Template.bind({});
Primary.args = mockProductView;
