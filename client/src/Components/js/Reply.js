import React, { Component } from 'react';
import '../css/Reply.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComments, faHeart } from '@fortawesome/free-regular-svg-icons'
import { faRetweet } from '@fortawesome/free-solid-svg-icons'


class Reply extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username: "The Void",
            handle: "GazeWithin",
            profilePicture: "https://pbs.twimg.com/profile_images/1311487905928417280/jN96sBXm_400x400.jpg",
            tweetedUTC: null,
            comments: 101,
            retweets: 101,
            likes: 101,
            quoteTweetNum: 101,
            text: "holy shit imagine if Trump suddenly finds the \"go live\" button on Twitter",
            time: 1602083791000,
            formattedTime: null,
            intToMonth: { 0: "Jan", 1: "Feb", 2: "Mar", 3: "Apr", 4: "May", 5: "Jun", 6: "Jul", 7: "Aug", 8: "Sep", 9: "Oct", 10: "Nov", 11: "Dec" }
        }
    }

    epochToString() {
        let date = new Date(this.state.time);
        let hour = date.getHours();
        let minutes = date.getMinutes()
        let month = date.getMonth();
        let day = date.getDay();
        let year = date.getFullYear();
        let dateString = `${hour}:${minutes} · ${this.state.intToMonth[month]} ${day}, ${year}`;
        this.setState({ formattedTime: dateString });
    }

    componentDidMount() {
        this.epochToString();
    }

    render() {
        return (
            <div className={"replies-reply reply-grid"}>
                <div className={"reply-grid-left"}>
                    <img className={"tweet-profile-picture-small"} src={this.state.profilePicture}></img>
                </div>
                <div className={"reply-grid-right"}>
                    <div className={"replies-reply-header"}>
                        <span className={"replies-reply-header-text"}>
                            <span className={"text-bolder"}>{this.state.username}</span>
                            <span className={"text-lighter"}>@{this.state.handle}</span>
                        </span>
                    </div>
                    <div className={"replies-reply-content"}>
                        {this.state.text}
                    </div>

                    <div className={"replies-engagement engagement-grid text-lighter"}>
                        <div className={"tweet-comment-number"}>
                            <FontAwesomeIcon icon={faComments} size="1x" color="rgb(136, 153, 166)" /> {this.state.comments}
                        </div>
                        <div className={"tweet-retweet-number"}>
                            <FontAwesomeIcon icon={faRetweet} size="1x" color="rgb(136, 153, 166)" /> {this.state.retweets}
                        </div>
                        <div className={"tweet-like-number"}>
                            <FontAwesomeIcon icon={faHeart} size="1x" color="rgb(136, 153, 166)" /> {this.state.likes}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


export default Reply;
