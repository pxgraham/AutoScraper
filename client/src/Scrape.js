import React from 'react';
import axios from 'axios';

import './scrape.css';

class Scrape extends React.Component {
  state = {
    hasScraped: false,
    scraping: false
  }

  startScrape = () => {
    this.setState({ scraping: true });
    axios.post('/api/scrape')
      .then(() => {
        this.setState({ hasScraped: true });
      })
      .catch(e => console.error(e));
  }
  
  render() {
    const gotoApp = () => {
      window.location.href = '/app'
    }
    return (
      <div>
        <div className="titleWrapper">
          <h1>Welcome to AutoScraper!</h1>
          <h2>Your trusted news source for all things news worthy</h2>
          <p>
            Currently all the news stories are comming from /r/webdev. 
            There will be more customizable options in the near future!
          </p>
          <p>
            Feel free to check out my other 
            <a href="https://github.com/pxgraham/" target="_blank"> projects </a> 
            and be sure to look out for new content on this site daily!
          </p>
        </div>
        <div className='wrapper'>
          {
            this.state.hasScraped
              ?  gotoApp() //scrape
              : this.state.scraping 
                ? <button 
                  className='scrape-button' 
                  >
                    Please wait . . . 
                  </button> //scraping..
                : <button 
                  className='scrape-button' 
                  onClick={this.startScrape}>
                    Start viewing
                  </button> //not scraped yet
              
          }
        </div>
      </div>
    );
  }
}
export default Scrape;
