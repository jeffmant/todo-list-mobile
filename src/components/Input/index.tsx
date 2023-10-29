import { TextInput } from "react-native"
import { styles } from "./Input.styles"
import { useState } from "react"

export const Input = ({ value, placeholder, onChange }: { value: string, placeholder: string, onChange: (value: string) => void }) => {
  const [filled, setFilled] = useState(false)
  const customStyle = !filled ? styles.input : { ...styles.input, ...styles.filledInput }

  return (
    <TextInput
      onChangeText={onChange}
      value={value}
      style={customStyle}
      onFocus={() => setFilled(true)} 
      placeholder={placeholder}
      placeholderTextColor={styles.placeholder.color}
    />
  )
}