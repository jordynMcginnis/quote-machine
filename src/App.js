import React, { Component } from 'react';
import './App.css';
var api = require('../utils/api');

class NextResults extends Component {

  render () {
    return (
      <div>
        <div className='both-buttons'>
          <button className='add-button' onClick={this.props.addItem}>Add to list +</button>
          <button
            onClick={this.props.updateQuote}
            className='next-button'>
              Next Quote >
          </button>
        </div>

        <div className='fav-quote-title'>
          <h1> Favorite Quotes </h1>
          <div className='list-item'>
            {this.props.listItem.length !== 0 ?
              <ul>
                {this.props.listItem.map(function(item){
                return <li className='li'key={item}>{item}</li>
              })}
                <button className='delete'onClick={this.props.deleteList}> Delete All Quotes </button>
              </ul>
            : <p> no favorite quotes</p>}
          </div>

        </div>

      </div>
    )
  }
}
class QuotesResults extends Component{
  render () {
    return (
      <div className='list-items'> <h1> {this.props.quote} </h1> </div>
    )
  }
}
class Results extends Component{
  constructor(props){
    super(props)
    this.state = {
      quote: null,
      list: []
    }
    this.updateQuote = this.updateQuote.bind(this);
    this.fetchQuote = this.fetchQuote.bind(this);
    this.addToList = this.addToList.bind(this);
    this.deleteList = this.deleteList.bind(this);
  }
  updateQuote (item){
    this.setState(function(){
      return {
        quote: null
      }
    });
    this.fetchQuote()
  }
  fetchQuote() {
    api.getQuote()
      .then(function(response){
        console.log(response)
        this.setState(function(){
          return {
            quote: response.quoteText
          }
        })
      }.bind(this))
  }
  addToList (item) {
    var newItem = this.state.quote
    this.setState(function(){
      return {
        list: this.state.list.concat([newItem])
      }
    })
    this.fetchQuote()
  }
  deleteList () {
    this.setState(function(){
      return {
        list: []
      }
    })
  }
  componentDidMount() {
    this.fetchQuote();
  }
  render () {
    return (
      <div className='main'>
        <div>{ !this.state.quote ? <p> Loading</p> : <QuotesResults quote={this.state.quote}/>} </div>
        <NextResults
          updateQuote={this.updateQuote}
          listItem={this.state.list}
          addItem={this.addToList}
          deleteList={this.deleteList}/>
      </div>
    )
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <Results />
        </div>
      </div>
    );
  }
}

export default App;
