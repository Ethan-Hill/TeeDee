<template>
  <div class="flex justify-center items-center flex-grow">
    <AuthContainer />
  </div>
</template>

<script setup lang="ts">
definePageMeta({ auth: false });

useSeoMeta({
  title: "Home",
  description: "TeeDee login page",
});
</script>
