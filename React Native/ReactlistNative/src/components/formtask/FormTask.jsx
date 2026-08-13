import { View, Text, TextInput, TouchableOpacity, Alert } from "react-native"
import { FormTaskStyles } from "./FormTaskStyles"
import { useContext, useState } from "react"
import { TaskContext } from "../../context/TaskContext"

export const FormTask = () => {

    const {postTask, getTasks, taskValue, setTaskValue} = useContext (TaskContext)

    //salvar/cadastrar/adicionar a tarefa
    const saveTask = () => {
        console.log(`Texto Digitado ${taskValue}`)

        postTask(taskValue)
        
        Alert.alert("Adicionar Tarefa", "Tarefa Adicionada!")
    }
    return (
        <View style={FormTaskStyles.FormTaskBox}>
            <TextInput style={FormTaskStyles.taskInputName}
            placeholder="Adicione uma tarefa"
            value={taskValue}
            onChangeText={(textoDigitado)=>{
                setTaskValue(textoDigitado)
            }}/>
            <TouchableOpacity style={FormTaskStyles.taskButton}
            onPress={()=>{saveTask()}}>
                <Text style={FormTaskStyles.taskButtonText}>Adicionar</Text>
            </TouchableOpacity>
        </View>
    )
}