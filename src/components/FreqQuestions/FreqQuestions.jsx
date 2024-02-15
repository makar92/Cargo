import React, { useState } from 'react'
import styles from "./FreqQuestions.module.scss"
import Title from '../UI/Title/Title'
import Input from '../UI/Input/Input'
import Button from '../UI/Button/Button'
import Textarea from '../UI/Textarea/Textarea'
import Question from './Question'
import Line from '../UI/Line/Line'
import FormQuestion from './FormQuestion'


const FreqQuestions = () => {

  const question = [
    0, 1, 2
  ] 

  const [activeIndex, setActiveIndex] = useState(-1);

  return (
    <div className={styles.freqQuestions}>
      <Title 
        className={styles.freqQuestions__title} 
        text="Часто задаваемые вопросы" 
      />
      <Line 
        className={styles.freqQuestions__line}
        color2
      />
      <div className={styles.freqQuestions__content}>
        <div
          className={styles.freqQuestions__questions}
        >
          {question.map((q) =>  (
            <Question
            key={q}
            idx={q}
            isActive={activeIndex === q}
            onArow={() => {
              activeIndex !== q
              ? setActiveIndex(q)
              : setActiveIndex(-1)
            } }
        />
          ))}
        </div>
        <FormQuestion 
          className={styles.freqQuestions__form}
        />
      </div>
    </div>
  )
}

export default FreqQuestions