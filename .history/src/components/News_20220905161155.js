import React, { Component } from 'react'
import NewsItem from './NewsItem'

export default class News extends Component {
    articles=[];
      constructor(){
        super();
        this.state = {
            articles : this.articles,
            page :1
        }
      }
    async componentDidMount(){
     let url =`https://newsapi.org/v2/everything?q=tesla&from=2022-08-05&sortBy=publishedAt&apiKey=c141dbcf8e8b4df99a231845da9c544a&page=${this.state}`;
     let data =await fetch(url);
     let parsedata =await data.json();
     this.setState({articles : parsedata.articles})
    }
    handlePrev = ()=>{

    } 
    handleNext =async ()=>{
         this.setState({
            page: this.state.page + 1
         })
    }
  render() {
    return (
      <>
      <div className="container">
        <h2 className='my-3'>Top News Headline - NewsBot</h2>
        <div className="row mt-3">
            {this.state.articles.map((element)=>{
                return(
                    <NewsItem key={element.url} title={element.title.slice(0,48)} description={element.description.slice(0,95)} imgurl={element.urlToImage} newsurl={element.url}/>
                )
            })}
            
        </div>
      </div>
      <div className="container d-flex justify-content-between pb-4">
        <button disabled={this.state.page<=1} type="button" class="btn btn-primary btn" onClick={this.handlePrev}>&larr;Previous</button>
        <button disabled={} type="button" class="btn btn-primary btn" onClick={this.handleNext}>Next&rarr;</button>
      </div>
      </>
    )
  }
}
