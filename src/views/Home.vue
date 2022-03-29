<template>
  <div class="home-wrapper">
    <span class="home-message">{{ message }}</span>
    <xa-button class="home-btn" :message="'이동하기'" @click="handleBtnClicked" />
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';

import { fetchGreetingApi } from '@/apis/repositories/controllers/commonRepository';
import XaButton from '@/components/buttons/XaButton.vue';
import { surveyRouteNames } from '@/router/modules';

export default defineComponent({
  name: 'Home',
  components: {
    XaButton,
  },
  setup() {
    const router = useRouter();
    const message = ref('');
    onMounted(() => {
      fetchData();
    });

    async function fetchData() {
      const greeting = await fetchGreetingApi();
      message.value = greeting.message;
    }

    function handleBtnClicked() {
      router.push({ name: surveyRouteNames.surveyPage });
    }
    return {
      message,
      handleBtnClicked,
    };
  },
});
</script>
<style lang="scss" scoped>
.home-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100vh;

  .home-message {
    align-self: center;
    margin-bottom: 50px;
    font-weight: bold;
  }

  .home-btn {
    align-self: center;
  }
}
</style>
