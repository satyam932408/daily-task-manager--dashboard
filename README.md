# Daily Task Manager Dashboard

A beautiful and modern task management dashboard built with React.js. Stay organized and productive with an intuitive interface for managing your daily tasks.

## Features

- ✅ Add new tasks
- ✅ Mark tasks as complete/incomplete
- ✅ Delete tasks
- ✅ Filter tasks (All, Active, Completed)
- ✅ View task statistics (Total, Active, Completed)
- ✅ Clear all completed tasks
- ✅ Local storage persistence (tasks saved automatically)
- ✅ Responsive design for mobile and desktop
- ✅ Modern, beautiful UI with smooth animations

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Install dependencies:

```bash
npm install
```

2. Start the development server:

```bash
npm run dev
```

3. Open your browser and navigate to the URL shown in the terminal (usually `http://localhost:5173`)

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

### Preview Production Build

```bash
npm run preview
```

## Usage

1. **Add a Task**: Type your task in the input field and click "Add Task" or press Enter
2. **Complete a Task**: Click the checkbox next to a task to mark it as complete
3. **Delete a Task**: Click the "×" button on any task to delete it
4. **Filter Tasks**: Use the filter buttons (All, Active, Completed) to view different task categories
5. **Clear Completed**: Click the "Clear Completed" button to remove all completed tasks at once

## Technologies Used

- React 18
- Vite
- CSS3 (with modern features like gradients and animations)

## Project Structure

```
daily-task-manager/
├── src/
│   ├── components/
│   │   ├── TaskInput.jsx
│   │   ├── TaskList.jsx
│   │   ├── TaskItem.jsx
│   │   └── FilterButtons.jsx
│   ├── App.jsx
│   ├── App.css
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## License

MIT
