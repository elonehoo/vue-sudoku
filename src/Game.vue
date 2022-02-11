<script setup lang="ts">
import {ref,onUpdated} from 'vue'
import {getUniqueSudoku} from './sovler/UniqueSudoku'
import {SudokuContent,SudokuArray,ArraySudoku} from './context/SudokuContext'
import Footer from './components/layout/Footer.vue';
import Header from './components/layout/Header.vue';
import Difficulty from './components/Difficulty.vue';
import Timer from './components/Timer.vue';
import Action from './components/Action.vue';
import Mode from './components/Mode.vue';
import GameSection from './components/layout/GameSection.vue';

let difficulty = ref("Easy")
let zero = ref("0")
let clickIndex = ref<number>(82)
let isSolved = ref(false)
let isTimer = ref<boolean>(false)

let numbers:number[] = [1,2,3,4,5,6,7,8,9]

const temporaryInitArray = ref<string[]>([]);
const temporarySolvedArray = ref<string[]>([]);
[temporaryInitArray.value, temporarySolvedArray.value] = getUniqueSudoku(difficulty.value, difficulty.value)

const InitArray = ref<SudokuContent[]>(SudokuArray(temporaryInitArray.value))

function newGame() { 
  [temporaryInitArray.value, temporarySolvedArray.value] = getUniqueSudoku(difficulty.value, difficulty.value)
  InitArray.value = SudokuArray(temporaryInitArray.value)
  clickIndex.value = 82
  isTimer = ref(true)
}

onUpdated(()=>{
  const slovedArray:string[] = ArraySudoku(InitArray.value)

  var flag:boolean = true;
  for(var i = 0 ; i < temporarySolvedArray.value.length ; i++){
    if(temporarySolvedArray.value[i] !== slovedArray[i]){
      flag = false;
    }
  }
  if(flag === true){
    isSolved.value = true
  }
})

function numberClick(number:number){
   if(InitArray.value[clickIndex.value].isLocked === true){
    InitArray.value[clickIndex.value].content = number.toString()
  }
}

function erase(){ 
  if(InitArray.value[clickIndex.value].isLocked === true){
    InitArray.value[clickIndex.value].content = ''
  }
}

function hint(){ 
  if(InitArray.value[clickIndex.value].isLocked === true){
    InitArray.value[clickIndex.value].content = temporarySolvedArray.value[clickIndex.value]
  }
}

function gameClick(index:number){
  clickIndex.value = index
}

function onClickOverlay(){
  isSolved.value=false
  newGame()
}
</script>

<template>
  <div class="container">
    <Header @new-game="newGame()"></Header>
    <div class="innercontainer">

      <section class="game">
        <table class="game__board">
          <tbody>
            <tr v-for="row in numbers" :key="row" class="game__row">
              <template v-for="column in numbers" :key="(column - 1) + (9 * (row - 1))" >
              <td 
              class="game__cell" 
              v-if="InitArray[(column - 1) + (9 * (row - 1))].isLocked !== true"
              :class="[InitArray[(column - 1) + (9 * (row - 1))].content === zero && InitArray[(column - 1) + (9 * (row - 1))].isLocked === false ? '':'game__cell--filled'
                       ,clickIndex === (column - 1) + (9 * (row - 1)) ? 'game__cell--highlightselected' : '']"
              @click="gameClick((column - 1) + (9 * (row - 1)))"
              >
                {{ InitArray[(column - 1) + (9 * (row - 1))].content }}
              </td>
              <td 
              class="game__cell" 
              v-else
              :class="[InitArray[(column - 1) + (9 * (row - 1))].content !== zero && InitArray[(column - 1) + (9 * (row - 1))].isLocked === true ? 'game__cell--userfilled':''
                       ,clickIndex === (column - 1) + (9 * (row - 1)) ? 'game__cell--highlightselected' : '']"
              @click="gameClick((column - 1) + (9 * (row - 1)))"
              >
                {{InitArray[(column - 1) + (9 * (row - 1))].content }}
              </td>
              </template>
            </tr>
          </tbody>
        </table>
      </section>
      
      <section class="status">
        <Difficulty v-model="difficulty"></Difficulty>
        <Timer :status="isTimer"></Timer>

        <div class="status__numbers">
          <div v-for="(number,index) in numbers" :key="index" @click="numberClick(number)" class="status__number">
            {{number}}
          </div>
        </div>

        <div class="status__actions">
          <!-- <Action action='undo' @action-click="undo()" /> -->
          <Action action='erase' @action-click="erase()" />
          <Action action='hint' @action-click="hint()"/>
          <!-- <Mode mode='mistakes' @mode-click="mistakes()" /> -->
          <!-- <Mode mode='fast' @mode-click="fast()" /> -->
        </div>
      </section>

    </div>
    <Footer name="Elone Hoo"></Footer>

    <div @click="onClickOverlay()" :class="[isSolved ? 'overlay overlay--visible':'overlay']">
        <h2 class="overlay__text">
          You <span class="overlay__textspan1">solved</span> <span className="overlay__textspan2">it!</span>
        </h2>
    </div>
  </div>
</template>
