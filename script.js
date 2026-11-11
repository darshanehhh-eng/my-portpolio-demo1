
/* General Styling */

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
    scroll-behavior: smooth;
}

body {
    background: #0b1120;
    color: white;
}

/* Navigation */

header {
    background: #111827;
    position: fixed;
    width: 100%;
    top: 0;
    z-index: 1000;
}

.navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 8%;
}

.logo {
    color: white;
}

.logo span {
    color: #38bdf8;
}

.menu {
    display: flex;
    gap: 22px;
}

.menu a {
    text-decoration: none;
    color: white;
    font-size: 14px;
    transition: 0.3s;
}

.menu a:hover {
    color: #38bdf8;
}

.menu-btn {
    display: none;
    background: none;
    color: white;
    border: none;
    font-size: 25px;
    cursor: pointer;
}

/* Home */

.home {
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 120px 10% 60px;
    gap: 40px;
}

.home-content {
    max-width: 600px;
}

.welcome {
    color: #38bdf8;
    letter-spacing: 3px;
    margin-bottom: 15px;
}

.home h1 {
    font-size: 45px;
    margin-bottom: 10px;
}

.home h1 span,
.home h2 span {
    color: #38bdf8;
}

.home h2 {
    font-size: 25px;
    margin-bottom: 20px;
}

.home p {
    color: #cbd5e1;
    line-height: 1.8;
}

.home-buttons {
    margin-top: 30px;
    display: flex;
    gap: 15px;
}

.btn {
    display: inline-block;
    padding: 12px 25px;
    background: #38bdf8;
    color: #0b1120;
    border: 1px solid #38bdf8;
    border-radius: 6px;
    text-decoration: none;
    font-weight: 600;
    cursor: pointer;
    transition: 0.3s;
}

.btn:hover {
    background: transparent;
    color: #38bdf8;
}

.btn.outline {
    background: transparent;
    color: #38bdf8;
}

/* Profile Image */

.profile img {
    width: 300px;
    height: 300px;
    object-fit: cover;
    border-radius: 50%;
    border: 5px solid #38bdf8;
    box-shadow: 0 0 30px #38bdf855;
}

/* Common Sections */

.section {
    padding: 100px 10%;
    text-align: center;
    scroll-margin-top: 75px;
}

.dark {
    background: #111827;
}

.heading {
    font-size: 35px;
    margin-bottom: 50px;
}

.heading span {
    color: #38bdf8;
}

/* About */

.about-content {
    max-width: 800px;
    margin: auto;
}

.about-content h3 {
    color: #38bdf8;
    margin-bottom: 20px;
    font-size: 24px;
}

.about-content p {
    color: #cbd5e1;
    line-height: 1.9;
}

.about-details {
    margin-top: 25px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 15px;
    text-align: left;
}

/* Skills */

.skills-container {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 30px;
    max-width: 850px;
    margin: auto;
}

.skill-card {
    text-align: left;
}

.skill-card h3 {
    margin-bottom: 10px;
}

.progress {
    background: #334155;
    height: 10px;
    border-radius: 20px;
    overflow: hidden;
}

.progress div {
    background: #38bdf8;
    height: 100%;
    border-radius: 20px;
}

.skill-card span {
    color: #38bdf8;
    font-size: 13px;
}

/* Cards */

.card-container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 25px;
}

.card,
.certificate-card {
    background: #1e293b;
    padding: 30px 20px;
    border-radius: 12px;
    border: 1px solid #334155;
    transition: 0.3s;
}

.card:hover,
.certificate-card:hover {
    transform: translateY(-10px);
    border-color: #38bdf8;
    box-shadow: 0 10px 25px #0005;
}

.card-icon {
    font-size: 40px;
    margin-bottom: 15px;
}

.card h3,
.certificate-card h3 {
    color: #38bdf8;
    margin-bottom: 15px;
}

.card p,
.certificate-card p {
    color: #cbd5e1;
    line-height: 1.7;
}

.card small {
    display: block;
    margin-top: 15px;
    color: #38bdf8;
}

/* Certificates */

.view-btn {
    display: inline-block;
    margin-top: 20px;
    padding: 10px 18px;
    background: #38bdf8;
    color: #0b1120;
    border-radius: 5px;
    text-decoration: none;
    font-weight: 600;
}

/* Projects */

.project-card span {
    display: block;
    margin-top: 20px;
    color: #38bdf8;
    font-size: 13px;
}

/* Contact */

form {
    max-width: 600px;
    margin: auto;
    display: flex;
    flex-direction: column;
    gap: 20px;
}

input,
textarea {
    padding: 15px;
    background: #1e293b;
    color: white;
    border: 1px solid #334155;
    border-radius: 6px;
    outline: none;
}

input:focus,
textarea:focus {
    border-color: #38bdf8;
}

textarea {
    height: 150px;
    resize: vertical;
}

form .btn {
    align-self: center;
}

#formMessage {
    color: #38bdf8;
}

.social-links {
    margin-top: 35px;
}

.social-links a {
    color: #38bdf8;
    text-decoration: none;
    margin: 0 15px;
}

/* Footer */

footer {
    background: #080e1a;
    text-align: center;
    padding: 25px;
    color: #94a3b8;
}

/* Responsive Design */

@media (max-width: 900px) {

    .menu {
        display: none;
        position: absolute;
        top: 70px;
        right: 0;
        width: 100%;
        background: #111827;
        flex-direction: column;
        text-align: center;
        padding: 20px;
    }

    .menu.active {
        display: flex;
    }

    .menu-btn {
        display: block;
    }

    .home {
        flex-direction: column-reverse;
        text-align: center;
    }

    .home-buttons {
        justify-content: center;
    }

    .profile img {
        width: 220px;
        height: 220px;
    }

    .card-container {
        grid-template-columns: repeat(2, 1fr);
    }
}

@media (max-width: 600px) {

    .home h1 {
        font-size: 32px;
    }

    .home h2 {
        font-size: 20px;
    }

    .heading {
        font-size: 28px;
    }

    .skills-container,
    .card-container,
    .about-details {
        grid-template-columns: 1fr;
    }

    .section {
        padding: 80px 6%;
    }

    .home {
        padding-left: 6%;
        padding-right: 6%;
    }
}