import { TextInput } from "react-native"
import { styles } from "./Input.styles"
import { useState } from "react"

export const Input = () => {
  const [filled, setFilled] = useState(false)
  const customStyle = !filled ? styles.input : { ...styles.input, ...styles.filledInput }

  return (
    <TextInput
      style={customStyle}
      onFocus={() => setFilled(true)} 
      placeholder="Adicione uma nova tarefa"
      placeholderTextColor={styles.placeholder.color}
    />
  )
}