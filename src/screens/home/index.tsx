import { View } from "react-native";
import { styles } from "./home.styles";
import { Input } from "../../components/Input";
import { AddButton } from "../../components/AddButton";
import { Header } from "../../components/Header";
import { TaskList } from "../../components/TaskList";
import { useState } from "react";
import { TaskType } from "../../types/task";

export function Home() {
    const [tasks, setTasks] = useState<TaskType[]>([])
    const [newTask, setNewTask] = useState('')

    function handleAddTask () {
      setTasks([...tasks, { id: tasks.length + 1, title: newTask, isChecked: false }])
      setNewTask('')
    }

    return (
			<>
				<Header />
        <View style={styles.container}>
						<View style={styles.form}>
							<Input value={newTask} placeholder="Adicione uma nova tarefa" onChange={setNewTask} />
							<AddButton onPress={handleAddTask} />
						</View>
						<View>
              <TaskList tasks={tasks} />
						</View>
        </View>
			</>
    )
}