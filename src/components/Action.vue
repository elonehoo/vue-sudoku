<script setup lang="ts">
import Svg from './Svg.vue';

let props = defineProps<{ action: string }>()

const divClass:string = props.action === 'undo' ? "status__action-undo" : props.action === 'erase' ? "status__action-erase" : props.action === 'hint' ? "status__action-hint" : ""
const pAction:string = props.action === 'undo' ? 'Undo' : props.action === 'erase' ? 'Erase' : props.action === 'hint' ? 'Hint' : ''
</script>

<template>
  <div :class="[divClass]" @click="$emit('actionClick')" >
    <Svg :action="action" />
    <p class="status__action-text">{{pAction}}</p>
  </div>
</template>

<style>

</style>