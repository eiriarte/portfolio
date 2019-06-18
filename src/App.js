import React from 'react';
import LangContext from './context';
import Header from './Header';
import Intro from './Intro';
import Work from './Work';
import About from './About';
import Contact from './Contact';
import Footer from './Footer';
import works_es from './data/works_es.json';
import works_en from './data/works_en.json';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lang: 'es',
      works: works_es
    };
    this.handleLangClick = this.handleLangClick.bind(this);
  }

  handleLangClick(event) {
    event.preventDefault();
    this.setState((state) => ({
      lang: (state.lang === 'es' ? 'en' : 'es'),
      works: (state.lang === 'es' ? works_en : works_es)
    }));
  }

  render() {
    return (
      <LangContext.Provider value={this.state.lang}>
        <Header onLangClick={this.handleLangClick} />
        <Intro lang={this.state.lang} />
        <Work
          lang={this.state.lang}
          works={this.state.works}
        />
        <About lang={this.state.lang} />
        <Contact lang={this.state.lang} />
        <Footer lang={this.state.lang} />
      </LangContext.Provider>
    );
  }
}

export default App;
