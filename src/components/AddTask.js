import { useState } from "react"
import Button from "./Button";

const AddTask = ({onAdd}) => {

    const [text , setText] = useState('')
    const [date , setDate] = useState('')
    const [time , setTime] = useState('')
    const [priority , setPriority] = useState('1')

    const onSubmit = (e) => {
        e.preventDefault()

        if(!text) { 
            alert("Kindly Fill Text Field") 
            return
        }
        
        onAdd({text , date , time , priority});
        setText('');
        setDate('');
        setTime('');
        setPriority('');
    }

    const onPress = () => {
        alert("Your request is recorded");
    }

    return (
        <form className = "myform" onSubmit = {onSubmit}>
           <div>
            <label>Task: </label>
            <input type = "text" placeholder="Enter your Task here" value = {text} onChange={(e) => setText(e.target.value)}/>

            <label>Date: </label>
            <input type = "date" placeholder="Enter the Date" value = {date} onChange={(e) => setDate(e.target.value)}/>

            <label>Time: </label>
            <input type = "time" placeholder="Enter the Time" value = {time} onChange={(e) => setTime(e.target.value)}/>
           
            <div className = "priority">
                <p className ='inline'>Select Priority: </p>
                <input type = "radio" name = "pSelect" value = "1" onChange={(e) => setPriority(e.target.value)}/>
                <label>1</label>
                <input type = "radio" name = "pSelect" value = "2" onChange={(e) => setPriority(e.target.value)}/>
                <label>2</label>
                <input type = "radio" name = "pSelect" value = "3" onChange={(e) => setPriority(e.target.value)}/>
                <label>3</label>
                <input type = "radio" name = "pSelect" value = "4" onChange={(e) => setPriority(e.target.value)}/>
                <label>4</label>
                <input type = "radio" name = "pSelect" value = "5" onChange={(e) => setPriority(e.target.value)}/>
                <label>5</label>
            </div>
            <div className = 'submit'>
            <Button text = "Submit" action = {() => onPress()}/>
            </div>
           </div> 
        </form>
    )
}
export default AddTask