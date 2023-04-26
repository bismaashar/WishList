import Button from "./Button"

const Header = ({onAdd}) => {
    const AddItem = (e) => {
        alert("New Item Added");
    }

    return(
        <div className = "head">
            <h1>Wish List</h1>
            <Button text = "Add Item" action = {onAdd}/>
        </div>
    )
}

export default Header