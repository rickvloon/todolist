import { DOM } from "./dom";
import { allProjects } from "../index";
import { eventHandling } from "./events";

//Todo class
class Todos {
    constructor(title, description, dueDate){
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
    }
}

//Project class
class Project {
    constructor(title, description){
        this.title = title;
        this.description = description;
        this.list = [];
    }
}

const LOGIC = (() => {

    //Project list

    const addProject = (title, description) => {
        let project = new Project(title, description);
        allProjects.push(project);
        DOM.displayProjects(allProjects);
    }

    const deleteProject = (index) => {
        allProjects.splice(index, 1);
        DOM.displayProjects(allProjects);
    }

    //Todos

    const addTodo = (title, description, date, index) => {
        let todo = new Todos(title, description, date);
        const currentProject = allProjects[index];
        currentProject.list.push(todo);
        DOM.displayTodos(currentProject);
    }

    const deleteTodo = (projectIndex, todoIndex) => {
        const currentProject = allProjects[projectIndex];
        currentProject.list.splice(todoIndex, 1);
        DOM.displayTodos(currentProject);
    }

    //edit
    const editTodo = (name, description, date, projectIndex, todoIndex) => {
        allProjects[projectIndex].list[todoIndex].title = name;
        allProjects[projectIndex].list[todoIndex].description = description;
        allProjects[projectIndex].list[todoIndex].dueDate = date;
        let currentProject = allProjects[projectIndex];
        DOM.displayTodos(currentProject);
    }

    return {
        addProject,
        deleteProject,
        addTodo,
        deleteTodo,
        editTodo
    }
})();

export { LOGIC }
export { allProjects }
export { Project }