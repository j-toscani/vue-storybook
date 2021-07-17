<template>
  <div>
    <label :class="{ required: $attrs.required }" :for="$attrs.id">{{ label }}</label>
    <input v-bind="$attrs" :value="value" @input="emitInput" />
  </div>
</template>

<script lang="ts">
export default {
  name: 'CustomInput',
  inheritAttrs: false,
  props: {
    value: {
      type: [String, Number, Boolean],
      required: true,
    },
    label: {
      type: String,
      default: () => '',
    },
  },
  emits: ['input'],
  setup(_props, { emit }) {
    function emitInput(): void {
      emit('input');
    }
    return {
      emitInput,
    };
  },
};
</script>

<style scoped>
input,
label {
  margin: 0;
  font-size: inherit;
  color: inherit;
  padding: var(--space, 0.25rem) calc(var(--space, 0.25rem) * 2);
}

label.required::after {
  content: var(--req-icon, '*');
}
</style>
