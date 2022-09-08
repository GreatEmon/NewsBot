import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';

export default class News extends Component {
     
      // articles= [
      //   {
      //   "source": {
      //   "id": null,
      //   "name": "Seeking Alpha"
      //   },
      //   "author": "Cavenagh Research",
      //   "title": "Aurora Innovation: CEO Hints Possible Sale To Apple Or Microsoft",
      //   "description": "Aurora Innovation's internal memo hinted on Apple and Microsoft as potential acquirers. Read more to see why I rate AUR stock a speculative buy.",
      //   "url": "https://seekingalpha.com/article/4538984-aurora-innovation-possible-sale-apple-or-microsoft",
      //   "urlToImage": "https://static.seekingalpha.com/cdn/s3/uploads/getty_images/1351045479/image_1351045479.jpg?io=getty-c-w750",
      //   "publishedAt": "2022-09-05T11:14:50Z",
      //   "content": "gorodenkoff\r\nThesis\r\n Aurora Innovation (NASDAQ:AUR) stock surged as much as 25% on Friday, 2nd September, after a company-internal memo hinted on Apple (AAPL) and Microsoft (MSFT) as potential acqui… [+5583 chars]"
      //   },
      //   {
      //   "source": {
      //   "id": "business-insider",
      //   "name": "Business Insider"
      //   },
      //   "author": "tmohamed@businessinsider.com (Theron Mohamed)",
      //   "title": "Warren Buffett's Berkshire Hathaway has sold about $600 million of Chinese EV maker BYD's stock in under 2 months",
      //   "description": "Buffett's company has trimmed its stake in the automaker by 8% since mid-July, making a roughly 35-fold return on its money.",
      //   "url": "https://markets.businessinsider.com/news/stocks/warren-buffett-berkshire-hathaway-byd-china-ev-stock-sales-auto-2022-9",
      //   "urlToImage": "https://i.insider.com/5f4c5e417ffa48002894d157?width=1200&format=jpeg",
      //   "publishedAt": "2022-09-05T11:09:58Z",
      //   "content": "Warren Buffett's Berkshire Hathaway has cashed in about $600 million of BYD stock in under two months, pocketing a roughly 35-fold profit on the Chinese rival to Elon Musk's Tesla, a Markets Insider … [+1916 chars]"
      //   },
      //   {
      //   "source": {
      //   "id": null,
      //   "name": "Motley Fool"
      //   },
      //   "author": "newsfeedback@fool.com (Anthony Di Pizio)",
      //   "title": "1 Stock-Split Stock Set to Soar 641% From Its 52-Week Low, According to Cathie Wood",
      //   "description": "Reaping the rewards of disruptive innovation takes time, but the potential payoff can be well worth the wait.",
      //   "url": "https://www.fool.com/investing/2022/09/05/1-stock-split-stock-641-52-week-low-cathie-wood/",
      //   "urlToImage": "https://g.foolcdn.com/editorial/images/698836/a-black-tesla-car-driving-on-an-open-road-in-the-snow.jpg",
      //   "publishedAt": "2022-09-05T11:00:00Z",
      //   "content": "Technology has been one of the worst-performing sectors in the stock market this year, which is in stark contrast to its monster gains during 2020 and 2021. Not even prolific tech investor Cathie Woo… [+4401 chars]"
      //   },
      //   {
      //   "source": {
      //   "id": null,
      //   "name": "Yahoo Entertainment"
      //   },
      //   "author": "Research and Markets",
      //   "title": "United States Electric Vehicle Fluids Market Outlook 2022-2027 - Increasing Demand for Optimising Electric Vehicle Fluids",
      //   "description": "Dublin, Sept. 05, 2022 (GLOBE NEWSWIRE) -- The \"U.S. Electric Vehicle Fluids Market - Industry Outlook & Forecast 2022-2027\" report has been added to...",
      //   "url": "https://finance.yahoo.com/news/united-states-electric-vehicle-fluids-101800602.html",
      //   "urlToImage": "https://s.yimg.com/uu/api/res/1.2/HP.E8HUfnyGeLtMAKwLgAQ--~B/aD01ODt3PTQ4MDthcHBpZD15dGFjaHlvbg--/https://media.zenfs.com/en/globenewswire.com/93d5b27580f67db722dd7c112e43e8bc",
      //   "publishedAt": "2022-09-05T10:18:00Z",
      //   "content": "Dublin, Sept. 05, 2022 (GLOBE NEWSWIRE) -- The \"U.S. Electric Vehicle Fluids Market - Industry Outlook &amp; Forecast 2022-2027\" report has been added to ResearchAndMarkets.com's offering.\r\nThe U.S. … [+10272 chars]"
      //   },
      //   {
      //   "source": {
      //   "id": null,
      //   "name": "City A.M."
      //   },
      //   "author": "Darren Parkin",
      //   "title": "Bitcoin holding ground in a narrow range, but struggling to breach $20,000",
      //   "description": "Bitcoin is currently changing hands for $19,783.04, up 0.25 per cent over the past 24 hours as it holds below $20,000.\nThe post Bitcoin holding ground in a narrow range, but struggling to breach $20,000 appeared first on CityAM.",
      //   "url": "https://www.cityam.com/bitcoin-holding-ground-in-a-narrow-range-but-struggling-to-breach-20000/",
      //   "urlToImage": "https://www.cityam.com/wp-content/uploads/2022/08/CAMD-G89-1024-luno.jpg",
      //   "publishedAt": "2022-09-05T10:16:58Z",
      //   "content": "Monday 05 September 2022 11:16 am\r\nBitcoin struggled to gain a foothold above $20k over the weekend, continuing to trade in a narrow range between $19,700 and $20,400. The largest cryptocurrency by m… [+5548 chars]"
      //   },
      //   {
      //   "source": {
      //   "id": null,
      //   "name": "Electrek"
      //   },
      //   "author": "Fred Lambert",
      //   "title": "Tesla prepares launch in Thailand with hiring spree",
      //   "description": "Tesla is preparing to launch its electric vehicles in Thailand for the first time with a significant hiring spree.\n more…\nThe post Tesla prepares launch in Thailand with hiring spree appeared first on Electrek.",
      //   "url": "https://electrek.co/2022/09/05/tesla-prepares-launch-in-thailand-with-hiring-spree/",
      //   "urlToImage": "https://i0.wp.com/electrek.co/wp-content/uploads/sites/3/2020/04/Tesla-Model-3-police-thai-3.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
      //   "publishedAt": "2022-09-05T10:10:05Z",
      //   "content": "Tesla is preparing to launch its electric vehicles in Thailand for the first time with a significant hiring spree.\r\nIt has been a little while since Tesla has expanded into a brand-new market. The co… [+2262 chars]"
      //   },
      //   {
      //   "source": {
      //   "id": null,
      //   "name": "Tech Times"
      //   },
      //   "author": "Teejay Boris",
      //   "title": "Elon Musk's Crypto Interview Makes it to South Korean Government's YouTube After it Got Hacked",
      //   "description": "Besides the new video, the channel also got a new sketchy name.",
      //   "url": "https://www.techtimes.com/articles/280111/20220905/elon-musk-crypto-interview-korea-youtube-south-korea-youtube-hack-elon-musk-crypto-youtube.htm",
      //   "urlToImage": "https://1734811051.rsc.cdn77.org/data/images/full/410339/elon-musk.jpg",
      //   "publishedAt": "2022-09-05T09:30:00Z",
      //   "content": "An Elon Musk cryptocurrency interview has been uploaded on the official YouTube channel of the South Korean government after hackers have successfully taken over it.\r\nThe hackers have also revamped t… [+2935 chars]"
      //   },
      //   {
      //   "source": {
      //   "id": null,
      //   "name": "Blockworks.co"
      //   },
      //   "author": "Sebastian Sinclair",
      //   "title": "Crypto Crooks Push Musk, XRP Scams in Weekend Hacking Spree",
      //   "description": "Crypto scams ran wild over the weekend, indicating there's no bear market for fraud\nThe post Crypto Crooks Push Musk, XRP Scams in Weekend Hacking Spree appeared first on Blockworks.",
      //   "url": "http://blockworks.co/crypto-crooks-push-musk-xrp-scams-in-weekend-hacking-spree/",
      //   "urlToImage": "https://blockworks.co/wp-content/uploads/2022/09/Shutterstock_1744649822.jpg",
      //   "publishedAt": "2022-09-05T09:07:58Z",
      //   "content": "<ul><li>This is the third hack in one week for South Korea’s official social media channels</li><li>Google Korea is now investigating most recent YouTube incident along with Seouls cyber crimes unit<… [+2452 chars]"
      //   },
      //   {
      //   "source": {
      //   "id": null,
      //   "name": "New Atlas"
      //   },
      //   "author": "Loz Blain",
      //   "title": "Puros motorcycle helmet pipes you HEPA-filtered air as you ride",
      //   "description": "The road is a rich olfactory experience behind the handlebars of a motorcycle. That can be a great thing; the smell of a log fire, or ocean surf, or pine forest can definitely enhance your day. On other occasions, such as overtaking a truck full of sheep, you…",
      //   "url": "https://newatlas.com/motorcycles/puros-hepa-air-filter-helmet/",
      //   "urlToImage": "https://assets.newatlas.com/dims4/default/81e651d/2147483647/strip/true/crop/1413x742+0+100/resize/1200x630!/quality/90/?url=http%3A%2F%2Fnewatlas-brightspot.s3.amazonaws.com%2Ff6%2F2d%2Fd64c89de49d2b4034e610fd091b4%2Ffourth-4.4_1200x1200.jpg&na.image_optimisation=0",
      //   "publishedAt": "2022-09-05T09:00:37Z",
      //   "content": "The road is a rich olfactory experience behind the handlebars of a motorcycle. That can be a great thing; the smell of a log fire, or ocean surf, or pine forest can definitely enhance your day. On ot… [+1633 chars]"
      //   },
      //   {
      //   "source": {
      //   "id": null,
      //   "name": "NDTV News"
      //   },
      //   "author": null,
      //   "title": "Elon Musk Says Chris Rock Has Invited Him To Open One Of His Shows",
      //   "description": "Tesla CEO Elon Musk on Sunday revealed that comedian Chris Rock has invited him to open one of his forthcoming shows.",
      //   "url": "https://www.ndtv.com/world-news/elon-musk-says-chris-rock-has-invited-him-to-open-one-of-his-shows-3316704",
      //   "urlToImage": "https://c.ndtvimg.com/2022-08/s9s7hjo_elon-musk_625x300_31_August_22.jpg",
      //   "publishedAt": "2022-09-05T08:34:05Z",
      //   "content": "Internet users were quick to react to Mr Musk's announcement.\r\nTesla CEO Elon Musk on Sunday revealed that comedian Chris Rock has invited him to open one of his forthcoming shows. \r\nThe news emerged… [+1676 chars]"
      //   },
      //   {
      //   "source": {
      //   "id": null,
      //   "name": "CleanTechnica"
      //   },
      //   "author": "Zachary Shahan",
      //   "title": "Tesla Is 7th Best Selling Auto Brand In Australia In August!",
      //   "description": "Tesla vehicles have poured into Australia recently. Just like in Australia’s regional neighbor New Zealand, electric vehicles (EVs) have been shattering records Down Under. Also just like in New Zealand, EV sales have been led by Tesla. The Tesla Model 3 actu…",
      //   "url": "https://cleantechnica.com/2022/09/05/tesla-is-7th-best-selling-auto-brand-in-australia-in-august/",
      //   "urlToImage": "https://cleantechnica.com/files/2022/09/Australia-top-10-autos-august-2022-CleanTechnica.png",
      //   "publishedAt": "2022-09-05T08:13:31Z",
      //   "content": "Tesla vehicles have poured into Australia recently. Just like in Australia’s regional neighbor New Zealand, electric vehicles (EVs) have been shattering records Down Under. Also just like in New Zeal… [+2069 chars]"
      //   },
      //   {
      //   "source": {
      //   "id": null,
      //   "name": "Daily Mail"
      //   },
      //   "author": "Paul Thompson",
      //   "title": "A40 crash Range Rover driver remains in 'critical condition' in hospital as police inquiry continues",
      //   "description": "EXCLUSIVE: Rida Al Mousawi, 24, the driver of the Range Rover involved in the high-speed fatal crash on the A40 on August 22, has suffered a setback in his recovery and remains in a coma.",
      //   "url": "https://www.dailymail.co.uk/news/article-11180623/A40-crash-Range-Rover-driver-remains-critical-condition-hospital-police-inquiry-continues.html",
      //   "urlToImage": "https://i.dailymail.co.uk/1s/2022/09/05/08/62063323-0-image-a-4_1662364691992.jpg",
      //   "publishedAt": "2022-09-05T08:05:30Z",
      //   "content": "The driver of the Range Rover involved in the high-speed fatal crash on the A40 has suffered a setback in his recovery and remains in a coma.\r\nDoctors had hoped to bring Rida Al Mousawi out of a medi… [+3495 chars]"
      //   },
      //   {
      //   "source": {
      //   "id": null,
      //   "name": "HYPEBEAST"
      //   },
      //   "author": "info@hypebeast.com (HYPEBEAST), HYPEBEAST",
      //   "title": "Nate Diaz to Launch Combat Sports Promotion, \"Real Fight Inc.\"",
      //   "description": "As 37-year-old veteran, Nate Diaz prepares to face off against rising star Khamzat Chimaev at UFC 279 on September 11 in what could potentially be his last fight in the UFC, Diaz announces the launch of his own combat sports promotion, Real Fight Inc.Having b…",
      //   "url": "https://hypebeast.com/2022/9/nate-diaz-combat-sports-promotion-real-fight-inc-launch-info",
      //   "urlToImage": "https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2022%2F09%2Fnate-diaz-combat-sports-promotion-real-fight-inc-launch-info-tw.jpg?w=960&cbr=1&q=90&fit=max",
      //   "publishedAt": "2022-09-05T08:05:13Z",
      //   "content": "As 37-year-old veteran, Nate Diaz prepares to face off against rising star Khamzat Chimaev at UFC 279 on September 11 in what could potentially be his last fight in the UFC, Diaz announces the launch… [+2071 chars]"
      //   },
      //   {
      //   "source": {
      //   "id": null,
      //   "name": "Torrentfreak.com"
      //   },
      //   "author": "Andy Maxwell",
      //   "title": "Pirate IPTV: Couple Sold Illegal Subscriptions & Laundered Money",
      //   "description": "A man has gone on trial in Sweden accused of selling pirate IPTV subscriptions and pre-configured set-top boxes. A two-year investigation led to the seizure of almost $93,000 in cash and a Tesla. After claiming she was unaware of her partner's activities, a w…",
      //   "url": "https://torrentfreak.com/pirate-iptv-couple-sold-illegal-subscriptions-laundered-money-220905/",
      //   "urlToImage": "https://torrentfreak.com/images/iptv-movies-film-feat.jpg",
      //   "publishedAt": "2022-09-05T07:43:05Z",
      //   "content": "For more than 15 years, most piracy headlines in Sweden had some connection to The Pirate Bay. \r\nPerhaps anti-piracy groups grew tired of chasing and then the media moved on, but today it’s barely me… [+4804 chars]"
      //   },
      //   {
      //   "source": {
      //   "id": "abc-news-au",
      //   "name": "ABC News (AU)"
      //   },
      //   "author": "ABC News",
      //   "title": "The most important cryptocurrency event in years is about to begin – and the biggest windfall goes to the planet",
      //   "description": "Amid the continuous noise about cryptocurrencies, it's often hard to pick out what really matters. However this month, if all goes to plan, the energy-hungry digital sector will undergo its biggest shake-up in years, writes John Quiggan.",
      //   "url": "https://www.abc.net.au/news/2022-09-05/cryptocurrency-ethereum-bitcoin-carbon-emissions/101407134",
      //   "urlToImage": "https://live-production.wcms.abc-cdn.net.au/9cbb9db4f1b3b9d450d58f92635cc001?impolicy=wcms_crop_resize&cropH=2813&cropW=5000&xPos=0&yPos=189&width=862&height=485",
      //   "publishedAt": "2022-09-05T05:56:07Z",
      //   "content": "Amid the continuous noise about cryptocurrencies, it's often hard to pick out what really matters.\r\nHowever this month, if all goes to plan, the energy-hungry digital sector will undergo its biggest … [+6003 chars]"
      //   },
      //   {
      //   "source": {
      //   "id": null,
      //   "name": "CleanTechnica"
      //   },
      //   "author": "Zachary Shahan",
      //   "title": "Electric Cars = 23% of New Zealand Auto Market, Tesla = 12%",
      //   "description": "New Zealand has gotten the electric car fever, and August showed that more than ever before. Last month, 23% of new auto sales were sales of fully electric cars. (Adding in hybrids would bring the total share of “green(er)” vehicles to 44%.) Interestingly, th…",
      //   "url": "https://cleantechnica.com/2022/09/05/electric-cars-23-of-new-zealand-auto-market-tesla-12/",
      //   "urlToImage": "https://cleantechnica.com/files/2021/10/NZ-view-1-e1634347878963.jpg",
      //   "publishedAt": "2022-09-05T05:48:08Z",
      //   "content": "New Zealand has gotten the electric car fever, and August showed that more than ever before. Last month, 23% of new auto sales were sales of fully electric cars. (Adding in hybrids would bring the to… [+1313 chars]"
      //   },
      //   {
      //   "source": {
      //   "id": null,
      //   "name": "Erickimphotography.com"
      //   },
      //   "author": "ERIC KIM",
      //   "title": "How to Build More Clout",
      //   "description": "Clout — to ball up, amass. Perhaps clout is actually more important than money. 1. Don’t be disingenuous The first simple thought is this: don’t be disingenuous. Everyone is honest in different ways; just stick to your own gut in terms of what feels right, an…",
      //   "url": "https://erickimphotography.com/blog/2022/09/05/how-to-build-more-clout/",
      //   "urlToImage": "https://i0.wp.com/erickimphotography.com/blog/wp-content/uploads/2022/09/HOW-TO-INCREASE-YOUR-CLOUT-ALL-m4a-image.jpg?fit=960%2C540&ssl=1",
      //   "publishedAt": "2022-09-05T05:44:30Z",
      //   "content": "Clout to ball up, amass.\r\nPerhaps clout is actually more important than money.\r\n1. Dont be disingenuous\r\nThe first simple thought is this: dont be disingenuous. Everyone is honest in different ways; … [+8319 chars]"
      //   },
      //   {
      //   "source": {
      //   "id": null,
      //   "name": "Gizmodo Australia"
      //   },
      //   "author": "Zachariah Kelly",
      //   "title": "A Tesla Powered by Printed Solar Cells is Travelling Along Australia’s Coastline",
      //   "description": "Printed solar cells will power an electric vehicle as it journeys across the coastline of Australia, powered by transportable solar power. \nThe post A Tesla Powered by Printed Solar Cells is Travelling Along Australia’s Coastline appeared first on Gizmodo Aus…",
      //   "url": "https://www.gizmodo.com.au/2022/09/printed-solar-electric-vehicle/",
      //   "urlToImage": "https://www.gizmodo.com.au/wp-content/uploads/sites/2/2022/09/05/printed-solar-electric-vehicle.png?quality=80&resize=1280,720",
      //   "publishedAt": "2022-09-05T05:34:13Z",
      //   "content": "Printed, easily transported solar cells could be the future of charging electric vehicles in Australia, as an advocate begins a road trip around the country with the assistance of the University of N… [+4386 chars]"
      //   },
      //   {
      //   "source": {
      //   "id": null,
      //   "name": "The Diplomat"
      //   },
      //   "author": "Danielle Fallin and Karen Lee",
      //   "title": "Southeast Asia Hopes to Become the World’s Next EV Hub",
      //   "description": "A number of nations hope to carve out lucrative market niches as global sales of electric vehicles begin to take off.",
      //   "url": "https://thediplomat.com/2022/09/southeast-asia-hopes-to-become-the-worlds-next-ev-hub/",
      //   "urlToImage": "https://thediplomat.com/wp-content/uploads/2022/09/sizes/td-story-s-2/thediplomat_2022-09-05-051542.jpg",
      //   "publishedAt": "2022-09-05T05:09:00Z",
      //   "content": "Advertisement\r\nAs countries around the world strive to reach their climate targets, many are turning to electric vehicles (EVs) as a way of reducing carbon emissions. Global efforts to diversify supp… [+7551 chars]"
      //   },
      //   {
      //   "source": {
      //   "id": null,
      //   "name": "Gizmodo Australia"
      //   },
      //   "author": "Lawrence Hodge",
      //   "title": "New California Bill Will Pay Residents Around $AU1,500 for Not Owning a Car",
      //   "description": "California state officials are doing everything they can to bring down the state’s emissions, even though the grid isn’t quite...\nThe post New California Bill Will Pay Residents Around $AU1,500 for Not Owning a Car appeared first on Gizmodo Australia.\n\n  Rela…",
      //   "url": "https://www.gizmodo.com.au/2022/09/new-california-bill-will-pay-residents-around-au1500-for-not-owning-a-car/",
      //   "urlToImage": "https://www.gizmodo.com.au/wp-content/uploads/sites/2/2022/09/03/ecbbdf07ebdaa2f4fc177f5dfce7c421.jpg?quality=80&resize=1280,720",
      //   "publishedAt": "2022-09-05T05:00:46Z",
      //   "content": "California state officials are doing everything they can to bring down the states emissions, even though the grid isnt quite up to the task of handling all those EVs. On Wednesday, state officials to… [+2040 chars]"
      //   },
      //   {
      //   "source": {
      //   "id": null,
      //   "name": "The Conversation Africa"
      //   },
      //   "author": "John Quiggin, Professor, School of Economics, The University of Queensland",
      //   "title": "The most important cryptocurrency event in years is about to begin – and the biggest windfall goes to the planet",
      //   "description": "The landmark change places Bitcoin and other cryptocurrencies under immense pressure to follow suit.",
      //   "url": "https://theconversation.com/the-most-important-cryptocurrency-event-in-years-is-about-to-begin-and-the-biggest-windfall-goes-to-the-planet-189630",
      //   "urlToImage": "https://images.theconversation.com/files/482452/original/file-20220902-18-jpygje.jpg?ixlib=rb-1.1.0&rect=23%2C716%2C5114%2C2557&q=45&auto=format&w=1356&h=668&fit=crop",
      //   "publishedAt": "2022-09-05T04:36:26Z",
      //   "content": "Dave Hunt/AAP\r\nAmid the continuous noise about cryptocurrencies, it’s often hard to pick out what really matters. However this month, if all goes to plan, the energy-hungry digital sector will underg… [+6316 chars]"
      //   },
      //   {
      //   "source": {
      //   "id": null,
      //   "name": "International Business Times"
      //   },
      //   "author": "Nica Osorio",
      //   "title": "South Korean Government's YouTube Channel Hacked To Play Elon Musk Video",
      //   "description": "The Youtube account has been recovered a few hours after it was hacked.",
      //   "url": "https://www.ibtimes.com/south-korean-governments-youtube-channel-hacked-play-elon-musk-video-3609292",
      //   "urlToImage": "https://d.ibtimes.com/en/full/3808547/twitter-will-have-turn-over-additional-account-data-elon-musk-part-their-legal-fight.jpg",
      //   "publishedAt": "2022-09-05T04:10:15Z",
      //   "content": "KEY POINTS\r\n<ul><li>A video of Elon Musk appeared in a hacked YouTube channel</li><li>It showed the Tesla CEO discussing about cryptocurrency</li><li>Fake videos of Musk are often used by frauds to s… [+2309 chars]"
      //   },
      //   {
      //   "source": {
      //   "id": "business-insider",
      //   "name": "Business Insider"
      //   },
      //   "author": "mloh@businessinsider.com (Matthew Loh)",
      //   "title": "Elon Musk's crypto interview was broadcast on the South Korean government's YouTube channel that was hacked and renamed 'SpaceX Invest'",
      //   "description": "The breach on Saturday morning is the fourth time in the last two weeks that a YouTube channel run by the South Korean government was hacked.",
      //   "url": "https://www.businessinsider.com/elon-musk-crypto-interview-streams-hacked-south-korean-governments-youtube-2022-9",
      //   "urlToImage": "https://i.insider.com/631567f8ed92be0018c5dd1d?width=1200&format=jpeg",
      //   "publishedAt": "2022-09-05T03:48:07Z",
      //   "content": "The South Korean government's official YouTube channel was hacked on Saturday morning to broadcast a video featuring billionaire Elon Musk chatting about cryptocurrency, according to local media repo… [+1879 chars]"
      //   },
      //   {
      //   "source": {
      //   "id": null,
      //   "name": "CleanTechnica"
      //   },
      //   "author": "Guest Contributor",
      //   "title": "Our Niagara Falls, Maid of the Mist Electric Ferry Trip — End of Summer Family Tesla Model 3 Trip",
      //   "description": "School is starting soon for the kids so my wife and I took them on a trip to Niagara Falls. Living in Ohio, we decided to drive our Model 3",
      //   "url": "https://cleantechnica.com/2022/09/04/our-niagara-falls-maid-of-the-mist-electric-ferry-trip-end-of-summer-family-tesla-model-3-trip/",
      //   "urlToImage": "https://cleantechnica.com/files/2022/09/Maid-of-Mist-Image-courtesy-of-Ryan.png",
      //   "publishedAt": "2022-09-05T03:03:39Z",
      //   "content": "School is starting soon for the kids, so my wife and I took them on a trip to Niagara Falls. Living in Ohio, we decided to drive our Model 3, as it was only a 5 hour trip. Charging along the way was … [+4059 chars]"
      //   },
      //   {
      //   "source": {
      //   "id": null,
      //   "name": "Gizmodo Australia"
      //   },
      //   "author": "Adam Ismail",
      //   "title": "Meet the bZ3, Toyota’s Answer to the Tesla Model 3",
      //   "description": "Toyota’s second fully-electric bZ model may not be coming to the United States quite yet, but photos surfaced by the...\nThe post Meet the bZ3, Toyota’s Answer to the Tesla Model 3 appeared first on Gizmodo Australia.\n  Related Stories\r\n<ul><li>Meet the bZ3, T…",
      //   "url": "https://www.gizmodo.com.au/2022/09/meet-the-bz3-toyotas-answer-to-the-tesla-model-3/",
      //   "urlToImage": "https://www.gizmodo.com.au/wp-content/uploads/sites/2/2022/09/03/be050f194c5b751de0e5633622b4761f.jpg?quality=80&resize=1280,720",
      //   "publishedAt": "2022-09-05T03:00:39Z",
      //   "content": "Toyotas second fully-electric bZ model may not be coming to the United States quite yet, but photos surfaced by the Chinese Ministry of Industry have provided us with a good idea of what the Japanese… [+1758 chars]"
      //   },
      //   {
      //   "source": {
      //   "id": null,
      //   "name": "PerthNow"
      //   },
      //   "author": "Tim Dornin",
      //   "title": "Australia’s top-selling car revealed as electric sales surge",
      //   "description": "Electric cars have claimed a record share of the Australian vehicle market in August as total sales surged by more than 17 per cent.",
      //   "url": "https://www.perthnow.com.au/business/vehicle-sales-surge-as-aussies-go-electric-c-8121816",
      //   "urlToImage": "https://images.perthnow.com.au/publication/C-8121816/e3a367c4c044a12f11e22b74cb4e35e091a26678-16x9-x0y459w4433h2494.jpg?imwidth=1200",
      //   "publishedAt": "2022-09-05T02:54:49Z",
      //   "content": "The Australian vehicle market has posted its best August result for five years, with a 17 per cent surge in demand as sales of electric cars hit record levels.\r\nThe Federal Chamber of Automotive Indu… [+1358 chars]"
      //   },
      //   {
      //   "source": {
      //   "id": null,
      //   "name": "Seeking Alpha"
      //   },
      //   "author": "Trapping Value",
      //   "title": "Digital Realty: Jim Chanos Will Be Right, Stick To The Preferred Shares",
      //   "description": "Digital Realty continued its aggressive growth and capex plans. Click here to read the bear case breakdown and why we are not attracted to this even at 52-week lows.",
      //   "url": "https://seekingalpha.com/article/4538935-digital-realty-stock-jim-chanos-right-stick-preferred-shares",
      //   "urlToImage": "https://static.seekingalpha.com/cdn/s3/uploads/getty_images/883130172/image_883130172.jpg?io=getty-c-w750",
      //   "publishedAt": "2022-09-05T02:37:46Z",
      //   "content": "frentusha/iStock via Getty Images\r\nIt is no fun to take the opposite of a popular trade. You generally get cat calls from the crowd and almost inevitably you never pick the exact top of the trend. Ta… [+6171 chars]"
      //   },
      //   {
      //   "source": {
      //   "id": null,
      //   "name": "Daily Mail"
      //   },
      //   "author": "Stephen Johnson",
      //   "title": "Tesla outsells the Toyota LandCruiser, Corolla and popular utes",
      //   "description": "A fully-electric Tesla in August outsold both the Toyota LandCruiser and the much smaller Corolla, along with popular utes in a sign of changing motoring tastes ahead of petrol prices soaring.",
      //   "url": "https://www.dailymail.co.uk/news/article-11179785/Tesla-outsells-Toyota-LandCruiser-Corolla-popular-utes.html",
      //   "urlToImage": "https://i.dailymail.co.uk/1s/2022/09/05/02/62056711-0-image-a-2_1662341364810.jpg",
      //   "publishedAt": "2022-09-05T02:37:01Z",
      //   "content": "A fully-electric Tesla is now one of Australia's most popular cars - outselling the highly sought-after Toyota LandCruiser with fuel prices set to soar again.\r\nThe Model 3 sedan, with a starting pric… [+5463 chars]"
      //   },
      //   {
      //   "source": {
      //   "id": null,
      //   "name": "Motley Fool Australia"
      //   },
      //   "author": "Brooke Cooper",
      //   "title": "Where does Tesla get its lithium and do any ASX shares benefit?",
      //   "description": "These three ASX lithium shares have so far agreed to supply the electric vehicle giant. \nThe post Where does Tesla get its lithium and do any ASX shares benefit? appeared first on The Motley Fool Australia.",
      //   "url": "https://www.fool.com.au/2022/09/05/where-does-tesla-get-its-lithium-and-do-any-asx-shares-benefit/",
      //   "urlToImage": "https://www.fool.com.au/wp-content/uploads/2021/09/pondering.jpg",
      //   "publishedAt": "2022-09-05T02:05:26Z",
      //   "content": "When investors look for companies in the electric vehicle (EV) space, they almost inevitably come across tech giant Tesla Inc (NASDAQ: TSLA). The brand has been a cornerstone of the EV revolution so … [+2669 chars]"
      //   },
      //   {
      //   "source": {
      //   "id": null,
      //   "name": "Newgeography.com"
      //   },
      //   "author": "Joel Kotkin",
      //   "title": "Electric Car Mandates Latest Frontier of Elites War on Middle Class",
      //   "description": "California is working overtime to prove something that is obvious to most middle-class Americans: Electric vehicle mandates are something of a scam.\n\nA week ago, California announced it would ban the sale of new gas-powered cars by 2035—only to beg residents …",
      //   "url": "http://www.newgeography.com/content/007566-electric-car-mandates-latest-frontier-elites-war-middle-class",
      //   "urlToImage": null,
      //   "publishedAt": "2022-09-05T00:28:58Z",
      //   "content": "California is working overtime to prove something that is obvious to most middle-class Americans: Electric vehicle mandates are something of a scam.\r\nA week ago, California announced it would ban the… [+3172 chars]"
      //   },
      //   {
      //   "source": {
      //   "id": "next-big-future",
      //   "name": "Next Big Future"
      //   },
      //   "author": "Brian Wang",
      //   "title": "Stringent Tesla FSD Tester Says FSD 10.69.1.1 Feels Ready $TSLA",
      //   "description": "Chuck Cook performs some of the most stringent testing of Tesla’s Full Self Driving software. He has performed many tests on unprotected left turns and roundabouts. Based upon his latest batch of tests for version FSD 10.69.1.1 he feels FSD feels ready for wi…",
      //   "url": "https://www.nextbigfuture.com/2022/09/stringent-tesla-fsd-tester-says-fsd-10-69-1-1-feels-ready-tsla.html",
      //   "urlToImage": "https://nextbigfuture.s3.amazonaws.com/uploads/2022/09/Screen-Shot-2022-09-04-at-5.00.25-PM-1-1024x567.jpg",
      //   "publishedAt": "2022-09-05T00:06:22Z",
      //   "content": "Brian Wang is a Futurist Thought Leader and a popular Science blogger with 1 million readers per month. His blog Nextbigfuture.com is ranked #1 Science News Blog. It covers many disruptive technology… [+593 chars]"
      //   },
      //   {
      //   "source": {
      //   "id": null,
      //   "name": "Autocar"
      //   },
      //   "author": "Jack Warrick",
      //   "title": "2023 Polestar 2 pictured in the Alps with subtly facelifted design",
      //   "description": "First glances of undisguised prototype appear to show an updated grille and wheel designs\n\nAn updated Polestar 2 will arrive next year, with subtle design tweaks and more extensive technical changes, including improved efficiency and performance as well as a …",
      //   "url": "https://www.autocar.co.uk/car-news/new-cars/2023-polestar-2-pictured-alps-subtly-facelifted-design",
      //   "urlToImage": "https://www.autocar.co.uk/sites/autocar.co.uk/files/images/car-reviews/first-drives/legacy/polestar_2_front_dynamic_testing.jpg",
      //   "publishedAt": "2022-09-05T00:00:00Z",
      //   "content": "An updated Polestar 2 will arrive next year, with subtle design tweaks and more extensive technical changes, including improved efficiency and performance as well as a host of software updates.\r\nThe … [+1457 chars]"
      //   },
      //   {
      //   "source": {
      //   "id": null,
      //   "name": "Hackaday"
      //   },
      //   "author": "Dan Maloney",
      //   "title": "Hackaday Links: September 4, 2022",
      //   "description": "Say what you will about Tesla, but there’s little doubt that the electric vehicle maker inspires a certain degree of fanaticism in owners. We’re used to the ones who can’t …read more",
      //   "url": "https://hackaday.com/2022/09/04/hackaday-links-september-4-2022/",
      //   "urlToImage": "https://hackaday.com/wp-content/uploads/2014/11/had-links-banner.jpg",
      //   "publishedAt": "2022-09-04T23:00:46Z",
      //   "content": "Say what you will about Tesla, but there’s little doubt that the electric vehicle maker inspires a certain degree of fanaticism in owners. We’re used to the ones who can’t stop going on about neck-sn… [+3146 chars]"
      //   },
      //   {
      //   "source": {
      //   "id": null,
      //   "name": "SlashGear"
      //   },
      //   "author": "staff@slashgear.com (James Dolan)",
      //   "title": "This Viral TikTok Trend Is Causing Kia And Hyundai Owners Serious Problems",
      //   "description": "TikTok is a platform that has spawned many viral trends, one of which involves taking advantage of a Hyundai and Kia security vulnerability to steal cars.",
      //   "url": "https://www.slashgear.com/993657/this-viral-tiktok-trend-is-causing-kia-and-hyundai-owners-serious-problems/",
      //   "urlToImage": "https://www.slashgear.com/img/gallery/this-viral-tiktok-trend-is-causing-kia-and-hyundai-owners-serious-problems/l-intro-1662325172.jpg",
      //   "publishedAt": "2022-09-04T21:28:36Z",
      //   "content": "South Korean automaker Kia is one of the more popular car brands in the United States; in August 2022, for example, it sold 66,089 vehicles, according to Korea Herald. Its parent company, Hyundai, is… [+899 chars]"
      //   },
      //   {
      //   "source": {
      //   "id": null,
      //   "name": "Tsungxu.com"
      //   },
      //   "author": "Tsung Xu",
      //   "title": "A New Materials Paradigm Is Overdue",
      //   "description": "Over eighty years ago, the rise of synthetic polymers led to one of the most successful original products ever. This product used nothing that we would consider to be technology today. That's how long it’s been since there have been any material breakthroughs…",
      //   "url": "https://www.tsungxu.com/materials-paradigm/",
      //   "urlToImage": "https://www.tsungxu.com/content/images/2022/08/Materials-paradigm-cover-1.png",
      //   "publishedAt": "2022-09-04T20:22:42Z",
      //   "content": "Over eighty years ago, the rise of synthetic polymers led to one of the most successful original products ever. This product used nothing that we would consider to be technology today. That's how lon… [+34699 chars]"
      //   },
      //   {
      //   "source": {
      //   "id": null,
      //   "name": "Screen Rant"
      //   },
      //   "author": "Michael Akuchie",
      //   "title": "Will The Fake Tesla Crash By Insurance Company Hinder EV Sales?",
      //   "description": "After an insurance company staged a test crash involving a Tesla Model S, it's worth speculating on the impact of this event on EV sales.",
      //   "url": "https://screenrant.com/insurance-company-fake-tesla-crash-hinder-ev-sales-will/",
      //   "urlToImage": "https://static1.srcdn.com/wordpress/wp-content/uploads/2022/09/Tesla-Crash-2.jpg",
      //   "publishedAt": "2022-09-04T20:13:09Z",
      //   "content": "After a staged test crash involving a Tesla Model S, it's worth speculating on the impact of this event on electric vehicle sales. Even though EVs have gone mainstream, some people still doubt that E… [+3227 chars]"
      //   },
      //   {
      //   "source": {
      //   "id": null,
      //   "name": "24/7 Wall St."
      //   },
      //   "author": "Christopher Lange",
      //   "title": "How Many People Were Born the Year You Were Born",
      //   "description": "At the forefront of issues that face humanity, many would rank climate change and overpopulation as perhaps some of the biggest existential threats. However, there are some, including Tesla CEO Elon Musk, who would disagree Earth cannot sustain population gro…",
      //   "url": "https://247wallst.com/special-report/2022/09/04/how-many-people-were-born-the-year-you-were-born-6/",
      //   "urlToImage": "https://247wallst.com/wp-content/uploads/2022/08/imageForEntry19-BaV.jpg",
      //   "publishedAt": "2022-09-04T20:00:38Z",
      //   "content": "At the forefront of issues that face humanity, many would rank climate change and overpopulation as perhaps some of the biggest existential threats. However, there are some, including Tesla CEO Elon … [+1878 chars]"
      //   },
      //   {
      //   "source": {
      //   "id": "next-big-future",
      //   "name": "Next Big Future"
      //   },
      //   "author": "Brian Wang",
      //   "title": "My First Days as a Micro-Power Company $TSLA",
      //   "description": "A heat wave will last until the end of this week in the San Francisco Bay Area. Temperatures 100F (38C) or so all week. Today is the fourth day out of the last five days with a Virtual Power Plant event. Tesla has created the software so that the utility PGE …",
      //   "url": "https://www.nextbigfuture.com/2022/09/my-first-days-as-a-micro-power-company-tsla.html",
      //   "urlToImage": "https://nextbigfuture.s3.amazonaws.com/uploads/2022/09/powerwalls.jpeg",
      //   "publishedAt": "2022-09-04T19:39:24Z",
      //   "content": "A heat wave will last until the end of this week in the San Francisco Bay Area. Temperatures 100F (38C) or so all week. Today is the fourth day out of the last five days with a Virtual Power Plant ev… [+2109 chars]"
      //   },
      //   {
      //   "source": {
      //   "id": null,
      //   "name": "The Economist"
      //   },
      //   "author": "The Economist",
      //   "title": "Why businesses are still furiously hiring, even as a downturn looms",
      //   "description": "A shake-up in the labour market gives the upper hand to job applicants",
      //   "url": "https://www.economist.com/business/2022/09/04/why-businesses-are-still-furiously-hiring-even-as-a-downturn-looms",
      //   "urlToImage": "https://www.economist.com/img/b/1280/720/90/media-assets/image/20220903_FNP505.jpg",
      //   "publishedAt": "2022-09-04T17:51:28Z",
      //   "content": "Should companies be hiring or firing? Demand for workers has roared back over the past two years. But labour supply has not kept pace, and shortages are pervasive. That means many firms need to hire.… [+8970 chars]"
      //   },
      //   {
      //   "source": {
      //   "id": null,
      //   "name": "Yahoo Entertainment"
      //   },
      //   "author": "The Economist",
      //   "title": "Why businesses are still furiously hiring, even as a downturn looms",
      //   "description": "A shake-up in the labour market gives the upper hand to job applicants",
      //   "url": "https://finance.yahoo.com/news/why-businesses-still-furiously-hiring-175128081.html",
      //   "urlToImage": "https://s.yimg.com/uu/api/res/1.2/KakwQc99k3jCfxY_EbQ6CQ--~B/aD02NjI7dz02MDg7YXBwaWQ9eXRhY2h5b24-/https://media.zenfs.com/en/the_economist_group_401/1f1fe372c9a65e08f527a666d08397af",
      //   "publishedAt": "2022-09-04T17:51:28Z",
      //   "content": "Should companies be hiring or firing? Demand for workers has roared back over the past two years. But labour supply has not kept pace, and shortages are pervasive. That means many firms need to hire.… [+9220 chars]"
      //   },
      //   {
      //   "source": {
      //   "id": "independent",
      //   "name": "Independent"
      //   },
      //   "author": "Josh Marcus",
      //   "title": "Elon Musk’s long history of questionable climate takes on oil, population, and nuclear",
      //   "description": "The Tesla CEO has poured his life into renewables, but environmentalists don’t always agree with his opinions",
      //   "url": "https://www.independent.co.uk/climate-change/news/elon-musk-climate-crisis-hyperloop-b2157985.html",
      //   "urlToImage": "https://static.independent.co.uk/2022/05/20/09/SEI104510950.jpg?quality=75&width=1200&auto=webp",
      //   "publishedAt": "2022-09-04T17:22:48Z",
      //   "content": "Elon Musk, the man who topped Bloombergs 2021 list of green billionaires, recently surprised observers when he called for more fossil fuel exploration at an energy conference.\r\nAt this time, we actua… [+9942 chars]"
      //   },
      //   {
      //   "source": {
      //   "id": null,
      //   "name": "Johnchow.com"
      //   },
      //   "author": "John Chow",
      //   "title": "Asking Tesla Owners What They Do For a Living",
      //   "description": "In this video, my buddy Charlie Chang ask Tesla owners at the Fountain Valley supercharging station a bunch of questions like what they do for a living, how much they make, why they bought a Tesla, and a bunch of other spicy questions. You won’t believe what …",
      //   "url": "https://johnchow.com/asking-tesla-owners-what-they-do-for-a-living/",
      //   "urlToImage": "https://johnchow.com/wp-content/uploads/2022/09/tesla-owners.jpg",
      //   "publishedAt": "2022-09-04T16:46:03Z",
      //   "content": "The Original Dot Com Mogul\r\nJohn Chow, a damn fine person, friend of the community, Ultimate Fighting Championship contestant, member of the Save the Whales Foundation, the man who controls the black… [+256 chars]"
      //   },
      //   {
      //   "source": {
      //   "id": null,
      //   "name": "CleanTechnica"
      //   },
      //   "author": "Dr. Maximilian Holland",
      //   "title": "Norway’s Plugin EVs Still Falling For Reasons",
      //   "description": "Norway, the country furthest along in the electric vehicle transition, saw a second consecutive month of falling plugin electric vehicle share, at 86.1% from 87.7% a year ago. Like last month, full electrics did see annual growth in share, but this was outwei…",
      //   "url": "https://cleantechnica.com/2022/09/04/norways-plugin-evs-still-falling-for-reasons/",
      //   "urlToImage": "https://cleantechnica.com/files/2022/09/August-2022-Norway-Passenger-Auto-Registrations-WD.png",
      //   "publishedAt": "2022-09-04T16:32:32Z",
      //   "content": "Norway, the country furthest along in the electric vehicle transition, saw a second consecutive month of falling plugin electric vehicle share, at 86.1% from 87.7% a year ago. Like last month, full e… [+7024 chars]"
      //   },
      //   {
      //   "source": {
      //   "id": null,
      //   "name": "Patently Apple"
      //   },
      //   "author": "Jack Purcher",
      //   "title": "Apple has hired the former VP of Autonomous Vehicles Lab at Hyundai MOBIS to be the 'Sense Architecture Lead' on Project Titan",
      //   "description": "It was revealed today that Apple hired the VP of Autonomous Vehicles Lab from Hyundai MOBIS, Gregory Baratoff – and his LinkedIn profile indicates that he was officially hired in August.",
      //   "url": "https://www.patentlyapple.com/2022/09/apple-has-hired-the-former-vp-of-autonomous-vehicles-lab-at-hyundai-mobis-to-be-the-sense-architecture-lead-on-project-tita.html",
      //   "urlToImage": "https://patentlyapple.typepad.com/.a/6a0120a5580826970c02a30d4bb81c200b-600wi",
      //   "publishedAt": "2022-09-04T16:20:39Z",
      //   "content": "Click on image to Greatly Enlarge Image from Hyundai's Autonomous Lab\r\nIt was revealed today that Apple hired the VP of Autonomous Vehicles Lab from Hyundai MOBIS, Gregory Baratoff and his LinkedIn p… [+2293 chars]"
      //   },
      //   {
      //   "source": {
      //   "id": null,
      //   "name": "Forbes"
      //   },
      //   "author": "Ron Shevlin, Senior Contributor, \n Ron Shevlin, Senior Contributor\n https://www.forbes.com/sites/ronshevlin/",
      //   "title": "How Much Do TikTok Influencers Make?",
      //   "description": "It’s often hard to tell on TikTok whether or not some investment and personal finance videos are serious or just spoofs. The top ‘finfluencers’ on TikTok aren’t exactly amateurs, however.",
      //   "url": "https://www.forbes.com/sites/ronshevlin/2022/09/04/how-much-do-tiktok-influencers-make/",
      //   "urlToImage": "https://imageio.forbes.com/specials-images/imageserve/6314c3e9086c70dfb2b3f6a1/0x0.jpg?format=jpg&crop=1342,1005,x382,y144,safe&width=1200",
      //   "publishedAt": "2022-09-04T16:00:28Z",
      //   "content": "Influencer creating TikTok video\r\ngetty\r\nObservations From The Fintech Snark Tank\r\nThink you can make a lot of money as a TikTok finfluencer (financial influencer)?\r\nA study conducted by derivative t… [+5514 chars]"
      //   },
      //   {
      //   "source": {
      //   "id": null,
      //   "name": "Bimmerpost.com"
      //   },
      //   "author": "admin",
      //   "title": "i4 eDrive40 Owner Tested Highway Mileage = 334 Miles",
      //   "description": "First i4 eDrive40 highway trip (short) mileage / energy usage = 334 miles range",
      //   "url": "https://bmwi.bimmerpost.com/forums/showthread.php?t=1951086",
      //   "urlToImage": "https://www.bimmerpost.com/storyimages/48c44246-be12-8585.jpg",
      //   "publishedAt": "2022-09-04T15:02:57Z",
      //   "content": "After a few weeks of eDrive40 ownership we took the i4 on a (short) trip from Phx metro to Tucson, est. RT ~ 250 mi. Destination was son’s soccer game so we had a hard arrival time and only budgeted … [+4038 chars]"
      //   },
      //   {
      //   "source": {
      //   "id": null,
      //   "name": "The Daily Camera"
      //   },
      //   "author": "Dan England",
      //   "title": "How Colorado’s abortion access could impact businesses in Boulder County - Boulder Daily Camera",
      //   "description": "Business owner Angela Wilson hopes to add a stipend in her company’s employee benefits to pay for out-of-state abortion. She calls the benefit an addition to the family-friendly core values of her …",
      //   "url": "https://www.dailycamera.com/2022/09/04/how-colorados-abortion-access-could-impact-businesses-in-boulder-county/",
      //   "urlToImage": "https://www.dailycamera.com/wp-content/uploads/2022/05/DCC-L-Choice1091.jpg?w=1024&h=826",
      //   "publishedAt": "2022-09-04T14:31:01Z",
      //   "content": "Business owner Angela Wilson hopes to add a stipend in her companys employee benefits to pay for out-of-state abortion. She calls the benefit an addition to the family-friendly core values of her com… [+11374 chars]"
      //   },
      //   {
      //   "source": {
      //   "id": null,
      //   "name": "CNET"
      //   },
      //   "author": "Ian Sherr",
      //   "title": "iPhone 14's Success Depends on One Unexpected Thing - CNET",
      //   "description": "New features are nice, but surveys show that many people are upgrading because of 5G.",
      //   "url": "https://www.cnet.com/tech/mobile/apple-iphone-14-success-depends-on-one-unexpected-thing/",
      //   "urlToImage": "https://www.cnet.com/a/img/resize/37bb84705a80e5880e3c8a3c04f4bcfa7a844920/2022/04/15/b33f5241-eb09-422b-9d8d-3f9691d1c468/apple-logo-2022-059.jpg?auto=webp&fit=crop&height=630&width=1200",
      //   "publishedAt": "2022-09-04T14:06:54Z",
      //   "content": "This story is part of Focal Point iPhone 2022, CNET's collection of news, tips and advice around Apple's most popular product. \r\nWhen Apple executives show off the iPhone 14 at the company's headquar… [+7188 chars]"
      //   },
      //   {
      //   "source": {
      //   "id": null,
      //   "name": "Freerepublic.com"
      //   },
      //   "author": "www.braylog.com",
      //   "title": "A Satanic Threat by Evil Joe (Sunbray)",
      //   "description": "Hold fast the form of sound words, which thou hast heard of me, in faith and love which is in Christ Jesus. That good thing which was committed unto thee keep by the Holy Ghost which dwelleth in us. 2 Timothy 1:13-14 (King James Version) The Dictator calls Le…",
      //   "url": "https://freerepublic.com/focus/f-chat/4090749/posts",
      //   "urlToImage": null,
      //   "publishedAt": "2022-09-04T13:32:25Z",
      //   "content": "Skip to comments.\r\nA Satanic Threat by Evil Joe (Sunbray)www.braylog.com ^\r\n | 9/4/22\r\n | bray\r\nPosted on 09/04/2022 6:32:25 AM PDT by bray\r\nHold fast the form of sound words, which thou hast heard o… [+8805 chars]"
      //   },
      //   {
      //   "source": {
      //   "id": null,
      //   "name": "Freerepublic.com"
      //   },
      //   "author": "www.braylog.com",
      //   "title": "A Satanic Threat by Evil Joe (Sunbray)",
      //   "description": "Hold fast the form of sound words, which thou hast heard of me, in faith and love which is in Christ Jesus. That good thing which was committed unto thee keep by the Holy Ghost which dwelleth in us. 2 Timothy 1:13-14 (King James Version) The Dictator calls Le…",
      //   "url": "https://freerepublic.com/focus/f-news/4090749/posts",
      //   "urlToImage": null,
      //   "publishedAt": "2022-09-04T13:32:25Z",
      //   "content": "Skip to comments.\r\nA Satanic Threat by Evil Joe (Sunbray)www.braylog.com ^\r\n | 9/4/22\r\n | bray\r\nPosted on 09/04/2022 6:32:25 AM PDT by bray\r\nHold fast the form of sound words, which thou hast heard o… [+8060 chars]"
      //   },
      //   {
      //   "source": {
      //   "id": null,
      //   "name": "Vnexpress.net"
      //   },
      //   "author": "Minh Son",
      //   "title": "Vietnamese billionaires say no to salaries - VnExpress International",
      //   "description": "Being chairmen of giant corporations with revenues exceeding billions of dollars, some Vietnamese billionaires chose to draw zero salaries.",
      //   "url": "https://e.vnexpress.net/news/business/vietnamese-billionaires-say-no-to-salaries-4507104.html",
      //   "urlToImage": "https://vcdn-english.vnecdn.net/2022/09/04/sven-1662279569-6342-1662279580_1200x0.jpg",
      //   "publishedAt": "2022-09-04T13:32:00Z",
      //   "content": "According to the semi-annual audited financial report of Vingroup Company JSC, the enterprise has spent more than VND24 billion ($1.02 million) in remuneration for its leading members, including the … [+3988 chars]"
      //   },
      //   {
      //   "source": {
      //   "id": null,
      //   "name": "TheStreet"
      //   },
      //   "author": "Luc Olinga",
      //   "title": "Elon Musk Goes to Hollywood",
      //   "description": "Tesla's billionaire CEO just landed one of the hottest gigs.",
      //   "url": "https://www.thestreet.com/technology/elon-musk-goes-to-hollywood",
      //   "urlToImage": "https://www.thestreet.com/.image/t_share/MTY5NTc4NTQ1NjY2OTI2NDA1/elon-musk-1.jpg",
      //   "publishedAt": "2022-09-04T13:14:33Z",
      //   "content": "Elon Musk is currently the most influential CEO in the world with colossal responsibilities. \r\nHe is involved in four companies that each have the ambition to disrupt and dominate their industry: Tes… [+4090 chars]"
      //   },
      //   {
      //   "source": {
      //   "id": "cbs-news",
      //   "name": "CBS News"
      //   },
      //   "author": null,
      //   "title": "The Great Shift: How are all those \"back to the office\" plans going?",
      //   "description": "After two years of the COVID-19 pandemic, some companies are transitioning their staff back from working remotely to working in the office, or some hybrid of the two – and many employees are saying no.",
      //   "url": "https://www.cbsnews.com/news/the-great-shift-how-are-all-those-back-to-the-office-plans-going/",
      //   "urlToImage": "https://assets3.cbsnewsstatic.com/hub/i/r/2022/09/04/75a70fd4-775f-42a2-9c05-3f431198ede4/thumbnail/1200x630/afad06d209b0870b8ca290a84a9a68da/empty-office-1280.jpg",
      //   "publishedAt": "2022-09-04T13:11:03Z",
      //   "content": "As the pandemic subsides, we're going back to flying, back to theaters, back to restaurants. But back to the office? Well, yes … and no.\r\nRyan Williams is the founder and CEO of Cadre, a real-estate … [+7898 chars]"
      //   },
      //   {
      //   "source": {
      //   "id": null,
      //   "name": "AZCentral"
      //   },
      //   "author": "Arizona Republic, Russ Wiles, Arizona Republic",
      //   "title": "Ready to buy an electric vehicle? What to know about the new tax breaks",
      //   "description": "Substantial new tax breaks for consumers seeking to buy an electric car or truck are included in the recently enacted Inflation Reduction Act.",
      //   "url": "https://www.azcentral.com/story/money/business/economy/2022/09/04/new-revamped-tax-breaks-coming-electric-vehicles-heres-what-know/7961226001/",
      //   "urlToImage": "https://www.gannett-cdn.com/presto/2021/02/23/PPHX/520cc29b-6f52-4705-8ea2-1734888da0ed-Lucid_Factory_Entrance.jpg?auto=webp&crop=3823,2151,x0,y0&format=pjpg&width=1200",
      //   "publishedAt": "2022-09-04T13:00:08Z",
      //   "content": "The recently enacted Inflation Reduction Act covers a lot of ground, from reducing some drug prices to imposing a minimum corporate income tax. As much as anything, the legislation provides incentive… [+6291 chars]"
      //   },
      //   {
      //   "source": {
      //   "id": null,
      //   "name": "24/7 Wall St."
      //   },
      //   "author": "Douglas A. McIntyre",
      //   "title": "Ford EV Sales Jump",
      //   "description": "Overall, the sales data from Ford Motor continues to be positive. In August, U.S. unit sales rose 27.3% to 158,008. The industry continues to face supply chain problems which makes the number particularly impressive. Sales of Ford’s EVs were especially strong…",
      //   "url": "https://247wallst.com/autos/2022/09/04/ford-ev-sales-jump/",
      //   "urlToImage": "https://247wallst.com/wp-content/uploads/2022/08/imageForEntry6-Xwr.jpg",
      //   "publishedAt": "2022-09-04T12:30:57Z",
      //   "content": "Overall, the sales data from Ford Motor continues to be positive. In August, U.S. unit sales rose 27.3% to 158,008. The industry continues to face supply chain problems which makes the number particu… [+2520 chars]"
      //   },
      //   {
      //   "source": {
      //   "id": null,
      //   "name": "Motley Fool"
      //   },
      //   "author": "newsfeedback@fool.com (Will Healy, Justin Pope, and Jake Lerch)",
      //   "title": "3 Stock-Split Stocks That Are Screaming Buys Right Now",
      //   "description": "The value proposition of these names goes well beyond the stock splits.",
      //   "url": "https://www.fool.com/investing/2022/09/04/3-stock-split-stocks-that-are-buys-right-now/",
      //   "urlToImage": "https://g.foolcdn.com/editorial/images/698823/investor-tears-stock-certificate-in-half.jpg",
      //   "publishedAt": "2022-09-04T12:20:00Z",
      //   "content": "Investors may remember 2022 as the year that stock splits came back. After a relative lack of splits in recent years, stocks with high nominal prices embraced the concept in increasing numbers this y… [+6016 chars]"
      //   },
      //   {
      //   "source": {
      //   "id": null,
      //   "name": "Erickimphotography.com"
      //   },
      //   "author": "ERIC KIM",
      //   "title": "VLOG: HOW TO INCREASE YOUR CLOUT",
      //   "description": "Real thoughts: PODCAST ALL Part 1 PART 2 PART 3 How to Build More Clout Clout — to ball up, amass.  Perhaps clout is actually more important than money.  1. Don’t be disingenuous The first simple thought is this: don’t be disingenuous. Everyone is honest in d…",
      //   "url": "https://erickimphotography.com/blog/2022/09/04/vlog-how-to-increase-your-clout/",
      //   "urlToImage": "https://img.youtube.com/vi/cqvp30auV0Y/0.jpg",
      //   "publishedAt": "2022-09-04T11:47:40Z",
      //   "content": "Real thoughts: \r\nhttps://youtu.be/zOHf5igzcu8\r\nPART 3\r\nClout  to ball up, amass. \r\nPerhaps clout is actually more important than money. \r\n1. Dont be disingenuous\r\nThe first simple thought is this: do… [+2916 chars]"
      //   },
      //   {
      //   "source": {
      //   "id": null,
      //   "name": "Freerepublic.com"
      //   },
      //   "author": "Various driveby media television networks",
      //   "title": "Sunday Morning Talk Show Thread 4 September 2022",
      //   "description": "The Talk Shows September 4th, 2022 Guests to be interviewed today on major television talk shows:FOX NEWS SUNDAY (Fox Network): Guest host Mike Emanuel: DCCC Chair Sean Patrick Maloney (D-N.Y.); NRCC Chair Tom Emmer (R-Minn.); New Jersey democrat Gov. Phil Mu…",
      //   "url": "https://freerepublic.com/focus/f-news/4090733/posts",
      //   "urlToImage": null,
      //   "publishedAt": "2022-09-04T11:47:28Z",
      //   "content": "Skip to comments.\r\nSunday Morning Talk Show Thread 4 September 2022Various driveby media television networks ^\r\n | 4 September 2022\r\n | Various Self-Serving Politicians and Big Media Screaming Faces\r… [+11325 chars]"
      //   },
      //   {
      //   "source": {
      //   "id": null,
      //   "name": "Tsungxu.com"
      //   },
      //   "author": "Tsung Xu",
      //   "title": "New performance materials are coming",
      //   "description": "Twenty milligrams, about the weight of a feather. Spiber's founders had only made this much spider silk protein in three months in 2008. For their first year operating, it was an inconspicuous amount and very humble beginnings.\n\nSince then, spider silk protei…",
      //   "url": "https://www.tsungxu.com/performance-biomaterials/",
      //   "urlToImage": "https://www.tsungxu.com/content/images/2022/08/Biomaterials-Future.jpg",
      //   "publishedAt": "2022-09-04T11:45:03Z",
      //   "content": "Twenty milligrams, about the weight of a feather. Spiber's founders had only made this much spider silk protein in three months in 2008. For their first year operating, it was an inconspicuous amount… [+72318 chars]"
      //   },
      //   {
      //   "source": {
      //   "id": null,
      //   "name": "CarScoops"
      //   },
      //   "author": "Sebastien Bell",
      //   "title": "Car Buyers Really Want An Apple Car, Even Though It Hasn’t Officially Been Announced Yet",
      //   "description": "Half of Tesla owners say they would \"definitely consider\" a car made by Apple.",
      //   "url": "https://www.carscoops.com/2022/09/car-buyers-really-want-an-apple-car-even-though-it-hasnt-officially-been-announced-yet/",
      //   "urlToImage": "https://www.carscoops.com/wp-content/uploads/2022/05/Apple-Car-Rendering.jpg",
      //   "publishedAt": "2022-09-04T11:38:04Z",
      //   "content": "A surprising 26 percent of new vehicles owners would seriously consider buying an Apple vehicle if it was available, according to Strategic Vision.\r\nThe international consulting agency this week rele… [+2300 chars]"
      //   },
      //   {
      //   "source": {
      //   "id": null,
      //   "name": "Motley Fool"
      //   },
      //   "author": "newsfeedback@fool.com (James Brumley)",
      //   "title": "Prediction: These Could Be the Best Growth Stocks in 2030",
      //   "description": "As hockey great Wayne Gretzky put it, you should \"skate to where the puck is going to be, not where it has been.\"",
      //   "url": "https://www.fool.com/investing/2022/09/04/prediction-these-could-be-best-growth-stocks-2030/",
      //   "urlToImage": "https://g.foolcdn.com/editorial/images/699170/long-term.jpg",
      //   "publishedAt": "2022-09-04T11:34:00Z",
      //   "content": "It's not difficult to identify the market's top growth stocks right now -- just look around. Giants like Alphabet, Shopify, and Tesla are frequently highlighted as the current powerhouses, and for go… [+5939 chars]"
      //   },
      //   {
      //   "source": {
      //   "id": null,
      //   "name": "International Business Times"
      //   },
      //   "author": "Nica Osorio",
      //   "title": "Apple Car More Popular Option Than A New Tesla Even If It Hasn't Been Announced Yet",
      //   "description": "\"An autonomous car is a robot and so there are a lot of things you can do with autonomy. We will see what Apple does,\" Cook said in a 2021 interview.",
      //   "url": "https://www.ibtimes.com/apple-car-more-popular-option-new-tesla-even-if-it-hasnt-been-announced-yet-3609134",
      //   "urlToImage": "https://d.ibtimes.com/en/full/2907341/tesla-chief-elon-musk-during-delivery-ceremony-firms-china-made-model-3-shanghai-january-2020.jpg",
      //   "publishedAt": "2022-09-04T10:30:01Z",
      //   "content": "KEY POINTS\r\n<ul><li>Apple ranked third in the list of brand considerations that people would \"love\" and consider buying a vehicle from</li><li>It sits in the spot after legendary automakers Toyota nd… [+3179 chars]"
      //   },
      //   {
      //   "source": {
      //   "id": null,
      //   "name": "Foreign Policy"
      //   },
      //   "author": "Bob Davis",
      //   "title": "What Do Electric Cars Really Cost?",
      //   "description": "“Volt Rush” examines the price of a dirty green business—and China’s role.",
      //   "url": "https://foreignpolicy.com/2022/09/04/volt-rush-sanderson-review-electric-cars-ev-dirty-mining-resources-extraction-china-africa-congo-batteries-minerals-tesla-green/",
      //   "urlToImage": "https://foreignpolicy.com/wp-content/uploads/2022/09/congo-cobalt-electric-cars-batteries-mining-GettyImages-1236185098-e1662209587880.jpg?w=1000",
      //   "publishedAt": "2022-09-04T10:00:22Z",
      //   "content": "Clean cars drive some very dirty businesses and grubby regimes. Thats the main takeaway from Henry Sandersons fine new book Volt Rush: The Winners and Losers in the Race to Go Green. Among the winner… [+10585 chars]"
      //   },
      //   {
      //   "source": {
      //   "id": null,
      //   "name": "heise online"
      //   },
      //   "author": "Silke Hahn",
      //   "title": "Artificial Imagination: Art that no human eye has seen before – about 'The Crow'",
      //   "description": "Visual Artist Glenn Marshall brings Deep Learning to the cinema: His AI short film 'The Crow' won prizes in Cannes and Linz. Thoughts on a new kind of art.",
      //   "url": "https://www.heise.de/hintergrund/Artificial-Imagination-Art-that-no-human-eye-has-seen-before-about-The-Crow-7252721.html",
      //   "urlToImage": "https://heise.cloudimg.io/bound/1200x1200/q85.png-lossy-85.webp-lossy-85.foil1/_www-heise-de_/imgs/18/3/6/0/2/8/1/8/crowtit5-9131f92b5a7e594a.jpg",
      //   "publishedAt": "2022-09-04T09:42:00Z",
      //   "content": "(Diesen Beitrag gibt es auch auf Deutsch.) \r\nThe short film 'The Crow', designed with AI technology, introduces a new category of computer-generated visual art and is already considered a pioneering … [+11227 chars]"
      //   },
      //   {
      //   "source": {
      //   "id": null,
      //   "name": "Motorbiscuit.com"
      //   },
      //   "author": null,
      //   "title": "How Do I Know if My Car Has Android Auto? - MotorBiscuit",
      //   "description": "Here's how you can find out if your car has Android Auto and connect to it.",
      //   "url": "https://www.motorbiscuit.com/how-do-i-know-if-my-car-has-android-auto/",
      //   "urlToImage": "https://www.motorbiscuit.com/wp-content/uploads/2022/08/How-do-I-know-if-my-car-has-Android-Auto.jpg?w=1200",
      //   "publishedAt": "2022-09-04T09:17:53Z",
      //   "content": "It’s not uncommon for car buyers not to know about every feature in their new vehicle until after they purchase it. And in some cases, shoppers might hurriedly sign on the dotted line before fully un… [+5347 chars]"
      //   },
      //   {
      //   "source": {
      //   "id": null,
      //   "name": "Motley Fool"
      //   },
      //   "author": "newsfeedback@fool.com (Michael Byrne)",
      //   "title": "Elon Musk Says the World Needs More Oil and Gas -- Here Are 3 Ways to Invest",
      //   "description": "The Tesla CEO knows that oil and gas are here to stay for the long term, and so are the industry's top stocks.",
      //   "url": "https://www.fool.com/investing/2022/09/04/elon-musk-says-the-world-needs-more-oil-and-gas-he/",
      //   "urlToImage": "https://g.foolcdn.com/editorial/images/698649/oil-gas-machinery-worker-rig.jpg",
      //   "publishedAt": "2022-09-04T09:16:00Z",
      //   "content": "Elon Musk says that the world needs more oil and gas, and he's right. When one of the world's wealthiest individuals -- who has made his fortune developing automobiles that reduce the planet's fossil… [+5630 chars]"
      //   },
      //   {
      //   "source": {
      //   "id": null,
      //   "name": "The Guardian"
      //   },
      //   "author": "Douglas Rushkoff",
      //   "title": "The super-rich ‘preppers’ planning to save themselves from the apocalypse",
      //   "description": "Tech billionaires are buying up luxurious bunkers and hiring military security to survive a societal collapse they helped create, but like everything they do, it has unintended consequencesAs a humanist who writes about the impact of digital technology on our…",
      //   "url": "https://amp.theguardian.com/news/2022/sep/04/super-rich-prepper-bunkers-apocalypse-survival-richest-rushkoff",
      //   "urlToImage": "https://i.guim.co.uk/img/media/623a5bbdb1f343d31171968d7c795c3d67feffdb/0_0_5000_3000/master/5000.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdG8tZGVmYXVsdC5wbmc&enable=upscale&s=aff22cc2d93c5c90f2e4321d215fb511",
      //   "publishedAt": "2022-09-04T09:00:43Z",
      //   "content": "As a humanist who writes about the impact of digital technology on our lives, I am often mistaken for a futurist. The people most interested in hiring me for my opinions about technology are usually … [+19821 chars]"
      //   },
      //   {
      //   "source": {
      //   "id": null,
      //   "name": "U.Today"
      //   },
      //   "author": "U.Today",
      //   "title": "PwC Account Hacked to Promote XRP Scam",
      //   "description": "This is yet another verified Twitter account that has been hacked in order to promote a blatantly obvious XRP scam",
      //   "url": "https://u.today/pwc-account-hacked-to-promote-xrp-scam",
      //   "urlToImage": "https://u.today/sites/default/files/styles/twitter/public/2022-09/23047.jpg",
      //   "publishedAt": "2022-09-04T08:50:14Z",
      //   "content": "The official Twitter account of PricewaterhouseCoopers (PwC) Venezuela has been hacked in order to promote an XRP scam.\r\nImage by @PwC_Venezuela\r\nIt is advertising a big event with Ripple CEO Brad Ga… [+1402 chars]"
      //   },
      //   {
      //   "source": {
      //   "id": null,
      //   "name": "Business Standard"
      //   },
      //   "author": "IANS",
      //   "title": "Elon Musk throws a solution for Nasa's Artemis 1 mission to moon",
      //   "description": "As NASA scrubbed the Artemis 1 uncrewed mission to the Moon once again, Elon Musk on Sunday came up with a suggestion for the ailing mission that will finally land astronauts on the lunar surface",
      //   "url": "https://www.business-standard.com/article/international/elon-musk-throws-a-solution-for-nasa-s-artemis-1-mission-to-moon-122090400214_1.html",
      //   "urlToImage": "https://bsmedia.business-standard.com/_media/bs/img/article/2022-07/25/full/1658721398-8066.jpg",
      //   "publishedAt": "2022-09-04T08:15:00Z",
      //   "content": "As NASA scrubbed the Artemis 1 uncrewed mission to the Moon once again, Tesla and SpaceX CEO Elon Musk on Sunday came up with a suggestion for the ailing mission that will finally land astronauts on … [+3335 chars]"
      //   },
      //   {
      //   "source": {
      //   "id": null,
      //   "name": "Interesting Engineering"
      //   },
      //   "author": "Sade Agard",
      //   "title": "Future microbatteries could help tiny robots tackle space and time - Interesting Engineering",
      //   "description": "Advancing smart dust concepts is inhibited by a lack of equally small on-chip power sources that can function anytime and anywhere. Could this microbattery the size of a grain of salt be the solution?",
      //   "url": "https://interestingengineering.com/innovation/future-microbatteries-help-tiny-robots",
      //   "urlToImage": "https://inteng-storage.s3.amazonaws.com/2022/09/04/image/jpeg/2zKXu74Q17G62hgOOTlCCAChSSF7yDtu0qVQOikn.jpg",
      //   "publishedAt": "2022-09-04T07:37:31Z",
      //   "content": "This projected growth appears to be driven by the expanded use of wearable instruments, the requirement for compact batteries in clinical gadgets, and the rising interest in versatile batteries for t… [+9305 chars]"
      //   },
      //   {
      //   "source": {
      //   "id": null,
      //   "name": "Seeking Alpha"
      //   },
      //   "author": "Hindsight Investor",
      //   "title": "Global-e Online: Worth The Risk, But Position Size Accordingly",
      //   "description": "Global-e continues to increase its customer pipeline, adding larger and more established brand partners. See why I recommend adding GLBE stock at these levels.",
      //   "url": "https://seekingalpha.com/article/4538863-global-e-online-worth-risk-position-size-accordingly",
      //   "urlToImage": "https://static.seekingalpha.com/cdn/s3/uploads/getty_images/1331173398/image_1331173398.jpg?io=getty-c-w750",
      //   "publishedAt": "2022-09-04T07:13:42Z",
      //   "content": "Thomas Barwick\r\nInvestment Thesis\r\n Global E-Online (NASDAQ:GLBE), the leading platform provider enabling cross border DTC e-commerce, has been on a rollercoaster ride since IPO'ing back in May 2021.… [+11066 chars]"
      //   },
      //   {
      //   "source": {
      //   "id": null,
      //   "name": "India TV News"
      //   },
      //   "author": "Reported by IANS",
      //   "title": "Elon Musk has solution for ailing NASA's Artemis 1 mission that will finally land astronauts on moon",
      //   "description": "After the US space agency NASA decided not to attempt the launch of the Artemis I Moon mission, Elon Musk has thrown in a solution to finally land astronauts on moon.",
      //   "url": "https://www.indiatvnews.com/trending/news/elon-musk-has-solution-for-ailing-nasa-artemis-1-mission-that-will-finally-land-astronauts-on-moon-lunar-surface-2022-09-04-805321",
      //   "urlToImage": "https://resize.indiatvnews.com/en/resize/newbucket/715_-/2022/09/elon-musk-1662271811.jpg",
      //   "publishedAt": "2022-09-04T06:11:04Z",
      //   "content": "As NASA scrubbed the Artemis 1 uncrewed mission to the Moon once again, Tesla and SpaceX CEO Elon Musk on Sunday came up with a suggestion for the ailing mission that will finally land astronauts on … [+1943 chars]"
      //   },
      //   {
      //   "source": {
      //   "id": null,
      //   "name": "Creative Bloq"
      //   },
      //   "author": "joe.foley@futurenet.com (Joseph Foley)",
      //   "title": "Apple Car is whipping other brands before it even exists",
      //   "description": "Watch out, Tesla.",
      //   "url": "https://www.creativebloq.com/news/apple-car-survey",
      //   "urlToImage": "https://cdn.mos.cms.futurecdn.net/KDZ6jVCLRv2FxRPVs9KVA8-1200-80.jpg",
      //   "publishedAt": "2022-09-04T06:00:52Z",
      //   "content": "Apple Car may be one of the worst-kept secrets in tech. Apple hasn't said a word about it, but everyone's convinced it's coming. In fact, people are so sure it's on the way, and so sure that it's goi… [+4801 chars]"
      //   },
      //   {
      //   "source": {
      //   "id": null,
      //   "name": "Seeking Alpha"
      //   },
      //   "author": "Leo Nelissen",
      //   "title": "Ford 2.0: Why This Turnaround Is Simply Breathtaking",
      //   "description": "Ford is in a fantastic spot to benefit, as it will maintain its legacy ICE business, using it to fund growth in the EV space. See why I'm bullish on F stock.",
      //   "url": "https://seekingalpha.com/article/4538852-ford-2-0-why-this-turnaround-is-simply-breathtaking",
      //   "urlToImage": "https://static.seekingalpha.com/cdn/s3/uploads/getty_images/1232993923/image_1232993923.jpg?io=getty-c-w750",
      //   "publishedAt": "2022-09-04T05:55:52Z",
      //   "content": "Bill Pugliano\r\nIntroduction\r\n I haven't covered automotive producers in years for one simple reason: I wasn't a fan of the industry. That has changed a bit as the entire industry is shifting away fro… [+15092 chars]"
      //   },
      //   {
      //   "source": {
      //   "id": null,
      //   "name": "Geeksforgeeks.org"
      //   },
      //   "author": "satyam kumar",
      //   "title": "Stock Price Prediction using Machine Learning in Python",
      //   "description": "Machine learning proves immensely helpful in many industries in automating tasks that earlier required human labor one such application of ML is predicting whether a… Read More\nThe post Stock Price Prediction using Machine Learning in Python appeared first on…",
      //   "url": "https://www.geeksforgeeks.org/stock-price-prediction-using-machine-learning-in-python/",
      //   "urlToImage": "https://media.geeksforgeeks.org/wp-content/cdn-uploads/gfg_200x200-min.png",
      //   "publishedAt": "2022-09-04T05:37:04Z",
      //   "content": "Machine learning proves immensely helpful in many industries in automating tasks that earlier required human labor one such application of ML is predicting whether a particular trade will be profitab… [+10121 chars]"
      //   },
      //   {
      //   "source": {
      //   "id": null,
      //   "name": "Seeking Alpha"
      //   },
      //   "author": "Another Mountain's Rock Investing",
      //   "title": "Finding Good Investments Via TdF Sponsorships",
      //   "description": "I have finally compiled a summary of investable sponsors of the 2022 Tour de France. Read my list of official partner, sponsor, and supplier companies.",
      //   "url": "https://seekingalpha.com/article/4538849-finding-good-investments-tdf-sponsorships",
      //   "urlToImage": "https://static.seekingalpha.com/cdn/s3/uploads/getty_images/501731433/image_501731433.jpg?io=getty-c-w750",
      //   "publishedAt": "2022-09-04T05:20:08Z",
      //   "content": "Razvan/iStock Editorial via Getty Images\r\nIntroduction\r\n A month after the finish, I have finally compiled a summary of investable sponsors of the 2022 Tour de France. While American viewership has b… [+12879 chars]"
      //   },
      //   {
      //   "source": {
      //   "id": null,
      //   "name": "Americanthinker.com"
      //   },
      //   "author": null,
      //   "title": "Time for Democrats to take on red?",
      //   "description": "It seems to be their favorite color.",
      //   "url": "https://www.americanthinker.com/blog/2022/09/time_for_democrats_to_take_on_red.html",
      //   "urlToImage": "https://www.americanthinker.com/images/bucket/2022-09/240455.jpg",
      //   "publishedAt": "2022-09-04T05:00:00Z",
      //   "content": "In August 2018, I suggested that \"Red and blue states need a color change.\"  And after President Joe Biden outed himself as an American communist, he delivered a primetime address denouncing \"MAGA\" R… [+3713 chars]"
      //   },
      //   {
      //   "source": {
      //   "id": null,
      //   "name": "Daily Mail"
      //   },
      //   "author": "Associated",
      //   "title": "17 states weigh adopting California's electric car mandate",
      //   "description": "Seventeen states with vehicle emission standards tied to rules established in California face weighty decisions on whether to follow that...",
      //   "url": "https://www.dailymail.co.uk/news/article-11176351/17-states-weigh-adopting-Californias-electric-car-mandate.html",
      //   "urlToImage": "https://i.dailymail.co.uk/1s/2022/09/03/15/wire-62022483-1662214051-931_636x382.jpg",
      //   "publishedAt": "2022-09-04T03:56:02Z",
      //   "content": "MINNEAPOLIS (AP) - Seventeen states with vehicle emission standards tied to rules established in California face weighty decisions on whether to follow that state's strictest-in-the nation new rules … [+7315 chars]"
      //   },
      //   {
      //   "source": {
      //   "id": null,
      //   "name": "Fark.com"
      //   },
      //   "author": null,
      //   "title": "I'll see your electric World Rallycross series in Hell and other interesting facts about electric rally racing and how it's different than your Prius [Cool]",
      //   "description": "I'll see your electric World Rallycross series in Hell and other interesting facts about electric rally racing and how it's different than your Prius",
      //   "url": "https://www.fark.com/comments/12542774/Ill-see-your-electric-World-Rallycross-series-in-Hell-other-interesting-facts-about-electric-rally-racing-how-its-different-than-your-Prius",
      //   "urlToImage": "https://usrimg-full.fark.net/v/vk/fark_vkBCgN0MyK6ezBjCUo5ylLNZNqI.jpg?AWSAccessKeyId=UKDINQXVGV49TCSSKJLK&Expires=1662350400&Signature=EYzStfKhArf6c8Hdfv84WMrmt%2Fw%3D",
      //   "publishedAt": "2022-09-04T02:35:18Z",
      //   "content": "Author loses points by bringing up the stupid Tesla high performance optionsYou should lead with Porsche if you are talking racing\r\nGlad to see more E series out there, and rally cross makes a good o… [+124 chars]"
      //   },
      //   {
      //   "source": {
      //   "id": null,
      //   "name": "Gizmodo Australia"
      //   },
      //   "author": "José Rodríguez Jr.",
      //   "title": "The New Mini EV Cabrio Is a Rare Convertible Electric Car, And Possibly the Cutest EV",
      //   "description": "The best-selling EV in the world is going with the top down, after all. General Motor’s joint venture in China,...\nThe post The New Mini EV Cabrio Is a Rare Convertible Electric Car, And Possibly the Cutest EV appeared first on Gizmodo Australia.\n  Related St…",
      //   "url": "https://www.gizmodo.com.au/2022/09/the-new-mini-ev-cabrio-is-a-rare-convertible-electric-car-and-possibly-the-cutest-ev/",
      //   "urlToImage": "https://www.gizmodo.com.au/wp-content/uploads/sites/2/2022/09/01/25f4c65c35532fc66ce0cf4ed7c7cc79.jpg?quality=80&resize=1280,720",
      //   "publishedAt": "2022-09-04T02:00:21Z",
      //   "content": "The best-selling EV in the world is going with the top down, after all. General Motors joint venture in China, SAIC-GM-Wuling, says the Mini EV Cabrio is going on to production, as Automotive News re… [+2421 chars]"
      //   },
      //   {
      //   "source": {
      //   "id": null,
      //   "name": "Motley Fool Australia"
      //   },
      //   "author": "James Mickleboro",
      //   "title": "3 fantastic ETFs for ASX investors to buy in September",
      //   "description": "Check out these ETFs in September...\nThe post 3 fantastic ETFs for ASX investors to buy in September appeared first on The Motley Fool Australia.",
      //   "url": "https://www.fool.com.au/2022/09/04/3-fantastic-etfs-for-asx-investors-to-buy-in-september/",
      //   "urlToImage": "https://www.fool.com.au/wp-content/uploads/2021/04/asx-share-price-22.jpg",
      //   "publishedAt": "2022-09-04T01:50:00Z",
      //   "content": "If you’re looking for exchange traded funds (ETFs) to buy in September, then you might want to look at the three listed below.\r\nHeres what you need to know about these popular ETFs:\r\nBetaShares Asia … [+1818 chars]"
      //   },
      //   {
      //   "source": {
      //   "id": null,
      //   "name": "Erickimphotography.com"
      //   },
      //   "author": "ERIC KIM",
      //   "title": "NEWS: A CRITIQUE OF LIFE IN AMERICA",
      //   "description": "My personal critique of living and life in America: PODCAST AUDIO FILE ESSAY Too many distractions I feel like when it comes to life in America, 99.9% of the time we are thinking about buying a new car, getting that dream car, upgrading your car, upgrading yo…",
      //   "url": "https://erickimphotography.com/blog/2022/09/03/news-a-critique-of-life-in-america/",
      //   "urlToImage": "https://i0.wp.com/erickimphotography.com/blog/wp-content/uploads/2022/09/6E28D11B-3DB4-4728-A470-DFBBF3D969F8-rotated.jpeg?fit=800%2C1200&ssl=1",
      //   "publishedAt": "2022-09-04T01:49:56Z",
      //   "content": "My personal critique of living and life in America:\r\nToo many distractions\r\nI feel like when it comes to life in America, 99.9% of the time we are thinking about buying a new car, getting that dream … [+6748 chars]"
      //   },
      //   {
      //   "source": {
      //   "id": null,
      //   "name": "iPhone in Canada"
      //   },
      //   "author": "Nehal Malik",
      //   "title": "Tesla Seeking ‘High Volume’ Recruiter in Quebec for Potential Factory: Report",
      //   "description": "The company has previously used similar language in job listings for recruiters at Gigafactory Berlin and Gigafactory Texas.\nThe post Tesla Seeking ‘High Volume’ Recruiter in Quebec for Potential Factory: Report first appeared on iPhone in Canada Blog.",
      //   "url": "https://www.iphoneincanada.ca/tesla/tesla-seeking-high-volume-recruiter-in-quebec-for-potential-factory-report/",
      //   "urlToImage": "https://cdn.iphoneincanada.ca/wp-content/uploads/2017/09/iic-logo-1.svg",
      //   "publishedAt": "2022-09-04T01:43:31Z",
      //   "content": "Tesla is looking to hire a “high volume” recruiter in Montreal, Quebec, as rumours of a potential factory in Canada run wild reports Tesla North.\r\nThe company’s recently posted job listing, titled “R… [+1870 chars]"
      //   },
      //   {
      //   "source": {
      //   "id": null,
      //   "name": "Dansdeals.com"
      //   },
      //   "author": "JJ",
      //   "title": "Only 1 Day Left To Win The Tesla Of Your Choice – Limited Tickets Remaining!",
      //   "description": "Please note: This is a stickied sponsored post, please scroll down for new posts. The drawing for the 8th annual Tesla Raffle by Chicago Chesed Fund is quickly approaching, slated to take place TOMORROW, Labor Day, Monday, September 5th at 8:00 PM CT! This ra…",
      //   "url": "https://www.dansdeals.com/advertisement/1-day-left-win-tesla-choice-limited-tickets-remaining/",
      //   "urlToImage": "https://i.dansdeals.com/wp-content/uploads/2022/09/03213829/Tesla-Dans-Deals-8-31-22-compressed.jpg",
      //   "publishedAt": "2022-09-04T01:39:50Z",
      //   "content": "Please note: This is a stickied sponsored post, please scroll down for new posts.\r\nThe drawing for the 8th annual Tesla Raffle by Chicago Chesed Fund is quickly approaching, slated to take place TOMO… [+1033 chars]"
      //   },
      //   {
      //   "source": {
      //   "id": "the-times-of-india",
      //   "name": "The Times of India"
      //   },
      //   "author": "NYT News Service",
      //   "title": "India's electric vehicle boom is built on mopeds and rickshaws, not Teslas",
      //   "description": "India’s success with the low-cost vehicles is also providing a template for how developing countries could ditch combustion engines and combat climate change without pricey electric cars.",
      //   "url": "https://economictimes.indiatimes.com/industry/renewables/indias-electric-vehicle-boom-is-built-on-mopeds-and-rickshaws-not-teslas/articleshow/93976903.cms",
      //   "urlToImage": "https://img.etimg.com/thumb/msid-93976903,width-1070,height-580,imgsize-79322,overlay-economictimes/photo.jpg",
      //   "publishedAt": "2022-09-04T01:25:38Z",
      //   "content": "In the United States, luxury-car buyers are snapping up Teslas and other electric cars that cost more than $60,000, and even relatively cheap models cost more than $25,000.\r\nIn India, those are all o… [+9543 chars]"
      //   },
      //   {
      //   "source": {
      //   "id": null,
      //   "name": "Erickimphotography.com"
      //   },
      //   "author": "ERIC KIM",
      //   "title": "VLOG: A CRITIQUE ON LIFE IN AMERICA",
      //   "description": "PODCAST AUDIO A CRITIQUE ON LIFE IN AMERICA My thoughts: ESSAY: A CRITIQUE OF LIFE IN AMERICA My personal critique of living and life in America: Too many distractions I feel like when it comes to …",
      //   "url": "https://erickimphotography.com/blog/2022/09/03/vlog-a-critique-on-life-in-america/",
      //   "urlToImage": "https://erickimphotography.com/blog/wp-content/uploads/2022/09/eric-kim-vlog-critique-life-in-america-1-scaled.jpg",
      //   "publishedAt": "2022-09-04T00:44:53Z",
      //   "content": "A CRITIQUE ON LIFE IN AMERICA\r\nMy thoughts:\r\nESSAY:\r\nMy personal critique of living and life in America:\r\nToo many distractions\r\nI feel like when it comes to life in America, 99.9% of the time we are… [+5062 chars]"
      //   },
      //   {
      //   "source": {
      //   "id": "business-insider",
      //   "name": "Business Insider"
      //   },
      //   "author": "ktangalakislippert@insider.com (Katherine Tangalakis-Lippert)",
      //   "title": "Elon Musk's legal troubles are now the subject of a law school class",
      //   "description": "Professor Stephen Bainbridge of UCLA law school is offering a new class called the \"Law of Elon Musk\" on lawsuits facing the billionaire's businesses.",
      //   "url": "https://www.businessinsider.com/law-school-offers-class-on-lawsuits-facing-elon-musk-businesses-2022-9",
      //   "urlToImage": "https://i.insider.com/6313d541ed92be0018c5d4ca?width=1200&format=jpeg",
      //   "publishedAt": "2022-09-04T00:36:26Z",
      //   "content": "With Tesla and SpaceX mired in lawsuits regarding CEO compensation, the potential Twitter acquisition, and related securities investigations, billionaire Elon Musk's legal troubles are the central to… [+2536 chars]"
      //   },
      //   {
      //   "source": {
      //   "id": null,
      //   "name": "Fast Company"
      //   },
      //   "author": "Ho-Yin Mak and Christopher S. Tang and Tinglong Dai",
      //   "title": "Operations experts on how the U.S. can make EVs without China’s supply chain",
      //   "description": "The U.S. needs a national strategy to build an EV ecosystem if it hopes to catch up.\nTwo electrifying moves in recent weeks have the potential to ignite electric vehicle demand in the United States. First, Congress passed the Inflation Reduction Act, expandin…",
      //   "url": "https://www.fastcompany.com/90784583/how-the-us-can-make-evs-without-chinas-supply-chain",
      //   "urlToImage": "https://images.fastcompany.net/image/upload/w_1280,f_auto,q_auto,fl_lossy/wp-cms/uploads/2022/09/p-1-how-the-us-can-make-evs-without-chinas-supply-chain.jpg",
      //   "publishedAt": "2022-09-04T00:30:01Z",
      //   "content": "Why the EV industry depends heavily on China\r\nHow did the U.S. fall so far behind?\r\nBack in 2009, the Obama administration pledged $2.4 billion to support the country’s fledgling EV industry. But dem… [+7017 chars]"
      //   },
      //   {
      //   "source": {
      //   "id": null,
      //   "name": "CarScoops"
      //   },
      //   "author": "Sebastien Bell",
      //   "title": "Tesla FSD Can Allegedly Be Tricked Into Stopping Early For Bigger Stop Signs",
      //   "description": "Do Teslas interpret bigger stop signs as being closer? Some drivers think so.",
      //   "url": "https://www.carscoops.com/2022/09/tesla-fsd-can-allegedly-be-tricked-into-stopping-early-for-bigger-stop-signs/",
      //   "urlToImage": "https://www.carscoops.com/wp-content/uploads/2022/08/2022-Tesla-Model-3-3.jpg",
      //   "publishedAt": "2022-09-03T23:49:15Z",
      //   "content": "Tesla drivers are reporting issues with their vehicles’ Level 2 advanced driver assistance systems (ADAS) stopping too early at certain intersections. The cause, a few drivers believe, is that the st… [+2844 chars]"
      //   },
      //   {
      //   "source": {
      //   "id": "next-big-future",
      //   "name": "Next Big Future"
      //   },
      //   "author": "Brian Wang",
      //   "title": "BYD and Tesla in Real Battle for Top Electric Car Company",
      //   "description": "BYD is aiming for 280,000 monthly deliveries of battery electric (BEV) and hybrid electric cars (PHEV) by the end of the year. BYD sold and delivered 174,915 hybrids and BEV in August. In August, BYD had 82,678 BEVs which was nearly triple the 30,382 units in…",
      //   "url": "https://www.nextbigfuture.com/2022/09/byd-and-tesla-in-real-battle-for-top-electric-car-company.html",
      //   "urlToImage": "https://nextbigfuture.s3.amazonaws.com/uploads/2021/10/TeslaBYD.jpg",
      //   "publishedAt": "2022-09-03T23:41:57Z",
      //   "content": "BYD is aiming for 280,000 monthly deliveries of battery electric (BEV) and hybrid electric cars (PHEV) by the end of the year. BYD sold and delivered 174,915 hybrids and BEV in August.In August, BYD … [+2321 chars]"
      //   },
      //   {
      //   "source": {
      //   "id": null,
      //   "name": "CleanTechnica"
      //   },
      //   "author": "Zachary Shahan",
      //   "title": "3-Year Review of Tesla Model 3 Standard Range Plus (SR+)",
      //   "description": "We’ve had our Tesla Model 3 Standard Range Plus (SR+) for a little more than 3 years. It’s sitting at 28,698 miles, or about 9,500 miles a year. (True, we’re not road warriors. Part of the low mileage compared to the US average is that the car hardly moved du…",
      //   "url": "https://cleantechnica.com/2022/09/03/3-year-review-of-tesla-model-3-standard-range-plus-sr/",
      //   "urlToImage": "https://cleantechnica.com/files/2021/02/Tesla-Model-3-White-Palm-Tree-CleanTechnica-Watermark.jpg",
      //   "publishedAt": "2022-09-03T23:38:19Z",
      //   "content": "We’ve had our Tesla Model 3 Standard Range Plus (SR+) for a little more than 3 years. It’s sitting at 28,698 miles, or about 9,500 miles a year. (True, we’re not road warriors. Part of the low mileag… [+11170 chars]"
      //   },
      //   {
      //   "source": {
      //   "id": null,
      //   "name": "CNA"
      //   },
      //   "author": null,
      //   "title": "Tesla’s best-selling all-electric SUV, the Model Y, has arrived – we take a look",
      //   "description": "<![CDATA[ With its space age-like interior and copious cabin space, Model Y is Tesla’s second car launched here since its official return to Singapore last year. CNA Luxury test-drives the best-selling SUV to find out what all the hype is about.   ]]>",
      //   "url": "https://cnaluxury.channelnewsasia.com/obsessions/tesla-model-y-singapore-ev-electric-vehicle-205966",
      //   "urlToImage": "https://onecms-res.cloudinary.com/image/upload/s--Xs43qJWp--/c_crop,h_803,w_1429,x_1,y_1/c_fill,g_auto,h_676,w_1200/f_auto,q_auto/v1/mediacorp/cna/image/2022/08/30/tesla_model_y.png?itok=ChWapS6r",
      //   "publishedAt": "2022-09-03T22:30:48Z",
      //   "content": "Tesla needs no introduction. Thanks (or no thanks) to its founder Elon Musks notoriously public shenanigans, like his most recent one reneging on the Twitter deal. So much so that some pundits believ… [+1365 chars]"
      //   },
      //   {
      //   "source": {
      //   "id": null,
      //   "name": "Freerepublic.com"
      //   },
      //   "author": null,
      //   "title": "Southern Cali Tesla owner charging his car with a gas generator. *Pic*",
      //   "description": "This pic illustrates the irony that is gavin newsome's California. Maybe if Elon Musk threw in a trailer/generator/1000 gallons of gas for every Tesla purchase in California?",
      //   "url": "https://freerepublic.com/focus/f-chat/4090647/posts",
      //   "urlToImage": null,
      //   "publishedAt": "2022-09-03T21:36:52Z",
      //   "content": "This pic illustrates the irony that is gavin newsome's California. Maybe if Elon Musk threw in a trailer/generator/1000 gallons of gas for every Tesla purchase in California?Dear FRiends, We need you… [+800 chars]"
      //   },
      //   {
      //   "source": {
      //   "id": null,
      //   "name": "Yahoo Entertainment"
      //   },
      //   "author": "Ty Haqqi",
      //   "title": "13 Largest Lithium Producers In The World",
      //   "description": "In this article, we will be taking a look at the 13 largest lithium producers in the world. To skip our detailed analysis, you can go directly to see the 5...",
      //   "url": "https://finance.yahoo.com/news/13-largest-lithium-producers-world-211221819.html",
      //   "urlToImage": "https://s.yimg.com/uu/api/res/1.2/aoDPf7SR.Y9or.NxekPH5w--~B/aD01MTI7dz03Njg7YXBwaWQ9eXRhY2h5b24-/https://media.zenfs.com/en/insidermonkey.com/2591297d5a9e1aed5470dece9f0101ce",
      //   "publishedAt": "2022-09-03T21:12:21Z",
      //   "content": "In this article, we will be taking a look at the 13 largest lithium producers in the world. To skip our detailed analysis, you can go directly to see the 5 largest lithium producers in the world.\r\nWh… [+8667 chars]"
      //   },
      //   {
      //   "source": {
      //   "id": null,
      //   "name": "This is Money"
      //   },
      //   "author": "Joanne Hart",
      //   "title": "MIDAS SHARE TIPS: Nat Rothschild could make you richer with Volex",
      //   "description": "Rothschild chose to invest not just cash but also time and energy in Volex. At £2.63, the stock is a buy.",
      //   "url": "https://www.thisismoney.co.uk/money/investing/article-11176101/MIDAS-SHARE-TIPS-Nat-Rothschild-make-richer-Volex.html",
      //   "urlToImage": "https://i.dailymail.co.uk/1s/2022/09/03/14/62021833-0-image-a-85_1662211917440.jpg",
      //   "publishedAt": "2022-09-03T20:51:41Z",
      //   "content": "The Rothschild family is one of the wealthiest in the world, with a fortune running into hundreds of billions of pounds. Nat Rothschild, 51-year-old son of hereditary peer Lord Rothschild, is persona… [+4499 chars]"
      //   },
      //   {
      //   "source": {
      //   "id": null,
      //   "name": "SlashGear"
      //   },
      //   "author": "James Dolan",
      //   "title": "Tesla Drivers Are Defecting To Ford's Electric Pickup",
      //   "description": "The demand for the Ford F-150 Lightning started on a high note with the car company closing pre-reservation orders after it was overwhelmed by the demands.",
      //   "url": "https://www.slashgear.com/993206/tesla-drivers-are-defecting-to-fords-electric-pickup/",
      //   "urlToImage": "https://www.slashgear.com/img/gallery/tesla-drivers-are-defecting-to-fords-electric-pickup/l-intro-1662235864.jpg",
      //   "publishedAt": "2022-09-03T20:28:38Z",
      //   "content": "In its latest sales report (PDF), Ford sold 2,373 F-150 Lightning models in August this brings it to a total of 6,842 F-150 Lightning pickups that have been sold since May. Ford also says that it sol… [+802 chars]"
      //   },
      //   {
      //   "source": {
      //   "id": null,
      //   "name": "Biztoc.com"
      //   },
      //   "author": "wolfofbt",
      //   "title": "U.S. eases restrictions on Nvidia after banning AI chip exports to China",
      //   "description": "Nvidia shares finished week down almost 15% after the California-based semiconductor maker got caught in the high stakes' technology battle between the U.S. and China. Nvidia shares ended the week... #semiconductormaker #marklipacis #barron #tesla #barrons #r…",
      //   "url": "https://biztoc.com/p/kmmqdig5?ref=rss",
      //   "urlToImage": "https://cdn.biztoc.com/og/kmmqdig5.jpg",
      //   "publishedAt": "2022-09-03T20:10:15Z",
      //   "content": "Nvidia shares finished week down almost 15% after the California-based semiconductor maker got caught in the high stakes' technology battle between the U.S. and China. Nvidia shares ended the week do… [+930 chars]"
      //   },
      //   {
      //   "source": {
      //   "id": "next-big-future",
      //   "name": "Next Big Future"
      //   },
      //   "author": "Brian Wang",
      //   "title": "Fourth Tesla Virtual Power Plant Events in 17 Days $TSLA",
      //   "description": "Today will be the fourth Tesla-PGE Virtual Power Plant (VPP) event in 17 days. VPP today. This will be for about 2 hours. A solar power blog reported that earlier Tesla-PFE were targeting or estimating 20-60 hours per year. The VPP only operates from May to O…",
      //   "url": "https://www.nextbigfuture.com/2022/09/fourth-tesla-virtual-power-plant-events-in-17-days-tsla.html",
      //   "urlToImage": "https://nextbigfuture.s3.amazonaws.com/uploads/2019/10/pge.jpg",
      //   "publishedAt": "2022-09-03T20:05:59Z",
      //   "content": "Today will be the fourth Tesla-PGE Virtual Power Plant (VPP) event in 17 days. VPP today. This will be for about 2 hours. A solar power blog reported that earlier Tesla-PFE were targeting or estimati… [+1850 chars]"
      //   },
      //   {
      //   "source": {
      //   "id": null,
      //   "name": "Lawyersgunsmoneyblog.com"
      //   },
      //   "author": "Erik Loomis",
      //   "title": "Reasons For Mild Optimism About Organized Labor",
      //   "description": "It’s very, very easy for labor people to take every small victory and turn it into something that it is not. There’s a long history of labor advocates, journalists, and historians taking small victories and extrapolating that labor is on its way back. And the…",
      //   "url": "https://www.lawyersgunsmoneyblog.com/2022/09/reasons-for-mild-optimism-about-organized-labor",
      //   "urlToImage": "https://www.lawyersgunsmoneyblog.com/wp-content/uploads/2021/04/ap_7509160185_wide-cfa156a4f530071d52ce4c00c28326290f52138e-1024x576.jpg",
      //   "publishedAt": "2022-09-03T19:57:57Z",
      //   "content": "Cesar Chavez, the head of the United Farm Workers Union, calls for the resignation of Walter Kintz, the first legal counsel for the state Agriculture Labor Relations Board, in Sacramento, Calif., on … [+2117 chars]"
      //   },
      //   {
      //   "source": {
      //   "id": null,
      //   "name": "Audacy.com"
      //   },
      //   "author": "Lauren Barry",
      //   "title": "People can’t wait to buy the rumored Apple car",
      //   "description": "Study results released this week from auto industry research consultant firm Strategic Vision found that consumers are eager to buy vehicles made by Apple, even though the company hasn't officially announced that it plans to sell them.",
      //   "url": "https://www.audacy.com/wwjnewsradio/news/national/people-cant-wait-to-buy-the-rumored-apple-car",
      //   "urlToImage": "https://images.radio.com/aiu-media/GettyImages1169790342-c8cc0c72-2a44-4424-afe0-574d31fb08cb.jpg",
      //   "publishedAt": "2022-09-03T18:51:29Z",
      //   "content": "Study results released this week from auto industry research consultant firm Strategic Vision found that consumers are eager to buy vehicles made by Apple, even though the company hasn’t officially a… [+3570 chars]"
      //   }
      //   ];
      
      constructor(){
        super();
        this.state = {
            articles : [],
            page : 1,
            loading :false
        }
      }
    async componentDidMount(){
        this.setState({loading:true})
        let url =`https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}&apiKey=c141dbcf8e8b4df99a231845da9c544a&page=1&pageSize=${this.props.pageSize}`;
        let data =await fetch(url);
        let parsedata =await data.json();
        this.setState({
          articles : parsedata.articles,
          totalResults:parsedata.totalResults,
          loading:false
        })
    }
    handlePrev =async ()=>{
        this.setState({loading:true})
        let url =`https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}&apiKey=c141dbcf8e8b4df99a231845da9c544aa&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
        let data =await fetch(url);
        let parsedata =await data.json();
        this.setState({
            page: this.state.page - 1,
            articles : parsedata.articles,
            totalResults :parsedata.totalResults,
            loading:false
        })
    } 
    handleNext =async ()=>{
        if(this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize)){
        }else{
        this.setState({loading:true});
        let url =`https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}&apiKey=c141dbcf8e8b4df99a231845da9c544a&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
        let data =await fetch(url);
        let parsedata =await data.json();
        this.setState({
            page: this.state.page + 1,
            articles : parsedata.articles,
            loading:false
        })
    }
    }
  render() {
    return (
      <>
      <div className="container">
        <h2 className='my-3'>Top News Headline - NewsBot</h2>
        {this.state.loading && <Spinner/>}
        {this.state.loading && <div className="row mt-3">
            {this.state.articles.map((element)=>{
                return(
                    <NewsItem key={element.url} title={element.title?element.title.slice(0,45):"Custom Title"} description={element.description?element.description.slice(0,85):"lorem ipsum  dolae dsjd sds dssf sdfuhs dfisdjf shdfsd fhds dsfhdsf dsf dsh dfhdsufe"} imgurl={element.urlToImage} newsurl={element.url}/>
                )
            })}
            
        </div>
      </div>
      <div className="container d-flex justify-content-between pb-4">
        <button disabled={this.state.page<=1} type="button" className="btn btn-primary btn" onClick={this.handlePrev}>&larr;Previous</button>
        <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize)} type="button" className="btn btn-primary btn" onClick={this.handleNext} id="nextbtn">Next&rarr;</button>
      </div>
      </>
    )
  }
}
