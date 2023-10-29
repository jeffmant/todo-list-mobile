import { FlatList } from "react-native"
import { Task } from "../Task"
import { EmptyTaskList } from "./EmptyTaskList"
import { TaskType } from "../../types/task"

export const TaskList = ({ tasks }: { tasks: TaskType[] }) => {
  return (
    <FlatList
      data={tasks}
      renderItem={({ item }) => <Task id={item.id} title={item.title} isChecked={item.isChecked} />}
      keyExtractor={item => String(item.id)}
      showsVerticalScrollIndicator={false}
      ListEmptyComponent={() => <EmptyTaskList />}
    />
  )
}