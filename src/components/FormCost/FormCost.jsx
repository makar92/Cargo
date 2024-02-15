import React, { useState } from 'react'
import styles from "./FormCost.module.scss"
import Title from '../UI/Title/Title'
import Calculator from './Calculator/Calculator'
import Step1 from './Steps/Step1'
import Step2 from './Steps/Step2'
import Step3 from './Steps/Step3'
import Line from '../UI/Line/Line'

const FormCost = () => {

  const [valueVolume, setValueVolume] = useState(0)
  const [calckIsActiv, setCalcIsActiv] = useState(false)
  const [step, setStep] = useState(1)

  const finedVolume = (volume) => {
    setValueVolume(volume)
    console.log(volume);
  }

  const openCalculator = () => {
    setCalcIsActiv(true)
  }

  const changeVolume = (input) => {
    setValueVolume(input)
  }

  const changeStep = (namberStep) => {
    switch (namberStep) {
      case 1: setStep(1); break;
      case 2: setStep(2); break;
      case 3: setStep(3); break;
      default: setStep(1);
    }
  }

  return (
    <div className={styles.formCost}>
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
          ? <Step1
              className={styles.formCost__step}
              volumeFromCalc={finedVolume}
              openCalculator={openCalculator}
              volume={valueVolume}
              changeVolume={changeVolume}
              changeStep={changeStep}
            />
          : step === 2
            ? <Step2 
                className={styles.formCost__step}
                changeStep={changeStep}
              />
            : <Step3 
                className={styles.formCost__step}
              />
        }
      </div>
      <Calculator
        className={styles.formCost__calculator}
        finedVolume={finedVolume}
        isActive={calckIsActiv}
        onClose={() => setCalcIsActiv(false)}
      />
      <div className={styles.formCost__image}>
        <img src="./image/formCost/medium-shot-man-holding-clipboard_1-removebg 1.png" alt="man" />
      </div>
    </div>
  )
}

export default FormCost