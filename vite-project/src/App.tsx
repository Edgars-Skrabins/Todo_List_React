import React, {useState} from 'react'
import './App.css'
import Task from "./components/task.tsx";
import EditDialog from "./components/editDialog.tsx";
import task from "./components/task.tsx";

function App() {

    const [taskName, setTaskName] = useState("");
    const [tasks, setTasks] = useState<React.ReactNode[]>([]);
    const [editDialogs, setEditDialogs] = useState<React.ReactNode[]>([]);
    const [inEditMode, setInEditMode] = useState(Boolean);


    function deleteAllTasks()
    {
        setTasks([]);
    }

    function confirmEdit(taskID:number) {

        // Edit task by id

        setEditDialogs([]);
        setInEditMode(false);
    }

    function cancelEdit() {
        setEditDialogs([]);
        setInEditMode(false);
    }

    function editTask(taskID: number, taskName:string) {

        if(inEditMode) return;
        setEditDialogs((prevDialog) => [...prevDialog,
            <EditDialog taskID={taskID}
                  name={taskName}
                  onEditCancel={() => cancelEdit()}
                  onEditConfirm={() => confirmEdit(taskID)}/>]);

        setInEditMode(true);
    }

    function deleteTask(taskID: number) {
        setTasks((prevTasks) => prevTasks.filter((task) => task?.props.taskID !== taskID));
    }

    function createTask(newTaskName: string) {
        const taskID = Date.now();

        setTasks((prevTasks) => [...prevTasks,
            <Task taskID={taskID}
                  taskName={newTaskName}
                  onEdit={() => editTask(taskID,taskName)}
                  onDelete={() => deleteTask(taskID)}/>]);
    }

    function handleCreateTask() {

        if (taskName.length !== 0) {
            createTask(taskName);
        }

        setTaskName("");
    }

    return (
        <>
            <div className="page-container">
                <div className="page-left">
                    <div className="page-top__input-wrapper">
                        <label htmlFor="taskName"> Task Name </label>
                        <input
                            type="text"
                            id="taskName"
                            maxLength={20}
                            value={taskName}
                            onChange={(e) => setTaskName(e.target.value)}>
                        </input>
                    </div>

                    <button onClick={() => handleCreateTask()}> Create </button>
                    <button onClick={() => deleteAllTasks()}> Delete all tasks </button>
                </div>

                <div className="page-right">
                    <div className="page-right__header">
                        <h1>ToDo with React</h1>
                    </div>

                    <div className="page-right__task-container">

                        {tasks.map((task, index) => (
                            <div key={index}>{task}</div>
                        ))}

                        {editDialogs.map((editDialog, index) => (
                            <div key={index}>{editDialog}</div>
                        ))}

                    </div>

                </div>

            </div>

        </>
    )
}

export default App
