import { FlatList, Image, View } from "react-native";
import { styles } from "./home.styles";
import { Input } from "../../components/Input";
import { AddButton } from "../../components/AddButton";
import { Header } from "../../components/Header";
import { Task } from "../../components/Task";
import { TaskList } from "../../components/TaskList";

export function Home() {
    const tasks = [
      {
        id: 1,
        title: "Task 1",
        isChecked: false,
      },
      {
        id: 2,
        title: "Task 2",
        isChecked: false,
      },
      {
        id: 3,
        title: "Task 3",
        isChecked: false,
      },
      {
        id: 4,
        title: "Task 4",
        isChecked: false,
      },
      {
        id: 5,
        title: "Task 5",
        isChecked: false,
      },
      {
        id: 6,
        title: "Task 6",
        isChecked: false,
      },
      {
        id: 7,
        title: "Task 7",
        isChecked: false,
      },
      {
        id: 8,
        title: "Task 8",
        isChecked: false,
      },
      {
        id: 9,
        title: "Task 9",
        isChecked: false,
      },
      {
        id: 10,
        title: "Task 10",
        isChecked: false,
      }
    ]
    return (
			<>
				<Header />
        <View style={styles.container}>
						<View style={styles.form}>
							<Input />
							<AddButton />
						</View>
						<View>
              <TaskList tasks={tasks} />
						</View>
        </View>
			</>
    )
}