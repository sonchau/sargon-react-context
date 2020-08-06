import React from 'react';

import Layout from './components/Layout'
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'
import CreateGlobalStyles from "./CreateGlobalStyles"

import { Provider as PhotoProvider } from './context/PhotoContext';

function App() {
  return (
    <PhotoProvider>
      <CreateGlobalStyles />
        <Layout>
          <Header headerText="Sargon coding challenge" />
          <Main />
          <Footer user="Son Chau"
          link="https://github.com/sonchau/sargon-react-context"
          linkText="View code in Github Repos" />
        </Layout>
    </PhotoProvider>

  );
}

export default App;
