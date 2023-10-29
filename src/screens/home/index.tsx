import { Alert, StyleSheet, Text, View } from "react-native";
import { styles } from "./home.styles";
import { Input } from "../../components/Input";
import { AddButton } from "../../components/AddButton";
import { Header } from "../../components/Header";
import { TaskList } from "../../components/TaskList";
import { useState } from "react";
import { TaskType } from "../../types/task";
import { TaskCount } from "../../components/TaskCount";

export function Home() {
    const [tasks, setTasks] = useState<TaskType[]>([])
    const [newTask, setNewTask] = useState('')

    function handleAddTask () {
      const updatedTasks = [ ...tasks ]
      updatedTasks.unshift({ id: Math.random() * (1000 - 1) + 1, title: newTask, isChecked: false })
      setTasks(updatedTasks)
      setNewTask('')
    }

    function handleCheck (taskId: number) {
      const filteredTasks = tasks.map((task) => {
        let updatedTask
        
        if (task.id === taskId) {
          updatedTask = { ...task, isChecked: !task.isChecked }
        }

        return updatedTask || task
      })

      setTasks(filteredTasks)
    }

    function handleDelete (taskId: number) {
      Alert.alert('Excluir', `Deseja excluir esta tarefa?`, [
        {
          text: 'Sim',
          onPress: () => {
            const filteredTasks = tasks.filter((task: TaskType) => task.id !== taskId)
            setTasks(filteredTasks)
          },
        },
        {
          text: 'Não',
          style: 'cancel'
        }
      ])
    }

    return (
			<>
				<Header />
        <View style={styles.container}>
						<View style={styles.form}>
							<Input value={newTask} placeholder="Adicione uma nova tarefa" onChange={setNewTask} />
							<AddButton disabled={!newTask} onPress={handleAddTask} />
						</View>
            <TaskCount todo={tasks.filter(task => !task.isChecked).length} done={tasks.filter(task => task.isChecked).length} />
						<View>
              <TaskList tasks={tasks} handleCheck={handleCheck} handleDelete={handleDelete} />
						</View>
        </View>
			</>
    )
}