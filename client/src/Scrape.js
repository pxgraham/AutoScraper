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
      <div className='wrapper'>
        {
          this.state.hasScraped
            ?  gotoApp()
            : this.state.scraping 
              ? <button 
                className='scrape-button' 
                >
                  Please wait . . .
                </button>
              : <button 
                className='scrape-button' 
                onClick={this.startScrape}>
                  Start viewing
                </button> //not scraped yet
            
        }
      </div>
    );
  }
}
export default Scrape;
