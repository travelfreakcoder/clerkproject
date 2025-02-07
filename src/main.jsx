import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import './index.css'
import App from "./App.jsx";
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import { Provider } from "react-redux";
import { ClerkProvider } from "@clerk/clerk-react";

import { persistor, store } from "./react-redux/store.js";
import { PersistGate } from "redux-persist/integration/react";

// Import your Publishable Key
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key")
}

// console.log(import.meta.env);

console.log(PUBLISHABLE_KEY);


const queryClient = new QueryClient();

createRoot(document.getElementById("root")).render(
  
  <QueryClientProvider client={queryClient}>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
      <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/">
        <App />
        </ClerkProvider>
      </PersistGate>
    </Provider>
  </QueryClientProvider>
  
);
