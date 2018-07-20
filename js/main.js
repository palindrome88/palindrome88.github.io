"use strict";

let projectScript = require("./project");
let $ = require("jquery");

let clickedProjects = $('#portfolio').click(function(){

    projectScript.populateProjects();

    console.log("Registered the button click.");
    
    });


projectScript.populateProjects();