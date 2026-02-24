# 📝 Todo CLI

A powerful and intuitive Command Line Interface (CLI) for managing your tasks with ease. Built with Node.js, Commander, and Inquirer, this tool allows you to interact with a Todo API directly from your terminal.

---

## 🚀 Features

- **Standard Operations**: Create, List, Update, and Delete todos.
- **Interactive Mode**: Mark todos as done or undone using an interactive selection menu if no ID is provided.
- **Bulk Actions**: Clear all todos with a single command.
- **API Integration**: Communicates with a RESTful backend.

---

## 🛠️ Installation

1. **Clone the repository**:

   ```bash
   git clone <repository-url>
   cd todo-cli
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Link the CLI (Optional but recommended)**:
   This allows you to run `todo` from anywhere.
   ```bash
   npm link
   ```

---

## 🚦 Prerequisites

This CLI is designed to work with a backend API running at `http://localhost:3000/todos`. Ensure your server is active before using the CLI.

---

## 📖 Usage

### Create a Todo

Add a new task to your list.

```bash
todo create "Buy groceries"
```

### List Todos

View all your tasks with their status (✔ for completed, ✗ for pending).

```bash
todo list
```

### Mark as Done

**Normal Mode**: Mark a specific todo by its ID.

```bash
todo done 1
```

**Interactive Mode**: Select from a list if no ID is provided.

```bash
todo done
```

### Mark as Undone

**Normal Mode**:

```bash
todo undone 1
```

**Interactive Mode**:

```bash
todo undone
```

### Update a Todo

Change the title of an existing task.

```bash
todo update 1 "Buy organic groceries"
```

### Delete a Todo

Remove a specific task by ID.

```bash
todo delete 1
```

### Empty All Todos

Wipe your entire task list.

```bash
todo empty
```

---

## 📦 Tech Stack

- **[Commander.js](https://github.com/tj/commander.js)**: For building the command-line interface.
- **[Inquirer.js](https://github.com/SBoudrias/Inquirer.js)**: For interactive prompts.
- **[Axios](https://axios-http.com/)**: For making HTTP requests to the API.

---

## 📄 License

ISC License.
