import { faComments } from '@fortawesome/free-regular-svg-icons';
import { faBorderNone, faNetworkWired, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import '../css/UserProfile.css'
import UserFeed from './UserFeed';

var p = [
    {
        "text": "Thanks for making your voice heard, Adam. I know a thing or two about being hopeful in the rain, too.… https://t.co/qcfKxooafS",
        "retweet_count": 1547,
        "favorite_count": 16601,
        "user": {
            "name": "Barack Obama",
            "screen_name": "BarackObama",
            "banner_picture_url": null,
            "profile_picture_url": "http://pbs.twimg.com/profile_images/822547732376207360/5g0FC8XX_normal.jpg",
            "follower_count": 124426677,
            "following_count": 599418
        },
        "retweeted": false
    },
    {
        "text": "This right here is what it's all about. Tell your mom thank you for voting, Leta. https://t.co/jx3i9laoWn",
        "retweet_count": 4272,
        "favorite_count": 62595,
        "user": {
            "name": "Barack Obama",
            "screen_name": "BarackObama",
            "banner_picture_url": null,
            "profile_picture_url": "http://pbs.twimg.com/profile_images/822547732376207360/5g0FC8XX_normal.jpg",
            "follower_count": 124426677,
            "following_count": 599418
        },
        "retweeted": false
    },
    {
        "text": "Stella, thank you for being a poll worker. You’re making a difference and helping folks cast their ballot safely. https://t.co/oPXWnBi5Ud",
        "retweet_count": 2502,
        "favorite_count": 33189,
        "user": {
            "name": "Barack Obama",
            "screen_name": "BarackObama",
            "banner_picture_url": null,
            "profile_picture_url": "http://pbs.twimg.com/profile_images/822547732376207360/5g0FC8XX_normal.jpg",
            "follower_count": 124426677,
            "following_count": 599418
        },
        "retweeted": false
    },
    {
        "text": "RT @JoeBiden: With one week left until Election Day, I'm delivering remarks in Warm Springs, Georgia, on how we can unite to address the cr…",
        "retweet_count": 3346,
        "favorite_count": 0,
        "user": {
            "name": "Joe Biden",
            "screen_name": "JoeBiden",
            "banner_picture_url": null,
            "profile_picture_url": "http://pbs.twimg.com/profile_images/1308769664240160770/AfgzWVE7_normal.jpg",
            "follower_count": 11639702,
            "following_count": 29
        },
        "retweeted": true
    },
    {
        "text": "We’ve only got one week left in this election. I’m in Orlando for @JoeBiden to get more folks to vote and use their… https://t.co/ZALVIEr4QA",
        "retweet_count": 10782,
        "favorite_count": 72955,
        "user": {
            "name": "Barack Obama",
            "screen_name": "BarackObama",
            "banner_picture_url": null,
            "profile_picture_url": "http://pbs.twimg.com/profile_images/822547732376207360/5g0FC8XX_normal.jpg",
            "follower_count": 124426677,
            "following_count": 599418
        },
        "retweeted": false
    },
    {
        "text": "In Miami this weekend, I dropped by The Shop to talk with @KingJames and @MavCarter about the NBA bubble, the racia… https://t.co/cGubu1qVZ3",
        "retweet_count": 10963,
        "favorite_count": 71835,
        "user": {
            "name": "Barack Obama",
            "screen_name": "BarackObama",
            "banner_picture_url": null,
            "profile_picture_url": "http://pbs.twimg.com/profile_images/822547732376207360/5g0FC8XX_normal.jpg",
            "follower_count": 124426677,
            "following_count": 599418
        },
        "retweeted": false
    },
    {
        "text": "Republicans love to say right before an election that they’ll protect preexisting conditions. Well, Joe and I actua… https://t.co/LgH9OuC9Kv",
        "retweet_count": 15865,
        "favorite_count": 111740,
        "user": {
            "name": "Barack Obama",
            "screen_name": "BarackObama",
            "banner_picture_url": null,
            "profile_picture_url": "http://pbs.twimg.com/profile_images/822547732376207360/5g0FC8XX_normal.jpg",
            "follower_count": 124426677,
            "following_count": 599418
        },
        "retweeted": false
    },
    {
        "text": "In the middle of a pandemic, this administration is trying to dismantle the Affordable Care Act in the Supreme Cour… https://t.co/Sw4SLniuUA",
        "retweet_count": 15624,
        "favorite_count": 120164,
        "user": {
            "name": "Barack Obama",
            "screen_name": "BarackObama",
            "banner_picture_url": null,
            "profile_picture_url": "http://pbs.twimg.com/profile_images/822547732376207360/5g0FC8XX_normal.jpg",
            "follower_count": 124426677,
            "following_count": 599418
        },
        "retweeted": false
    },
    {
        "text": "Felicidades, Sofia — I'll bet your car decorations alone inspired a few folks to head to the polls! Thank you for m… https://t.co/2m6wGf2Re5",
        "retweet_count": 9718,
        "favorite_count": 119565,
        "user": {
            "name": "Barack Obama",
            "screen_name": "BarackObama",
            "banner_picture_url": null,
            "profile_picture_url": "http://pbs.twimg.com/profile_images/822547732376207360/5g0FC8XX_normal.jpg",
            "follower_count": 124426677,
            "following_count": 599418
        },
        "retweeted": false
    },
    {
        "text": "Dawn, you're showing us all how it's done — not just making your own voice heard, but helping others do so, too. Ki… https://t.co/lka4czIr46",
        "retweet_count": 5975,
        "favorite_count": 65031,
        "user": {
            "name": "Barack Obama",
            "screen_name": "BarackObama",
            "banner_picture_url": null,
            "profile_picture_url": "http://pbs.twimg.com/profile_images/822547732376207360/5g0FC8XX_normal.jpg",
            "follower_count": 124426677,
            "following_count": 599418
        },
        "retweeted": false
    },
    {
        "text": "To anyone considering sitting this election out, look at this image. Then make a plan to vote. You're an inspiratio… https://t.co/fwSmzRhB7l",
        "retweet_count": 24207,
        "favorite_count": 180719,
        "user": {
            "name": "Barack Obama",
            "screen_name": "BarackObama",
            "banner_picture_url": null,
            "profile_picture_url": "http://pbs.twimg.com/profile_images/822547732376207360/5g0FC8XX_normal.jpg",
            "follower_count": 124426677,
            "following_count": 599418
        },
        "retweeted": false
    },
    {
        "text": "Eight months into the pandemic, as new cases are breaking records, we need an administration that’s not going to wa… https://t.co/gyMtlicnTS",
        "retweet_count": 29685,
        "favorite_count": 181125,
        "user": {
            "name": "Barack Obama",
            "screen_name": "BarackObama",
            "banner_picture_url": null,
            "profile_picture_url": "http://pbs.twimg.com/profile_images/822547732376207360/5g0FC8XX_normal.jpg",
            "follower_count": 124426677,
            "following_count": 599418
        },
        "retweeted": false
    },
    {
        "text": "In 2020, we show up early — for everything, but especially for voting. Get out there and vote!… https://t.co/89m57Fs7qw",
        "retweet_count": 10321,
        "favorite_count": 89280,
        "user": {
            "name": "Barack Obama",
            "screen_name": "BarackObama",
            "banner_picture_url": null,
            "profile_picture_url": "http://pbs.twimg.com/profile_images/822547732376207360/5g0FC8XX_normal.jpg",
            "follower_count": 124426677,
            "following_count": 599418
        },
        "retweeted": false
    },
    {
        "text": "Hello, Florida! It's #VoteEarlyDay and we’re just 10 days away from this election. I want to see you make a plan to… https://t.co/Q1Hw3uMIfv",
        "retweet_count": 11299,
        "favorite_count": 77458,
        "user": {
            "name": "Barack Obama",
            "screen_name": "BarackObama",
            "banner_picture_url": null,
            "profile_picture_url": "http://pbs.twimg.com/profile_images/822547732376207360/5g0FC8XX_normal.jpg",
            "follower_count": 124426677,
            "following_count": 599418
        },
        "retweeted": false
    },
    {
        "text": "One election won't make everything perfect—but it could make things better. And that's why it’s worth taking a few… https://t.co/VfL9e3uO3B",
        "retweet_count": 15099,
        "favorite_count": 101837,
        "user": {
            "name": "Barack Obama",
            "screen_name": "BarackObama",
            "banner_picture_url": null,
            "profile_picture_url": "http://pbs.twimg.com/profile_images/822547732376207360/5g0FC8XX_normal.jpg",
            "follower_count": 124426677,
            "following_count": 599418
        },
        "retweeted": false
    },
    {
        "text": "We’re just days away from the election and I know there are a lot of good lawyers out there who want to make sure t… https://t.co/lErDPG1ZVF",
        "retweet_count": 8537,
        "favorite_count": 34187,
        "user": {
            "name": "Barack Obama",
            "screen_name": "BarackObama",
            "banner_picture_url": null,
            "profile_picture_url": "http://pbs.twimg.com/profile_images/822547732376207360/5g0FC8XX_normal.jpg",
            "follower_count": 124426677,
            "following_count": 599418
        },
        "retweeted": false
    },
    {
        "text": "Joe has the character and the experience to make our country better - but first, he needs your vote. Make a plan to… https://t.co/cYbLpwD1Wa",
        "retweet_count": 15661,
        "favorite_count": 125749,
        "user": {
            "name": "Barack Obama",
            "screen_name": "BarackObama",
            "banner_picture_url": null,
            "profile_picture_url": "http://pbs.twimg.com/profile_images/822547732376207360/5g0FC8XX_normal.jpg",
            "follower_count": 124426677,
            "following_count": 599418
        },
        "retweeted": false
    },
    {
        "text": "I just voted by mail for @JoeBiden and @KamalaHarris. If you're planning on doing the same, follow all the instruct… https://t.co/czHPiWAhE5",
        "retweet_count": 29464,
        "favorite_count": 213392,
        "user": {
            "name": "Barack Obama",
            "screen_name": "BarackObama",
            "banner_picture_url": null,
            "profile_picture_url": "http://pbs.twimg.com/profile_images/822547732376207360/5g0FC8XX_normal.jpg",
            "follower_count": 124426677,
            "following_count": 599418
        },
        "retweeted": false
    },
    {
        "text": "Great to be back in Philly today. I'm fired up and ready to go! https://t.co/6r3W4EyeFU",
        "retweet_count": 35761,
        "favorite_count": 454608,
        "user": {
            "name": "Barack Obama",
            "screen_name": "BarackObama",
            "banner_picture_url": null,
            "profile_picture_url": "http://pbs.twimg.com/profile_images/822547732376207360/5g0FC8XX_normal.jpg",
            "follower_count": 124426677,
            "following_count": 599418
        },
        "retweeted": false
    },
    {
        "text": "Thanks for making your voice heard, Adam. I know a thing or two about being hopeful in the rain, too.… https://t.co/qcfKxooafS",
        "retweet_count": 1547,
        "favorite_count": 16601,
        "user": {
            "name": "Barack Obama",
            "screen_name": "BarackObama",
            "banner_picture_url": null,
            "profile_picture_url": "http://pbs.twimg.com/profile_images/822547732376207360/5g0FC8XX_normal.jpg",
            "follower_count": 124426687,
            "following_count": 599418
        },
        "retweeted": false
    },
    {
        "text": "This right here is what it's all about. Tell your mom thank you for voting, Leta. https://t.co/jx3i9laoWn",
        "retweet_count": 4272,
        "favorite_count": 62596,
        "user": {
            "name": "Barack Obama",
            "screen_name": "BarackObama",
            "banner_picture_url": null,
            "profile_picture_url": "http://pbs.twimg.com/profile_images/822547732376207360/5g0FC8XX_normal.jpg",
            "follower_count": 124426687,
            "following_count": 599418
        },
        "retweeted": false
    },
    {
        "text": "Stella, thank you for being a poll worker. You’re making a difference and helping folks cast their ballot safely. https://t.co/oPXWnBi5Ud",
        "retweet_count": 2502,
        "favorite_count": 33189,
        "user": {
            "name": "Barack Obama",
            "screen_name": "BarackObama",
            "banner_picture_url": null,
            "profile_picture_url": "http://pbs.twimg.com/profile_images/822547732376207360/5g0FC8XX_normal.jpg",
            "follower_count": 124426687,
            "following_count": 599418
        },
        "retweeted": false
    },
    {
        "text": "RT @JoeBiden: With one week left until Election Day, I'm delivering remarks in Warm Springs, Georgia, on how we can unite to address the cr…",
        "retweet_count": 3346,
        "favorite_count": 0,
        "user": {
            "name": "Joe Biden",
            "screen_name": "JoeBiden",
            "banner_picture_url": null,
            "profile_picture_url": "http://pbs.twimg.com/profile_images/1308769664240160770/AfgzWVE7_normal.jpg",
            "follower_count": 11639702,
            "following_count": 29
        },
        "retweeted": true
    },
    {
        "text": "We’ve only got one week left in this election. I’m in Orlando for @JoeBiden to get more folks to vote and use their… https://t.co/ZALVIEr4QA",
        "retweet_count": 10782,
        "favorite_count": 72955,
        "user": {
            "name": "Barack Obama",
            "screen_name": "BarackObama",
            "banner_picture_url": null,
            "profile_picture_url": "http://pbs.twimg.com/profile_images/822547732376207360/5g0FC8XX_normal.jpg",
            "follower_count": 124426687,
            "following_count": 599418
        },
        "retweeted": false
    },
    {
        "text": "In Miami this weekend, I dropped by The Shop to talk with @KingJames and @MavCarter about the NBA bubble, the racia… https://t.co/cGubu1qVZ3",
        "retweet_count": 10963,
        "favorite_count": 71835,
        "user": {
            "name": "Barack Obama",
            "screen_name": "BarackObama",
            "banner_picture_url": null,
            "profile_picture_url": "http://pbs.twimg.com/profile_images/822547732376207360/5g0FC8XX_normal.jpg",
            "follower_count": 124426687,
            "following_count": 599418
        },
        "retweeted": false
    },
    {
        "text": "Republicans love to say right before an election that they’ll protect preexisting conditions. Well, Joe and I actua… https://t.co/LgH9OuC9Kv",
        "retweet_count": 15865,
        "favorite_count": 111740,
        "user": {
            "name": "Barack Obama",
            "screen_name": "BarackObama",
            "banner_picture_url": null,
            "profile_picture_url": "http://pbs.twimg.com/profile_images/822547732376207360/5g0FC8XX_normal.jpg",
            "follower_count": 124426687,
            "following_count": 599418
        },
        "retweeted": false
    },
    {
        "text": "In the middle of a pandemic, this administration is trying to dismantle the Affordable Care Act in the Supreme Cour… https://t.co/Sw4SLniuUA",
        "retweet_count": 15624,
        "favorite_count": 120164,
        "user": {
            "name": "Barack Obama",
            "screen_name": "BarackObama",
            "banner_picture_url": null,
            "profile_picture_url": "http://pbs.twimg.com/profile_images/822547732376207360/5g0FC8XX_normal.jpg",
            "follower_count": 124426687,
            "following_count": 599418
        },
        "retweeted": false
    },
    {
        "text": "Felicidades, Sofia — I'll bet your car decorations alone inspired a few folks to head to the polls! Thank you for m… https://t.co/2m6wGf2Re5",
        "retweet_count": 9718,
        "favorite_count": 119565,
        "user": {
            "name": "Barack Obama",
            "screen_name": "BarackObama",
            "banner_picture_url": null,
            "profile_picture_url": "http://pbs.twimg.com/profile_images/822547732376207360/5g0FC8XX_normal.jpg",
            "follower_count": 124426687,
            "following_count": 599418
        },
        "retweeted": false
    },
    {
        "text": "Dawn, you're showing us all how it's done — not just making your own voice heard, but helping others do so, too. Ki… https://t.co/lka4czIr46",
        "retweet_count": 5975,
        "favorite_count": 65031,
        "user": {
            "name": "Barack Obama",
            "screen_name": "BarackObama",
            "banner_picture_url": null,
            "profile_picture_url": "http://pbs.twimg.com/profile_images/822547732376207360/5g0FC8XX_normal.jpg",
            "follower_count": 124426687,
            "following_count": 599418
        },
        "retweeted": false
    },
    {
        "text": "To anyone considering sitting this election out, look at this image. Then make a plan to vote. You're an inspiratio… https://t.co/fwSmzRhB7l",
        "retweet_count": 24207,
        "favorite_count": 180719,
        "user": {
            "name": "Barack Obama",
            "screen_name": "BarackObama",
            "banner_picture_url": null,
            "profile_picture_url": "http://pbs.twimg.com/profile_images/822547732376207360/5g0FC8XX_normal.jpg",
            "follower_count": 124426687,
            "following_count": 599418
        },
        "retweeted": false
    },
    {
        "text": "Eight months into the pandemic, as new cases are breaking records, we need an administration that’s not going to wa… https://t.co/gyMtlicnTS",
        "retweet_count": 29685,
        "favorite_count": 181125,
        "user": {
            "name": "Barack Obama",
            "screen_name": "BarackObama",
            "banner_picture_url": null,
            "profile_picture_url": "http://pbs.twimg.com/profile_images/822547732376207360/5g0FC8XX_normal.jpg",
            "follower_count": 124426687,
            "following_count": 599418
        },
        "retweeted": false
    },
    {
        "text": "In 2020, we show up early — for everything, but especially for voting. Get out there and vote!… https://t.co/89m57Fs7qw",
        "retweet_count": 10321,
        "favorite_count": 89280,
        "user": {
            "name": "Barack Obama",
            "screen_name": "BarackObama",
            "banner_picture_url": null,
            "profile_picture_url": "http://pbs.twimg.com/profile_images/822547732376207360/5g0FC8XX_normal.jpg",
            "follower_count": 124426687,
            "following_count": 599418
        },
        "retweeted": false
    },
    {
        "text": "Hello, Florida! It's #VoteEarlyDay and we’re just 10 days away from this election. I want to see you make a plan to… https://t.co/Q1Hw3uMIfv",
        "retweet_count": 11299,
        "favorite_count": 77458,
        "user": {
            "name": "Barack Obama",
            "screen_name": "BarackObama",
            "banner_picture_url": null,
            "profile_picture_url": "http://pbs.twimg.com/profile_images/822547732376207360/5g0FC8XX_normal.jpg",
            "follower_count": 124426687,
            "following_count": 599418
        },
        "retweeted": false
    },
    {
        "text": "One election won't make everything perfect—but it could make things better. And that's why it’s worth taking a few… https://t.co/VfL9e3uO3B",
        "retweet_count": 15099,
        "favorite_count": 101837,
        "user": {
            "name": "Barack Obama",
            "screen_name": "BarackObama",
            "banner_picture_url": null,
            "profile_picture_url": "http://pbs.twimg.com/profile_images/822547732376207360/5g0FC8XX_normal.jpg",
            "follower_count": 124426687,
            "following_count": 599418
        },
        "retweeted": false
    },
    {
        "text": "We’re just days away from the election and I know there are a lot of good lawyers out there who want to make sure t… https://t.co/lErDPG1ZVF",
        "retweet_count": 8537,
        "favorite_count": 34187,
        "user": {
            "name": "Barack Obama",
            "screen_name": "BarackObama",
            "banner_picture_url": null,
            "profile_picture_url": "http://pbs.twimg.com/profile_images/822547732376207360/5g0FC8XX_normal.jpg",
            "follower_count": 124426687,
            "following_count": 599418
        },
        "retweeted": false
    },
    {
        "text": "Joe has the character and the experience to make our country better - but first, he needs your vote. Make a plan to… https://t.co/cYbLpwD1Wa",
        "retweet_count": 15661,
        "favorite_count": 125749,
        "user": {
            "name": "Barack Obama",
            "screen_name": "BarackObama",
            "banner_picture_url": null,
            "profile_picture_url": "http://pbs.twimg.com/profile_images/822547732376207360/5g0FC8XX_normal.jpg",
            "follower_count": 124426687,
            "following_count": 599418
        },
        "retweeted": false
    },
    {
        "text": "I just voted by mail for @JoeBiden and @KamalaHarris. If you're planning on doing the same, follow all the instruct… https://t.co/czHPiWAhE5",
        "retweet_count": 29464,
        "favorite_count": 213392,
        "user": {
            "name": "Barack Obama",
            "screen_name": "BarackObama",
            "banner_picture_url": null,
            "profile_picture_url": "http://pbs.twimg.com/profile_images/822547732376207360/5g0FC8XX_normal.jpg",
            "follower_count": 124426687,
            "following_count": 599418
        },
        "retweeted": false
    },
    {
        "text": "Great to be back in Philly today. I'm fired up and ready to go! https://t.co/6r3W4EyeFU",
        "retweet_count": 35761,
        "favorite_count": 454608,
        "user": {
            "name": "Barack Obama",
            "screen_name": "BarackObama",
            "banner_picture_url": null,
            "profile_picture_url": "http://pbs.twimg.com/profile_images/822547732376207360/5g0FC8XX_normal.jpg",
            "follower_count": 124426687,
            "following_count": 599418
        },
        "retweeted": false
    }
]


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

        if (this.state.feed === null || new Date().getTime() < this.state.most_recent_inifinite_scroll_update + 1000) {
            return;
        }
        this.setState({ most_recent_inifinite_scroll_update: new Date().getTime() })

        // fetch(`/home/GetUserTweets?username=${this.state.profile_name}`).then(r => r.json()).then(r => {
            var new_feed = this.state.feed;
            p.forEach(i => {
                new_feed.push(i);
            });
            this.setState({ feed: new_feed });
        // });
        document.getElementById("infinite-scroll").style.top = "100%";
    }

    componentDidMount() {
        this.setState({ profile_name: this.props.match.params.user })

        var x = { name: "Barack Obama", screen_name: "BarackObama", banner_picture_url: "https://pbs.twimg.com/profile_banners/813286/1502508746", profile_picture_url: "https://pbs.twimg.com/profile_images/822547732376207360/5g0FC8XX_400x400.jpg", follower_count: "124,426,606", following_count: "599,418" }
        // fetch(`/home/GetUserDetails?username=${this.props.match.params.user}`).then(r => r.json()).then(r => {
        this.setState({
            name: x.name,
            screen_name: x.screen_name,
            followers: x.follower_count,
            following: x.following_count,
            profile_url: x.profile_picture_url,
            banner_url: x.banner_picture_url
        })
        // }
        // );
        // fetch(`/home/GetUserTweets?username=${this.props.match.params.user}`).then(r => r.json()).then(r => {
        this.setState({ feed: p })

        // }
        // );



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