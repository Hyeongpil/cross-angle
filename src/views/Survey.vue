<template>
  <div class="survey-wrapper">
    <ox-survey v-if="surveyItem?.type === SurveyType.OX" :survey-ox="surveyItem.surveyItem" @onAnswer="handleAnswer" />
    <text-survey
      v-else-if="surveyItem?.type === SurveyType.TEXT"
      :survey-text="surveyItem.surveyItem"
      @onAnswer="handleAnswer"
    />

    <xa-button class="survey-submit-btn" :message="'제출'" @click="handleSubmitClicked" />
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, Ref, ref } from 'vue';
import { useRouter } from 'vue-router';

import { fetchSurveyItemApi } from '@/apis/repositories/controllers/surveyRepository';
import XaButton from '@/components/buttons/XaButton.vue';
import OxSurvey from '@/components/survey/OxSurvey.vue';
import TextSurvey from '@/components/survey/TextSurvey.vue';
import { surveyItem, SurveyType } from '@/models/survey';
import { commonRouteNames } from '@/router';

export default defineComponent({
  components: { OxSurvey, TextSurvey, XaButton },
  setup() {
    const surveyItem: Ref<surveyItem | null> = ref(null);
    const answer = ref('');
    const router = useRouter();

    onMounted(() => {
      fetchData();
    });

    async function fetchData() {
      surveyItem.value = await fetchSurveyItemApi();
    }

    function handleAnswer(val: string) {
      answer.value = val;
    }

    function handleSubmitClicked() {
      if (!answer.value) {
        console.log('답을 입력해 주세요');
        return;
      }
      console.log('답변은 :', answer.value);
      router.push({ name: commonRouteNames.welcomePage });
    }

    return { surveyItem, SurveyType, answer, handleAnswer, handleSubmitClicked };
  },
});
</script>

<style lang="scss" scoped>
.survey-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100vh;
  .survey-submit-btn {
    align-self: center;
    margin-top: 50px;
  }
}
</style>
