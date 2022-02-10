<script setup lang="ts">
defineProps(['modelValue'])
defineEmits(['update:modelValue'])
</script>

<template>
  <div class="status__difficulty">
    <span class="status__difficulty-text">Difficulty:&nbsp;&nbsp;</span>
    <select name="status__difficulty-select" class="status__difficulty-select" :value="modelValue"
            @input="$emit('update:modelValue', $event.target.value)">
      <option value="Easy">Easy</option>
      <option value="Medium">Medium</option>
      <option value="Hard">Hard</option>
    </select>
  </div>
</template>

<style>

</style>