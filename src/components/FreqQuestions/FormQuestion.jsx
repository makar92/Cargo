import React from 'react'
import styles from './FreqQuestions.module.scss'
import Input from '../UI/Input/Input'
import Button from '../UI/Button/Button'
import Textarea from '../UI/Textarea/Textarea'

const FormQuestion = (props) => {
  return (
    <div className={
      styles.formQuestions + " " +
      props.className
    }>
      <div className={styles.formQuestions__title}>
        Остались вопросы?
      </div>
      <div className={styles.formQuestions__text}>
        Оставьте заявку и наш менеджер ответит вам в ближайшее время
      </div>
      <div className={styles.formQuestions__imputs}>
        <Input placeholder="Имя *" />
        <Input placeholder="Телефон *" />
        <Input placeholder="E-mail" />
        <Textarea placeholder="Ваш вопрос" />
      </div>
      <div className={styles.formQuestions__button}>
        <Button text="Отправить запрос" />
      </div>
    </div>
  )
}

export default FormQuestion