<script setup lang="ts">
let props = defineProps<{ mode: string }>()
const divClass:string = props.mode === 'mistakes' ? "status__action-mistakes-mode" : "status__action-fast-mode"
const labelClass:string = props.mode === 'mistakes' ? "status__action-mistakes-mode-switch" : "status__action-fast-mode-switch"
const spanClass:string = props.mode === 'mistakes' ? "status__action-mistakes-mode-slider" : "status__action-fast-mode-slider"
const pMode:string = props.mode === 'mistakes' ? 'Mistakes Mode' : 'Fast Mode'
</script>

<template>
  <div :class="[divClass]">
      <label :class="[labelClass]">
        <input type="checkbox" />
        <span :class="[spanClass]" @click="$emit('modeClick')"></span>
      </label>
      <p className="status__action-text">{{pMode}}</p>
  </div>
</template>

<style>

</style>