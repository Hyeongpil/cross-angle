<template>
  <button class="x-button">{{ message }}</button>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    message: {
      type: String,
      required: true,
    },
  },
  setup() {
    return {};
  },
});
</script>

<style lang="scss" scoped>
.x-button {
  height: 50px;
  width: 200px;
  background-color: #3f3ccf;
  color: #fff;
  font-size: 14px;
  padding: 8px 16px;
  font-weight: bold;
  border-radius: 2px;
  border-style: none;
  cursor: pointer;
}
</style>
