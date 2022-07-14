<script setup lang="ts">
import { ref } from 'vue'

const boards = ref([
  {
    id: 1,
    name: 'Board 1'
  },
  {
    id: 2,
    name: 'Board 2'
  },
  {
    id: 3,
    name: 'Board 3'
  }
])
</script>
<template>
  <div class="container">
    <div>Boards View</div>
    <div>{{ boards }}</div>
  </div>
</template>
