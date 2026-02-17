document.addEventListener('DOMContentLoaded', () => {
    // Mobile Menu toggle
    const menu = document.querySelector('#mobile-menu');
    const navLinks = document.querySelector('.nav-links');

    if (menu) {
        menu.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            const icon = menu.querySelector('i');
            icon.classList.toggle('fa-bars');
            icon.classList.toggle('fa-times');
        });
    }

    //Member
    const membersGrid = document.getElementById('members-container');

    if (membersGrid) {
        fetch('members.json')
            .then(response => response.json())
            .then(members => {
                members.forEach(person => {
                    membersGrid.innerHTML += `
                    <div class="member-card">
                        <div class="card-img">
                            <img src="${person.img}" alt="${person.name}">
                        </div>
                        <div class="card-body">
                            <h5>${person.name}</h5>
                            <span class="designation">${person.role}</span>
                            <div class="social-icons">
                                <a href="#"><i class="fab fa-linkedin"></i></a>
                                <a href="#"><i class="fab fa-github"></i></a>
                                ${person.email ? `
                                    <a href="https://mail.google.com/mail/?view=cm&fs=1&to=${person.email}" target="_blank">
                                        <i class="fas fa-envelope"></i>
                                    </a>
                                ` : ''}
                            </div>
                        </div>
                    </div>
                `;
                });
            });
    }

    //Events 
    const container = document.getElementById('events-container');

    if (container) {
        fetch('./events.json')
            .then(res => res.json())
            .then(data => {
                container.innerHTML = ""; // Clear the "Stay tuned" message
                data.forEach(event => {
                    container.innerHTML += `
                        <div class="event-card">
                            <div class="event-status">${event.status}</div>
                            <div class="event-content">
                                <span class="event-date"><i class="far fa-calendar-alt"></i> ${event.date} | ${event.time}</span>
                                <h3>${event.title}</h3>
                                <p>${event.description}</p>
                                <div class="event-details">
                                    <span><i class="fas fa-map-marker-alt"></i> Venue: ${event.venue}</span>
                                    <span><i class="fas fa-tag"></i> Fees: ${event.fee}</span>
                                </div>
                                <a href="${event.formLink}" class="btn-main reg-btn" target="_blank">Register Now</a>
                            </div>
                        </div>
                    `;
                });
            })
            .catch(err => {
                console.error("Fetch Error:", err);
                container.innerHTML = "<p>Stay tuned for more upcoming events!</p>";
            });
    }
});