<template>
    <div id="task-component">
        <form @submit.prevent="addItem">            
            <input type="text" placeholder="Tarefa de hoje?" v-model="tarefa"/>
            <button type="submit" title="Adicionar">
                <ph-plus size="16"/>     
                Adicionar        
            </button>            
        </form>
        <item-task :lista="tarefas" :delete="deleteTask"/>
    </div>
</template>

<script>
import Vue from "vue";
export default Vue.component('task-component', {
    data() {
        return {
            tarefa: '',
            tarefas: [],
        }
    },
    methods: {
        addItem() {
            if (this.tarefa !== '') {
                this.tarefas.push({
                    text: this.tarefa,
                    key: Date.now(),
                });
            } else {
                alert("Digite uma tarefa...");
                return;
            }

            this.tarefa = '';            
        },

        deleteTask(key) {
            let filtro = this.tarefas.filter((item) => {
                return (item.key !== key);
            });

            return this.tarefas = filtro;
        },       
    },
    watch: {
        tarefas() {
            localStorage.setItem('tasks', JSON.stringify(this.tarefas));
        }
    },
    created() {
        const listTasks = localStorage.getItem('tasks');
        this.tarefas = JSON.parse(listTasks) || [];
    }

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
        padding: 8px 8px;
        display: flex;
        justify-content: center;
        align-items: center;
        color: #f4f4f5;
    }

    form button:hover {
        background: rgb(112, 20, 232);
        background: linear-gradient(90deg, rgba(112, 20, 232, 1) 9.4%, rgba(73, 49, 222, 1) 100%);
        transition: 0.5s;
    }

    input {
        flex: 1;
        border: 2px solid #202024;
        border-radius: 4px;
        padding: 8px 15px;
        font-size: 14px;
        outline: none;
        background: rgb(18, 18, 20);
        color: rgb(255, 255, 255);
        transition: border 0.2s ease 0s;
    }

    input:focus {
        border-color: #512bd4;
        transition: 0.5s;
    }
</style>