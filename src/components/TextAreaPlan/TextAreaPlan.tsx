import './TextAreaPlan.css'

export default function TextAreaPlan() {
  return (
    <div className='textAreaPlan'>
      <textarea
        name='textAreaPlan__title'
        id='textAreaPlan__title'
        className='textAreaPlan__title'
      >
        Ввести название
      </textarea>
      <textarea
        name='textAreaPlan__task'
        id='textAreaPlan__task'
        className='textAreaPlan__task'
      >
        Ввести описание
      </textarea>
    </div>
  )
}
