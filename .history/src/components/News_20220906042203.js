import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import InfiniteScroll from "react-infinite-scroll-component";

export default class News extends Component {
     
     capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
      }
      constructor(props){
        super(props);
        
        this.state = {
            articles : [],
            page : 1,
            loading:true,
            totalResults:0
        }
        document.title = this.props.category?"NewsBot - " + this.capitalizeFirstLetter(this.props.category):"NewsBot - " +"Home"; 
      }
      
    async componentDidMount(){
        this.props.setProgress(5);
        this.setState({loading:true})
        let url =`https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}&apiKey=${this.props.apiKey}&page=1&pageSize=${this.props.pageSize}`;
        let data =await fetch(url);
        this.props.setProgress(40);
        let parsedata =await data.json();
        this.props.setProgress(70);
        this.setState({
          articles : parsedata.articles,
          totalResults:parsedata.totalResults,
          loading:false
        })
        this.props.setProgress(100);
    }
    // handlePrev =async ()=>{
    //     this.setState({loading:true})
    //     let url =`https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}&apiKey=c141dbcf8e8b4df99a231845da9c544aa&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
    //     let data =await fetch(url);
    //     let parsedata =await data.json();
    //     this.setState({
    //         page: this.state.page - 1,
    //         articles : parsedata.articles,
    //         totalResults :parsedata.totalResults,
    //         loading:false
    //     })
    // } 
    // handleNext =async ()=>{
    //     if(this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize)){
    //     }else{
    //     this.setState({loading:true});
    //     let url =`https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}&apiKey=c141dbcf8e8b4df99a231845da9c544a&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
    //     let data =await fetch(url);
    //     let parsedata =await data.json();
    //     this.setState({
    //         page: this.state.page + 1,
    //         articles : parsedata.articles,
    //         loading:false
    //     })
    // }
    // }

    fetchMoreData =async () => {
      this.setState({
        page: this.state.page + 1
      })
      let url =`https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
      let data =await fetch(url);
      let parsedata =await data.json();
      this.setState({
          articles :this.state.articles.concat(parsedata.articles),
          totalResults:parsedata.totalResults
      })
    }
  render() {
    return (
      <>
      
        <h2 className='my-4 text-center'>Top News Headline - {this.props.category?this.capitalizeFirstLetter(this.props.category):"All Category"}</h2>
        {this.state.loading && <Spinner/>}
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length != this.state.totalResults}
          loader={<Spinner/>}
        >
         <div className="container">
          <div className="row mt-3">
              {this.state.articles.map((element)=>{
                  return(
                      <NewsItem key={element.url} title={element.title?element.title.slice(0,45):"Custom Title"} description={element.description?element.description.slice(0,85):"lorem ipsum  dolae dsjd sds dssf sdfuhs dfisdjf shdfsd fhds dsfhdsf dsf dsh dfhdsufe"} imgurl={element.urlToImage} newsurl={element.url}/>
                  )
              })}
              
          </div>
        </div>
        </InfiniteScroll>
      {/* {!this.state.loading &&<div className="container d-flex justify-content-between pb-4">
        <button disabled={this.state.page<=1} type="button" className="btn btn-primary btn" onClick={this.handlePrev}>&larr;Previous</button>
        <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize)} type="button" className="btn btn-primary btn" onClick={this.handleNext} id="nextbtn">Next&rarr;</button>
      </div>} */}
      </>
    )
  }
}
