import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import NewsRow from './newsRow.js'
import $ from 'jquery'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {}

    this.performSearch()
  }

  performSearch(searchTerm) {
    console.log('Perform search using Hacker news')
    const urlString = 'https://hn.algolia.com/api/v1/search?query=' + searchTerm
    $.ajax({
      url: urlString,
      success: (searchResults) => {
        console.log('Fetched Data successfuly')
        // console.log(searchResults)
        
        const results = searchResults.results
        console.log(searchResults.hits[0])

        var newsRows = []
        searchResults.hits.forEach(post => {
          console.log(post.title)
          const newsRow = <NewsRow post={post} />
          newsRows.push(post)
        })

        this.setState({ rows: newsRows })
      },
      error: (xhr, status, err) => {
        console.error('Failed to fetch data')
        } 
    })
  }


  render() {
    return (
      <div className="webApp">
        <div className='row appHeader'>
          <div className='col-md-12'>
          <h1>Hacker News Search</h1>
          </div>
        </div>  
          < div className='row'>
            < div className='col-md-12'>
              <input className='searchBar text-center' placeholder='Please enter your search' />
            </div>
        </div>
        <div className='container'>  
          {this.state.rows}
        </div>
      </div>
    );
  }
}

export default App;
