import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types' //propstype can be put in class based component
import InfiniteScroll from "react-infinite-scroll-component";

export class News extends Component {
    // articles = [
    //     {
    //         "source": {
    //             "id": "al-jazeera-english",
    //             "name": "Al Jazeera English"
    //         },
    //         "author": "Al Jazeera",
    //         "title": "Jobless engineers, MBAs: The hidden army of Indian election ‘consultants’",
    //         "description": "These ‘politically neutral problem solvers’ do short stints in political campaigns and are valued for their data skills.",
    //         "url": "https://www.aljazeera.com/economy/2024/4/27/jobless-tech-savvy-engineers-mbas-are-problem-solvers-of-indian-elections",
    //         "urlToImage": "https://www.aljazeera.com/wp-content/uploads/2024/04/AFP__20240417__34PL2YH__v2__HighRes__IndiaPoliticsVoteLifestyle-1713434826.jpg?resize=1920%2C1440",
    //         "publishedAt": "2024-04-27T03:01:35Z",
    //         "content": "How many tennis balls can fit in a passenger plane?\r\nNeeraj, a young economics graduate from the premier Indian Institute of Technology (IIT), was given 15 minutes to solve this question during his i… [+17420 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": "google-news-au",
    //             "name": "Google News (Australia)"
    //         },
    //         "author": "The Times of India",
    //         "title": "Temperature hovering at 40C, Phase 2 turnout touches 64.7%, against 69.4% in 2019 - The Times of India",
    //         "description": "null",
    //         "url": "https://news.google.com/rss/articles/CBMikQFodHRwczovL3RpbWVzb2ZpbmRpYS5pbmRpYXRpbWVzLmNvbS9pbmRpYS90ZW1wZXJhdHVyZS1ob3ZlcmluZy1hdC00MGMtcGhhc2UtMi10dXJub3V0LXRvdWNoZXMtNjQtNy1hZ2FpbnN0LTY5LTQtaW4tMjAxOS9hcnRpY2xlc2hvdy8xMDk2MzM5OTEuY21z0gGVAWh0dHBzOi8vdGltZXNvZmluZGlhLmluZGlhdGltZXMuY29tL2luZGlhL3RlbXBlcmF0dXJlLWhvdmVyaW5nLWF0LTQwYy1waGFzZS0yLXR1cm5vdXQtdG91Y2hlcy02NC03LWFnYWluc3QtNjktNC1pbi0yMDE5L2FtcF9hcnRpY2xlc2hvdy8xMDk2MzM5OTEuY21z?oc=5",
    //         "urlToImage": null,
    //         "publishedAt": "2024-04-26T20:45:00+00:00",
    //         "content": null
    //     },
    //     {
    //         "source": {
    //             "id": "reuters",
    //             "name": "Reuters"
    //         },
    //         "author": "Dhanya Skariachan, Chris Thomas, Nikunj Ohri",
    //         "title": "India begins voting in second phase of giant election as Modi vs Gandhi campaign heats up",
    //         "description": "India began voting on Friday in the second phase of the world's biggest election, as Prime Minister Narendra Modi and his rivals raise the pitch of the campaign by focusing on hot-button issues such as religious discrimination, affirmative action and taxes.",
    //         "url": "https://www.reuters.com/world/india/india-begins-voting-second-phase-giant-election-modi-vs-gandhi-campaign-heats-up-2024-04-26/",
    //         "urlToImage": "https://www.reuters.com/resizer/v2/EEBEJNMY5NI2FPGWYCVT2RC44U.jpg?auth=47f14f3bdfc5a811068f81944ba16b47537ea01ff8889c90455760e6de72e629&height=1005&width=1920&quality=80&smart=true",
    //         "publishedAt": "2024-04-26T04:01:14Z",
    //         "content": null
    //     },
    //     {
    //         "source": {
    //             "id": "fortune",
    //             "name": "Fortune"
    //         },
    //         "author": "Emma Hinchliffe, Paige McGlauflin",
    //         "title": "Why a former SoftBank partner is tackling mid-career drop-off for working mothers",
    //         "description": "Former SoftBank partner and Facebook India director Kirthiga Reddy is the cofounder of Laddrr, a resource hub for working mothers aiming to prevent mid-career drop-off.",
    //         "url": "https://fortune.com/2022/06/01/former-softbank-partner-tackling-mid-career-drop-off-for-working-mothers/",
    //         "urlToImage": "https://content.fortune.com/wp-content/uploads/2022/05/Kirthiga1.jpg?resize=1200,600",
    //         "publishedAt": "2022-06-01T13:22:34Z",
    //         "content": "Skip to Content"
    //     },
    //     {
    //         "source": {
    //             "id": "the-hindu",
    //             "name": "The Hindu"
    //         },
    //         "author": "Ananth Krishnan",
    //         "title": "Dalai Lama’s close aides targeted on Pegasus spyware list",
    //         "description": "‘Analysis indicates that the Indian govt. was selecting the potential targets’",
    //         "url": "https://www.thehindu.com/news/international/dalai-lamas-close-aides-targeted-on-pegasus-spyware-list/article35474285.ece",
    //         "urlToImage": "https://www.thehindu.com/news/international/dvshb0/article35474284.ece/ALTERNATES/LANDSCAPE_615/thjc-DalaiLama",
    //         "publishedAt": "2021-07-22T15:47:01Z",
    //         "content": "Several of the top India-based aides to the Tibetan spiritual leader, the Dalai Lama, figure on the list of potential targets for spying using the Pegasus spyware, according to a report on Thursday. … [+2399 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": "rte",
    //             "name": "RTE"
    //         },
    //         "author": "RTÉ News",
    //         "title": "UK continues with reopening plan despite concerns",
    //         "description": "British ministers are pushing on with a major easing of restrictions on Monday despite concerns over the Indian variant of coronavirus, as they were criticised for allowing the strain's import.",
    //         "url": "https://www.rte.ie/news/uk/2021/0515/1221764-uk-indian-variant/",
    //         "urlToImage": "https://img.rasset.ie/0016cb40-1600.jpg",
    //         "publishedAt": "2021-05-15T09:33:48Z",
    //         "content": "British ministers are pushing on with a major easing of restrictions on Monday despite concerns over the Indian variant of coronavirus, as they were criticised for allowing the strain's import.\r\nPrim… [+5066 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": "the-times-of-india",
    //             "name": "The Times of India"
    //         },
    //         "author": "Rajat Pandit",
    //         "title": "Army explores procurement of 350 light tanks for mountainous terrain after border standoff with China",
    //         "description": "India News:  The Army is now exploring the possibility of procuring 350 light tanks, which can also be transported by air, to augment its firepower in high-altitu",
    //         "url": "http://timesofindia.indiatimes.com/india/army-explores-procurement-of-350-light-tanks-for-mountainous-terrain-after-border-standoff-with-china/articleshow/82217825.cms",
    //         "urlToImage": "https://static.toiimg.com/thumb/msid-82217908,width-1070,height-580,imgsize-264639,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
    //         "publishedAt": "2021-04-23T08:29:00Z",
    //         "content": "Army explores procurement of 350 light tanks for mountainous terrain after border standoff with China\r\n\u003Cul\u003E\u003Cli\u003ENews\u003C/li\u003E\r\n\u003Cli\u003EIndia News\u003C/li\u003E\r\n\u003Cli\u003EArmy explores procurement of 350 light tanks for mou… [+58 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": "the-times-of-india",
    //             "name": "The Times of India"
    //         },
    //         "author": "Times Of India",
    //         "title": "PBKS vs MI Live Score, IPL 2021: Mumbai Indians seek consistency; Punjab Kings eye return to winning ways",
    //         "description": "IPL Live Score: Mumbai Indians seek consistency; Punjab Kings eye return to winning ways. Stay with TOI to get IPL live score, playing 11, scorecard, highlights and ball by ball score updates of the 17th IPL match between Punjab Kings and Mumbai Indians.",
    //         "url": "http://timesofindia.indiatimes.com/sports/cricket/ipl/live-blog/punjab-kings-vs-mumbai-indians-pbks-vs-mi-live-score-ipl-2021-17th-match-chennai/liveblog/82214950.cms",
    //         "urlToImage": "https://static.toiimg.com/thumb/msid-82214950,width-1070,height-580,imgsize-157009,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
    //         "publishedAt": "2021-04-23T05:44:49Z",
    //         "content": "Ravi Bishnoi return on the cards?\r\nDeepak Hooda showed what he is capable of, but greater consistency would be needed from him if the team has to prosper. They bet on Australian pace imports Jhye Ric… [+3131 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": "the-times-of-india",
    //             "name": "The Times of India"
    //         },
    //         "author": "PTI",
    //         "title": "Zydus Cadila gets DCGI nod for hepatitis drug for Covid-19 treatment",
    //         "description": "India News: Drug firm Zydus Cadila on Friday said it has received restricted emergency use approval from the Indian drug regulator for the use of Pegylated Interf",
    //         "url": "http://timesofindia.indiatimes.com/india/zydus-cadila-gets-dcgi-nod-for-hepatitis-drug-for-covid-19-treatment/articleshow/82214909.cms",
    //         "urlToImage": "https://static.toiimg.com/thumb/msid-82214921,width-1070,height-580,imgsize-98052,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
    //         "publishedAt": "2021-04-23T05:43:00Z",
    //         "content": null
    //     },
    //     {
    //         "source": {
    //             "id": "the-times-of-india",
    //             "name": "The Times of India"
    //         },
    //         "author": "Bloomberg",
    //         "title": "Even record death toll may hide extent of India’s Covid crisis",
    //         "description": "India News: Bodies piling up at crematoriums and burial grounds across India are sparking concerns that the death toll from a ferocious new Covid-19 wave may be m.",
    //         "url": "http://timesofindia.indiatimes.com/india/even-record-death-toll-may-hide-extent-of-indias-covid-crisis/articleshow/82213444.cms",
    //         "urlToImage": "https://static.toiimg.com/thumb/msid-82213819,width-1070,height-580,imgsize-232887,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
    //         "publishedAt": "2021-04-23T04:41:00Z",
    //         "content": null
    //     },
    //     {
    //         "source": {
    //             "id": "the-times-of-india",
    //             "name": "The Times of India"
    //         },
    //         "author": "Dipak K Dash",
    //         "title": "Government to provide 5 kg free food grains to poor for May & June",
    //         "description": "India News: The government on Friday announced to provide 5 kg free food grains to the poor for May and June 2021. This will cover nearly 80 crore beneficiaries u",
    //         "url": "http://timesofindia.indiatimes.com/india/government-to-provide-5-kg-free-food-grains-to-poor-for-may-june/articleshow/82213582.cms",
    //         "urlToImage": "https://static.toiimg.com/thumb/msid-82213583,width-1070,height-580,imgsize-1921513,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
    //         "publishedAt": "2021-04-23T04:23:00Z",
    //         "content": null
    //     },
    //     {
    //         "source": {
    //             "id": "the-times-of-india",
    //             "name": "The Times of India"
    //         },
    //         "author": "TIMESOFINDIA.COM",
    //         "title": "'Inappropriate': PM Modi objects to 'protocol break' during meeting; Delhi CM expresses regret",
    //         "description": "India News: Delhi chief minister Arvind Kejriwal on Friday faced flak for sharing a live telecast of an \"in-house\" meeting with Prime Minister Narendra Modi where",
    //         "url": "http://timesofindia.indiatimes.com/india/delhi-cmo-expresses-regret-over-televised-address-during-meeting-with-pm-modi/articleshow/82213159.cms",
    //         "urlToImage": "https://static.toiimg.com/thumb/msid-82213159,width-1070,height-580,imgsize-134672,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
    //         "publishedAt": "2021-04-23T03:54:00Z",
    //         "content": null
    //     },
    //     {
    //         "source": {
    //             "id": "the-times-of-india",
    //             "name": "The Times of India"
    //         },
    //         "author": "Times Of India",
    //         "title": "Coronavirus in India live updates: Zydus' Virafin gets DCGI nod for Covid treatment",
    //         "description": "In yet another grim milestone, India recorded 3.3 lakh new Covid-19 cases, and 2,263 deaths in a day. Meanwhile, active cases crossed the 24-lakh mar",
    //         "url": "http://timesofindia.indiatimes.com/india/coronavirus-in-india-covid-19-vaccine-cases-lockdown-live-updates-23-april-2021/liveblog/82205841.cms",
    //         "urlToImage": "https://static.toiimg.com/thumb/msid-82205841,width-1070,height-580,imgsize-148788,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
    //         "publishedAt": "2021-04-22T16:20:06Z",
    //         "content": "Zydus Cadila gets DCGI nod for hepatitis drug for Covid-19 treatment\r\nMake Covid-19 vaccination affordable, accessible through Jan Aushadi scheme: IMA\r\nThe IMA has demanded that the Covid-19 vaccine … [+4487 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": "espn-cric-info",
    //             "name": "ESPN Cric Info"
    //         },
    //         "author": null,
    //         "title": "I'm fighting my own benchmarks - R Ashwin | ESPNcricinfo.com",
    //         "description": "India's No. 1 offspinner talks to Manjrekar on his form abroad, injuries and more | ESPNcricinfo.com",
    //         "url": "http://www.espncricinfo.com/story/_/id/29102228/fighting-my-own-benchmarks-r-ashwin",
    //         "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219773_1296x729.jpg",
    //         "publishedAt": "2020-04-25T03:00:09Z",
    //         "content": "R Ashwin has said that he is \"fighting my own benchmarks\" because his Test performances overseas are being measured against his heroics in India. Despite being the country's best long-form spinner in… [+3347 chars]"
    //     }
    // ]

