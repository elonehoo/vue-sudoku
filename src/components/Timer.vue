<script setup lang="ts">
import { ref } from "@vue/reactivity";

let props = defineProps<{ status: boolean }>()

let second = ref<number>(0)
let minute = ref<number>(0)
let house = ref<number>(0)
let timer = ref<string>()
let isStart = ref<boolean>(props.status)

if(isStart.value === true){
    second.value = 0
    minute.value = 0
    house.value = 0
    timer.value = "00:00:00"
}

    second.value = setInterval(() => {
      second.value += 1;
      if(second.value === 60){
        second.value = 0
        minute.value += 1
        if(minute.value === 60){
          minute.value = 0
          house.value += 1
        }
      }
      var a:string = second.value < 10 ?  "0" + second.value : second.value.toString()
      var b:string = minute.value < 10 ?  "0" + minute.value : minute.value.toString()
      var c:string = house.value < 10 ?  "0" + house.value : house.value.toString()
      timer.value = c + ":" + b + ":" + a
    }, 1000);

</script>

<template>
  <div className="status__time">
    {{timer}}
  </div>
</template>

<style>

</style>