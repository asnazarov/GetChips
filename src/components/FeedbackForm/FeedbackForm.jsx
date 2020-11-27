import React from 'react';
import './feedbackForm.scss';

const FeedbackForm = ({titleText, feedbackAbout}) => {

  const send = (e) => {
    e.preventDefault()
  }

  return (
    <section className="feedback">
      <h2 className="feedback__title"
          style={feedbackAbout && {
            margin: '0'
          }}>
        {titleText}
      </h2>
      <form className="feedback__form">
        <div className="feedback__form-item">
          <input className="feedback__input" type="text" placeholder="Ваше имя"/>
          <input className="feedback__input" type="text" placeholder="E-mail"/>
        </div>
        <textarea className="feedback__textarea" name="" id="" cols="10" rows="3" placeholder="Сообщение"/>
        <button className="feedback__send" onClick={e => send(e)} type="submit">Отправить</button>
      </form>
    </section>

  )
}

export default FeedbackForm;