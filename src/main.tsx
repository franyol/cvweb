import "./index.css";
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router";
import App from '@/App';
import "@/i18n"

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
