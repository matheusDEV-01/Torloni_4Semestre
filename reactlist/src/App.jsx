//imports
import axios from 'axios';
import './App.css'
import iconEdit from "./assets/iconEdit.svg"
import trashIcon from "./assets/oi.svg"
import { useEffect, useState } from 'react';


function App() {

  // states e variáveis
  const [taskList, setTaskList] = useState([]);
  const [taskValue, setTaskValue] = useState("")
  const [editMode, setEditMode] = useState(false)
  const [idToEdit, setIdToEdit] = useState(0)

  //funções e effects
  //CRUD

  //Read (Get)
  const getTasks = async () => {
    //chama a api
    try {
      const APIReturn = await axios.get("http://localhost:3000/taskpoin")
      const dataAPI = APIReturn.data
      //e armazenar os dados no state (tasklist)
      setTaskList(dataAPI)
    } catch (error) {

    }
  }

  //Create (Post)
  const createTask = async (e) => {
    e.preventDefault();

    //validar o formulário
    //cadastrar | post os dados (try/catch)

    if (taskValue.trim().length === 0) {
      alert("Preencha o campo de tarefa")
      return false
    }

    try {
      const APIReturn = await axios.post("http://localhost:3000/taskpoin", { descricao: taskValue })
      const bodyAPI = await APIReturn.data
      setTaskValue("") //
      getTasks()
      alert("Tarefa cadastrada com sucesso!")

    } catch (error) {
      alert("Erro ao cadastrar a tarefa.");
    }

    // recarregar os dados na tela (getTask)

  }
  //visualizar (ver os dados no formulário)
  //Update (Put/Patch)
  const putTask = (taskItem) => {
    setTaskValue(taskItem.descricao)
    setEditMode(true)
    setIdToEdit(taskItem.id)

  }

  //confirmar o cadastro na API
  const confirmPutTask = async (e) => {
    e.preventDefault()
    //valitar o form
    if (taskValue.trim().length === 0) {
      alert("Preencha a tarefa corretamente")
      return false
    }


    try {
      axios.put(`http://localhost:3000/taskpoin/${idToEdit}`,
        { descricao: taskValue })
      alert("A tarefa foi editada")
      getTasks()
      setEditMode(false)
      setIdToEdit(0)
      setTaskValue("")
    } catch (erro) {
      alert("Erro ao editar a tarefa")
    }
  }


  //Delete (Delete)
  const deleteTask = async (taskItem) => {

    const querApagar = confirm(`Quer realmaente apagar a terefa'${taskItem.descricao}'`)

    if (!querApagar) return false

    try {
      const APIReturn = await axios.delete(`http://localhost:3000/taskpoin/${taskItem.id}`)
      getTasks()
      alert("Tarefa excluída com sucesso")

    } catch (error) {
      alert("Erro ao excluir a tarefa")
    }
  }

  //roda na montagem do componente - ciclo 
  useEffect(() => {
    getTasks()
  }, [])

  return (
    <>
      <header className='header-section'>
        <h1 className='header-section__title'>React List</h1>
      </header>

      <main className='body-section'>
        <form className="cad-task" onSubmit={editMode ? confirmPutTask : createTask}>
          <input
            type="text"
            value={taskValue}
            onChange={(e) => setTaskValue(e.target.value)}
            className="cad-task__entry"
            placeholder='Adicione uma tarefa'
          />
          <p>State: {taskValue}</p>
          <p>Id pra editar: {idToEdit}</p>
          <button className='cad-task__btn-confirm'>Adicionar</button>

          {editMode && (
            <button
              type="button"
              className='cad-task__btn-calcel'
              onClick={() => {
                setEditMode(false)
                setIdToEdit(0)
                setTaskValue("")
              }}
            >
              Cancelar
            </button>)}


        </form>

        <section className='cardlist'>
          {
            taskList.map((task) => {
              return (
                <article className="cardtask" key={task.id}>
                  <p className="cardtask__task-text">
                    {task.descricao}
                  </p>

                  <div className="cardtask__icon-box">
                    <div className="cardlist__icon">
                      <img src={iconEdit} alt="Editar tarefa"
                        onClick={() => {
                          putTask(task)
                        }}

                      />
                    </div>

                    <div className="cardlist__icon">
                      <img src={trashIcon} alt="Excluir tarefa"
                        onClick={() => deleteTask(task)
                        }

                      />
                    </div>
                  </div>
                </article>
              );
            })
          }





        </section>

      </main>

      <footer className='footer-section'>
        <p className='footer-section__right-text'>2026 React List - Todos os direitos reservados</p>
      </footer>
    </>

  )
}

export default App
