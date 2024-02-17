import React from 'react'
import styles from "./FormCost.module.scss"
import Title from '../UI/Title/Title'
import Calculator from './Calculator/Calculator'
import Step1 from './Steps/Step1'
import Step2 from './Steps/Step2'
import Step3 from './Steps/Step3'
import Line from '../UI/Line/Line'
import { useSelector } from 'react-redux'

const FormCost = (props) => {

  

  const step = useSelector( state => state.reducer.step)

  return (
    <div className={styles.formCost} id={props.id}>
      <div className={styles.formCost__content}>
        <Title
          className={styles.formCost__title}
          text="Получить рассчет стоимости доставки вашего груза"
        />
        <Line 
          className={styles.formCost__line}
          color2 
        />
        
        {step === 1
          ? <Step1 className={styles.formCost__step}/>
          : step === 2
            ? <Step2 className={styles.formCost__step}/>
            : <Step3 className={styles.formCost__step} />
        }
      </div>
      <Calculator className={styles.formCost__calculator}/>
      <div className={styles.formCost__image}>
        <img src="./image/formCost/medium-shot-man-holding-clipboard_1-removebg 1.png" alt="man" />
      </div>
    </div>
  )
}

export default FormCost