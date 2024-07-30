# React ToDo App

This project is a simple ToDo application built with React, demonstrating essential features for managing tasks. The app includes:

- **Basic ToDo Management:** Create, edit, and delete tasks with unique IDs, titles, and completion statuses.
- **React Context:** Used for managing the state of todos across the application.
- **LocalStorage Integration:** Todos are saved in localStorage using JSON.stringify to persist data across page reloads.
- **Task Counting:** Displays the number of incomplete todos in the app.
- **Filtering:** Provides options to filter todos by status (All, Active, Completed).
- **Clear Completed:** A button to clear completed todos, which is disabled when there are none.
- **Status Toggling:** Toggle individual todo statuses and use a checkbox to mark all todos as completed.
- **Inline Editing:** Double-click on a todo to edit its title inline, with changes saved on form submission or when the field loses focus. Pressing Escape cancels editing.
- **Responsive UI:** Features buttons for deleting individual todos and managing completed tasks.

This project showcases basic CRUD operations, state management with React Context, and localStorage usage, providing a practical example of a React application.

## Technologies Used
- HTML
- CSS
- React
- TypeScript

## Links
- **Preview:** [DEMO LINK](https://alexrapin.github.io/todo-app-react/)

## Launch Instructions
1. **Fork** the repo.
2. **Clone** the forked repo.
3. Run `npm install` (or `npm i`).
4. Run `npm start`.