<template>
  <div id="app">    
    <header>Minhas Tarefas
    </header>
    <task-component />
  </div>
</template>

<script>
import Vue from "vue";
export default Vue.extend ({
  name: 'App',   
})
</script>

<style scoped>
    header {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 80px;
        font-size: 3rem;
        font-weight: 700;    
        color: #fff;
    }
</style>
