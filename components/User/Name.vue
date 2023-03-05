<script setup lang="ts">
const { name } = defineProps<{ name: string | null | undefined }>();
</script>

<template>
  <p>{{ name }}</p>
</template>
