"use strict";
exports.__esModule = true;
exports.SideBar = void 0;
var router_1 = require("next/router");
var link_1 = require("next/link");
var client_1 = require("next-auth/client");
//Styles
var SideBar_module_css_1 = require("../styles/components/SideBar.module.css");
//Icon
var fi_1 = require("react-icons/fi");
var fi_2 = require("react-icons/fi");
var fi_3 = require("react-icons/fi");
function SideBar() {
    var router = router_1.useRouter();
    return (React.createElement("div", { className: SideBar_module_css_1["default"].containerSideBar },
        React.createElement("img", { src: "logo-blue.svg", alt: "move.it" }),
        React.createElement("ul", null,
            React.createElement("li", { className: router.pathname == "/home" ? SideBar_module_css_1["default"].menuActive : "" },
                React.createElement(link_1["default"], { href: "/home" },
                    React.createElement(fi_1.FiHome, { size: 28, color: "#666666" }))),
            React.createElement("li", { className: router.pathname == "/leaderboard" ? SideBar_module_css_1["default"].menuActive : "" },
                React.createElement(link_1["default"], { href: "/leaderboard" },
                    React.createElement(fi_2.FiAward, { size: 28, color: "#666666" })))),
        React.createElement("div", { className: SideBar_module_css_1["default"].logout },
            React.createElement(fi_3.FiLogOut, { onClick: function () {
                    return client_1.signOut({
                        callbackUrl: "http:localhost:3000"
                    });
                }, size: "28" }))));
}
exports.SideBar = SideBar;
