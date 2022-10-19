'use strict';

const switcher = document.querySelector('.btn');
const switcher2 = document.querySelector('.butn');
var currentTheme = null

switcher.addEventListener('click', function() {
    document.body.classList.toggle('light-theme');
    document.body.classList.toggle('dark-theme');
    const classListTheme = document.body.classList

    const className = document.body.className;
    if(className == "light-theme") {
        this.textContent = "Dark";
    } else {
        this.textContent = "Light";
    }
    
    console.log('current class name: ' + className);

    if(document.body.classList == "light-theme"){
        var currentTheme = 'Light Theme'
    }
    else if(classListTheme == "dark-theme") {

        var currentTheme = 'Dark Theme'

    }
    alert('Theme Changed to ' + currentTheme);
});

    
    