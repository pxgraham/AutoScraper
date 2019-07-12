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
        <button className='lBtn' onClick={this.previousStory}>Previous</button>
        <button className='rBtn' onClick={this.nextStory}>Next</button>  
        {
              this.state.scrapeResults > -1 
              ? console.log()
              : this.state.scrapeResults[this.state.count].link.match(/^[\w\W]{18}/img)[0] === 'https://old.reddit'
                ? //its reddit
                <div className="container">
                    <div className="storyContainer">
                      <a 
                      className="storyTitle"
                      href={this.state.scrapeResults[this.state.count].link} 
                      target='_blank' rel="noopener noreferrer"
                      >
                        {this.state.scrapeResults[this.state.count].title}
                      </a>                                    
                    </div>
                    <div class="storyImgContainer">
                      <br />                      
                      <iframe class="storyImg" title="story" src={'https://www.bing.com/search?q=' + this.state.scrapeResults[this.state.count].title}></iframe>
                    </div>
                </div>
                : //its not reddit
                <div className="container">
                      <div className="storyContainer">
                        <a 
                        className="storyTitle"
                        href={this.state.scrapeResults[this.state.count].link} 
                        target='_blank' rel="noopener noreferrer"
                        >
                          {this.state.scrapeResults[this.state.count].title}
                        </a>                                    
                      </div>
                      <div class="storyImgContainer">
                        <br />                      
                        <iframe class="storyImg" title="story" src={this.state.scrapeResults[this.state.count].link}></iframe>
                      </div>
                  </div>
        }   
      </div>
    );
  }
}

export default App;
