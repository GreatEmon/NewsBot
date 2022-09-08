import React, { Component } from 'react'
import NewsItem from './NewsItem'

export default class News extends Component {
    
      constructor(){
        super();
        this.state ={
            articles : this.articles
        }
      }
    async componentDidMount(){
     let url ="https://newsapi.org/v2/everything?q=tesla&from=2022-08-05&sortBy=publishedAt&apiKey=c141dbcf8e8b4df99a231845da9c544a";
     let data =await fetch(url);
     let parsedata =await data.json()
     console.log(parsedata);
     this.setState(parsedata.article;
    }
  render() {
    return (
      <>
      <div className="container">
        <h2 className='my-3'>Top News Headline - NewsBot</h2>
        <div className="row mt-3">
            {this.articles.map((element)=>{
                return(
                    <NewsItem key={element.url} title={element.title.slice(0,48)} description={element.description.slice(0,95)} imgurl={element.urlToImage} newsurl={element.url}/>
                )
            })}
            
        </div>
      </div>
        
      </>
    )
  }
}
