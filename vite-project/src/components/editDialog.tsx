type EditDialogProps = {
    taskID: number;
    name: string;
    onEditCancel: () => void;
    onEditConfirm: (taskID: number) => void;
}

const EditDialog = ({taskID, name, onEditCancel, onEditConfirm}: EditDialogProps) => {
    return (
        <div className="task-edit">

            <div className="task-edit__input-wrapper">
                <input type="text" className="task-edit__input" maxLength={20} defaultValue={name}></input>
            </div>

            <div className="task__btn-wrapper">
                <button className="task__btn" onClick={() => onEditCancel()}> Cancel</button>
                <button className="task__btn" onClick={() => onEditConfirm(taskID)}> Confirm</button>
            </div>

        </div>
    )
}

export default EditDialog;