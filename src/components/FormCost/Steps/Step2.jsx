import React from 'react'
import styles from './Steps.module.scss'
import Input from '../../UI/Input/Input'
import Button from '../../UI/Button/Button'
import StepIndicator from '../../UI/StepIndicator/StepIndicator'
import Textarea from '../../UI/Textarea/Textarea'
import { useDispatch } from 'react-redux'
import { CHANGE_STEP } from '../../../store/reducer'

const Step2 = (props) => {

  const dispatch = useDispatch()
  
  return (
    <div className={styles.step2 + " " + props.className}>
      <div className={styles.step2__pagination}>
        <StepIndicator text="1" isActive={true} />
        <StepIndicator text="2" isActive={true} />
        <StepIndicator text="3" />
      </div>
      <form className={styles.step2__body}>
        <Input
          className={styles.step2__inName}
          type="text"
          placeholder="Введите имя"
          text="Имя:"
        />
        <Input
          className={styles.step2__inPhone}
          type="tel"
          placeholder="+7(___)___-__-__"
          text="Номер телефона:"
        />
        <Input
          className={styles.step2__inMail}
          type="email"
          placeholder="Введите e-mail"
          text="Email:"
        />
        <Textarea
          className={styles.step2__inComment}
          placeholder="Подробности о товаре, описание, колличество"
          leftText="Комментарий:"
        />
        <div className={styles.step2__button + " " + styles.step2__button_nBack}>
          <Button
            text="Назад"
            onClick={() => dispatch({type: CHANGE_STEP, step: 1})}
            transparent
          />
        </div>
        <div className={styles.step2__button + " " + styles.step2__button_inNext}>
          <Button
            text="Следующий шаг"
            onClick={() => dispatch({type: CHANGE_STEP, step: 3})}
          />
        </div>
      </form>
    </div>
  )
}

export default Step2