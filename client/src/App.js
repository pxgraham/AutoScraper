import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

class App extends Component {
  state = {
    scrapeResults: [],
    count: 0,
    hasScraped: false
  }
  componentDidMount() {
      axios.get('/api/scrape')
      .then(res => {
        this.setState({ scrapeResults: res.data });
      })
      .catch(e => console.error(e))      
  }


  nextStory = () => {
    this.setState({ counta: this.state.count++ })
  }
  previousStory = () => {
    this.setState({ counta: this.state.count-- })
  }
  render() {    
    return (
      <div className='app'>    
        <button onClick={this.previousStory}>Previous</button>
        <button onClick={this.nextStory}>Next</button>  
        <ul> 
        {
              this.state.scrapeResults > -1 
              ? console.log()
              : <a 
                href={this.state.scrapeResults[this.state.count].link} 
                target='_blank' rel="noopener noreferrer">
                    {this.state.scrapeResults[this.state.count].title}
                </a>

        }   

        {/* 
          {          
            this.state.scrapeResults.map(r => (            
              <li key={r.title}>
                <p>Title: {r.title}</p>
                <a href={r.link} >Click Me!</a>
              </li>
            ))
          } 
        */}

        </ul>
      </div>
    );
  }
}

export default App;
