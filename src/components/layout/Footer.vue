<script setup lang="ts">
let footerDate:number = new Date().getFullYear();
defineProps<{ name: string }>()
</script>

<template>
  <footer className="footer">
    <p>&#169; {{footerDate}} {{name}} - source code on <a href="https://github.com/xiaoxunyao/vue-sudoku">Github</a></p>
  </footer>
</template>
