<script setup lang="ts">
</script>

<template>
    <header className="header">
      <h1>
        Su<span className="header__group-one">do</span><span className="header__group-two">ku</span>
      </h1>
      <h2 @click="$emit('newGame')">
        New Game
      </h2>
    </header>  
</template>

<style>

</style>