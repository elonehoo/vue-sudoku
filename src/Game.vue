<script setup lang="ts">
import {ref,onUpdated} from 'vue'
import {getUniqueSudoku} from './sovler/UniqueSudoku'
import Footer from './components/layout/Footer.vue';
import Header from './components/layout/Header.vue';
import Difficulty from './components/Difficulty.vue';
import Timer from './components/Timer.vue';
import Action from './components/Action.vue';
import Mode from './components/Mode.vue';
import GameSection from './components/layout/GameSection.vue';

let difficulty = ref("Easy")

let numbers:number[] = [1,2,3,4,5,6,7,8,9]

let temporaryInitArray:string[]
let temporarySolvedArray:string[]


[temporaryInitArray,temporarySolvedArray] = getUniqueSudoku(difficulty.value , difficulty.value )

onUpdated(() => {
    newGame
})

function newGame(){ 
  [temporaryInitArray,temporarySolvedArray] = getUniqueSudoku(difficulty.value , difficulty.value )
}

function numberClick(number:number){
   console.log(number)
}

function undo(){ console.log("undo") }
function erase(){ console.log("erase") }
function hint(){ console.log("hint") }
function mistakes(){ console.log("mistakes") }
function fast(){ console.log("fast") }
</script>

<template>
  <div class="container">
    <Header @new-game="newGame()"></Header>
    <div className="innercontainer">
      <section class="game">
        <table class="game__board">
          <tbody>
            <tr v-for="row in numbers" :key="row" class="game__row">
              <td v-for="column in numbers" :key="column" class="game__cell game__cell--filled">
                {{temporaryInitArray[(column - 1) + (9 * (row - 1))] === "0" ? "" :temporaryInitArray[(column - 1) + (9 * (row - 1))] }}
              </td>
            </tr>
          </tbody>
        </table>
      </section>
      
      <section class="status">
        <Difficulty v-model="difficulty"></Difficulty>
        <Timer></Timer>

        <div class="status__numbers">
          <div v-for="(number,index) in numbers" :key="index" @click="numberClick(number)" class="status__number">
            {{number}}
          </div>
        </div>

        <div class="status__actions">
          <Action action='undo' @action-click="undo()" />
          <Action action='erase' @action-click="erase()" />
          <Action action='hint' @action-click="hint()"/>
          <Mode mode='mistakes' @mode-click="mistakes()" />
          <Mode mode='fast' @mode-click="fast()" />
        </div>
      </section>

    </div>
    <Footer name="Elone Hoo"></Footer>
  </div>
</template>
