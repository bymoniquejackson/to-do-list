import React, {useState} from "react"
import ToDo from "./ToDo";
import ToDoForm from "./ToDoForm"


function ToDoList() {
    // eslint-disable-next-line
    const [toDos, setToDos] = useState([]);

    const addToDo = toDo => {
        // eslint-disable-next-line
        if(!toDo.text || /^\ s*$/.test(toDo.text)) {
            return
        }
        const newToDos = [toDo, ...toDos]

        setToDos(newToDos)
        // console.log(toDo, ...toDos);
        };



        const updateToDo = (toDoId, newValue) => {
            if(!newValue.text || /^\ s*$/.test(newValue.text)) {
                return
            }
            setToDos(previous => previous.map(item => (item.id === toDoId ? newValue: item ))
            );
    

        }

        const removeToDo = id => {
            const removeArr =[...toDos].filter(toDo => toDo.id !== id)

            setToDos(removeArr);
        }




        const completeToDo = id => {
            let updatedToDos = toDos.map(toDo => {
                if (toDo.id === id) {
                    toDo.isComplete =!toDo.isComplete
                }
                return toDo
            })
            setToDos(updatedToDos);
        }

    return (
    <div>
        <h1>What tasks do we need to complete today?</h1>
        <ToDoForm onSubmit={addToDo}/>
        <ToDo toDos={toDos} completeToDo={completeToDo}
            removeToDo={removeToDo} updateToDo={updateToDo} />




    </div>
    );
}

export default ToDoList;