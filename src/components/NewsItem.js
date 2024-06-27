import React, { Component } from 'react'

export class NewsItem extends Component {
    render() {
        let { title, description, imageURL, newsURL, author, date, source } = this.props;
        return (
            <div className='my-3'>
                <div className="card">
                    <div style={{
                        isplay: 'flex',
                        justifyContent: 'flex-end',
                        position: 'absolute',
                        right: '0'
                    }}>

                        <span className="badge rounded-pill bg-danger" >
                            {source}
                        </span>
                    </div>
                    <img src={!imageURL ? "https://images.moneycontrol.com/static-mcnews/2024/04/market_up_higher.jpg?impolicy=website&width=770&height=431" : imageURL} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}</p>
                        <p className="card-text"><small className="text-muted">By {!author ? "Unknown" : author} on {new Date(date).toGMTString()}</small></p>
                        <a rel='noreferrer' href={newsURL} target='_blank' className="btn btn-sm btn-dark">Read More</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewsItem
