import React, { Component } from 'react'
import NewsItem from './NewsItem'

export default class News extends Component {
    articles=[
        {
        "source": {
        "id": "independent",
        "name": "Independent"
        },
        "author": "Graig Graziosi",
        "title": "Marjorie Taylor Greene abandoned by right-wing reporters when more important Republican arrives - The Independent",
        "description": "Ms Greene was left hanging mid-sentence when Mr Mastriano arrived",
        "url": "https://www.independent.co.uk/news/world/americas/us-politics/marjorie-taylor-greene-doug-mastriano-republican-b2159657.html",
        "urlToImage": "https://static.independent.co.uk/2022/09/04/21/newFile.jpg?quality=75&width=1200&auto=webp",
        "publishedAt": "2022-09-05T06:16:23Z",
        "content": "A pair of reporters from the conservative Right Side Broadcasting Network covering former President Donald Trump's rally for Pennsylvania GOP candidates Dr Mehmet Oz and Doug Mastriano left Represent… [+2000 chars]"
        },
        {
        "source": {
        "id": "independent",
        "name": "Independent"
        },
        "author": "Jacob Stolworthy",
        "title": "The Whale: Brendan Fraser gets ‘huge round of applause’ after first screening of Darren Aronofsky film - The Independent",
        "description": "‘The Mummy’ actor’s Hollywood comeback could see him earn an Oscar nomination",
        "url": "https://www.independent.co.uk/arts-entertainment/films/news/the-whale-movie-brendan-fraser-darren-aronofsky-b2159767.html",
        "urlToImage": "https://static.independent.co.uk/2022/09/04/09/newFile-1.jpg?quality=75&width=1200&auto=webp",
        "publishedAt": "2022-09-05T05:17:10Z",
        "content": "Brendan Fraser is reportedly so good in his new film that he received a round of applause at the end of the its first screening\r\nThe Whale, a new psychological drama from Black Swan director Darren A… [+2042 chars]"
        },
        {
        "source": {
        "id": "the-washington-post",
        "name": "The Washington Post"
        },
        "author": "Rachel Pannett",
        "title": "Canada stabbing attacks: 10 dead in Saskatchewan, suspects at large - The Washington Post",
        "description": "Some of the people stabbed were “believed to be attacked randomly,” said a police official in Saskatchewan.",
        "url": "https://www.washingtonpost.com/world/2022/09/04/canada-stabbings-saskatchewan/",
        "urlToImage": "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://d1i4t8bqe7zgj6.cloudfront.net/09-04-2022/t_631ab9bf26774ec69da7d42c66d5d210_name_7EIFHZBMUII63PGGBB2LE2XCSY_scaled.jpg&w=1440",
        "publishedAt": "2022-09-05T05:14:00Z",
        "content": "Comment on this story\r\nTen people were killed and at least 15 were injured in a rash of stabbings that put the entire Canadian province of Saskatchewan on alert while police attempted to track down t… [+4298 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Bad Left Hook"
        },
        "author": "Scott Christ",
        "title": "Highlights: Andy Ruiz Jr drops Luis Ortiz three times, wins decision - Bad Left Hook",
        "description": "Andy Ruiz Jr scored three knockdowns, which ultimately made enough difference to get a win over Luis Ortiz.",
        "url": "https://www.badlefthook.com/2022/9/5/23337403/ruiz-vs-ortiz-full-fight-video-highlights-results-decision-scores-three-knockdowns-boxing-news-2022",
        "urlToImage": "https://cdn.vox-cdn.com/thumbor/MxVToAAiDNkaVhv-YBZb635G1_U=/0x111:1616x957/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/23996679/Fb3O9Y_UYAA1aXu.jpg",
        "publishedAt": "2022-09-05T04:33:29Z",
        "content": "Andy Ruiz Jr rode three knockdowns to a close decision win over Luis Ortiz tonight, picking up his second straight win following his 2019 rematch loss to Anthony Joshua.\r\nRuiz won on scores of 113-11… [+3013 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "CBS Sports"
        },
        "author": "Barrett Sallee",
        "title": "LSU vs. Florida State score, takeaways: Walk-off blocked extra point saves Seminoles from Tigers' late surge - CBS Sports",
        "description": "LSU appeared set for an epic comeback only for special teams to cost it with no time remaining",
        "url": "https://www.cbssports.com/college-football/news/lsu-vs-florida-state-score-takeaways-walk-off-blocked-extra-point-saves-noles-from-tigers-late-surge/live/",
        "urlToImage": "https://sportshub.cbsistatic.com/i/r/2022/09/05/393fca4a-e4f1-4e35-be65-7175459eb852/thumbnail/1200x675/93391b41c76e0d387cd1f7abd230c427/noles.jpg",
        "publishedAt": "2022-09-05T04:16:00Z",
        "content": "Despite a roaring comeback taking advantage of multiple Florida State miscues, it was LSU that made the final mistake on Sunday night in a 24-23 victory by the Seminoles at the Mercedes-Benz Superdom… [+6052 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Space.com"
        },
        "author": "Elizabeth Howell",
        "title": "SpaceX launches 51 Starlink satellites and a space tug to orbit - Space.com",
        "description": "It was SpaceX's 40th launch of 2022.",
        "url": "https://www.space.com/spacex-starlink-group-4-20-space-tug-launch",
        "urlToImage": "https://cdn.mos.cms.futurecdn.net/9sn8ayp4QWpzHpW6zyU8qR-1200-80.jpeg",
        "publishedAt": "2022-09-05T04:11:34Z",
        "content": "SpaceX sent a space tug aloft along with another big batch of its Starlink internet satellites on Sunday night (Sept. 4) — and landed a rocket on a ship at sea as well.\r\nA SpaceX\r\n Falcon 9 rocket li… [+2530 chars]"
        },
        {
        "source": {
        "id": "ign",
        "name": "IGN"
        },
        "author": "Adam Bankhurst",
        "title": "Amazon Introduced New Tactics to Combat The Lord of the Rings: The Rings of Power Review Bombing - IGN - IGN",
        "description": "Amazon has introduced a new 72-hour delay on user reviews in hope to combat internet trolls from review bombing shows like The Lord of the Rings: The Rings of Power.",
        "url": "https://www.ign.com/articles/amazon-introduced-new-tactics-to-combat-the-lord-of-the-rings-the-rings-of-power-review-bombing",
        "urlToImage": "https://assets-prd.ignimgs.com/2022/09/05/thelordoftheringstheringsofpowerofficialtrailer-ign-blogroll-1661267872316-1662350056924.jpg?width=1280",
        "publishedAt": "2022-09-05T04:00:32Z",
        "content": "Review bombing by internet trolls has become a huge problem and has caused sites like Rotten Tomatoes to show user scores for films and movies that are far lower than they should be. To help combat t… [+2224 chars]"
        },
        {
        "source": {
        "id": "cnn",
        "name": "CNN"
        },
        "author": "Amir Vera, Amanda Musa",
        "title": "Float plane carrying 10 people, including a child, crashes into Washington's Mutiny Bay, Coast Guard says - CNN",
        "description": "Rescuers are searching for nine people who are unaccounted for after a float plane crashed in Washington's Mutiny Bay Sunday afternoon, officials said.",
        "url": "https://www.cnn.com/2022/09/04/us/mutiny-bay-washington-plane-crash/index.html",
        "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/220905003331-01-mutiny-bay-washington-plane-crash.jpg?q=w_800,c_fill",
        "publishedAt": "2022-09-05T03:39:00Z",
        "content": "Rescuers are searching for nine people who are unaccounted for after a float plane crashed in Washingtons Mutiny Bay Sunday afternoon, officials said.\r\nTen people, including a child, were on board th… [+783 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Hollywood Reporter"
        },
        "author": "Carolyn Giardina",
        "title": "2022 Creative Arts Emmys Night Two Winners List – The Hollywood Reporter - Hollywood Reporter",
        "description": "Netflix’s Stranger Things, HBO’s Euphoria, HBO’s The White Lotus, Disney+ docuseries The Beatles: Get Back and CBS and Paramount+ special Adele: One Night Only were the big winners at the Creative Arts Emmys, collecting five awards apiece over the two nights.…",
        "url": "https://www.hollywoodreporter.com/tv/tv-news/creative-arts-emmys-2022-night-two-winners-list-1235207232/",
        "urlToImage": "https://www.hollywoodreporter.com/wp-content/uploads/2022/09/Emmys-2022-Lee-Yoo-Mi-Acceptance-Publicity-H-2022.jpg?w=1024",
        "publishedAt": "2022-09-05T03:18:22Z",
        "content": "Netflix’s Stranger Things, HBO’s Euphoria, HBO’s The White Lotus, Disney+ docuseries The Beatles: Get Back and CBS and Paramount+ special Adele: One Night Only were the big winners at the Creative Ar… [+60582 chars]"
        },
        {
        "source": {
        "id": "cnn",
        "name": "CNN"
        },
        "author": "Eleanor Pickston and Lauren Said-Moorhouse, CNN",
        "title": "Foo Fighters pay tribute to drummer Taylor Hawkins at emotional London concert - CNN",
        "description": "A star-studded line-up, including Paul McCartney and Liam Gallagher, joined the Foo Fighters for an emotional tribute to the band's drummer Taylor Hawkins at a concert in London on Saturday night.",
        "url": "https://www.cnn.com/2022/09/04/uk/foo-fighters-taylor-hawkins-concert-intl-gbr-scli/index.html",
        "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/220904115014-04-taylor-hawkins-tribute-concert-0903-super-tease.jpg",
        "publishedAt": "2022-09-05T02:56:00Z",
        "content": "London (CNN)A star-studded line-up, including Paul McCartney and Liam Gallagher, joined the Foo Fighters for an emotional tribute to the band's drummer Taylor Hawkins at a concert in London on Saturd… [+3229 chars]"
        },
        {
        "source": {
        "id": "cnn",
        "name": "CNN"
        },
        "author": "Tina Burnside, CNN",
        "title": "A suspect has been charged in the abduction of Eliza Fletcher, but the Memphis teacher remains missing, police say - CNN",
        "description": "A man has been charged in connection with the disappearance of a Memphis teacher investigators believe was abducted while she was out for a jog Friday morning, police said.",
        "url": "https://www.cnn.com/2022/09/04/us/memphis-eliza-fletcher-missing-teacher-suspect-charged/index.html",
        "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/220902144858-01-memphis-missing-teacher-fletcher-super-tease.jpg",
        "publishedAt": "2022-09-05T02:34:00Z",
        "content": "(CNN)A man has been charged in connection with the disappearance of a Memphis teacher investigators believe was abducted while she was out for a jog Friday morning, police said. \r\nCleotha Abston, 38,… [+3553 chars]"
        },
        {
        "source": {
        "id": "the-wall-street-journal",
        "name": "The Wall Street Journal"
        },
        "author": "Ginger Adams Otis and Ryan Felton",
        "title": "Bed Bath & Beyond Finance Chief Gustavo Arnal Found Dead - The Wall Street Journal",
        "description": "The 52-year-old executive died by suicide two days after he had briefed investors on the home-goods retailer’s plans to secure new financing, slash jobs and close about a fifth of its stores.",
        "url": "https://www.wsj.com/articles/bed-bath-beyond-confirms-death-of-cfo-gustavo-arnal-11662310176",
        "urlToImage": "https://images.wsj.net/im-614043/social",
        "publishedAt": "2022-09-05T00:58:00Z",
        "content": null
        },
        {
        "source": {
        "id": "reuters",
        "name": "Reuters"
        },
        "author": null,
        "title": "Mississippi city says water pressure restored for now but setbacks possible - Reuters.com",
        "description": "The city of Jackson, Mississippi, said most water pressure returned to normal on Sunday, a week after its main treatment plant failed, while U.S. officials warned it was still too early to say when a reliable supply of drinking water can be restored.",
        "url": "https://www.reuters.com/world/us/fema-says-too-early-say-when-mississippi-water-plant-will-be-fixed-2022-09-04/",
        "urlToImage": "https://www.reuters.com/resizer/7Y5OyRgKGmhe-GGo7ntYeSL-CmQ=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/D7IDA7MYCNJIVAVUTMW56HPIFQ.jpg",
        "publishedAt": "2022-09-05T00:45:00Z",
        "content": "Sept 4 (Reuters) - The city of Jackson, Mississippi, said most water pressure returned to normal on Sunday, a week after its main treatment plant failed, while U.S. officials warned it was still too … [+2625 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "The Guardian"
        },
        "author": "Guardian staff reporter",
        "title": "Cyrus Mistry, billionaire ex-chairman of Tata Sons, dies in India car crash - The Guardian",
        "description": "Prime minister Narendra Modi says 54-year-old’s death ‘a big loss’ as politicians and business leaders express shock after accident near Mumbai",
        "url": "https://amp.theguardian.com/world/2022/sep/05/cyrus-mistry-billionaire-ex-chairman-of-tata-sons-dies-in-india-car-crash",
        "urlToImage": "https://i.guim.co.uk/img/media/1ad3e9ef70d420f887a9799b53fbb462d7ed569a/0_268_5330_3200/master/5330.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=60a7c67bce20a76ac5c6868d14e2812d",
        "publishedAt": "2022-09-05T00:04:00Z",
        "content": "Cyrus Mistry, an Indian-born Irish businessman and former chairman of Indian conglomerate Tata Sons, has died in an accident after his car crashed into a road divider in western India, police said. H… [+1867 chars]"
        },
        {
        "source": {
        "id": "reuters",
        "name": "Reuters"
        },
        "author": null,
        "title": "Zelenskiy says Ukraine takes three settlements in south, east - Reuters.com",
        "description": "President Volodymyr Zelenskiy on Sunday marked progress in a counter-offensive Ukraine that began last week, thanking his forces for taking two settlements in the south, a third in the east, as well as additional territory in the east of the country.",
        "url": "https://www.reuters.com/world/europe/zelenskiy-says-ukraine-takes-three-settlements-south-east-2022-09-04/",
        "urlToImage": "https://www.reuters.com/resizer/GWmtAzmZt90uvS24RqIrXFp9vl0=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/VA6XVNZNPFKJRDM3WJAIIXAOZ4.jpg",
        "publishedAt": "2022-09-04T23:12:00Z",
        "content": "Sept 4 (Reuters) - President Volodymyr Zelenskiy on Sunday marked progress in a counter-offensive Ukraine that began last week, thanking his forces for taking two settlements in the south, a third in… [+1730 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "YouTube"
        },
        "author": null,
        "title": "Georgia under flood alert after heavy rain while the West faces dangerous heat - NBC News",
        "description": "Torrential rain sparked flash floods across northern Georgia, with more than 12 inches of rain falling in areas in a matter of hours. The governor declared a...",
        "url": "https://www.youtube.com/watch?v=xfjDiPWVUZA",
        "urlToImage": "https://i.ytimg.com/vi/xfjDiPWVUZA/hqdefault.jpg",
        "publishedAt": "2022-09-04T23:00:57Z",
        "content": null
        }
        ]
    //   constructor(){
    //     super();
    //   }
    componentDidMount(){
     let url =
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
