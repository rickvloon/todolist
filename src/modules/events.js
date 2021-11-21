import { DOM } from "./dom";
import { userInput } from "./userinput";
import { allProjects } from "../index";
import { LOGIC } from "./logic";

const eventHandling = (() => {

    //Nav
    const bars = document.getElementById("menu-button");
    let value = bars.getAttribute("value");

    //Project add form
    const showProjectButton = document.getElementById("project-button");
    const closeProjectButton = document.getElementById("project-close-button");
    const addProjectButton = document.getElementById("project-add-button");

    //Project delete
    const projectDeleteButton = document.getElementById("project-delete-button");
    const currentProject = document.getElementById("project-title");

    //Todo 
    const showTodoFormButton = document.getElementById("todo-form-button");
    const closeTodoButton = document.getElementById("todo-close-button");
    const addTodoButton = document.getElementById("todo-add-button");

    const addNavEvent = () => {
        bars.addEventListener("click", () => {
            if(value == "true"){
                DOM.openNav();
                value = "false";
            }
            else{
                DOM.closeNav();
                value = "true";
            }
        });
    }

    const showProjectFormEvent = () => {
        showProjectButton.addEventListener("click", DOM.openProjectForm);
    }
    const closeProjectFormEvent = () => {
        closeProjectButton.addEventListener("click", DOM.closeProjectForm);
    }
    const addProjectEvent = () => {
        addProjectButton.addEventListener("click", userInput.getProjectInput);
    }

    const projectLinkEvent = () => {
        const projectLinks = document.querySelectorAll(".project-link");
        projectLinks.forEach(function(link){
            link.addEventListener("click", () => {
                let index = link.getAttribute("counter");
                DOM.displayProject(allProjects, index);
            });
        });
    }

    const deleteProjectEvent = () => {
        projectDeleteButton.addEventListener("click", function(){
            let index = currentProject.getAttribute("counter");
            if(index > 0) {
                 LOGIC.deleteProject(index);
                 DOM.displayProject(allProjects, 0);
            }
        });
    }

    const showTodoFormEvent = () => {
        showTodoFormButton.addEventListener("click", function(){
            DOM.displayTodoForm();
            closeTodoFormEvent();
            addTodoEvent();
        });
    }

    const closeTodoFormEvent = () => {
        closeTodoButton.addEventListener("click", DOM.closeTodoForm);
    }

    const addTodoEvent = () => {
        addTodoButton.addEventListener("click", userInput.getTodoInput);
    }

    const deleteTodoEvent = () => {
        const deleteTodoButtons = document.querySelectorAll("#delete-todo-button");
        deleteTodoButtons.forEach(function(deleteButton){
            deleteButton.addEventListener("click", function(e){
                const currentProject = document.getElementById("project-title");
                let projectIndex = currentProject.getAttribute("counter");

                let target = e.target;
                let todoIndex = target.getAttribute("counter");
                
                LOGIC.deleteTodo(projectIndex, todoIndex);
            })
        });
    }

    const editTodoClickEvent = () => {
        const editTodoButtons = document.querySelectorAll("#todo-edit-button");
        editTodoButtons.forEach(function(editButton){
            editButton.addEventListener("click", function(e){
                const currentProject = document.getElementById("project-title");
                let projectIndex = currentProject.getAttribute("counter");

                let target = e.target;
                let todoIndex = target.getAttribute("counter");

                DOM.displayTodoEditForm(projectIndex, todoIndex);
            })
        });
    }

    const editTodoEvent = () => {
        const editTodoButton = document.getElementById("todo-edit-button2");
        editTodoButton.addEventListener("click", userInput.getEditTodoInput);
    }

    const closeEditTodoEvent = () => {
        const closeEditFormButton = document.getElementById("todo-edit-close-button");
        closeEditFormButton.addEventListener("click", DOM.closeTodoEditForm);
    }

    const displayDescrEvent = () => {
        const descrButtons = document.querySelectorAll("#todo-arrow-down");
        descrButtons.forEach(function(button){
            button.addEventListener("click", function(e){
                const currentProject = document.getElementById("project-title");
                let projectIndex = currentProject.getAttribute("counter");

                let target = e.target;
                let todoIndex = target.getAttribute("counter");
                let value = target.getAttribute("value");

                if(value == "true"){
                    target.setAttribute("value", "false");
                    DOM.displayDescr(projectIndex, todoIndex);
                }
                else{
                    target.setAttribute("value", "true");
                    DOM.closeDescr(todoIndex);
                }
            });
        });
    }

    

    return {
        addNavEvent,
        showProjectFormEvent,
        closeProjectFormEvent,
        addProjectEvent,
        projectLinkEvent,
        deleteProjectEvent,
        showTodoFormEvent,
        closeTodoFormEvent,
        addTodoEvent,
        deleteTodoEvent,
        editTodoClickEvent,
        closeEditTodoEvent,
        editTodoEvent,
        displayDescrEvent
    }
})();

export { eventHandling }