import { createRoot } from "react-dom/client";

function App() {
  return <h1>The plugin is working!</h1>;
}

createRoot(document.querySelector("[data-react-root]")!).render(<App />);
