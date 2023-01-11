<template>
    <div id="task-component">
        <form>
            <input type="text" placeholder="Tarefa de hoje?"/>
            <button type="submit">Adicionar</button>
        </form>
    </div>
</template>

<script>
import Vue from "vue";
export default Vue.component('task-component', {
    
})
</script>

<style scoped>
    #task-component {
        max-width: 700px;
        background: #202024;
        border-radius: 4px;
        padding: 20px;
        margin: 20px auto;
        box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
    }

    form {
        /* margin-top: 30px; */
        display: flex;
        flex-direction: row;
    }

    form button {
        cursor: pointer;
        background: #512bd4;
        border: 0;
        border-radius: 4px;
        margin-left: 10px;
        padding: 0 15px;
        display: flex;
        justify-content: center;
        align-items: center;
        color: #f4f4f5;
    }

    input {
        flex: 1;
        border: 2px solid #512bd4;
        border-radius: 4px;
        padding: 6px 10px;
        font-size: 14px;
        outline: none;
        background: #3f3f46;
    }

    
</style>