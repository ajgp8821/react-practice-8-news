import React, { Fragment, useState, useEffect } from 'react';
import Header from './components/Header';
import Form from './components/Form';
import NewsList from './components/NewsList';

function App() {

  // Definir la categoría y noticias
  const [ category, setCategory ] = useState('');
  const [ news, setNews ] = useState([]);
  const [ countries, setCountries ] = useState('');

  useEffect(() =>{

    const getApi = async() => {
      var countr = (countries === '') ? 've' : countries;
      
      // Consultamos la api
      const url = `https://newsapi.org/v2/top-headlines?country=${countr}&category=${category}&apiKey=e27ac33d291049adbf3c6693e919115c`;
      const resp = await fetch(url);

      const result = await resp.json();
      setNews(result.articles);
    }
    getApi();
  }, [category, countries])

  return (
    <Fragment>
      <Header
        title="Buscador de Noticias"
      />

      <div className="container white">
        <Form
          setCategory={setCategory}
          setCountries={setCountries}
        />

        <NewsList
          news={news}
        />
      </div>
    </Fragment>
  );
}

export default App;
