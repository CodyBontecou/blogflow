<template>
  <button
    aria-label="New Post"
    class="
      flex
      items-center
      justify-center
      bg-blue-ninja
      text-white
      font-semibold
      rounded-md
      px-2
      py-2
      md:py-1
    "
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="fill-current text-white h-4 w-4"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M12 4v16m8-8H4"
      />
    </svg>
    <span class="hidden md:block md:ml-2">New Post</span>
  </button>
</template>

<script>
export default {}
</script>

<style></style>
