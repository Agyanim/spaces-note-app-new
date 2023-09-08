import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "./app.css";
import { Provider } from 'react-redux'
import { store } from './app/store.js'
import { FolderCategoryProvider } from "./context/folderCategoryContex.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <FolderCategoryProvider>
        <App />
      </FolderCategoryProvider>
    </Provider>
  </React.StrictMode>
);
