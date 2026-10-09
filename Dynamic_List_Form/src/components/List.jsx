// import { useState } from "react"
import { CirclePlus,Trash2, PenLine ,Search } from 'lucide-react';
import "./List.css"

const List = ({ tasks, setTasks }) => { 
    const handleToggle = (id) => {
            setTasks(tasks.map((task) =>
                task.id === id ? { ...task, status: !task.status } : task
            ));
        };
    
    function handleAddNewTask(e) { 
        e.preventDefault();
        
        const form = e.currentTarget.form;              
        const input = form.elements["search"];   
        const value = input.value.trim();

        if (value === "") return;

        const nextId = tasks.length > 0 ? tasks[tasks.length - 1].id + 1 : 1;
        const newTask = { id: nextId, item: value, status: false };

        // console.log(newTask);
        setTasks([...tasks, newTask]);
        input.value = "";
    }

    function handleSearch(e) { 
        e.preventDefault();
        
        const form = e.currentTarget.form;              
        const input = form.elements["search"];   
        const value = input.value.trim();
    
        const list = form.querySelector('ul');
        const items = list.querySelectorAll('li'); 

        if (value === "" || value !== "") { 
            items.forEach(item => {
                if (item.classList.contains("found")) { 
                    item.classList.remove('found');
                }
            });    
        }

        items.forEach(item => {
            if (item.textContent === value) { 
                item.classList.add('found');
            }
        });
    }

    const deleteTask = (idToDelete) => {
        idToDelete = Number(idToDelete);
        setTasks(tasks.filter((task) => task.id !== idToDelete));
        return "successfuly deleted"
    };

    function handleDelete(id) { 
        const msg = deleteTask(id);
        console.log(id)
        alert(msg);
    }

    function editTask(taskId) { 
        const userInput = document.querySelector(".search");
        setTasks(tasks.map((task) => task.id === taskId ? { ...tasks, item: userInput.value } : task))
    }

    function handleEdit(taskId) { 
        // it delay with the editing logic 
        editTask(taskId);
    }

    return (
        <form>
            <div className="container">
                <h3>Dynamic List Form</h3>
                <div className="searchSection">
                    <input id="search" name="search" className="search" placeholder="enter you'r task name" />
                    <div className="controls">
                        <button
                            type="button"
                            title="search"
                            className="btnSearch"
                            onClick={handleSearch}
                        >
                            <Search size={32} />
                        </button>

                        <button
                            type="submit"
                            title="Add new Task"
                            className="btnAddNew"
                            onClick={handleAddNewTask}
                        >
                            
                            <CirclePlus size={32} />
                        </button>
                    </div>
                </div>
            </div>
            <div className="listSection">
                <ul className="list">
                    {tasks.map((task) => (
                        <li id ={task.id} 
                            key={task.id}
                            className="items"
                            onMouseLeave={(e) => {
                                e.currentTarget.classList.remove("selected-List-Item")                
                            }}

                            onMouseEnter={(e) => { 
                                e.currentTarget.classList.toggle("selected-List-Item")
                            }}
                        >
                            <input
                                type="checkbox"
                                checked={task.status}
                                onChange={() => handleToggle(task.id)}
                            />
                            <p className={task.status ? "done" : ""}>{task.item}</p>
                            <button type="button" title="Edit Task" onClick={ handleEdit }>
                                <PenLine />
                            </button>
                            <button type="button" title="Delete Task" onClick={ () => handleDelete(task.id) }>
                                <Trash2/>
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </form>
    )
}

export default List;