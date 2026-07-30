//imports
import axios from 'axios';
import './App.css'
import iconEdit from "./assets/iconEdit.svg"
import trashIcon from "./assets/oi.svg"
import { useEffect, useState } from 'react';


function App() {

  // states e variáveis
  const [taskList, setTaskList] = useState([]);

  //funções e effects
  //CRUD

  //Read (Get)
  const getTaks = async () => { 
    //chama a api
    try {
      const APIReturn = await axios.get("http://localhost:3000/taskpoin")
      const dataAPI = await APIReturn.data
      //e armazenar os dados no state (tasklist)
      setTaskList(dataAPI)
    } catch (error) {
      
    }
  }

  //Create (Post)
  const createTaks = () => { }

  //Update (Put/Patch)
  const putTask = () => []

  //Delete (Delete)
  const deleteTask = () => []

  useEffect(() => {
    getTaks()
  }, [])

  return (
    <>
      <header className='header-section'>
        <h1 className='header-section__title'>React List</h1>
      </header>

      <main className='body-section'>
        <form className="cad-task">
          <input
            type="text"
            className="cad-task__entry"
            placeholder='Adicione uma tarefa'
          />
          <button className='cad-task__btn-confirm'>Adicionar</button>

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
                      <img src={iconEdit} alt="Editar tarefa" />
                    </div>

                    <div className="cardlist__icon">
                      <img src={trashIcon} alt="Excluir tarefa" />
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
