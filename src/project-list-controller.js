import { projectBuilder } from "./project-builder.js";
import { pubsub } from "./pubsub.js";

export const projectListController=(function(){
   let projectList = [];
   
   function getProjectList(){
       return projectList;
   }
})();