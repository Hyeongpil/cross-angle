<template>
  <div class="welcome-wrapper">
    <span class="welcome-message">{{ message }}</span>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';

import { fetchWelcomeApi } from '@/apis/repositories/controllers/commonRepository';
import { commonRouteNames } from '@/router';

export default defineComponent({
  setup() {
    const router = useRouter();
    const message = ref('');
    onMounted(() => {
      fetchData();

      routeToHome();
    });

    async function fetchData() {
      const welcome = await fetchWelcomeApi();
      message.value = welcome.message;
    }

    function routeToHome() {
      setTimeout(() => {
        router.push({ name: commonRouteNames.homePage });
      }, 5000);
    }

    return { message };
  },
});
</script>

<style lang="scss" scoped>
.welcome-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100vh;
  .welcome-message {
    align-self: center;
  }
}
</style>
