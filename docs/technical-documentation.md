# Technical Documentation – Assignment 2

## Project Overview
This project is an enhanced version of the personal portfolio website from Assignment 1.  
It focuses on adding interactivity, improving user experience, and implementing dynamic features using JavaScript.

---

## File Structure
The project is organized as follows:

- `index.html`  
  Contains the structure of the website including all sections (About, Projects, Skills, Contact).

- `css/styles.css`  
  Handles styling, layout, responsive design, themes, and visual effects.

- `js/script.js`  
  Contains all interactive functionality such as filtering, search, theme toggle, and form validation.

- `assets/images/`  
  Stores images used in the website (not used).

- `docs/`  
  Contains documentation files including AI usage and this technical documentation.

---

## HTML Structure
The HTML file is structured using semantic elements as `nav`, `section`, and `footer`.

Main sections:
- **Navigation Bar** → includes links, theme toggle, and hamburger menu  
- **Hero Section** → introduction and call-to-action buttons  
- **About Section** → personal information  
- **Projects Section** → project cards with filtering and search  
- **Skills Section** → categorized skills  
- **Contact Section** → form with validation  

Each section uses consistent class naming for styling and JavaScript interaction.

---

## CSS Styling and Responsiveness
CSS is used to define the visual design, layout, and responsiveness.

Key implementations:
- **CSS variables (root variables)** for colors, spacing, and typography  
- **Flexbox and Grid** for layout structure  
- **Media queries** to adapt layout for mobile and tablet screens  
- **Transitions and animations** for smoother user experience  
- **Dark/Light theme support** using `data-theme` attribute  

The design focuses on readability, clear hierarchy, and consistent spacing.

---

## JavaScript Functionality
JavaScript is used to make the website interactive and dynamic.

Main features:

- **Hamburger Menu**
  - Toggles mobile navigation visibility
  - Improves usability on small screens  

- **Theme Toggle (Dark/Light Mode)**
  - Switches theme using a button
  - Stores user preference in `localStorage`  

- **Project Filtering**
  - Filters projects based on selected category
  - Uses `data-category` attributes  

- **Live Search**
  - Filters projects dynamically while typing
  - Matches title and description  

- **Form Validation**
  - Checks for empty or invalid inputs
  - Displays error messages and success feedback  

- **User Feedback**
  - Shows messages for errors, success, and empty results  

---

## Data Handling
Basic data handling is implemented using:

- **localStorage**
  - Stores selected theme (light/dark)
  - Ensures preference persists across sessions  

- **Dynamic DOM manipulation**
  - Updates project display based on filters and search input  

---

## Error Handling and User Feedback
The website provides clear feedback to users:

- Error messages for invalid form inputs  
- Success message after form submission  
- “No projects found” message when filters return no results  
- Visual indicators for active filters and interactions  

---

## Summary
This project demonstrates:
- Structured and maintainable code organization  
- Responsive and accessible design  
- Interactive features using JavaScript  
- Basic data handling and user feedback mechanisms  