import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import './utils/network' // Initialize network utilities

// Register service worker for better offline handling
if ('serviceWorker' in navigator && import.meta.env.PROD) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js')
      .then((registration) => {
        console.log('SW registered: ', registration);
      })
      .catch((registrationError) => {
        console.log('SW registration failed: ', registrationError);
      });
  });
}

// Add error handling for the root render
try {
  const rootElement = document.getElementById("root");
  if (!rootElement) {
    throw new Error("Root element not found");
  }

  createRoot(rootElement).render(<App />);
} catch (error) {
  console.error('Failed to render app:', error);

  // Show a basic error message if React fails to load
  const rootElement = document.getElementById("root");
  if (rootElement) {
    rootElement.innerHTML = `
      <div style="
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        min-height: 100vh;
        font-family: Arial, sans-serif;
        text-align: center;
        padding: 20px;
      ">
        <h1 style="color: #dc2626; margin-bottom: 16px;">Loading Error</h1>
        <p style="margin-bottom: 24px;">Sorry, there was a problem loading the application.</p>
        <button
          onclick="window.location.reload()"
          style="
            background: #3b82f6;
            color: white;
            border: none;
            padding: 12px 24px;
            border-radius: 6px;
            cursor: pointer;
            font-size: 16px;
          "
        >
          Reload Page
        </button>
      </div>
    `;
  }
}
