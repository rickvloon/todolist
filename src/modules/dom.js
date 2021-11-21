import { eventHandling } from "./events"
import { allProjects } from "./logic";

const DOM = (() => {
    //nav
    let content = document.getElementById("content-container");
    let sideNav = document.getElementById("side-nav");

    //projects
    let addProjectWrapper = document.getElementById("project-form-wrapper");
    const projectDiv = document.getElementById("project-list");
    let projectTitle = document.getElementById("project-title");
    let projectDescr = document.getElementById("project-descr");

    //todo
    let addTodoWrapper = document.getElementById("todo-form-wrapper");
    let todoDiv = document.getElementById("todo-list");
    let editTodoWrapper = document.getElementById("todo-edit-wrapper");

    //Opening nav
    const openNav = () => {
        sideNav.style.width = "305px";
        content.style.marginLeft = "305px";
    }
    const closeNav = () => {
        sideNav.style.width = "0px";
        content.style.marginLeft = "0px";
    }
    
    //Opening project add form
    const openProjectForm = () => {
        addProjectWrapper.style.display = "block";
    }
    const closeProjectForm = () => {
        addProjectWrapper.style.display = "none";
        document.getElementById("project-form").reset();
    }

    //Projects
    const displayProjects = (allProjects) => {
        projectDiv.innerHTML = "";
        for(let i = 0; i < allProjects.length; i++){
            projectDiv.innerHTML += `<li counter="${i}" class="project-link">${allProjects[i].title}</li>`;
        }
        eventHandling.projectLinkEvent();
        eventHandling.deleteProjectEvent();
        eventHandling.showTodoFormEvent();
    }

    const displayProject = (allProjects, index) => {
        projectTitle.innerHTML = allProjects[index].title;
        projectTitle.setAttribute("counter", index);
        projectDescr.innerHTML = allProjects[index].description;
        displayTodos(allProjects[index]);
    }

    //Todo form
    const displayTodoForm = () => {
        addTodoWrapper.style.display = "block";
    }

    const closeTodoForm = () => {
        addTodoWrapper.style.display = "none";
        document.getElementById("todo-form").reset();
    }

    //Opening/closing todo edit form
    const displayTodoEditForm = (projectIndex, todoIndex) => {
        editTodoWrapper.style.display = "block";
        eventHandling.closeEditTodoEvent();
        eventHandling.editTodoEvent();
        let name = allProjects[projectIndex].list[todoIndex].title;
        let description = allProjects[projectIndex].list[todoIndex].description;
        let date = allProjects[projectIndex].list[todoIndex].dueDate;

        const nameValue = document.getElementById("edit-name-input");
        nameValue.setAttribute("counter", todoIndex);
        const descrValue = document.getElementById("edit-descr-input");
        const dateValue = document.getElementById("edit-date-input");
        //working
        nameValue.setAttribute("value", name);
        descrValue.innerHTML = description;
        dateValue.setAttribute("value", date);
    }

    const closeTodoEditForm = () => {
        editTodoWrapper.style.display = "none";
        document.getElementById("todo-edit-form").reset();
    }

    const displayTodos = (currentProject) => {
        todoDiv.innerHTML = "";
        for(let i = 0; i < currentProject.list.length; i++){
            todoDiv.innerHTML += `<div class="todo-box" id="todo-box${i}"><ul><li><i class="fas fa-arrow-down" counter="${i}" id="todo-arrow-down" value="true"></i></li><li class="todo-link">${currentProject.list[i].title}</li><li class="todo-link-right">${currentProject.list[i].dueDate}</li><li><i class="fas fa-edit" id="todo-edit-button" counter="${i}"></i></li><li><i class="fas fa-trash-alt" id="delete-todo-button" counter="${i}"></i></li></ul></div>`;
        }
        eventHandling.deleteTodoEvent();
        eventHandling.editTodoClickEvent();
        eventHandling.displayDescrEvent();
    }

    const displayDescr = (projectIndex, todoIndex) => {
        const todoBox = document.getElementById(`todo-box${todoIndex}`);
        const todoP = document.createElement("p");
        todoP.innerHTML = `<p id="descr-p-${todoIndex}">${allProjects[projectIndex].list[todoIndex].description}</p>`;
        todoBox.appendChild(todoP);
    }

    const closeDescr = (todoIndex) => {
        const todoP = document.getElementById(`descr-p-${todoIndex}`);
        todoP.remove();
    }

    return {
        openNav,
        closeNav,
        openProjectForm,
        closeProjectForm,
        displayProjects,
        displayProject,
        displayTodoForm,
        closeTodoForm,
        displayTodos,
        displayTodoEditForm,
        closeTodoEditForm,
        displayDescr,
        closeDescr
    }
})();

export { DOM }