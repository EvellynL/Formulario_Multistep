import React from 'react'
import {
  BsFillEmojiHeartEyesFill,
  BsFillEmojiSmileFill,
  BsFillEmojiNeutralFill,
  BsFillEmojiFrownFill,
} from 'react-icons/bs'
import './Thanks.css'

const emojiData = {
  unsatisfied: <BsFillEmojiFrownFill />,
  neutral: <BsFillEmojiNeutralFill />,
  satisfied: <BsFillEmojiSmileFill />,
  very_satisfied: <BsFillEmojiFrownFill />
}

const Thanks = ({data}) => {
  return (
    <div className='thanks-container'>
        <h2>Falta pouco...</h2>
        <p>A sua opinião é muito importante, em breve receberá um cupom de 10% de desconto para sua próxima compra</p>

        <p>Para concluir sua avalição clique no botão de Enviar abaixo</p>

        <h3>Aqui está o resumo da sua avaliação {data.name}</h3>
        <p className="review-data">
          <span>Satisfação com o produto: </span>
          {emojiData[data.review]}
        </p>

        <p className="review-data">
          <span>Comentário: </span>
          {data.comment}
        </p>
    </div>
  )
}

export default Thanks