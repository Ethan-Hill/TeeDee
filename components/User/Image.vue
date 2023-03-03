<script setup lang="ts">
const { image } = defineProps<{ image: string | null | undefined }>();
</script>

<template>
  <img v-if="image" :src="image" class="w-6 h-6 rounded-xl mr-2" />
</template>
