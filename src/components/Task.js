import OneTask from "./OneTask"

const Task = ({tasks , onDelete, onUpdate, changeTop}) => {

    return(
        <>
        {tasks.map((mytask) =>(
          <OneTask key = {mytask.id} task = {mytask} onDelete = {onDelete} onUpdate = {onUpdate} newTop = {changeTop}/>      
        ))}
        </> 
    )
} 

export default Task