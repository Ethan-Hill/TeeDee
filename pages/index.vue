<template>
  <div class="w-screen flex justify-center">
    <AuthContainer />
    <NuxtLink to="/todo">About page</NuxtLink>
  </div>
</template>

<script setup lang="ts">
definePageMeta({ auth: false });
</script>
