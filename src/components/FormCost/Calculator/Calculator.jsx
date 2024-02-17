import React from 'react'
import styles from './Calculator.module.scss'
import Input from '../../UI/Input/Input'
import Button from '../../UI/Button/Button'
import Close from '../../UI/Close/Close'
import { useDispatch, useSelector } from 'react-redux'
import { CALC_VOLUME, CHANGE_CALC_VALUE_A, CHANGE_CALC_VALUE_B, CHANGE_CALC_VALUE_C, CLOSE_CALCULATOR } from '../../../store/reducer'

const Calculator = ({ ...props }) => {

  const dispatch = useDispatch()
  const calcIsActiv = useSelector( state => state.reducer.calcIsActiv )
  const calcValueA = useSelector( state => state.reducer.calcValueA )
  const calcValueB = useSelector( state => state.reducer.calcValueB )
  const calcValueC = useSelector( state => state.reducer.calcValueC )

  return (
    <div
      className={calcIsActiv
        ? styles.calculator + " " + styles.openCalculator + " " + props.className
        : styles.calculator + " " + props.className
      }
    >
      <div className={styles.calculator__container}>
        <Close
          className={styles.calculator__close}
          onClick={() => dispatch({ type: CLOSE_CALCULATOR })}
        />
        <div className={styles.calculator__title}>Рассчитать объем</div>
        <div className={styles.calculator__inputs}>
          <Input
            type="number"
            text="Длина (м):"
            onChange={(e) => dispatch({ 
              type: CHANGE_CALC_VALUE_A, 
              value: Number(e.target.value) 
            })}
            value={calcValueA}
          />
          <Input
            type="number"
            text="Ширина (м):"
            onChange={(e) => dispatch({ 
              type: CHANGE_CALC_VALUE_B, 
              value: Number(e.target.value) 
            })}
            value={calcValueB}
          />
          <Input
            type="number"
            text="Высота (м):"
            onChange={(e) => dispatch({ 
              type: CHANGE_CALC_VALUE_C, 
              value: Number(e.target.value)  
            })}
            value={calcValueC}
          />
        </div>
        <Button
          text="Рассчитать"
          onClick={() => dispatch({type: CALC_VOLUME})}
        />
      </div>
    </div>
  )
}

export default Calculator