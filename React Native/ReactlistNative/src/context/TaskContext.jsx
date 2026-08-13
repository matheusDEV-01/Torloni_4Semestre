import axios from "axios";
import { createContext, useState } from "react";




export const TaskContext = createContext()

export const TaskProvaider = ({ children }) => {

    const [listagemTarefas, setListagemTarefas] = useState([])
    const [taskValue, setTaskValue] = useState("")
    const [editMode, setEditMode]  = useState (false)

    const getTasks = async () => {
        try {
            const APIReturn = await axios.get("http://172.16.36.22:3000/taskpoint")
            const APIData = await APIReturn.data

            setListagemTarefas(APIData)

        } catch (error) {
            console.log("Deu ruim na chamada da api");
            console.log(error);
        }
    }

    const postTask = async (taskValue) => {
        try {
            await axios.post("http://172.16.36.22:3000/taskpoint", { descricao: taskValue })
            const APIData = await APIReturn.data

            setListagemTarefas(APIData)
            getTasks() //lista as tarefas novamente
        } catch (error) {
            console.log("Deu ruim na chamada da api");
            console.log(error);
        }

    }

    //visualiza os dados no formulário
    const putTaskPreview = (tarefa) => {
        setTaskValue(tarefa.descricao)
        setEditMode(true)
    }


    const putTask = () => {
        console.log("FUNÇÃO PUT EM DESENVOLVIMENTO")
    }

    const deleteTask = async (id) => {

        try {
            const APIReturn = await axios.delete(`http://172.16.36.22:3000/taskpoint/${id}`)
            const APIData = await APIReturn.data

            await getTasks()


        } catch (error) {

        }
    }


    return (
        <TaskContext.Provider value={{ listagemTarefas, setListagemTarefas, getTasks, postTask, putTask, deleteTask, taskValue, setTaskValue, putTaskPreview }}>
            {children}
        </TaskContext.Provider>
    )
}