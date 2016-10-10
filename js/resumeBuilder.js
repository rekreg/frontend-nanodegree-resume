/*
This is empty on purpose! Your code to build the resume will go here.
 */

//$("#main").append("Miroslav");


var mySkills = ["JavaScript", "PHP", "HTML", "CSS", "Python", "JQuery", "Bootstrap", "Photoshop"];




var bio = {
  "name" : "Miroslav",
  "lastName": "Bronin",
  "role": "Web Developer",
  "contacts": { 
      "phone": "8(926)320-56-04",
      "email": "rekreg@bk.ru",
      "gitHub": "rekreg",
      "vk": "https://vk.com/id25976095",
      "location": "Moscow"
  },
  "age": 32,
  "message": "I am very skilled person, and I love to be web developer",
  "skills": mySkills,
  "url": "images/me.jpg"
       
};

$("#main").append( 
    bio.name + " " + bio.lastName 
    + "<br>" 
    + "Мне: " + bio.age 
    + "<br>"
    + "Мой телефон: " + bio.contacts.phone
    + "<br>" 
    + "Мои навыки: " + bio.skills.join(" ")
    + "<br>"
    + "Обо мне: " + bio.message
);