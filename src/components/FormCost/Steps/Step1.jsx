import React from 'react'
import styles from './Steps.module.scss'
import StepIndicator from '../../UI/StepIndicator/StepIndicator'
import Input from '../../UI/Input/Input'
import Button from '../../UI/Button/Button'
import FileInput from '../../UI/FileInput/FileInput'
import Checkbox from '../../UI/Checkbox/Checkbox'

const Step1 = ({volume, ...props}) => {

  return (
    <div className={styles.step1 + " " + props.className}>
      <div className={styles.step1__pagination}>
        <StepIndicator text="1" isActive={true} />
        <StepIndicator text="2" />
        <StepIndicator text="3" />
      </div>
      <div className={styles.step1__body}>
        <div className={styles.step1__inputs}>
          <Input
            placeholder="Категория товара"
            text="Категория товара"
          />
          <Input
            placeholder="Введите стоимость"
            text="Стоимость груза"
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
            onChange={(e) => props.changeVolume(e.target.value)}
            onClickRT={() => props.openCalculator()}
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
          onClick={() => props.changeStep(2)}/>
      </div>
    </div>
  )
}

export default Step1