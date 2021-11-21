import { LOGIC } from "./logic"
import { DOM } from "./dom"

const userInput = (() => {

    //Project form input
    const projectName = document.getElementById("project-name-input");
    const projectDescription = document.getElementById("project-descr-input");

    //Todo form input
    const todoName = document.getElementById("todo-name-input");
    const todoDescription = document.getElementById("todo-descr-input");
    const todoDate = document.getElementById("todo-date-input");

    const getProjectInput = () => {
        let pName = projectName.value;
        let pDescr = projectDescription.value;
        DOM.closeProjectForm();
        
        LOGIC.addProject(pName, pDescr);
    }

    const getTodoInput = () => {
        let currentProject = document.getElementById("project-title");
        let index = currentProject.getAttribute("counter");

        let tName = todoName.value;
        let tDescr = todoDescription.value;
        let tDate = todoDate.value;
        DOM.closeTodoForm();

        LOGIC.addTodo(tName, tDescr, tDate, index);
    }

    const getEditTodoInput = () => {
        const editName = document.getElementById("edit-name-input");
        const editDescription = document.getElementById("edit-descr-input");
        const editDate = document.getElementById("edit-date-input");

        let name = editName.value;
        let description = editDescription.value;
        let date = editDate.value;

        DOM.closeTodoEditForm();

        let currentProject = document.getElementById("project-title");
        let projectIndex = currentProject.getAttribute("counter");

        let todoIndex = editName.getAttribute("counter");
        
        LOGIC.editTodo(name, description, date, projectIndex, todoIndex);
    }

    return {
        getProjectInput,
        getTodoInput,
        getEditTodoInput
    }
})();

export { userInput }