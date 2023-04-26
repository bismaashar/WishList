import { useState } from "react";
import Button from "./Button";
import Task from "./Task";

const OneTask = ({task , onDelete, onUpdate, newTop}) => {

    const [value, setValue] = useState(0);

    const handleChange = (e) => {
        setValue(e.target.value);
      };

    return(
        <div>
   <div className = "taskdiv">
            <div className="tasktext">
                <h4>Name: {task.text}</h4>
               <h5>Date: {task.date}</h5>
               <h5>Tiime: {task.time}</h5>
               <h5>Priority: {task.priority}</h5>
            </div>
            <select className = 'dropdown' value={value} onChange={handleChange}>
                 <option value ='1'>Update Priority</option>
                <option value ='1'>1</option>
                <option value ='2'>2</option>
                <option value ='3'>3</option>
                <option value ='4'>4</option>
                <option value ='5'>5</option>
            </select>
            <Button text = "Remove Item" action = {() => onDelete(task.id)}/>
            <Button text = "Update Item" action = {() =>onUpdate(task.id, value)}/>
            <Button text = "To Top" action = {() => newTop(task.id)}/>
        </div>
        </div>
     
    )
}

export default OneTask

//task.id instead of 1