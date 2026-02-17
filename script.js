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

    //Comittee
    const committeeGrid = document.getElementById('committee-container');

    if (committeeGrid) {
        fetch('comittee.json')
            .then(response => response.json())
            .then(data => {
                data.forEach(member => {
                    committeeGrid.innerHTML += `
                        <div class="member-card">
                            <div class="card-img">
                                <img src="${member.img}" alt="${member.name}">
                            </div>
                            <div class="card-body">
                                <h5>${member.name}</h5>
                                <span class="designation">${member.role}</span>
                                <div class="social-icons">
                                    <a href="${member.linkedin || '#'}" target="_blank"><i class="fab fa-linkedin"></i></a>
                                    <a href="${member.github || '#'}" target="_blank"><i class="fab fa-github"></i></a>
                                    ${member.email ? `
                                        <a href="https://mail.google.com/mail/?view=cm&fs=1&to=${member.email}" target="_blank">
                                            <i class="fas fa-envelope"></i>
                                        </a>` : ''}
                                </div>
                            </div>
                        </div>
                    `;
                });
            })
            .catch(error => console.error('Error loading committee:', error));
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
                                    <a href="${person.linkedin}" target="_blank"><i class="fab fa-linkedin"></i></a>
                                    <a href="${person.github}" target="_blank"><i class="fab fa-github"></i></a>
                                    ${person.email ? `
                                        <a href="https://mail.google.com/mail/?view=cm&fs=1&to=${person.email}" target="_blank">
                                            <i class="fas fa-envelope"></i>
                                        </a>` : ''}
                                </div>
                            </div>
                        </div>
                    `;
                });
            })
            .catch(error => console.error('Error loading members:', error));
    }

    //Events 
    const container = document.getElementById('events-container');

    if (container) {
        fetch('./events.json')
            .then(res => res.json())
            .then(data => {
                container.innerHTML = "";
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
    // --- Scrolltotop ---
    const toTopBtn = document.getElementById("toTopBtn");

    window.onscroll = function () {
        if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
            toTopBtn.style.display = "block";
        } else {
            toTopBtn.style.display = "none";
        }
    };

    toTopBtn.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth" 
        });
    });
});