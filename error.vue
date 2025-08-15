<script
  setup
  lang="ts"
>
import type { NuxtError } from '#app'

const props = defineProps({
  error: Object as () => NuxtError
})

const handleError = () => clearError({ redirect: '/' })
</script>

<template>
  <div>
    <h1>Base Error Page</h1>
    <h2>{{ error?.statusCode }}</h2>
    <button @click="handleError">Go Home</button>
  </div>
</template>
