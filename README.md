# Dev Stack Builder

A React + TypeScript web app that helps developers explore popular technologies and build their ideal development stack. Browse through 12 curated technologies, compare them side by side, and add the ones you need to your personal stack.

## 🔗 Live Site

https://dev-stack-builder-by-sk.vercel.app/

## 🛠️ Technologies Used

- **React 19** – UI library with hooks and component-based architecture
- **TypeScript** – Type-safe JavaScript for better developer experience
- **Vite** – Fast build tool and dev server
- **Tailwind CSS** – Utility-first CSS framework for styling
- **React-Toastify** – Toast notifications for user feedback
- **JSON** – Local data source for technologies

## ✨ Features

1. **Explore Technologies** – Browse 12 technologies with icons, ratings, difficulty levels, badges, and descriptions in a responsive 3-column grid layout.
2. **Build Your Stack** – Add technologies to your personal stack with duplicate prevention, remove individual items, or clear the entire stack with one click.
3. **Instant Feedback with Toast Notifications** – Every action (add, remove, duplicate attempt, remove all) triggers a toast notification for clear user feedback.

## 📱 Responsive Design

Fully responsive across mobile, tablet, and desktop. The navbar transforms into a hamburger menu on mobile, and the tech grid adapts from 3 columns on desktop to 1 column on mobile.

## 📝 React Questions

### 1. What is JSX, and why is it used in React?

JSX is a syntax extension that lets us write HTML-like code inside JavaScript. It makes React components more readable and easier to write because we can see the structure of the UI directly in the code. Under the hood, JSX gets compiled into `React.createElement()` calls.

### 2. What is the difference between props and state?

Props are data passed from a parent component to a child component. They are read-only and cannot be changed inside the child. State is data that belongs to a component and can change over time — when it changes, React re-renders the component. In this project, I pass `tech`, `onAdd`, and `isSelected` as props to `TechCard`, and I keep `selectedTechs` as state in `ExploreSection`.

### 3. What does the useState hook do, and where did you use it in this project?

`useState` lets a component store and update its own data. It returns an array with the current value and a function to update it. In this project, I used `useState` in `ExploreSection` to store the fetched technologies (`technologies`) and the user's selected stack (`selectedTechs`). I also used it in `Navbar` to control the mobile menu open/close state.

### 4. What does the useEffect hook do, and why did you need it to load the JSON data?

`useEffect` runs side effects (like data fetching, subscriptions, or DOM updates) after a component renders. I used it to fetch `data.json` once when the app loads. The empty dependency array `[]` ensures it only runs on the first render, not on every re-render.

### 5. Why does every item in a .map() list need a unique key prop?

The `key` prop helps React identify which items in a list have changed, been added, or been removed. Without a unique key, React uses array indexes which can cause incorrect re-renders and bugs. In this project, I use `key={tech.id}` to give each card a unique identifier.

### 6. What is conditional rendering? Show one place you used it.

Conditional rendering means showing different UI based on a condition. In this project, I used it in `StackSidebar` — when `selectedTechs.length === 0`, I show an empty state ("Your stack is empty"), otherwise I show the list of selected technologies. I also used conditional rendering in `TechCard` to change the button text between "Add to Stack" and "✓ Added to Stack" based on the `isSelected` prop.

### 7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

I pass data from parent to child using **props**. For example, `ExploreSection` passes `tech`, `onAdd`, and `isSelected` to `TechCard`. For the child to send data back, the parent passes down a **function as a prop**. When `TechCard`'s button is clicked, it calls `onAdd(tech)`, which runs `handleAdd` in the parent. This is how the child communicates back to the parent without directly modifying the parent's state.

## 🚀 How to Run Locally

```bash
git clone https://github.com/shourovkumar/dev-stack-builder.git
cd dev-stack-builder
npm install
npm run dev
