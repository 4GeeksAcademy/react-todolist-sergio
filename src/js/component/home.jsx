import React from "react";
import { useState } from "react";

const Home = () => {
	const [task, setTask] = useState(" ");
	const [taskList, setList] = useState([]);
	const [visible, setVisible] = useState("none");
	const [hoverIndex, setHoverIndex] = useState(null);

	function taskInput(event) {
		setTask(event.target.value);
	}

	function addItem(event) {
		if(event.keyCode === 13) {
			const dinamicList = [...taskList, task];
			setList(dinamicList);
			event.target.value = "";
		}		
	}

	function deleteItem(deletedItem) {
		const modifiedTaskList = taskList.filter((item) => item !== deletedItem);
		setList(modifiedTaskList);
	}

	function showButton(index) {
		setVisible("block");
		setHoverIndex(index);
	}

	function hideButton() {
		setVisible("none");
	}


	return (
		<div className="d-flex card w-25 mx-auto p-4 bg-dark">
			<div className="card-title text-center">
				<h1 className="text-white p-3">TO DO LIST</h1>
			</div>
			<input type="text" className="form-control" onChange={taskInput} onKeyDown={addItem} placeholder="Add your task here"/>
			<ul className="list-group">
				{taskList.map((item, index) => (
         			 <li className="d-flex justify-content-between align-items-center list-group-item" key={index} onMouseEnter={() => showButton(index)} onMouseLeave={hideButton}>{item}<button className="btn btn-light" onClick={() => deleteItem(item)} style={{display: hoverIndex === index ? visible : "none"}}>X</button></li>
       			))}
			</ul>
			<div className="text-white mt-4">
				<span>{taskList.length} items left</span>
			</div>
		</div>
	);
};

export default Home;
