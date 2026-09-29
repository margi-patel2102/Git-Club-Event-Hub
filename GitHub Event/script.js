const events = [
    {
        id: 1,
        name: "Git & GitHub Bootcamp",
        category: "Workshop",
        date: "October 10, 2026",
        time: "10:00 AM",
        venue: "CSPIT",
        description:
            "Learn Git and GitHub from scratch. Understand repositories, commits, branches, pull requests and collaborative development.",
        color: "purple"
    },

    {
        id: 2,
        name: "Git Club Hackathon",
        category: "Hackathon",
        date: "October 18, 2026",
        time: "9:00 AM",
        venue: "CHARUSAT",
        description:
            "Build innovative solutions to real-world problems with your team in this exciting Git Club hackathon.",
        color: "purple"
    },

    {
        id: 3,
        name: "Code Sprint",
        category: "Competition",
        date: "October 24, 2026",
        time: "11:00 AM",
        venue: "DEPSTAR",
        description:
            "Test your programming skills through a series of coding challenges and compete with fellow students.",
        color: "blue"
    },

    {
        id: 4,
        name: "Tech Community Meetup",
        category: "Community",
        date: "November 2, 2026",
        time: "2:00 PM",
        venue: "CHARUSAT",
        description:
            "Meet developers, designers and technology enthusiasts. Share ideas, projects and experiences.",
        color: "orange"
    }
];


let currentCategory = "all";


function displayEvents(list) {

    const container = document.getElementById("eventsContainer");

    if (!container) return;

    container.innerHTML = "";

    if (list.length === 0) {
        container.innerHTML = "<p>No events found.</p>";
        return;
    }

    list.forEach(event => {

        container.innerHTML += `
            <div class="event-card">

                <div class="event-image ${event.color}">
                    <span>${event.category.toUpperCase()}</span>
                </div>

                <div class="event-content">

                    <p class="date">${event.date}</p>

                    <h3>${event.name}</h3>

                    <p>${event.description}</p>

                    <div class="event-bottom">

                        <span>📍 ${event.venue}</span>

                        <a href="event-details.html?id=${event.id}">
                            Details →
                        </a>

                    </div>

                </div>

            </div>
        `;
    });
}


function filterEvents(category) {

    currentCategory = category;

    document.querySelectorAll(".filter").forEach(button => {
        button.classList.remove("active-filter");
    });

    event.target.classList.add("active-filter");

    searchEvents();
}


function searchEvents() {

    const searchBox = document.getElementById("search");

    if (!searchBox) return;

    const searchText = searchBox.value.toLowerCase();

    let result = events.filter(event => {

        const matchesSearch =
            event.name.toLowerCase().includes(searchText) ||
            event.category.toLowerCase().includes(searchText);

        const matchesCategory =
            currentCategory === "all" ||
            event.category === currentCategory;

        return matchesSearch && matchesCategory;
    });

    displayEvents(result);
}


function showEventDetails() {

    const box = document.getElementById("eventDetails");

    if (!box) return;

    const params = new URLSearchParams(window.location.search);

    const id = Number(params.get("id"));

    const eventData = events.find(event => event.id === id);

    if (!eventData) {
        box.innerHTML = "<h2>Event not found.</h2>";
        return;
    }

    box.innerHTML = `
        <div class="detail-card">

            <p class="tag">${eventData.category.toUpperCase()}</p>

            <h1>${eventData.name}</h1>

            <p class="detail-description">
                ${eventData.description}
            </p>

            <div class="detail-info">

                <span>📅 ${eventData.date}</span>

                <span>🕐 ${eventData.time}</span>

                <span>📍 ${eventData.venue}</span>

            </div>

        </div>
    `;
}


function registerEvent() {

    const name = document.getElementById("studentName").value;
    const email = document.getElementById("studentEmail").value;

    if (name === "" || email === "") {
        alert("Please fill all the details.");
        return;
    }

    alert("Registration successful! 🎉");

    document.getElementById("studentName").value = "";
    document.getElementById("studentEmail").value = "";
}


const search = document.getElementById("search");

if (search) {
    search.addEventListener("input", searchEvents);
    displayEvents(events);
}


showEventDetails();