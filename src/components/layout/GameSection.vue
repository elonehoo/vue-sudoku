<script setup lang="ts">
defineProps<{ temporaryInitArray:string[] }>()
let rows:number[] = [1,2,3,4,5,6,7,8,9]
</script>

<template>
  <section class="game">
    <table class="game__board">
      <tbody>
        <tr v-for="row in rows" :key="row" class="game__row">
          <td v-for="column in rows" :key="column" class="game__cell game__cell--filled">
            {{temporaryInitArray[(column - 1) + (9 * (row - 1))] === "0" ? "" :temporaryInitArray[(column - 1) + (9 * (row - 1))] }}
          </td>
        </tr>
      </tbody>
    </table>
  </section>
</template>

<style>

</style>