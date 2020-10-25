import React, { Component } from 'react';
import '../css/Sidebar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell, faEnvelope, faBookmark, faListAlt, faUser } from '@fortawesome/free-regular-svg-icons'
import { faHashtag, faHome, faPlus, faEllipsisH } from '@fortawesome/free-solid-svg-icons'


class Sidebar extends Component {

    constructor(props) {
        super(props);
        this.handleResize = this.handleResize.bind(this);
    }


    handleResize() {
        let sidebarmoremenu = document.getElementById("sidebar-moremenu");
        if (sidebarmoremenu.style.display === 'block') {
            let more_element = document.getElementById("sidebar-more");
            let left = more_element.offsetLeft;
            let top = more_element.offsetTop;

            if (sidebarmoremenu.scrollHeight > window.innerHeight) {
                sidebarmoremenu.style.top = "0px";
            }
            else if (more_element.offsetTop + more_element.clientHeight > window.innerHeight) {
                sidebarmoremenu.style.top = (window.innerHeight - sidebarmoremenu.clientHeight) + "px";
            }
            else {
                sidebarmoremenu.style.top = (top - sidebarmoremenu.clientHeight + more_element.clientHeight) + 'px';
            }
            if (sidebarmoremenu.offsetTop < 0) {
                sidebarmoremenu.style.top = parseInt(sidebarmoremenu.style.top) - sidebarmoremenu.offsetTop + "px";
            }
            sidebarmoremenu.style.left = left + 'px';
        }
    }

    componentDidMount() {
        window.addEventListener("resize", this.handleResize);
    }

    ShowSideBarMoreMenu() {
        let sidebarmoremenu = document.getElementById("sidebar-moremenu");
        if (sidebarmoremenu.style.display === 'none' || sidebarmoremenu.style.display === "") {
            sidebarmoremenu.style.display = 'block';
            sidebarmoremenu.style.zIndex = 10;
            document.getElementById("sidebar-moremenu-clickoffdiv").style.zIndex = 9;
        }
        else {
            sidebarmoremenu.style.display = 'none';
            document.getElementById("sidebar-moremenu-clickoffdiv").style.zIndex = -100;
        }

        let more_element = document.getElementById("sidebar-more");
        let left = more_element.offsetLeft;
        let top = more_element.offsetTop;

        if (sidebarmoremenu.scrollHeight > window.innerHeight) {
            sidebarmoremenu.style.top = "0px";
        }
        else if (more_element.offsetTop + more_element.clientHeight > window.innerHeight) {
            sidebarmoremenu.style.top = (window.innerHeight - sidebarmoremenu.clientHeight) + "px";
        }
        else {
            sidebarmoremenu.style.top = (top - sidebarmoremenu.clientHeight + more_element.clientHeight) + 'px';
        }
        if (sidebarmoremenu.offsetTop < 0) {
            sidebarmoremenu.style.top = parseInt(sidebarmoremenu.style.top) - sidebarmoremenu.offsetTop + "px";
        }
        sidebarmoremenu.style.left = left + 'px';
    }

    render() {
        return (
            <div className={"sidebar-container"}>
                <div id={"sidebar-home"} className={"sidebar-container-element"}>
                    <button className="sidebar-button"><FontAwesomeIcon icon={faHome} size="1x" color="white" /> <span className={"side-bar-text"}>Home</span></button>
                </div>
                <div id={"sidebar-explore"} className={"sidebar-container-element"}>
                    <button className="sidebar-button"><FontAwesomeIcon icon={faHashtag} size="1x" color="white" /> <span className={"side-bar-text"}>Explore</span></button>
                </div>
                <div id={"sidebar-notifications"} className={"sidebar-container-element"}>
                    <button className="sidebar-button"><FontAwesomeIcon icon={faBell} size="1x" color="white" /> <span className={"side-bar-text"}>Notifications</span></button>
                </div>
                <div id={"sidebar-messages"} className={"sidebar-container-element"}>
                    <button className="sidebar-button"><FontAwesomeIcon icon={faEnvelope} size="1x" color="white" /> <span className={"side-bar-text"}>Messages</span></button>
                </div>
                <div id={"sidebar-bookmarks"} className={"sidebar-container-element"}>
                    <button className="sidebar-button"><FontAwesomeIcon icon={faBookmark} size="1x" color="white" /> <span className={"side-bar-text"}>Bookmarks</span></button>
                </div>
                <div id={"sidebar-lists"} className={"sidebar-container-element"}>
                    <button className="sidebar-button"><FontAwesomeIcon icon={faListAlt} size="1x" color="white" /> <span className={"side-bar-text"}>Lists</span></button>
                </div>
                <div id={"sidebar-profile"} className={"sidebar-container-element"}>
                    <button className="sidebar-button"><FontAwesomeIcon icon={faUser} size="1x" color="white" /> <span className={"side-bar-text"}>Profile</span></button>
                </div>
                <div className={"sidebar-container-element"} id={"sidebar-more"}>
                    <button className="sidebar-button" onClick={this.ShowSideBarMoreMenu}><FontAwesomeIcon icon={faEllipsisH} size="1x" color="white" /> <span className={"side-bar-text"}>More</span></button>
                </div>
                <div className={"sidebar-container-element"}>
                    <button className="tweet-button">
                        <span className={"side-bar-text"}>
                            Tweet
                            </span>
                        <span className={"tweet-plus-icon"}>
                            <FontAwesomeIcon icon={faPlus} size="1x" color="white" />
                        </span>
                    </button>
                </div>
            </div>
        );
    }
}


export default Sidebar;
