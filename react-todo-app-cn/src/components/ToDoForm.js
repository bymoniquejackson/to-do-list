import React, {useState, useEffect, useRef} from "react";


function ToDoForm(props) {        
    const [input, setInput] = useState(props.edit ? props.edit.value : " ");


    const focusInput = useRef(null)
    useEffect(() => {
        focusInput.current.focus()
})

    const handleChange = e => {
        setInput(e.target.value)
    }

    const handleSubmit = e => {
        e.preventDefault();

        props.onSubmit({
            id: Math.floor(Math.random() * 10000),
            text: input
        });

        setInput("")
    };

    return (
        <form onSubmit={handleSubmit} className='todo-form'>
        {props.edit ? (
            <>
            <input
                placeholder='Update your item'
                value={input}
                onChange={handleChange}
                name='text'
                ref={focusInput}
                className='todo-input edit'
            />
            <button onClick={handleSubmit} className='todo-button edit'>
                Update
            </button>
            </>
        ) : (
            <>

<input
            placeholder='Add a todo'
            value={input}
            onChange={handleChange}
            name='text'
            className='todo-input'
            ref={focusInput}
        />
        <button onClick={handleSubmit} className='todo-button'>
            Add todo
        </button>
        </>
    )}
    </form>
);
}















//     {/* return (
//     <form className="todo-form" onSubmit={handleSubmit}>
//         {props.edit} (
//         <input 
//         type="text" 
//         placeholder="Add a todo" 
//         value={input}
//         name="text" 
//         className ="todo-input"
//         onChange = {handleChange}
//         ref={focusInput}
//         />
//         <button className="todo-button">Add ToDo </button>) 



//     </form>
// )
// } */}

export default ToDoForm;