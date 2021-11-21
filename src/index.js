import { DOM } from "./modules/dom";
import { eventHandling } from "./modules/events";
import { Project } from "./modules/logic";

eventHandling.closeProjectFormEvent();
eventHandling.showProjectFormEvent();
eventHandling.addProjectEvent();
eventHandling.addNavEvent();

let allProjects = [];

function loadApp(){
    let defaultProject = new Project("Welcome", "This is a default project");
    allProjects.push(defaultProject);
    DOM.displayProjects(allProjects);
    eventHandling.windowEvent();
}


loadApp();

export { allProjects }