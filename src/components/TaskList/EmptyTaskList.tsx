import { Image, Text, View } from "react-native";
import { styles } from "./taskList.styles";

export function EmptyTaskList() {
  return (
    <View style={styles.listEmpty}>
      <Image style={styles.listEmptyIcon} source={require('../../../assets/icons/clipboard.png')} />
      <Text style={styles.listEmptyTitle}>
        Você ainda não tem tarefas cadastradas
      </Text>
      <Text style={styles.listEmptyText}>
        Crie tarefas e organize seus itens a fazer
      </Text>
    </View>
  )
}