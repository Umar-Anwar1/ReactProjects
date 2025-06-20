
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import { Store } from './redux/Store.jsx'
import { BrowserRouter } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'

createRoot(document.getElementById('root')).render(

  <BrowserRouter>

        <Provider store={Store}>
            <App />

            <ToastContainer />
        </Provider>

  </BrowserRouter>
    
)
