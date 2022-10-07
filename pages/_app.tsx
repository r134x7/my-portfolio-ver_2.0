import "../styles/globals.css";
// import Navigation from "../components/navigation";

// const App = () => <Navigation />; // running everything from Navigation.js


// export default App;
// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import App from './_app';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );
import type { AppProps } from 'next/app'
import Layout from "../components/layout";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>

  )
}

export default MyApp