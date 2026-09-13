# Dev Stack Builder

Hey! This is my first React project — a small app I built while learning React and TypeScript. You can browse through some popular technologies, check their ratings and difficulty, and add the ones you like to your own stack.

## 🔗 Live Site

https://dev-stack-builder-by-sk.vercel.app/

## 🛠️ What I Used

- React (with hooks)
- TypeScript
- Vite
- Tailwind CSS
- React-Toastify
- JSON for the tech data

## ✨ What It Does

1. **Explore Technologies** — Shows 12 technologies in a card layout with icon, name, description, rating, difficulty, and badge.
2. **Build Your Stack** — Add any tech to your stack. No duplicates allowed. You can remove items one by one or clear the whole stack.
3. **Toast Alerts** — Every action (add, remove, duplicate) shows a toast so the user always knows what happened.

## 📝 React Questions

### 1. What is JSX, and why is it used in React?
JSX lets us write HTML-like code inside JavaScript. It makes React components easier to read because you can see the UI structure right in the code.

### 2. What is the difference between props and state?
Props are passed from parent to child and can't be changed by the child. State is data a component owns and can change itself. When state changes, React re-renders that component.

### 3. What does the useState hook do, and where did you use it?
useState lets a component remember and update its own data. I used it in `ExploreSection` for the fetched technologies and the selected stack, and in `Navbar` to control the mobile menu.

### 4. What does the useEffect hook do, and why did you need it?
useEffect is for side effects like fetching data. I used it to load my `data.json` file once when the app starts. The empty `[]` at the end makes sure it only runs once.

### 5. Why does every item in a .map() list need a unique key prop?
React uses the key to know which items changed, added, or removed. Without it, React might re-render incorrectly. I use `key={tech.id}` so each card has its own ID.

### 6. What is conditional rendering? Show one place you used it.
It means showing different UI based on a condition. In `StackSidebar`, if `selectedTechs.length === 0`, I show "Your stack is empty." Otherwise, I show the list.

### 7. How do you pass data from parent to child, and how does a child send something back?
Data goes down via props. To send data back, the parent passes a function as a prop — like `onAdd={handleAdd}` — and the child calls it when something happens.

## 🚀 Run It Locally

```bash
npm install
npm run dev

