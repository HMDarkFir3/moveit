"use strict";
exports.__esModule = true;
exports.SideBar = void 0;
//Next.js
var router_1 = require("next/router");
var link_1 = require("next/link");
var client_1 = require("next-auth/client");
//Styles
var Sidebar_1 = require("../styles/components/Sidebar");
function SideBar() {
    var router = router_1.useRouter();
    return (React.createElement(Sidebar_1.SidebarContainer, null,
        React.createElement("img", { src: "images/logo-blue.svg", alt: "move.it" }),
        React.createElement("ul", null,
            React.createElement("li", { className: router.pathname == "/home" ? "menuActive" : "" },
                React.createElement(link_1["default"], { href: "/home" },
                    React.createElement(Sidebar_1.HomeIcon, null))),
            React.createElement("li", { className: router.pathname == "/leaderboard" ? "menuActive" : "" },
                React.createElement(link_1["default"], { href: "/leaderboard" },
                    React.createElement(Sidebar_1.AwardIcon, null))),
            React.createElement("li", { className: router.pathname == "/trophy" ? "menuActive" : "" },
                React.createElement(link_1["default"], { href: "/trophy" },
                    React.createElement(Sidebar_1.TrophyIcon, null)))),
        React.createElement("div", { className: "logOut" },
            React.createElement(Sidebar_1.PowerIcon, { onClick: function () {
                    return client_1.signOut({
                        callbackUrl: "" + process.env.REACT_APP_URL
                    });
                } }))));
}
exports.SideBar = SideBar;
