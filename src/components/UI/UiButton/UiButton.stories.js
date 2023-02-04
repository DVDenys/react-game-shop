import UiButton from './UiButton';

export default {
    title: 'Ui-Kit/UiButton',
    component: UiButton,
}

const Template = (args) => <UiButton {...args} />

const props = {
    children: 'Hello',
    onClick: () => console.log('Button Click'),
    type: '', 
    size: 's',
};

export const Small = Template.bind({});

Small.args = {
    ...props,
    size: 's',
};

export const Medium = Template.bind({});

Medium.args = {
    ...props,
    size: 'm',
};

export const Primary = Template.bind({});

Primary.args = {
    ...props,
    type: 'primary',
};

export const Secondary = Template.bind({});

Secondary.args = {
    ...props,
    type: 'secondary',
};