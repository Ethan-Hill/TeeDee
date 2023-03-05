<script setup lang="ts">
import { useToggle } from "@vueuse/core";

const { data: userData } = useSession();

let dropdowOpen = ref(false);
let dropdown = ref(null);

const toggleDropdown = useToggle(dropdowOpen);

onClickOutside(dropdown, () => {
  toggleDropdown();
});
</script>

<template>
  <div class="relative">
    <button
      class="flex items-center bg-zinc-600 hover:bg-zinc-800 rounded-md transition-colors p-2 px-4 relative"
      @click="toggleDropdown()"
      v-if="userData?.user"
    >
      <UserImage :image="userData?.user?.image" />
      <UserName :name="userData?.user?.name" />
    </button>
    <transition-expand appear>
      <UserDropdown v-if="dropdowOpen" ref="dropdown" />
    </transition-expand>
  </div>
</template>
