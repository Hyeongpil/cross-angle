<template>
  <div class="text-survey-wrapper">
    <span class="text-survey-question">{{ surveyText.question }}</span>
    <input type="textarea" v-model="answer" @input="$emit('onAnswer', answer)" />
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, ref } from 'vue';

import { SurveyText } from '@/models/survey';

export default defineComponent({
  props: {
    surveyText: {
      required: true,
      type: Object as PropType<SurveyText>,
    },
  },
  setup() {
    const answer = ref('');
    return { answer };
  },
});
</script>

<style lang="scss" scoped>
.text-survey-wrapper {
  display: flex;
  flex-direction: column;
  align-self: center;
  .text-survey-question {
    margin-bottom: 10px;
  }
}
</style>
