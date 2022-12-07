import React from 'react'
import {QueryClient, QueryClientProvider} from "react-query";
import ReactDOM from 'react-dom/client'
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";
import App from './App'
import './index.css'

const store = {}
const queryClient = new QueryClient()
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <Provider store={store}>
          <BrowserRouter>
              <QueryClientProvider client={queryClient}>
                  <App />
              </QueryClientProvider>
          </BrowserRouter>
      </Provider>
  </React.StrictMode>
)
