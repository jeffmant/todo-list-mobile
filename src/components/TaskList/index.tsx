import { FlatList, Image, Text, View } from "react-native"
import { Task } from "../Task"
import { styles } from "./taskList.styles"
import { EmptyTaskList } from "./EmptyTaskList"

export const TaskList = ({ tasks }: { tasks: { id: number, title: string, isChecked: boolean }[] }) => {
  return (
    <FlatList
      data={tasks}
      renderItem={({ item }) => <Task task={item} />}
      keyExtractor={item => String(item.id)}
      showsVerticalScrollIndicator={false}
      ListEmptyComponent={() => <EmptyTaskList />}
    />
  )
}