    static defaultProps = {
        country: 'in',
        pageSize: 8,
        category: 'general'
    }
    static propTypes = {
        country: PropTypes.string,
        pageSize: PropTypes.number,
        category: PropTypes.string,
    }

    capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }


    constructor(props) {
        super(props);
        console.log('hello constr is this, from NEWS Component');
        this.state = {
            // articles: this.articles,
            articles: [],
            loading: true,
            page: 1,
            totalResults: 0
        }
        document.title = `${this.capitalizeFirstLetter(this.props.category)} - NewsMonkey`;
    }

    async updateNews() {
        this.props.setProgress(10);
        // console.log("cdm")
        const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pagesize=${this.props.pageSize}`;
        this.setState({ loading: true });
        let data = await fetch(url); //using fetch api
        this.props.setProgress(30);
        let parsedData = await data.json()
        this.props.setProgress(70);

        console.log(parsedData)
        this.setState({ articles: parsedData.articles, totalResults: parsedData.totalResults, loading: false })
        this.props.setProgress(100);
    }

    async componentDidMount() {
        // console.log("cdm")
        // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=48a9f31cf2514b80883098d531f28fb5&page=1&pagesize=${this.props.pageSize}`;
        // this.setState({ loading: true });
        // let data = await fetch(url); //using fetch api
        // let parsedData = await data.json()
        // console.log(parsedData)
        // this.setState({ articles: parsedData.articles, totalResults: parsedData.totalResults, loading: false })
        this.updateNews();
    }

    handlePrevClick = async () => {
        // console.log("prev")
        // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=48a9f31cf2514b80883098d531f28fb5&page=${this.state.page - 1}&pagesize=${this.props.pageSize}`;
        // this.setState({ loading: true });
        // let data = await fetch(url); //using fetch api
        // let parsedData = await data.json()
        // console.log(parsedData)

        // this.setState({
        //     page: this.state.page - 1,
        //     articles: parsedData.articles,
        //     loading: false
        // })
        this.setState({ page: this.state.page - 1 });
        this.updateNews();
    }
    handleNextClick = async () => {
        // console.log("next")
        // if (!(this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize))) {
        //     let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=48a9f31cf2514b80883098d531f28fb5&page=${this.state.page + 1}&pagesize=${this.props.pageSize}`;
        //     this.setState({ loading: true });
        //     let data = await fetch(url); //using fetch api
        //     let parsedData = await data.json()
        //     // console.log(parsedData)
        //     this.setState({
        //         page: this.state.page + 1,
        //         articles: parsedData.articles,
        //         loading: false
        //     })
        // }
        this.setState({ page: this.state.page + 1 });
        this.updateNews();

    }

    fetchMoreData = async () => {
        this.setState({ page: this.state.page + 1 })
        const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pagesize=${this.props.pageSize}`;
        // this.setState({ loading: true });
        let data = await fetch(url); //using fetch api
        let parsedData = await data.json()
        console.log(parsedData)
        this.setState({ articles: this.state.articles.concat(parsedData.articles), totalResults: parsedData.totalResults })

    };

    render() {
        // console.log("render")
        return (
            <>
                {/* This is a news component */}
                <h1 className="text-center" style={{ margin: '35px 0px' }}>NewsMonkey - Top {this.capitalizeFirstLetter(this.props.category)} Headlines</h1>
                {this.state.loading && <Spinner />}
                <InfiniteScroll
                    dataLength={this.state.articles.length}
                    next={this.fetchMoreData}
                    hasMore={this.state.articles.length !== this.state.totalResults}
                    loader={<Spinner />}
                >
                    <div className="container">


                        <div className="row">
                            {/* {!this.state.loading && this.state.articles.map((element) => { uncomment this and comment next line to use*/}
                            {this.state.articles.map((element) => {
                                return <div className="col-md-4" key={element.url}>
                                    <NewsItem title={element.title ? element.title.slice(0, 45) : ""} description={element.description ? element.description.slice(0, 88) : ""} imageURL={element.urlToImage} newsURL={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
                                </div>
                            })}
                        </div>
                    </div>
                </InfiniteScroll>
                {/* <div className="container d-flex justify-content-between">
                        <button disabled={this.state.page <= 1} type="button" className="btn btn-dark" onClick={this.handlePrevClick}>&larr; Previous</button>
                        <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)} type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
                    </div> */}
            </>
        )
    }
}

export default News
