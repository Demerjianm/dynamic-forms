import { useState } from 'react'

export const useInputValue = initialValue => {
  let [value, setValue] = useState(initialValue)

  const onChange = event => {
    setValue(event.currentTarget.value)
  }
  return { value, onChange }
}
