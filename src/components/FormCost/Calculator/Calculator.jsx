import React, { useState } from 'react'
import styles from './Calculator.module.scss'
import Input from '../../UI/Input/Input'
import Button from '../../UI/Button/Button'
import Close from '../../UI/Close/Close'

const Calculator = ({ isActive, onClose, ...props }) => {

  const [inputA, setInputA] = useState(0)
  const [inputB, setInputB] = useState(0)
  const [inputC, setInputC] = useState(0)

  const showResult = () => {
    const result = inputA * inputB * inputC
    props.finedVolume(result);
  }

  return (
    <div
      className={isActive
        ? styles.calculator + " " + styles.openCalculator + " " + props.className
        : styles.calculator + " " + props.className
      }
    >
      <div className={styles.calculator__container}>
        <Close
          className={styles.calculator__close}
          onClick={onClose}
        />
        <div className={styles.calculator__title}>Рассчитать объем</div>
        <div className={styles.calculator__inputs}>
          <Input
            type="number"
            text="Длина (м):"
            onChange={(e) => setInputA(e.target.value)}
          />
          <Input
            type="number"
            text="Ширина (м):"
            onChange={(e) => setInputB(e.target.value)}
          />
          <Input
            type="number"
            text="Высота (м):"
            onChange={(e) => setInputC(e.target.value)}
          />
        </div>
        <Button
          text="Рассчитать"
          onClick={showResult}
        />
      </div>
    </div>
  )
}

export default Calculator