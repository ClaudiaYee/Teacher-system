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

  // Publications
  const publications = [
    {
      title: "Publication 1",
      authors: "Author 1, Author 2",
      journal: "Journal of Lorem Ipsum",
      year: 2023,
      url: "https://example.com/publication1",
    },
    {
      title: "Publication 2",
      authors: "Author 1, Author 2",
      journal: "Journal of Lorem Ipsum",
      year: 2022,
      url: "https://example.com/publication2",
    },
    {
      title: "Publication 3",
      authors: "Author 1, Author 2",
      journal: "Journal of Lorem Ipsum",
      year: 2021,
      url: "https://example.com/publication3",
    },
  ];
  const publicationsList = document.getElementById("publications-list");
  publications.forEach((publication) => {
    const listItem = document.createElement("li");
    listItem.innerHTML = `
      <a href="${publication.url}" target="_blank">
        ${publication.title} - ${publication.authors} - ${publication.journal} (${publication.year})
      </a>
    `;
    publicationsList.appendChild(listItem);
  });
}
