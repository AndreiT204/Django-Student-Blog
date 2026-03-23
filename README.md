# Django Student Blog

Django Student Blog is a full-stack web application designed to organize and serve dynamic blog content. It features a robust Python/Django backend, an SQLite relational database, and an interactive frontend powered by Vanilla JavaScript.

---

## Table of Contents
* [About the Project](#about-the-project)
* [Features](#features)
* [Technologies Used](#technologies-used)
* [Live Demo](#live-demo)
* [Setup and Installation](#setup-and-installation)

---

## About the Project
This project was developed as part of a university Web Design (IE1) course. It moves beyond static HTML and CSS by utilizing a traditional client-server architecture. It implements a relational database (SQLite) to ensure data persistence for user-generated content, while delegating dynamic UI updates to modular JavaScript files.

The project is structured into two main logical components:
* **Backend:** A Python-based Django application that handles business logic, image processing, routing, and database communication.
* **Frontend:** A responsive User Interface built with Django templating, CSS3, and Vanilla JavaScript for client-side interactivity without relying on heavy frontend frameworks.

---

## Features

### Dynamic Content Management
Create, view, and organize blog posts through the secure Django administrative dashboard. Posts are served directly from the database to dedicated detail pages, with media handled by a custom image processing pipeline.

### Interactive User Interface
Includes a custom-built image gallery, a real-time client-side search filter that updates the post feed instantly, and an integrated native chatbot interface.

### Complete Review System
Visitors can interact with the blog posts through a full CRUD (Create, Read, Update, Delete) database flow, allowing them to submit, edit, and remove ratings and comments securely.

---

## Technologies Used

### Backend
* **Python 3**
* **Django** (Web Framework, ORM, Templating Engine)
* **SQLite** (Persistent relational database storage)
* **Pillow** (Image processing and upload handling)

### Frontend
* **HTML5 / Django Templates**
* **Vanilla JavaScript** (Client-side logic, search filtering, DOM manipulation)
* **CSS3** (Modular stylesheets for layout and responsiveness)

---

## Live Demo

Check out the live deployment of this blog on Vercel:
[Live Application](https://django-student-blog.vercel.app/)

---

## Setup and Installation

### 1. Database Configuration
Ensure your Python environment is active. Apply the database migrations to set up the SQLite tables for your posts and reviews:

```bash
python manage.py makemigrations
python manage.py migrate
```

### 2. Run the Backend

Start the Django development server from the project root directory:

```bash
python manage.py runserver
```

### 3. View the Frontend

Navigate to your local host address in your web browser:

[http://127.0.0.1:8000/](http://127.0.0.1:8000/)
