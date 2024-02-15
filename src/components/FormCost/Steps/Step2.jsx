import React from 'react'
import styles from './Steps.module.scss'
import Input from '../../UI/Input/Input'
import Button from '../../UI/Button/Button'
import StepIndicator from '../../UI/StepIndicator/StepIndicator'
import Textarea from '../../UI/Textarea/Textarea'

const Step2 = (props) => {


  
  return (
    <div className={styles.step2 + " " + props.className}>
      <div className={styles.step2__pagination}>
        <StepIndicator text="1" isActive={true} />
        <StepIndicator text="2" isActive={true} />
        <StepIndicator text="3" />
      </div>
      <div className={styles.step2__body}>
        <Input
          className={styles.step2__inName}
          placeholder="Введите иммя"
          text="Имя:"
        />
        <Input
          className={styles.step2__inPhone}
          placeholder="+7(___)___-__-__"
          text="Номер телефона:"
        />
        <Input
          className={styles.step2__inMail}
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
            onClick={() => props.changeStep(1)}
            transparent
          />
        </div>
        <div className={styles.step2__button + " " + styles.step2__button_inNext}>
          <Button
            text="Следующий шаг"
            onClick={() => props.changeStep(3)}
          />
        </div>
      </div>
    </div>
  )
}

export default Step2