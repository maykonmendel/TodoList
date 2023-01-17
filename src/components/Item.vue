<template>
    <div id="item-task">
        <ul>
            <li v-for="task in lista" :key="task.key">
                <span>{{ task.text }}</span>
                <button @click="deleteItem(task.key)" title="Concluir">
                    <ph-check-square-offset size="16"/>     
                    Concluir               
                </button>
            </li>           
        </ul>
    </div>
</template>

<script>
import Vue from "vue";
export default Vue.component('item-task', {
    props: {
        lista: [],
        delete: String,
    },
    methods: {
        deleteItem(key) {
            this.delete(key);
        }
    },
})
</script>

<style scoped>
#item {
        white-space: pre-wrap;
        word-wrap: break-word;
    }

    ul {
        list-style: none;
        padding: 0;
        margin-top: 20px;
    }

    ul li {
        padding: 15px;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
    }

    li:not(:first-child) {
        border-top: 1px solid #27272a;
    }

    span {
        color: #f4f4f5;
    }

    button {
        cursor: pointer;
        background: #DFD8F7;
        color: #000;
        border: 0;
        padding: 8px 8px;
        outline: none;
        border-radius: 4px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>