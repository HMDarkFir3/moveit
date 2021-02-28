"use strict";
exports.__esModule = true;
var react_1 = require("react");
var client_1 = require("next-auth/client");
var router_1 = require("next/router");
var Login_module_css_1 = require("../styles/pages/Login.module.css");
var head_1 = require("next/head");
function Login() {
    var session = client_1.useSession()[0];
    var router = router_1.useRouter();
    react_1.useEffect(function () {
        if (session) {
            router.push("/home");
        }
    }, [session, router]);
    return (React.createElement("div", { className: Login_module_css_1["default"].containerLogin },
        React.createElement(head_1["default"], null,
            React.createElement("title", null, "Login | move.it")),
        React.createElement("img", { src: "/symbol-logo.svg", alt: "S\u00EDmbolo move.it", className: Login_module_css_1["default"].symbol }),
        React.createElement("div", null,
            React.createElement("img", { src: "/logo-full-white.svg", alt: "move.it" }),
            React.createElement("h1", null, "Bem-vindo"),
            React.createElement("p", null, "Fa\u00E7a o login com o seu Github para come\u00E7ar"),
            React.createElement("button", { type: "button", onClick: function () {
                    return client_1.signIn("github", {
                        callbackUrl: process.env.REACT_APP_URL + "/home"
                    });
                } }, "Continuar com Github"))));
}
exports["default"] = Login;
