import './App.css'
import {GrFormNext, GrFormPrevious} from 'react-icons/gr'
import UserForm from './components/UserForm'
import ReviewForm from './components/ReviewForm'
import Thanks from './components/Thanks'
import {FiSend} from 'react-icons/fi'
import Steps from './components/Steps'

//hooks
import { useForm } from './hooks/useForm'

import { useState } from 'react'

const formTemplate = {
  name: "",
  email: "",
  review: "",
  comment: "",
}

function App() {

  const [data, setData] = useState(formTemplate);

  const updateFielHandle = (key, value) => {
    setData((prev) => {
      return {...prev, [key]: value}
    });
  };

  const formComponents = [
    <UserForm data={data} updateFielHandle={updateFielHandle}/>,
    <ReviewForm data={data} updateFielHandle={updateFielHandle} />, 
    <Thanks data={data} updateFielHandle={updateFielHandle} />
  ]


  const {currentStep, currenteComponents, changeStep, isLastStep, isFirstStep} = useForm(formComponents)
  
  return (
    <div className='app'>
      <div className="header">
        <h2>Deixe sua avaliação</h2>
        <p>
          Ficamos felizes com sua compra, utilize o formulário abaixo para avaliar o produto.
        </p>
      </div>´

      <div className="form-container">
        <Steps currentStep={currentStep}/>
        <form onSubmit={(e) => changeStep(currentStep + 1, e)}>
          <div className="inputs-container">{currenteComponents}</div>
          <div className="actions">
           {!isFirstStep && 
                <button type="button" onClick={() => changeStep(currentStep - 1)}>
                <GrFormPrevious/>
                <span>Voltar</span>
              </button>
            }
            
            {!isLastStep ? 
                <button type="submit">
                <span>Avançar</span>
                <GrFormNext/>
              </button> 
              :
                <button type="Button">
                <span>Enviar</span>
                <FiSend />
              </button>
           } 
          </div>
        </form>
      </div>
    </div>
  )
}

export default App
