import React, { useState } from 'react'
export const AddFieldForm = () => {
  const [question, setValue] = useState('')
  const [formObject, setObject] = useState({})
  const [values, setValues] = useState({})
  const onChange = event => {
    setValue(event.currentTarget.value)
  }

  const onChangeForm = e => {
    setValues({ ...values, [e.currentTarget.name]: e.currentTarget.value })
  }
  const [list, addToList] = useState([])

  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault()
          addToList([...list, question])
          formObject[`field${list.length}`] = ''
          setValues({ ...values })
          setObject(formObject)
          setValue('')
        }}
      >
        What is the question
        <input onChange={onChange} value={question} />
        <button type="submit">Add</button>
      </form>
      <h4>These are the question so far: </h4>
      <ol>
        {list.map(val => (
          <li>{val}</li>
        ))}
      </ol>
      <div>
        {Object.entries(formObject).map((key, i) => (
          <div>
            {list[i]}
            <input
              onChange={onChangeForm}
              name={key[0]}
              // id={key[0]}
              value={values[key[0]]}
            />
          </div>
        ))}
        {list.length > 0 && (
          <button
            onClick={() =>
              alert(
                Object.entries(formObject).map(
                  (key, i) => `${list[i]} : ${values[key[0]]}`
                )
              )
            }
          >
            Show Results
          </button>
        )}
      </div>
    </div>
  )
}
