import React from 'react';
import '../css/Tweet.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComments, faHeart } from '@fortawesome/free-regular-svg-icons'
import { faRetweet } from '@fortawesome/free-solid-svg-icons'

class Tweet extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: null,
            handle: null,
            profilePicture: null,
            tweetedUTC: null,
            comments: 101,
            retweets: null,
            likes: null,
            text: null,
            retweet_bool: true
        }
    }

    componentDidMount() {
        if (this.props.data !== undefined) {
            this.setState({
                text: this.props.data.text,
                retweets: this.props.data.retweet_count,
                likes: this.props.data.favorite_count,
                username: this.props.data.user.name,
                profilePicture: this.props.data.user.profile_picture_url,
                handle: this.props.data.user.screen_name,
                retweet_bool: this.props.data.retweeted
            })
        }
    }

    render() {
        return (
            <div className={"tweet"}>
                <div id={"retweeted_by_message"}>
                    {this.state.retweet_bool &&
                        <span>
                            <FontAwesomeIcon icon={faRetweet}></FontAwesomeIcon> Retweeted by @{this.props.screen_name}
                        </span>
                    }
                </div>
                <img className={"tweet-profile-picture"} src={this.state.profilePicture}></img>
                <div className={"tweet-content"}>
                    <div>
                        <span className={"text-bolder"}>{this.state.username}</span> <span className={"text-lighter"}>@{this.state.handle} 14h</span>
                    </div>
                    <div>
                        {this.state.text}
                    </div>
                    <div className={"engagement-grid text-lighter"}>
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
        )
    }
}

export default Tweet;