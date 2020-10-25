import React, { Component } from 'react';
import '../css/Replies.css'
import Reply from '../js/Reply'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComments, faHeart, faUser } from '@fortawesome/free-regular-svg-icons'
import { faRetweet, faUserCircle } from '@fortawesome/free-solid-svg-icons'


class Replies extends Component {

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
            <div className={"replies-tweet"}>
                <div id={"replies-tweet-header"}>
                    <img className={"tweet-profile-picture"} src={this.state.profilePicture}></img>
                    <div id={"replies-tweet-header-text"}>
                        <div className={"text-bolder"}>{this.state.username}</div>
                        <div className={"text-lighter"}>@{this.state.handle}</div>
                    </div>
                </div>
                <div id={"replies-tweet-content"}>
                    {this.state.text}
                </div>
                <div id={"replies-tweet-time"} className={"text-lighter"}>
                    {this.state.formattedTime} · Twitter Web App
                </div>
                <div className={"horizontal-line-break"}></div>
                <div className={"replies-engagement"}>
                    <span className={"text-lighter"}><span className={"text-white-bold"}>{this.state.retweets}</span> Retweets</span>
                    <span className={"text-lighter"}><span className={"text-white-bold"}>{this.state.quoteTweetNum}</span> Quote Tweets</span>
                    <span className={"text-lighter"}><span className={"text-white-bold"}>{this.state.likes}</span> Likes</span>
                </div>
                <div className={"horizontal-line-break"}></div>

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

                <div id={"tweet-your-reply"}>
                    <FontAwesomeIcon icon={faUserCircle} size="2x" color="rgb(136, 153, 166)" />
                    <span id={"tweet-your-reply-text"}>
                        Tweet your reply
                    </span>
                </div>
                <Reply>
                </Reply>
            </div>
        );
    }
}


export default Replies;
