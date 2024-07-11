import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
<<<<<<< HEAD
import './index.css'
// import { persistor, Store } from './Store';
// import { Provider } from 'react-redux';
// import { PersistGate } from 'redux-persist/integration/react';
import { Auth0Provider } from '@auth0/auth0-react';
=======
import "./index.css"
import './about.css'
>>>>>>> bc7eb0c1f9e19a998f78ba85ffcadce47571b473

ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>
    <Auth0Provider
      domain="dev-f8yk7f0bqush8t7v.us.auth0.com"
      clientId="aT3Lq8PUmyFOf05OTXLQIQTpshq2AsxA"
      authorizationParams={{
        redirect_uri: window.location.origin
      }}
    >
      {/* <Provider store={Store}> */}
        {/* <PersistGate loading={null} persistor={persistor}> */}
          <App />
        {/* </PersistGate> */}
      {/* </Provider> */}
    </Auth0Provider>
  </React.StrictMode>

)
