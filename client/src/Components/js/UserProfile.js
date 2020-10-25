import { faComments } from '@fortawesome/free-regular-svg-icons';
import { faBorderNone, faNetworkWired, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import '../css/UserProfile.css'
import UserFeed from './UserFeed';


class UserProfile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            profile_name: null,
            name: null,
            screen_name: null,
            joinedUTC: null,
            following: null,
            followers: null,
            feed: null,
            profile_url: null,
            most_recent_inifinite_scroll_update: null,
            banner_url: null
        }
        this.getMoreTweets = this.getMoreTweets.bind(this);
    }

    getMoreTweets() {

        if (this.state.feed === null || new Date().getTime() < this.state.most_recent_inifinite_scroll_update + 1000 ) {
            return;
        }
        this.setState({most_recent_inifinite_scroll_update: new Date().getTime()})

        fetch(`/home/GetUserTweets?username=${this.state.profile_name}`).then(r => r.json()).then(r => {
            var new_feed = this.state.feed;
            r.forEach(i => {
                new_feed.push(i);
            });
            this.setState({ feed: new_feed });
        });
        document.getElementById("infinite-scroll").style.top = "100%";
    }

    componentDidMount() {
        this.setState({ profile_name: this.props.match.params.user })

        fetch(`/home/GetUserDetails?username=${this.props.match.params.user}`).then(r => r.json()).then(r => {
            this.setState({
                name: r.name,
                screen_name: r.screen_name,
                followers: r.follower_count,
                following: r.following_count,
                profile_url: r.profile_picture_url,
                banner_url: r.banner_picture_url
            })
        }
        );
        fetch(`/home/GetUserTweets?username=${this.props.match.params.user}`).then(r => r.json()).then(r => this.setState({ feed: r }));

        let infinite_scroll = document.getElementById("infinite-scroll")
        let options = {
            rootMargin: '0px',
            threshold: 0.1
        }
        let observer = new IntersectionObserver(this.getMoreTweets, options);
        observer.observe(infinite_scroll);
    }

    render() {
        var profileCreatedDate = new Date(this.state.joinedUTC * 1000);
        return (
            <div >
                {!this.state.feed && <div id={"page-loading-overlay"}>
                    <div id={"spin-animation"}>
                        <FontAwesomeIcon icon={faSpinner} size="9x" color="rgb(136, 153, 166)" /> {this.state.comments}
                    </div>
                </div>}

                <div className={"profile-details"}>
                    <div>
                        <div className={"overlay"}>
                            <div className={"banner-image"}><img src={this.state.banner_url} width={"100%"}></img></div>
                            <div className={"circular-image"}><img src={this.state.profile_url} height={"100%"}></img></div>
                        </div>

                        <div className={"profile-content"}>
                            <div className={"username profile-detail"}>{this.state.name}</div>
                            <div className={"handle profile-detail"}>@{this.state.screen_name}</div>
                            <div className={"join-date profile-detail"}>Joined {profileCreatedDate.toDateString()}</div>
                            <span className={"following-count profile-detail"}><span className={"follow-number"}>{this.state.following}</span> Following</span>
                            <span className={"follower-count profile-detail"}><span className={"follow-number"}>{this.state.followers}</span> Followers</span>
                        </div>
                    </div>
                </div>
                <UserFeed feed={this.state.feed} screen_name={this.state.screen_name} />
                <div id={"infinite-scroll"}></div>
            </div>

        )
    }
}

export default UserProfile