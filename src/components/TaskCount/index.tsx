import { Text, View } from "react-native";
import { styles } from "./taskCount.styles";

export function TaskCount ({ todo, done }: { todo: number, done: number  }) {
  return (
    <View style={styles.container}>
      <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
        <Text style={styles.todoText}>Criadas</Text>
        <View style={styles.count}>
          <Text style={styles.countText}> {todo} </Text>
        </View>
      </View>
      <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
        <Text style={styles.doneText}>Concluídas</Text>
        <View style={styles.count}>
          <Text style={styles.countText}> {done} </Text>
        </View>
      </View>
    </View>
  )
}