import { FlatList } from "react-native"
import { Task } from "../Task"
import { EmptyTaskList } from "./EmptyTaskList"
import { TaskType } from "../../types/task"

export const TaskList = (
  { tasks, handleCheck, handleDelete }: 
  { tasks: TaskType[], handleCheck: (taskId: number) => void, handleDelete: (taskId: number) => void }
) => {
  return (
    <FlatList
      data={tasks}
      renderItem={({ item }) => <Task task={item} handleCheck={() => handleCheck(item.id)} handleDelete={() => handleDelete(item.id)} />}
      keyExtractor={item => String(item.id)}
      showsVerticalScrollIndicator={false}
      ListEmptyComponent={() => <EmptyTaskList />}
    />
  )
}