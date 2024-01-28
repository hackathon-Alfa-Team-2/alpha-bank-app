import { useState } from 'react'
import './TextAreaPlan.css'

export default function TextAreaPlan() {
  const [title, setTitle] = useState('')
  const [task, setTask] = useState('')

  return (
    <div className='textAreaPlan'>
      <textarea
        name='textAreaPlan__title'
        id='textAreaPlan__title'
        className='textAreaPlan__title'
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder='Ввести название'
      />
      <textarea
        name='textAreaPlan__task'
        id='textAreaPlan__task'
        className='textAreaPlan__task'
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder='Ввести описание'
      />
    </div>
  )
}
