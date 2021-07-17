import MyInput from './CustomInput.vue';

export default {
  title: 'Example/Inputs',
  component: MyInput,
  argTypes: {
    label: { control: 'text' },
    type: {
      control: {
        type: 'select',
        options: ['text', 'checkbox', 'radio', 'number', 'tel', 'email', 'password', 'date', 'color', 'time', 'url'],
      },
    },
    // onClick: {},
  },
};

const Template = (args) => ({
  components: { MyInput },
  // And then the `args` are bound to your component with `v-bind="args"`
  setup() {
    return { args };
  },
  template: '<my-input v-bind="args" />',
});

export const Primary = Template.bind({});
Primary.args = {
  type: 'text',
  label: 'A Label',
};

// export const Secondary = Template.bind({});
// Secondary.args = {
//   label: 'Button',
// };

// export const Large = Template.bind({});
// Large.args = {
//   size: 'large',
//   label: 'Button',
// };

// export const Small = Template.bind({});
// Small.args = {
//   size: 'small',
//   label: 'Button',
// };
