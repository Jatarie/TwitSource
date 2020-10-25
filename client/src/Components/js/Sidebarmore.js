import React, { Component } from 'react';
import '../css/Sidebar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell, faBookmark, faChartBar, faComment, faEnvelope, faListAlt, faQuestionCircle } from '@fortawesome/free-regular-svg-icons'
import { faAd, faBolt, faCog, faTv } from '@fortawesome/free-solid-svg-icons'

class Sidebarmoremenu extends Component {

    constructor(props) {
        super(props);
        this.ClickOffSideBar = this.ClickOffSideBar.bind(this)
    }

    ClickOffSideBar() {
        let sidebarmoremenu = document.getElementById("sidebar-moremenu");
        sidebarmoremenu.style.display = 'none';
        document.getElementById("sidebar-moremenu-clickoffdiv").style.zIndex = -100;
    }

    componentDidMount() {

    }

    render() {
        return (
            <div>
                <div id={"sidebar-moremenu"}>

                    <div className={"sidebar-moremenu-element"}>
                        <button className={"sidebar-moremenu-button"}>
                            <FontAwesomeIcon icon={faComment} size="1x" color="white" />
                            &nbsp;&nbsp;Topics
                        </button>
                    </div>

                    <div className={"sidebar-moremenu-element"}>
                        <button className={"sidebar-moremenu-button"}>
                            <FontAwesomeIcon icon={faBolt} size="1x" color="white" />
                            &nbsp;&nbsp;Moments
                        </button>
                    </div>

                    <div className={"sidebar-moremenu-element"}>
                        <button className={"sidebar-moremenu-button"}>
                            <FontAwesomeIcon icon={faAd} size="1x" color="white" />
                            &nbsp;&nbsp;Twitter Ads
                        </button>
                    </div>

                    <div className={"sidebar-moremenu-element"}>
                        <button className={"sidebar-moremenu-button"}>
                            <FontAwesomeIcon icon={faChartBar} size="1x" color="white" />
                            &nbsp;&nbsp;Analytics
                        </button>
                    </div>

                    <div id={"sidebar-moremenu-notifications"} className={"sidebar-moremenu-element"}>
                        <button className="sidebar-moremenu-button">
                            <FontAwesomeIcon icon={faBell} size="1x" color="white" />
                            &nbsp;&nbsp;Notifications
                        </button>
                    </div>
                    <div id={"sidebar-moremenu-messages"} className={"sidebar-moremenu-element"}>
                        <button className="sidebar-moremenu-button">
                            <FontAwesomeIcon icon={faEnvelope} size="1x" color="white" />
                            &nbsp;&nbsp;Messages
                        </button>
                    </div>
                    <div id={"sidebar-moremenu-bookmarks"} className={"sidebar-moremenu-element"}>
                        <button className="sidebar-moremenu-button">
                            <FontAwesomeIcon icon={faBookmark} size="1x" color="white" />
                            &nbsp;&nbsp;Bookmarks
                    </button>
                    </div>
                    <div id={"sidebar-moremenu-lists"} className={"sidebar-moremenu-element"}>
                        <button className="sidebar-moremenu-button">
                            <FontAwesomeIcon icon={faListAlt} size="1x" color="white" />
                            &nbsp;&nbsp;Lists
                        </button>
                    </div>

                    <div className={"sidebar-moremenu-break"}></div>

                    <div className={"sidebar-moremenu-element"}>
                        <button className={"sidebar-moremenu-button"}>
                            <FontAwesomeIcon icon={faCog} size="1x" color="white" />
                            &nbsp;&nbsp;Settings & privacy
                        </button>
                    </div>

                    <div className={"sidebar-moremenu-element"}>
                        <button className={"sidebar-moremenu-button"}>
                            <FontAwesomeIcon icon={faQuestionCircle} size="1x" color="white" />
                            &nbsp;&nbsp;Help center
                        </button>
                    </div>

                    <div className={"sidebar-moremenu-element"}>
                        <button className={"sidebar-moremenu-button"}>
                            <FontAwesomeIcon icon={faTv} size="1x" color="white" />
                            &nbsp;&nbsp;Display
                        </button>
                    </div>

                </div>
                <button id={"sidebar-moremenu-clickoffdiv"} onClick={this.ClickOffSideBar}></button>
            </div >
        );
    }
}
export default Sidebarmoremenu;
