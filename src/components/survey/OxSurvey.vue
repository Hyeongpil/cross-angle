<template>
  <div class="ox-survey-wrapper">
    <span class="ox-survey-question">{{ surveyOx.question }}</span>
    <div v-for="{ value, label } in surveyOx.oxItems" :key="value">
      <input type="radio" :id="value" :value="value" v-model="answer" @change="$emit('onAnswer', answer)" />
      <label :for="value">{{ label }}</label>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, ref } from 'vue';

import { SurveyOx } from '@/models/survey';

export default defineComponent({
  props: {
    surveyOx: {
      required: true,
      type: Object as PropType<SurveyOx>,
    },
  },
  setup() {
    const answer = ref('');
    return { answer };
  },
});
</script>

<style lang="scss" scoped>
.ox-survey-wrapper {
  display: flex;
  flex-direction: column;
  align-self: center;

  .ox-survey-question {
    margin-bottom: 10px;
  }

  label {
    margin-left: 5px;
  }
}
</style>
