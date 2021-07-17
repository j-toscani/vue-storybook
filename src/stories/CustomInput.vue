<template>
  <div>
    <label for="">{{ label }}</label>
    <input v-model="input" v-bind="$attrs" />
  </div>
</template>

<script lang="ts">
import { ref } from 'vue';

export default {
  name: 'CustomInput',
  inheritAttrs: false,
  props: {
    label: {
      type: String,
      default: () => '',
    },
  },
  setup() {
    const input = ref('');
    return {
      input,
    };
  },
};
</script>
