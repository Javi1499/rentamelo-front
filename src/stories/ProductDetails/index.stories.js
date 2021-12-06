import React from 'react';
import { ProductDetails as Component } from 'components'
import { TemplateStyled } from 'utils';
import { mockProductDetails } from 'mocks'
export default {
    title: 'rentamelo/ProductDetails',
    component: Component,
    decorators: [TemplateStyled]

};
const Template = (args) => <Component{...args} />;

export const Primary = Template.bind({});
Primary.args = mockProductDetails;
