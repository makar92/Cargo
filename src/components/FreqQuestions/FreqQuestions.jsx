import React from 'react'
import styles from "./FreqQuestions.module.scss"
import Title from '../UI/Title/Title'
import Line from '../UI/Line/Line'
import { useDispatch, useSelector } from 'react-redux'
import Question from './Question/Question'
import FormQuestion from './FormQuestion/FormQuestion'


const FreqQuestions = () => {



  const dispatch = useDispatch()
  const activeQuestion = useSelector(state => state.reducer.activeQuestion)
  const questions = useSelector(state => state.questions.questions)

  return (
    <div className={styles.freqQuestions}>
      <Title
        className={styles.freqQuestions__title}
        text="Часто задаваемые вопросы"
      />
      <Line className={styles.freqQuestions__line} color2 />
      <div className={styles.freqQuestions__content}>
        <div className={styles.freqQuestions__questions}>
          {questions.map((q) => 
            <Question
              key={q.idx}
              isActive={activeQuestion === q}
              onArow={() => activeQuestion !== q
                ? dispatch({
                  type: "CHANGE_ACTIVE_QUESTION",
                  activeQuestion: q,
                })
                : dispatch({
                  type: "CHANGE_ACTIVE_QUESTION",
                  activeQuestion: -1,
                })
              }
              title={q.title}
              text={q.text}
            />
          )}
        </div>
        <FormQuestion className={styles.freqQuestions__form} />
      </div>
    </div>
  )
}

export default FreqQuestions