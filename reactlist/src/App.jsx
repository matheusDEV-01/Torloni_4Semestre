//imports
import './App.css'
import iconEdit from "./assets/iconEdit.svg"
import trashIcon from "./assets/oi.svg"
import { useState } from 'react';


function App() {

  // states e variáveis
  const [taskList, setTaskList] = useState([
    {
      id: 1,
      descricao: "Revisar HTML semântico",
    },
    {
      id: 2,
      descricao: "Fazer exercícios de useState",
    },
    {
      id: 3,
      descricao: "Aprender useEffect",
    },
    {
      id: 4,
      descricao: "Estudar React Native",
    },
  ]);

  //criar um state chamdo
  //tasklist como iniciando com um array de
  //objetos [{ xpto: abc, iii: uuu}]
  //já preenchido com 4 tarefas

  //em seguida fazer um map e gerar os cards
  //com todas as tarefas
  //funções e effects

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
