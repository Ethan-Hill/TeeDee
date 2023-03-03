<script setup lang="ts">
const { signIn, signOut, status } = useSession();

const userSignIn = async () => {
  await signIn("github", { callbackUrl: "/todo" });
};

const userSignOut = async () => {
  await signOut();
};
</script>

<template>
  <div
    class="sm:rounded-xl p-6 hover:ring-0 shadow-none bg-zinc-900 h-full lg:w-1/4 sm:w-3/4 w-11/12 relative"
  >
    <h2 class="mb-10 font-black text-xl text-center">Login with Github</h2>

    <button
      @click="userSignIn"
      v-if="status == 'unauthenticated'"
      class="text-white bg-zinc-600 hover:bg-zinc-800 rounded-lg px-5 py-2.5 text-center inline-flex dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30 text-xl font-semibold w-full justify-center items-center transition-colors"
    >
      <Icon class="mr-2" name="carbon:logo-github" />
      Login
    </button>
    <button @click="userSignOut" v-else>Logout</button>
  </div>
</template>
