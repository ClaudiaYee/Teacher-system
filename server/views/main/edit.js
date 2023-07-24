document.addEventListener("DOMContentLoaded", function () {
  loadProfileData();
});

function loadProfileData() {
  // Basic Info
  document.getElementById("basic-info-text").innerText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.";

  // Additional Text
  document.getElementById("additional-text").innerText = "Pellentesque vitae consectetur nisl, vitae faucibus lectus.";

  // Courses Taught
  const courses = ["Course 1", "Course 2", "Course 3"];
  const coursesList = document.getElementById("courses-list");
  courses.forEach((course) => {
    const listItem = document.createElement("li");
    listItem.innerText = course;
    coursesList.appendChild(listItem);
  });

  // Research Projects
  const projects = ["Project 1", "Project 2", "Project 3"];
  const projectsList = document.getElementById("projects-list");
  projects.forEach((project) => {
    const listItem = document.createElement("li");
    listItem.innerText = project;
    projectsList.appendChild(listItem);
  });

  // Colleagues
  const colleagues = ["Colleague 1", "Colleague 2", "Colleague 3"];
  const colleaguesList = document.getElementById("colleagues-list");
  colleagues.forEach((colleague) => {
    const listItem = document.createElement("li");
    listItem.innerText = colleague;
    colleaguesList.appendChild(listItem);
  });

  // Events & Announcements
  const events = ["Event 1", "Event 2", "Event 3"];
  const eventsList = document.getElementById("events-list");
  events.forEach((event) => {
    const listItem = document.createElement("li");
    listItem.innerText = event;
    eventsList.appendChild(listItem);
  });
}
