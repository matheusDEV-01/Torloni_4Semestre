
import {TaskListStyle} from "./TaskListStyle"
import { ScrollView, text } from "react-native-web"
import { TaskItem } from "../taskitem/TaskItem"
import { useEffect, useState } from "react"
import axios from "axios"

export const TaskList = () => {
    const [listaTarefas, setListaTarefas] = useState([
       
    ])



    const getTasks = async () => {
       try {
        const APIReturn = await axios.get("http://172.16.36.22:3000/taskpoint")
        const APIData = await APIReturn.data

        setListaTarefas(APIData)
       } catch (error) {
        console.log("Deu ruim na chamada da api");
        console.log(error);
       }
    }
    

    const cadTasks = async () => {
        console.log("FUNÇÃO POST EM DESENVOLVIMENTO")
    }

    
    const putTask = () => {
        console.log("FUNÇÃO PUT EM DESENVOLVIMENTO")
    }

    const deleteTask = () => {
        console.log("FUNÇÃO DELETE EM DESENVOLVIMENTO")
    }

    useEffect(()=>{
        getTasks()
    })

    return (
        <ScrollView style={TaskListStyle.taskListContainer}>
            {
                listaTarefas.map((tarefa)=>{
                    return(
                      <TaskItem dados={tarefa}/>  
                    )
                })
            }
        
        </ScrollView>
    )
}