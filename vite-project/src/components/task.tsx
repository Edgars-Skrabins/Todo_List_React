type TaskProps =
    {
        taskID:number;
        taskName: string;
        onEdit: (taskID:number,taskName:string) => void;
        onDelete: (taskID:number) => void;
    }

const Task = ({taskID,taskName,onEdit,onDelete}: TaskProps) => {
    return (
        <div className="task">

            <div className="task__name-wrapper">
                <h2 className="task__name"> {taskName} </h2>
            </div>

            <div className="task__checkbox-wrapper">
                <p> Done </p>
                <input type="checkbox" id="doneCheckbox" className="task__checkbox"></input>
            </div>

            <div className="task__btn-wrapper">
                <button className="task__btn" onClick={() => onEdit(taskID,taskName)}> Edit </button>
                <button className="task__btn" onClick={() => onDelete(taskID)}> Delete </button>
            </div>

        </div>
    )
}

export default Task;