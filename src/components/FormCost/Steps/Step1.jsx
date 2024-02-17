import React from 'react'
import styles from './Steps.module.scss'
import StepIndicator from '../../UI/StepIndicator/StepIndicator'
import Input from '../../UI/Input/Input'
import Button from '../../UI/Button/Button'
import FileInput from '../../UI/FileInput/FileInput'
import Checkbox from '../../UI/Checkbox/Checkbox'
import { useDispatch, useSelector } from 'react-redux'
import { CHANGE_STEP, OPEN_CALCULATOR } from '../../../store/reducer'

const Step1 = ({...props}) => {

  const dispatch = useDispatch()
  const volume = useSelector( state => state.reducer.volume)

  return (
    <div className={styles.step1 + " " + props.className}>
      <div className={styles.step1__pagination}>
        <StepIndicator text="1" isActive={true} />
        <StepIndicator text="2" />
        <StepIndicator text="3" />
      </div>
      <form className={styles.step1__body}>
        <div className={styles.step1__inputs}>
          <Input
            placeholder="Категория товара"
            text="Категория товара:"
            type="text"
          />
          <Input
            type="number"
            placeholder="Введите стоимость"
            text="Стоимость груза (рубль):"
          />
          <Input
            placeholder="Введите вес"
            text="Вес груза (кг):"
          />
          <Input
            type="number"
            placeholder="Введите объем"
            text="Объем груза (м3):"
            rightText="Рассчитать"
            value={volume}
            onChange={(e) => dispatch({
              type: "CHANGE_VOLUME",
              value: e.target.value,
            })}
            onClickRT={() => dispatch({type: OPEN_CALCULATOR})}
          />
          <div className={styles.step1__checkboxes}>
           <Checkbox 
            name="insurance"
            text="Страховка"
           />
           <Checkbox 
            name="customs"
            text="Таможенное оформление"
           />
          </div>
          <Input
            placeholder="Введите код"
            text="Код ТН ВЭД:"
            type="text"
          />
        </div>
        <FileInput 
          className={styles.step1__fileInput}
          mainText="Загрузить фото товара"
          leftText="фото.jpeg"
          rightText="Удалить фото"
        />
        <Button 
          className={styles.step1__button}
          text="Следующий шаг" 
          onClick={() => dispatch({type: CHANGE_STEP, step: 2})}
        />
      </form>
    </div>
  )
}

export default Step1