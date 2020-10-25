import React from 'react';
import Tweet from './Tweet';
import '../css/UserFeed.css'

class UserFeed extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div>
                <div className={"feed-buttons"}>
                    <button className={"feed-button feed-tweets-button"}>Tweets</button>
                    <button className={"feed-button feed-tweetsreplies-button"}>Tweets & replies</button>
                    <button className={"feed-button feed-media-button"}>Media</button>
                    <button className={"feed-button feed-likes-button"}>Likes</button>
                </div>

                <div id={"feed-container"}>
                    {this.props.feed && this.props.feed.map(item =>
                        <Tweet data={item} screen_name={this.props.screen_name}></Tweet>
                    )}
                </div>

            </div>
        )
    }
}

export default UserFeed;