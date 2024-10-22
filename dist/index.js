'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsxRuntime = require('react/jsx-runtime');
var material = require('@mui/material');
var iconsMaterial = require('@mui/icons-material');
var emStyled = require('@emotion/styled');
require('@emotion/react');
var React = require('react');
var SearchOutlinedIcon = require('@mui/icons-material/SearchOutlined');
var ErrorIcon = require('@mui/icons-material/Error');
var Alert = require('@mui/material/Alert');
var AlertTitle = require('@mui/material/AlertTitle');
var Snackbar = require('@mui/material/Snackbar');
var styles$1 = require('@mui/material/styles');
var SearchIcon$1 = require('@mui/icons-material/Search');
var Box = require('@mui/material/Box');
var Tab = require('@mui/material/Tab');
var Typography = require('@mui/material/Typography');
var TabContext = require('@mui/lab/TabContext');
var TabList = require('@mui/lab/TabList');
var TabPanel = require('@mui/lab/TabPanel');
var PhoneMissedIcon = require('@mui/icons-material/PhoneMissed');
var Badge = require('@mui/material/Badge');
var MailIcon = require('@mui/icons-material/Mail');
var Button = require('@mui/material/Button');
var reactRouterDom = require('react-router-dom');
var ArrowForwardIcon = require('@mui/icons-material/ArrowForward');
var Stack = require('@mui/material/Stack');
var ExpandMoreIcon = require('@mui/icons-material/ExpandMore');
var ListItem = require('@mui/material/ListItem');
var ListItemText = require('@mui/material/ListItemText');
var DragIndicatorIcon = require('@mui/icons-material/DragIndicator');
var VisibilityIcon = require('@mui/icons-material/Visibility');
var VisibilityOffIcon = require('@mui/icons-material/VisibilityOff');
var Table = require('@mui/material/Table');
var Paper = require('@mui/material/Paper');
var Grid = require('@mui/material/Grid');
var IconButton = require('@mui/material/IconButton');
var TextField = require('@mui/material/TextField');
var TableCell = require('@mui/material/TableCell');
var TableHead = require('@mui/material/TableHead');
var TableRow = require('@mui/material/TableRow');
var Menu = require('@mui/material/Menu');
var MenuItem = require('@mui/material/MenuItem');
var MoreVertIcon = require('@mui/icons-material/MoreVert');
var TableBody = require('@mui/material/TableBody');
var ArrowDropUpIcon = require('@mui/icons-material/ArrowDropUp');
var ArrowDropDownIcon = require('@mui/icons-material/ArrowDropUpSharp');
var FirstPageIcon = require('@mui/icons-material/KeyboardDoubleArrowLeft');
var KeyboardArrowLeft = require('@mui/icons-material/KeyboardArrowLeft');
var KeyboardArrowRight = require('@mui/icons-material/KeyboardArrowRight');
var LastPageIcon = require('@mui/icons-material/KeyboardDoubleArrowRight');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

function _interopNamespace(e) {
    if (e && e.__esModule) return e;
    var n = Object.create(null);
    if (e) {
        Object.keys(e).forEach(function (k) {
            if (k !== 'default') {
                var d = Object.getOwnPropertyDescriptor(e, k);
                Object.defineProperty(n, k, d.get ? d : {
                    enumerable: true,
                    get: function () { return e[k]; }
                });
            }
        });
    }
    n["default"] = e;
    return Object.freeze(n);
}

var emStyled__default = /*#__PURE__*/_interopDefaultLegacy(emStyled);
var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var React__namespace = /*#__PURE__*/_interopNamespace(React);
var SearchOutlinedIcon__default = /*#__PURE__*/_interopDefaultLegacy(SearchOutlinedIcon);
var ErrorIcon__default = /*#__PURE__*/_interopDefaultLegacy(ErrorIcon);
var Alert__default = /*#__PURE__*/_interopDefaultLegacy(Alert);
var AlertTitle__default = /*#__PURE__*/_interopDefaultLegacy(AlertTitle);
var Snackbar__default = /*#__PURE__*/_interopDefaultLegacy(Snackbar);
var SearchIcon__default = /*#__PURE__*/_interopDefaultLegacy(SearchIcon$1);
var Box__default = /*#__PURE__*/_interopDefaultLegacy(Box);
var Tab__default = /*#__PURE__*/_interopDefaultLegacy(Tab);
var Typography__default = /*#__PURE__*/_interopDefaultLegacy(Typography);
var TabContext__default = /*#__PURE__*/_interopDefaultLegacy(TabContext);
var TabList__default = /*#__PURE__*/_interopDefaultLegacy(TabList);
var TabPanel__default = /*#__PURE__*/_interopDefaultLegacy(TabPanel);
var PhoneMissedIcon__default = /*#__PURE__*/_interopDefaultLegacy(PhoneMissedIcon);
var Badge__default = /*#__PURE__*/_interopDefaultLegacy(Badge);
var MailIcon__default = /*#__PURE__*/_interopDefaultLegacy(MailIcon);
var Button__default = /*#__PURE__*/_interopDefaultLegacy(Button);
var ArrowForwardIcon__default = /*#__PURE__*/_interopDefaultLegacy(ArrowForwardIcon);
var Stack__default = /*#__PURE__*/_interopDefaultLegacy(Stack);
var ExpandMoreIcon__default = /*#__PURE__*/_interopDefaultLegacy(ExpandMoreIcon);
var ListItem__default = /*#__PURE__*/_interopDefaultLegacy(ListItem);
var ListItemText__default = /*#__PURE__*/_interopDefaultLegacy(ListItemText);
var DragIndicatorIcon__default = /*#__PURE__*/_interopDefaultLegacy(DragIndicatorIcon);
var VisibilityIcon__default = /*#__PURE__*/_interopDefaultLegacy(VisibilityIcon);
var VisibilityOffIcon__default = /*#__PURE__*/_interopDefaultLegacy(VisibilityOffIcon);
var Table__default = /*#__PURE__*/_interopDefaultLegacy(Table);
var Paper__default = /*#__PURE__*/_interopDefaultLegacy(Paper);
var Grid__default = /*#__PURE__*/_interopDefaultLegacy(Grid);
var IconButton__default = /*#__PURE__*/_interopDefaultLegacy(IconButton);
var TextField__default = /*#__PURE__*/_interopDefaultLegacy(TextField);
var TableCell__default = /*#__PURE__*/_interopDefaultLegacy(TableCell);
var TableHead__default = /*#__PURE__*/_interopDefaultLegacy(TableHead);
var TableRow__default = /*#__PURE__*/_interopDefaultLegacy(TableRow);
var Menu__default = /*#__PURE__*/_interopDefaultLegacy(Menu);
var MenuItem__default = /*#__PURE__*/_interopDefaultLegacy(MenuItem);
var MoreVertIcon__default = /*#__PURE__*/_interopDefaultLegacy(MoreVertIcon);
var TableBody__default = /*#__PURE__*/_interopDefaultLegacy(TableBody);
var ArrowDropUpIcon__default = /*#__PURE__*/_interopDefaultLegacy(ArrowDropUpIcon);
var ArrowDropDownIcon__default = /*#__PURE__*/_interopDefaultLegacy(ArrowDropDownIcon);
var FirstPageIcon__default = /*#__PURE__*/_interopDefaultLegacy(FirstPageIcon);
var KeyboardArrowLeft__default = /*#__PURE__*/_interopDefaultLegacy(KeyboardArrowLeft);
var KeyboardArrowRight__default = /*#__PURE__*/_interopDefaultLegacy(KeyboardArrowRight);
var LastPageIcon__default = /*#__PURE__*/_interopDefaultLegacy(LastPageIcon);

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __rest$1(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __spreadArray(to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
}

typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z$3 = ".left{margin-right:8px}.right{margin-left:8px}";
styleInject(css_248z$3);

var IconSide;
(function (IconSide) {
    IconSide["LEFtSIDE"] = "left";
    IconSide["RIGHTSIDE"] = "right";
})(IconSide || (IconSide = {}));
var Atom = function (_a) {
    var color = _a.color, side = _a.side;
    return (jsxRuntime.jsx(jsxRuntime.Fragment, { children: jsxRuntime.jsx("svg", __assign({ width: "24", className: IconSide.LEFtSIDE === side ? "left" : "right", height: "24", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, { children: jsxRuntime.jsx("path", { d: "M11.9999 11.0001C12.2651 11.0001 12.5194 11.1055 12.707 11.293C12.8945 11.4805 12.9999 11.7349 12.9999 12.0001C12.9999 12.2653 12.8945 12.5197 12.707 12.7072C12.5194 12.8947 12.2651 13.0001 11.9999 13.0001C11.7346 13.0001 11.4803 12.8947 11.2928 12.7072C11.1052 12.5197 10.9999 12.2653 10.9999 12.0001C10.9999 11.7349 11.1052 11.4805 11.2928 11.293C11.4803 11.1055 11.7346 11.0001 11.9999 11.0001ZM4.21986 4.2201C5.64986 2.7901 8.74986 3.4301 11.9999 5.5601C15.2499 3.4301 18.3499 2.7901 19.7799 4.2201C21.2099 5.6501 20.5699 8.7501 18.4399 12.0001C20.5699 15.2501 21.2099 18.3501 19.7799 19.7801C18.3499 21.2101 15.2499 20.5701 11.9999 18.4401C8.74986 20.5701 5.64986 21.2101 4.21986 19.7801C2.78986 18.3501 3.42986 15.2501 5.55986 12.0001C3.42986 8.7501 2.78986 5.6501 4.21986 4.2201ZM15.5399 8.4601C16.1499 9.0801 16.7099 9.7101 17.2299 10.3401C18.6099 8.2101 19.1099 6.3801 18.3599 5.6401C17.6199 4.8901 15.7899 5.3901 13.6599 6.7701C14.2899 7.2901 14.9199 7.8501 15.5399 8.4601ZM8.45986 15.5401C7.84986 14.9201 7.28986 14.2901 6.76986 13.6601C5.38986 15.7901 4.88986 17.6201 5.63986 18.3601C6.37986 19.1101 8.20986 18.6101 10.3399 17.2301C9.70986 16.7101 9.07986 16.1501 8.45986 15.5401ZM5.63986 5.6401C4.88986 6.3801 5.38986 8.2101 6.76986 10.3401C7.28986 9.7101 7.84986 9.0801 8.45986 8.4601C9.07986 7.8501 9.70986 7.2901 10.3399 6.7701C8.20986 5.3901 6.37986 4.8901 5.63986 5.6401ZM9.87986 14.1201C10.5799 14.8201 11.2999 15.4601 11.9999 16.0301C12.6999 15.4601 13.4199 14.8201 14.1199 14.1201C14.8199 13.4201 15.4599 12.7001 16.0299 12.0001C15.4599 11.3001 14.8199 10.5801 14.1199 9.8801C13.4199 9.1801 12.6999 8.5401 11.9999 7.9701C11.2999 8.5401 10.5799 9.1801 9.87986 9.8801C9.17986 10.5801 8.53986 11.3001 7.96986 12.0001C8.53986 12.7001 9.17986 13.4201 9.87986 14.1201ZM18.3599 18.3601C19.1099 17.6201 18.6099 15.7901 17.2299 13.6601C16.7099 14.2901 16.1499 14.9201 15.5399 15.5401C14.9199 16.1501 14.2899 16.7101 13.6599 17.2301C15.7899 18.6101 17.6199 19.1101 18.3599 18.3601Z", fill: color ? color : "#666C7F" }) })) }));
};
var Clock = function (_a) {
    var color = _a.color, side = _a.side;
    return (jsxRuntime.jsx(jsxRuntime.Fragment, { children: jsxRuntime.jsx("svg", __assign({ width: "24", className: IconSide.LEFtSIDE === side ? "left" : "right", height: "24", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, { children: jsxRuntime.jsx("path", { d: "M12 20C16.4 20 20 16.4 20 12C20 7.6 16.4 4 12 4C7.6 4 4 7.6 4 12C4 16.4 7.6 20 12 20ZM12 2C17.5 2 22 6.5 22 12C22 17.5 17.5 22 12 22C6.5 22 2 17.5 2 12C2 6.5 6.5 2 12 2ZM12.5 7V13H7V11.5H11V7H12.5Z", fill: color ? color : "#666C7F" }) })) }));
};
var EmoConfused = function (_a) {
    var color = _a.color, side = _a.side;
    return (jsxRuntime.jsx(jsxRuntime.Fragment, { children: jsxRuntime.jsx("svg", __assign({ width: "24", height: "24", viewBox: "0 0 24 24", className: IconSide.LEFtSIDE === side ? "left" : "right", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, { children: jsxRuntime.jsx("path", { d: "M20 12C20 10.4177 19.5308 8.87103 18.6518 7.55544C17.7727 6.23984 16.5233 5.21447 15.0615 4.60896C13.5997 4.00346 11.9911 3.84504 10.4393 4.15372C8.88743 4.4624 7.46197 5.22433 6.34315 6.34315C5.22433 7.46197 4.4624 8.88743 4.15372 10.4393C3.84504 11.9911 4.00347 13.5997 4.60897 15.0615C5.21447 16.5233 6.23985 17.7727 7.55544 18.6518C8.87104 19.5308 10.4178 20 12 20C14.1217 20 16.1566 19.1571 17.6569 17.6569C19.1572 16.1566 20 14.1217 20 12ZM22 12C22 13.9778 21.4135 15.9112 20.3147 17.5557C19.2159 19.2002 17.6541 20.4819 15.8268 21.2388C13.9996 21.9957 11.9889 22.1937 10.0491 21.8079C8.10929 21.422 6.32746 20.4696 4.92894 19.0711C3.53041 17.6725 2.578 15.8907 2.19215 13.9509C1.8063 12.0111 2.00433 10.0004 2.76121 8.17317C3.51809 6.3459 4.79981 4.78412 6.4443 3.6853C8.08879 2.58649 10.0222 2 12 2C13.3132 2 14.6136 2.25866 15.8268 2.7612C17.0401 3.26375 18.1425 4.00035 19.0711 4.92893C19.9997 5.85752 20.7363 6.95991 21.2388 8.17317C21.7413 9.38642 22 10.6868 22 12ZM15.5 8C15.7967 8 16.0867 8.08797 16.3334 8.2528C16.58 8.41762 16.7723 8.65189 16.8858 8.92597C16.9994 9.20006 17.0291 9.50166 16.9712 9.79264C16.9133 10.0836 16.7704 10.3509 16.5607 10.5607C16.3509 10.7704 16.0836 10.9133 15.7926 10.9712C15.5017 11.0291 15.2001 10.9994 14.926 10.8858C14.6519 10.7723 14.4176 10.58 14.2528 10.3334C14.088 10.0867 14 9.79667 14 9.5C14.0101 9.10537 14.1714 8.72969 14.4506 8.45055C14.7297 8.17141 15.1054 8.01012 15.5 8ZM10 9.5C10 9.79667 9.91203 10.0867 9.74721 10.3334C9.58239 10.58 9.34812 10.7723 9.07403 10.8858C8.79994 10.9994 8.49834 11.0291 8.20737 10.9712C7.9164 10.9133 7.64912 10.7704 7.43934 10.5607C7.22957 10.3509 7.0867 10.0836 7.02883 9.79264C6.97095 9.50166 7.00065 9.20006 7.11418 8.92597C7.22772 8.65189 7.41998 8.41762 7.66665 8.2528C7.91332 8.08797 8.20333 8 8.5 8C8.89464 8.01012 9.27032 8.17141 9.54946 8.45055C9.8286 8.72969 9.98988 9.10537 10 9.5ZM17 15H13C12.2969 14.999 11.6059 15.1833 10.9967 15.5344C10.3875 15.8855 9.88158 16.3911 9.53 17L7.8 16C8.32694 15.0873 9.08497 14.3295 9.99782 13.8029C10.9107 13.2762 11.9461 12.9993 13 13H17V15Z", fill: color ? color : "#666C7F" }) })) }));
};
var EmoCry = function (_a) {
    var color = _a.color, side = _a.side;
    return (jsxRuntime.jsx(jsxRuntime.Fragment, { children: jsxRuntime.jsx("svg", __assign({ width: "24", height: "24", viewBox: "0 0 24 24", className: IconSide.LEFtSIDE === side ? "left" : "right", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, { children: jsxRuntime.jsx("path", { d: "M7.57 20C6.23 20 5.14 18.91 5.14 17.57C5.14 16.5 6.32 14.5 7.57 12.81C8.82 14.5 10 16.5 10 17.57C10 17.8891 9.93715 18.2051 9.81503 18.4999C9.69291 18.7947 9.51392 19.0626 9.28827 19.2883C9.06262 19.5139 8.79474 19.6929 8.49992 19.815C8.2051 19.9371 7.88911 20 7.57 20ZM12 2C10.6868 2 9.38642 2.25866 8.17317 2.7612C6.95991 3.26375 5.85752 4.00035 4.92893 4.92893C3.05357 6.8043 2 9.34784 2 12C2 13.75 2.45 15.38 3.24 16.81C3.4 16 3.81 15.07 4.31 14.17C4.10357 13.4652 3.99918 12.7344 4 12C4 9.87827 4.84285 7.84344 6.34315 6.34315C7.84344 4.84285 9.87827 4 12 4C14.1217 4 16.1566 4.84285 17.6569 6.34315C19.1571 7.84344 20 9.87827 20 12C20 14.1217 19.1571 16.1566 17.6569 17.6569C16.1566 19.1571 14.1217 20 12 20C11.76 20 11.53 20 11.29 19.96C10.82 20.7 10.14 21.28 9.34 21.63C10.19 21.87 11.08 22 12 22C13.3132 22 14.6136 21.7413 15.8268 21.2388C17.0401 20.7362 18.1425 19.9997 19.0711 19.0711C19.9997 18.1425 20.7362 17.0401 21.2388 15.8268C21.7413 14.6136 22 13.3132 22 12C22 10.6868 21.7413 9.38642 21.2388 8.17317C20.7362 6.95991 19.9997 5.85752 19.0711 4.92893C18.1425 4.00035 17.0401 3.26375 15.8268 2.7612C14.6136 2.25866 13.3132 2 12 2ZM12 14C11.59 14 11.19 14.04 10.81 14.12C11.16 14.75 11.47 15.4 11.69 16H12C13.25 16 14.32 16.5 14.77 17.23L16.19 15.81C15.29 14.72 13.75 14 12 14ZM15.5 8C14.7 8 14 8.7 14 9.5C14 10.3 14.7 11 15.5 11C16.3 11 17 10.3 17 9.5C17 8.7 16.3 8 15.5 8ZM10 9.5C10 8.7 9.3 8 8.5 8C7.7 8 7 8.7 7 9.5C7 10.3 7.7 11 8.5 11C9.3 11 10 10.3 10 9.5Z", fill: color ? color : "#666C7F" }) })) }));
};
var FilterOutline = function (_a) {
    var color = _a.color, side = _a.side;
    return (jsxRuntime.jsx(jsxRuntime.Fragment, { children: jsxRuntime.jsx("svg", __assign({ width: "24", height: "24", className: IconSide.LEFtSIDE === side ? "left" : "right", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, { children: jsxRuntime.jsx("path", { d: "M15.0001 19.88C15.0401 20.18 14.9401 20.5 14.7101 20.71C14.6176 20.8027 14.5077 20.8762 14.3868 20.9264C14.2658 20.9766 14.1361 21.0024 14.0051 21.0024C13.8742 21.0024 13.7445 20.9766 13.6235 20.9264C13.5025 20.8762 13.3926 20.8027 13.3001 20.71L9.29013 16.7C9.18107 16.5934 9.09814 16.463 9.04783 16.319C8.99752 16.175 8.9812 16.0213 9.00013 15.87V10.75L4.21013 4.62C4.04774 4.41153 3.97446 4.14726 4.00632 3.88493C4.03817 3.6226 4.17257 3.38355 4.38013 3.22C4.57013 3.08 4.78013 3 5.00013 3H19.0001C19.2201 3 19.4301 3.08 19.6201 3.22C19.8277 3.38355 19.9621 3.6226 19.9939 3.88493C20.0258 4.14726 19.9525 4.41153 19.7901 4.62L15.0001 10.75V19.88ZM7.04013 5L11.0001 10.06V15.58L13.0001 17.58V10.05L16.9601 5H7.04013Z", fill: color ? color : "#666C7F" }) })) }));
};
var FinanceOutline = function (_a) {
    var color = _a.color, side = _a.side;
    return (jsxRuntime.jsx(jsxRuntime.Fragment, { children: jsxRuntime.jsx("svg", __assign({ width: "24", height: "24", viewBox: "0 0 24 24", className: IconSide.LEFtSIDE === side ? "left" : "right", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, { children: jsxRuntime.jsx("path", { d: "M6 16.5L3 19.44V11H6M11 14.66L9.43 13.32L8 14.64V7H11M16 13L13 16V3H16M18.81 12.81L17 11H22V16L20.21 14.21L13 21.36L9.53 18.34L5.75 22H3L9.47 15.66L13 18.64", fill: color ? color : "#666C7F" }) })) }));
};
var HandShake = function (_a) {
    var color = _a.color, side = _a.side;
    return (jsxRuntime.jsx(jsxRuntime.Fragment, { children: jsxRuntime.jsx("svg", __assign({ width: "24", height: "24", className: IconSide.LEFtSIDE === side ? "left" : "right", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, { children: jsxRuntime.jsx("path", { d: "M21.7102 8.70993C22.9602 7.45993 22.3902 5.99993 21.7102 5.28993L18.7102 2.28993C17.4502 1.03993 16.0002 1.60993 15.2902 2.28993L13.5902 3.99993H11.0002C9.10017 3.99993 8.00017 4.99993 7.44017 6.14993L3.00017 10.5899V14.5899L2.29017 15.2899C1.04017 16.5499 1.61017 17.9999 2.29017 18.7099L5.29017 21.7099C5.83017 22.2499 6.41017 22.4499 6.96017 22.4499C7.67017 22.4499 8.32017 22.0999 8.71017 21.7099L11.4102 18.9999H15.0002C16.7002 18.9999 17.5602 17.9399 17.8702 16.8999C19.0002 16.5999 19.6202 15.7399 19.8702 14.8999C21.4202 14.4999 22.0002 13.0299 22.0002 11.9999V8.99993H21.4102L21.7102 8.70993ZM20.0002 11.9999C20.0002 12.4499 19.8102 12.9999 19.0002 12.9999H18.0002V13.9999C18.0002 14.4499 17.8102 14.9999 17.0002 14.9999H16.0002V15.9999C16.0002 16.4499 15.8102 16.9999 15.0002 16.9999H10.5902L7.31017 20.2799C7.00017 20.5699 6.82017 20.3999 6.71017 20.2899L3.72017 17.3099C3.43017 16.9999 3.60017 16.8199 3.71017 16.7099L5.00017 15.4099V11.4099L7.00017 9.40993V10.9999C7.00017 12.2099 7.80017 13.9999 10.0002 13.9999C12.2002 13.9999 13.0002 12.2099 13.0002 10.9999H20.0002V11.9999ZM20.2902 7.28993L18.5902 8.99993H11.0002V10.9999C11.0002 11.4499 10.8102 11.9999 10.0002 11.9999C9.19017 11.9999 9.00017 11.4499 9.00017 10.9999V7.99993C9.00017 7.53993 9.17017 5.99993 11.0002 5.99993H14.4102L16.6902 3.71993C17.0002 3.42993 17.1802 3.59993 17.2902 3.70993L20.2802 6.68993C20.5702 6.99993 20.4002 7.17993 20.2902 7.28993V7.28993Z", fill: color ? color : "#666C7F" }) })) }));
};
var ShieldAccount = function (_a) {
    var color = _a.color, side = _a.side;
    return (jsxRuntime.jsx(jsxRuntime.Fragment, { children: jsxRuntime.jsx("svg", __assign({ width: "24", height: "24", className: IconSide.LEFtSIDE === side ? "left" : "right", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, { children: jsxRuntime.jsx("path", { d: "M12 1L3 5V11C3 16.55 6.84 21.74 12 23C17.16 21.74 21 16.55 21 11V5L12 1ZM12 3.18L19 6.3V11.22C19 12.92 18.5 14.65 17.65 16.17C16 14.94 13.26 14.5 12 14.5C10.74 14.5 8 14.94 6.35 16.17C5.5 14.65 5 12.92 5 11.22V6.3L12 3.18ZM12 6C11.0717 6 10.1815 6.36875 9.52513 7.02513C8.86875 7.6815 8.5 8.57174 8.5 9.5C8.5 10.4283 8.86875 11.3185 9.52513 11.9749C10.1815 12.6313 11.0717 13 12 13C12.9283 13 13.8185 12.6313 14.4749 11.9749C15.1313 11.3185 15.5 10.4283 15.5 9.5C15.5 8.57174 15.1313 7.6815 14.4749 7.02513C13.8185 6.36875 12.9283 6 12 6ZM12 8C12.3978 8 12.7794 8.15804 13.0607 8.43934C13.342 8.72064 13.5 9.10218 13.5 9.5C13.5 9.89782 13.342 10.2794 13.0607 10.5607C12.7794 10.842 12.3978 11 12 11C11.6022 11 11.2206 10.842 10.9393 10.5607C10.658 10.2794 10.5 9.89782 10.5 9.5C10.5 9.10218 10.658 8.72064 10.9393 8.43934C11.2206 8.15804 11.6022 8 12 8ZM12 16.5C13.57 16.5 15.64 17.11 16.53 17.84C15.29 19.38 13.7 20.55 12 21C10.3 20.55 8.71 19.38 7.47 17.84C8.37 17.11 10.43 16.5 12 16.5Z", fill: color ? color : "#666C7F" }) })) }));
};
var TextBoxEdit = function (_a) {
    var color = _a.color, side = _a.side;
    return (jsxRuntime.jsx(jsxRuntime.Fragment, { children: jsxRuntime.jsx("svg", __assign({ width: "24", height: "24", className: IconSide.LEFtSIDE === side ? "left" : "right", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, { children: jsxRuntime.jsx("path", { d: "M10 21H5C3.89 21 3 20.11 3 19V5C3 3.89 3.89 3 5 3H19C20.11 3 21 3.89 21 5V10.33C20.7 10.21 20.37 10.14 20.04 10.14C19.67 10.14 19.32 10.22 19 10.37V5H5V19H10.11L10 19.11V21ZM7 9H17V7H7V9ZM7 17H12.11L14 15.12V15H7V17ZM7 13H16.12L17 12.12V11H7V13ZM21.7 13.58L20.42 12.3C20.3172 12.1992 20.179 12.1428 20.035 12.1428C19.891 12.1428 19.7528 12.1992 19.65 12.3L18.65 13.3L20.7 15.35L21.7 14.35C21.8008 14.2472 21.8572 14.109 21.8572 13.965C21.8572 13.821 21.8008 13.6828 21.7 13.58ZM12 22H14.06L20.11 15.93L18.06 13.88L12 19.94V22Z", fill: color ? color : "#666C7F" }) })) }));
};
var TrashICon = function (_a) {
    var color = _a.color, side = _a.side;
    return (jsxRuntime.jsx(jsxRuntime.Fragment, { children: jsxRuntime.jsx("svg", __assign({ width: "24", height: "24", viewBox: "0 0 24 24", className: IconSide.LEFtSIDE === side ? "left" : "right", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, { children: jsxRuntime.jsx("path", { d: "M9 3V4H4V6H5V19C5 19.5304 5.21071 20.0391 5.58579 20.4142C5.96086 20.7893 6.46957 21 7 21H17C17.5304 21 18.0391 20.7893 18.4142 20.4142C18.7893 20.0391 19 19.5304 19 19V6H20V4H15V3H9ZM7 6H17V19H7V6ZM9 8V17H11V8H9ZM13 8V17H15V8H13Z", fill: color ? color : "#666C7F" }) })) }));
};
var ReloadIcon = function (_a) {
    var color = _a.color, side = _a.side;
    return (jsxRuntime.jsx(jsxRuntime.Fragment, { children: jsxRuntime.jsx("svg", __assign({ width: "24", height: "24", className: IconSide.LEFtSIDE === side ? "left" : "right", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, { children: jsxRuntime.jsx("path", { d: "M2 12C2 14.3869 2.94821 16.6761 4.63604 18.364C6.32387 20.0518 8.61305 21 11 21C13.39 21 15.68 20.06 17.4 18.4L15.9 16.9C15.2702 17.5664 14.5104 18.0966 13.6676 18.4578C12.8248 18.819 11.9169 19.0036 11 19C4.76 19 1.64 11.46 6.05 7.05C10.46 2.64 18 5.77 18 12H15L19 16H19.1L23 12H20C20 9.61305 19.0518 7.32387 17.364 5.63604C15.6761 3.94821 13.3869 3 11 3C8.61305 3 6.32387 3.94821 4.63604 5.63604C2.94821 7.32387 2 9.61305 2 12Z", fill: color ? color : "#666C7F" }) })) }));
};
var AddAccount = function (_a) {
    var color = _a.color, side = _a.side;
    return (jsxRuntime.jsx(jsxRuntime.Fragment, { children: jsxRuntime.jsx("svg", __assign({ width: "24", height: "24", viewBox: "0 0 24 24", className: IconSide.LEFtSIDE === side ? "left" : "right", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, { children: jsxRuntime.jsx("path", { d: "M13 11C13.5933 11 14.1734 10.8241 14.6667 10.4944C15.1601 10.1648 15.5446 9.69623 15.7716 9.14805C15.9987 8.59987 16.0581 7.99667 15.9424 7.41473C15.8266 6.83279 15.5409 6.29824 15.1213 5.87868C14.7018 5.45912 14.1672 5.1734 13.5853 5.05765C13.0033 4.94189 12.4001 5.0013 11.8519 5.22836C11.3038 5.45543 10.8352 5.83994 10.5056 6.33329C10.1759 6.82664 10 7.40666 10 8C10 8.79565 10.3161 9.55871 10.8787 10.1213C11.4413 10.6839 12.2044 11 13 11ZM13 7C13.1978 7 13.3911 7.05865 13.5556 7.16853C13.72 7.27841 13.8482 7.43459 13.9239 7.61732C13.9996 7.80004 14.0194 8.00111 13.9808 8.19509C13.9422 8.38907 13.847 8.56726 13.7071 8.70711C13.5673 8.84696 13.3891 8.9422 13.1951 8.98079C13.0011 9.01937 12.8 8.99957 12.6173 8.92388C12.4346 8.84819 12.2784 8.72002 12.1685 8.55557C12.0586 8.39112 12 8.19778 12 8C12 7.73478 12.1054 7.48043 12.2929 7.29289C12.4804 7.10536 12.7348 7 13 7ZM17.11 10.86C17.6951 10.021 18.0087 9.02282 18.0087 8C18.0087 6.97718 17.6951 5.97897 17.11 5.14C17.3976 5.04741 17.6979 5.00018 18 5C18.7956 5 19.5587 5.31607 20.1213 5.87868C20.6839 6.44129 21 7.20435 21 8C21 8.79565 20.6839 9.55871 20.1213 10.1213C19.5587 10.6839 18.7956 11 18 11C17.6979 10.9998 17.3976 10.9526 17.11 10.86ZM13 13C7 13 7 17 7 17V19H19V17C19 17 19 13 13 13ZM9 17C9 16.71 9.32 15 13 15C16.5 15 16.94 16.56 17 17M24 17V19H21V17C20.9766 16.2566 20.8054 15.5254 20.4964 14.8489C20.1873 14.1724 19.7466 13.5643 19.2 13.06C24 13.55 24 17 24 17ZM8 12H5V15H3V12H0V10H3V7H5V10H8V12Z", fill: color ? color : "#666C7F" }) })) }));
};
var LockAccount = function (_a) {
    var color = _a.color, side = _a.side;
    return (jsxRuntime.jsx(jsxRuntime.Fragment, { children: jsxRuntime.jsx("svg", __assign({ width: "24", height: "24", className: IconSide.LEFtSIDE === side ? "left" : "right", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, { children: jsxRuntime.jsx("path", { d: "M10 12C12.21 12 14 10.21 14 8C14 5.79 12.21 4 10 4C7.79 4 6 5.79 6 8C6 10.21 7.79 12 10 12ZM10 6C10.5304 6 11.0391 6.21071 11.4142 6.58579C11.7893 6.96086 12 7.46957 12 8C12 8.53043 11.7893 9.03914 11.4142 9.41421C11.0391 9.78929 10.5304 10 10 10C8.89 10 8 9.11 8 8C8 6.89 8.9 6 10 6ZM12 20H2V17C2 14.33 7.33 13 10 13C11 13 12.38 13.19 13.71 13.56C13.41 14.12 13.23 14.74 13.21 15.39C12.23 15.1 11.11 14.9 10 14.9C7.03 14.9 3.9 16.36 3.9 17V18.1H12V20ZM20.8 17V15.5C20.8 14.1 19.4 13 18 13C16.6 13 15.2 14.1 15.2 15.5V17C14.6 17 14 17.6 14 18.2V21.7C14 22.4 14.6 23 15.2 23H20.7C21.4 23 22 22.4 22 21.8V18.3C22 17.6 21.4 17 20.8 17ZM19.5 17H16.5V15.5C16.5 14.7 17.2 14.2 18 14.2C18.8 14.2 19.5 14.7 19.5 15.5V17Z", fill: color ? color : "#666C7F" }) })) }));
};
var BellHornIcon = function (_a) {
    var color = _a.color, side = _a.side;
    return (jsxRuntime.jsx(jsxRuntime.Fragment, { children: jsxRuntime.jsx("svg", __assign({ width: "24", height: "24", className: IconSide.LEFtSIDE === side ? "left" : "right", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, { children: jsxRuntime.jsx("path", { d: "M12 8H4C3.46957 8 2.96086 8.21071 2.58579 8.58579C2.21071 8.96086 2 9.46957 2 10V14C2 14.5304 2.21071 15.0391 2.58579 15.4142C2.96086 15.7893 3.46957 16 4 16H5V20C5 20.2652 5.10536 20.5196 5.29289 20.7071C5.48043 20.8946 5.73478 21 6 21H8C8.26522 21 8.51957 20.8946 8.70711 20.7071C8.89464 20.5196 9 20.2652 9 20V16H12L17 20V4L12 8ZM15 15.6L13 14H4V10H13L15 8.4V15.6ZM21.5 12C21.5 13.71 20.54 15.26 19 16V8C20.53 8.75 21.5 10.3 21.5 12Z", fill: color ? color : "#666C7F" }) })) }));
};
var ChevronLeft = function (_a) {
    var color = _a.color, side = _a.side;
    return (jsxRuntime.jsxs("svg", __assign({ width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", className: IconSide.LEFtSIDE === side ? "left" : "right" }, { children: [jsxRuntime.jsx("rect", { width: "24", height: "24", rx: "12", fill: "#151D44" }), jsxRuntime.jsx("path", { d: "M14.2733 15.0533L11.22 12L14.2733 8.94L13.3333 8L9.33334 12L13.3333 16L14.2733 15.0533Z", fill: color ? color : "#fff" })] })));
};
var ChevronRight = function (_a) {
    var color = _a.color, side = _a.side;
    return (jsxRuntime.jsxs("svg", __assign({ width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", className: IconSide.LEFtSIDE === side ? "left" : "right" }, { children: [jsxRuntime.jsx("rect", { width: "24", height: "24", rx: "12", fill: "#151D44" }), jsxRuntime.jsx("path", { d: "M9.72667 15.0533L12.78 12L9.72667 8.94L10.6667 8L14.6667 12L10.6667 16L9.72667 15.0533Z", fill: color ? color : "#fff" })] })));
};
var Summary = function (_a) {
    var color = _a.color, side = _a.side;
    return (jsxRuntime.jsx("svg", __assign({ width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", className: IconSide.LEFtSIDE === side ? "left" : "right" }, { children: jsxRuntime.jsx("g", __assign({ id: "history" }, { children: jsxRuntime.jsx("path", { id: "Vector", d: "M13.5 8H12V13L16.28 15.54L17 14.33L13.5 12.25V8ZM13 3C10.6131 3 8.32387 3.94821 6.63604 5.63604C4.94821 7.32387 4 9.61305 4 12H1L4.96 16.03L9 12H6C6 10.1435 6.7375 8.36301 8.05025 7.05025C9.36301 5.7375 11.1435 5 13 5C14.8565 5 16.637 5.7375 17.9497 7.05025C19.2625 8.36301 20 10.1435 20 12C20 13.8565 19.2625 15.637 17.9497 16.9497C16.637 18.2625 14.8565 19 13 19C11.07 19 9.32 18.21 8.06 16.94L6.64 18.36C7.47147 19.2006 8.46218 19.8671 9.5542 20.3203C10.6462 20.7736 11.8176 21.0047 13 21C15.3869 21 17.6761 20.0518 19.364 18.364C21.0518 16.6761 22 14.3869 22 12C22 9.61305 21.0518 7.32387 19.364 5.63604C17.6761 3.94821 15.3869 3 13 3Z", fill: color ? color : "#fff" }) })) })));
};
var Analytics = function (_a) {
    var color = _a.color, side = _a.side;
    return (jsxRuntime.jsx("svg", __assign({ width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", className: IconSide.LEFtSIDE === side ? "left" : "right" }, { children: jsxRuntime.jsx("g", __assign({ id: "finance" }, { children: jsxRuntime.jsx("path", { id: "Vector", d: "M6 16.5L3 19.44V11H6M11 14.66L9.43 13.32L8 14.64V7H11M16 13L13 16V3H16M18.81 12.81L17 11H22V16L20.21 14.21L13 21.36L9.53 18.34L5.75 22H3L9.47 15.66L13 18.64", fill: color ? color : "#fff" }) })) })));
};
var BullHorn = function (_a) {
    var color = _a.color, side = _a.side;
    return (jsxRuntime.jsx("svg", __assign({ width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", className: IconSide.LEFtSIDE === side ? "left" : "right" }, { children: jsxRuntime.jsx("g", __assign({ id: "bullhorn-outline" }, { children: jsxRuntime.jsx("path", { id: "Vector", d: "M12 8H4C3.46957 8 2.96086 8.21071 2.58579 8.58579C2.21071 8.96086 2 9.46957 2 10V14C2 14.5304 2.21071 15.0391 2.58579 15.4142C2.96086 15.7893 3.46957 16 4 16H5V20C5 20.2652 5.10536 20.5196 5.29289 20.7071C5.48043 20.8946 5.73478 21 6 21H8C8.26522 21 8.51957 20.8946 8.70711 20.7071C8.89464 20.5196 9 20.2652 9 20V16H12L17 20V4L12 8ZM15 15.6L13 14H4V10H13L15 8.4V15.6ZM21.5 12C21.5 13.71 20.54 15.26 19 16V8C20.53 8.75 21.5 10.3 21.5 12Z", fill: color ? color : "#fff" }) })) })));
};
var UserLock = function (_a) {
    var color = _a.color, side = _a.side;
    return (jsxRuntime.jsx("svg", __assign({ width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", className: IconSide.LEFtSIDE === side ? "left" : "right" }, { children: jsxRuntime.jsx("g", __assign({ id: "bullhorn-outline" }, { children: jsxRuntime.jsx("path", { d: "M8 8C10.21 8 12 6.21 12 4C12 1.79 10.21 0 8 0C5.79 0 4 1.79 4 4C4 6.21 5.79 8 8 8ZM8 2C8.53043 2 9.03914 2.21071 9.41421 2.58579C9.78929 2.96086 10 3.46957 10 4C10 4.53043 9.78929 5.03914 9.41421 5.41421C9.03914 5.78929 8.53043 6 8 6C6.89 6 6 5.11 6 4C6 2.89 6.9 2 8 2ZM10 16H0V13C0 10.33 5.33 9 8 9C9 9 10.38 9.19 11.71 9.56C11.41 10.12 11.23 10.74 11.21 11.39C10.23 11.1 9.11 10.9 8 10.9C5.03 10.9 1.9 12.36 1.9 13V14.1H10V16ZM18.8 13V11.5C18.8 10.1 17.4 9 16 9C14.6 9 13.2 10.1 13.2 11.5V13C12.6 13 12 13.6 12 14.2V17.7C12 18.4 12.6 19 13.2 19H18.7C19.4 19 20 18.4 20 17.8V14.3C20 13.6 19.4 13 18.8 13ZM17.5 13H14.5V11.5C14.5 10.7 15.2 10.2 16 10.2C16.8 10.2 17.5 10.7 17.5 11.5V13Z", fill: color ? color : "#666C7F" }) })) })));
};
var Ignite = function (_a) {
    var color = _a.color, side = _a.side;
    return (jsxRuntime.jsxs("svg", __assign({ width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", className: IconSide.LEFtSIDE === side ? "left" : "right" }, { children: [jsxRuntime.jsx("path", { d: "M9.76699 16.476L12.6079 5.87352L6.90081 9.16853L5.90081 7.43648L14.5611 2.43647L19.5611 11.0967L17.829 12.0967L14.534 6.38962L11.6931 16.9921L9.76699 16.476Z", fill: color ? color : "#666C7F" }), jsxRuntime.jsx("path", { d: "M11.2646 18.6028L10.6607 20.8566L8.72889 20.339L9.3328 18.0852L11.2646 18.6028Z", fill: color ? color : "#666C7F" })] })));
};
var Pulse = function (_a) {
    var color = _a.color, side = _a.side;
    return (jsxRuntime.jsx("svg", __assign({ width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", className: IconSide.LEFtSIDE === side ? "left" : "right" }, { children: jsxRuntime.jsx("g", __assign({ id: "bullhorn-outline" }, { children: jsxRuntime.jsx("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M11 20V4H13V20H11ZM17 7V16H15V7H17ZM7 17V10H9V17H7ZM3 14V11H5V14H3ZM19 14V11H21V14H19Z", fill: color ? color : "#666C7F" }) })) })));
};
var Amplify = function (_a) {
    var color = _a.color, side = _a.side;
    return (jsxRuntime.jsx("svg", __assign({ width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", className: IconSide.LEFtSIDE === side ? "left" : "right" }, { children: jsxRuntime.jsxs("g", __assign({ id: "bullhorn-outline" }, { children: [jsxRuntime.jsx("path", { d: "M7 17H17V15H7M4.5 11V13H19.5V11M10.3333 21H13.6667V19H10.3333V21Z", fill: color ? color : "#666C7F" }), jsxRuntime.jsx("path", { d: "M2 7V9H22V7H2Z", fill: color ? color : "#666C7F" })] })) })));
};
var Reporting = function (_a) {
    var color = _a.color, side = _a.side;
    return (jsxRuntime.jsx("svg", __assign({ width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", className: IconSide.LEFtSIDE === side ? "left" : "right" }, { children: jsxRuntime.jsx("g", __assign({ id: "bullhorn-outline" }, { children: jsxRuntime.jsx("path", { d: "M16 11.78L20.24 4.45L21.97 5.45L16.74 14.5L10.23 10.75L5.46 19H22V21H2V3H4V17.54L9.5 8L16 11.78Z", fill: color ? color : "#666C7F" }) })) })));
};
var Inspire = function (_a) {
    var color = _a.color, side = _a.side;
    return (jsxRuntime.jsx("svg", __assign({ width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", className: IconSide.LEFtSIDE === side ? "left" : "right" }, { children: jsxRuntime.jsxs("g", __assign({ id: "bullhorn-outline" }, { children: [jsxRuntime.jsx("path", { d: "M12 3C13.0609 3 14.0783 3.42143 14.8284 4.17157C15.5786 4.92172 16 5.93913 16 7C16 8.06087 15.5786 9.07828 14.8284 9.82843C14.0783 10.5786 13.0609 11 12 11C10.9391 11 9.92172 10.5786 9.17157 9.82843C8.42143 9.07828 8 8.06087 8 7C8 5.93913 8.42143 4.92172 9.17157 4.17157C9.92172 3.42143 10.9391 3 12 3ZM12 5C11.4696 5 10.9609 5.21071 10.5858 5.58579C10.2107 5.96086 10 6.46957 10 7C10 7.53043 10.2107 8.03914 10.5858 8.41421C10.9609 8.78929 11.4696 9 12 9C12.5304 9 13.0391 8.78929 13.4142 8.41421C13.7893 8.03914 14 7.53043 14 7C14 6.46957 13.7893 5.96086 13.4142 5.58579C13.0391 5.21071 12.5304 5 12 5Z", fill: color ? color : "#666C7F" }), jsxRuntime.jsx("path", { d: "M4 19V17H6V19H4Z", fill: color ? color : "#666C7F" }), jsxRuntime.jsx("path", { d: "M12 12C14.67 12 20 13.33 20 16V19H18.1V16C18.1 15.36 14.97 13.9 12 13.9C9.03 13.9 5.9 15.36 5.9 16H4C4 13.33 9.33 12 12 12Z", fill: color ? color : "#666C7F" })] })) })));
};
var PlatformFaceBook = function (_a) {
    var color = _a.color, side = _a.side;
    return (jsxRuntime.jsx("svg", __assign({ width: "1rem", height: "1rem", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", className: IconSide.LEFtSIDE === side ? "left" : "right" }, { children: jsxRuntime.jsx("g", __assign({ id: "facebook-outline" }, { children: jsxRuntime.jsx("path", { id: "Vector", d: "M22 12C22 6.48 17.52 2 12 2C6.48 2 2 6.48 2 12C2 16.84 5.44 20.87 10 21.8V15H8V12H10V9.5C10 7.57 11.57 6 13.5 6H16V9H14C13.45 9 13 9.45 13 10V12H16V15H13V21.95C18.05 21.45 22 17.19 22 12Z", fill: color ? color : "#fff" }) })) })));
};
var PlatformBing = function (_a) {
    var color = _a.color, side = _a.side;
    return (jsxRuntime.jsx("svg", __assign({ width: "1rem", height: "1rem", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", className: IconSide.LEFtSIDE === side ? "left" : "right" }, { children: jsxRuntime.jsx("g", __assign({ id: "bing-outline" }, { children: jsxRuntime.jsx("path", { id: "Vector", d: "M10.1 8.6L11.8 12.9L14.6 14.2L9 17.5V3.4L5 2V19.8L9 22L19 16.2V11.7L10.1 8.6Z", fill: color ? color : "#fff" }) })) })));
};
var PlatformGoogleAds = function (_a) {
    var color = _a.color, side = _a.side;
    return (jsxRuntime.jsx("svg", __assign({ width: "1rem", height: "1rem", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", className: IconSide.LEFtSIDE === side ? "left" : "right" }, { children: jsxRuntime.jsx("g", __assign({ id: "googleAds-outline" }, { children: jsxRuntime.jsx("path", { id: "Vector", d: "M12.25 1.46997C11.55 1.41997 10.82 1.57997 10.17 1.95997C9.75245 2.19905 9.3862 2.51819 9.09225 2.8991C8.7983 3.28001 8.58242 3.7152 8.457 4.17971C8.33159 4.64423 8.29909 5.12893 8.36138 5.60602C8.42367 6.08312 8.57952 6.54323 8.82 6.95997L16.16 19.66C17.17 21.42 19.41 22 21.17 21C22.92 20 23.5 17.75 22.5 16L15.18 3.29997C14.8777 2.77931 14.4527 2.34042 13.942 2.02148C13.4314 1.70253 12.8505 1.51321 12.25 1.46997ZM6.82 6.75997L1.5 16C1.17583 16.5556 1.0034 17.1867 1 17.83C1 18.3119 1.09493 18.7892 1.27936 19.2344C1.4638 19.6797 1.73413 20.0843 2.07492 20.4251C2.41571 20.7658 2.82029 21.0362 3.26555 21.2206C3.71082 21.405 4.18805 21.5 4.67 21.5C5.3133 21.498 5.94478 21.327 6.50115 21.004C7.05752 20.6811 7.51923 20.2176 7.84 19.66V19.67L11 14.19C9.65 11.89 8.27 9.59997 7.03 7.22997C6.95 7.07997 6.88 6.91997 6.83 6.75997H6.82Z", fill: color ? color : "#fff" }) })) })));
};
var CustomerFlows = function (_a) {
    var color = _a.color, side = _a.side;
    return (jsxRuntime.jsx("svg", __assign({ width: "20", height: "20", viewBox: "0 0 20 20", fill: "none", xmlns: "http://www.w3.org/2000/svg", className: IconSide.LEFtSIDE === side ? "left" : "right" }, { children: jsxRuntime.jsx("path", { d: "M16 9H12.82C12.4 7.84 11.3 7 10 7C8.7 7 7.6 7.84 7.18 9H4C3.67 9 2 8.9 2 7V6C2 4.17 3.54 4 4 4H14.18C14.6 5.16 15.7 6 17 6C17.7956 6 18.5587 5.68393 19.1213 5.12132C19.6839 4.55871 20 3.79565 20 3C20 2.20435 19.6839 1.44129 19.1213 0.87868C18.5587 0.316071 17.7956 0 17 0C15.7 0 14.6 0.84 14.18 2H4C2.39 2 0 3.06 0 6V7C0 9.94 2.39 11 4 11H7.18C7.6 12.16 8.7 13 10 13C11.3 13 12.4 12.16 12.82 11H16C16.33 11 18 11.1 18 13V14C18 15.83 16.46 16 16 16H5.82C5.4 14.84 4.3 14 3 14C2.20435 14 1.44129 14.3161 0.87868 14.8787C0.316071 15.4413 0 16.2044 0 17C0 17.7956 0.316071 18.5587 0.87868 19.1213C1.44129 19.6839 2.20435 20 3 20C4.3 20 5.4 19.16 5.82 18H16C17.61 18 20 16.93 20 14V13C20 10.07 17.61 9 16 9ZM17 2C17.2652 2 17.5196 2.10536 17.7071 2.29289C17.8946 2.48043 18 2.73478 18 3C18 3.26522 17.8946 3.51957 17.7071 3.70711C17.5196 3.89464 17.2652 4 17 4C16.7348 4 16.4804 3.89464 16.2929 3.70711C16.1054 3.51957 16 3.26522 16 3C16 2.73478 16.1054 2.48043 16.2929 2.29289C16.4804 2.10536 16.7348 2 17 2ZM3 18C2.73478 18 2.48043 17.8946 2.29289 17.7071C2.10536 17.5196 2 17.2652 2 17C2 16.7348 2.10536 16.4804 2.29289 16.2929C2.48043 16.1054 2.73478 16 3 16C3.26522 16 3.51957 16.1054 3.70711 16.2929C3.89464 16.4804 4 16.7348 4 17C4 17.2652 3.89464 17.5196 3.70711 17.7071C3.51957 17.8946 3.26522 18 3 18Z", fill: color ? color : "#666C7F" }) })));
};
var Diagnose = function (_a) {
    var color = _a.color, side = _a.side;
    return (jsxRuntime.jsx("svg", __assign({ width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", className: IconSide.LEFtSIDE === side ? "left" : "right" }, { children: jsxRuntime.jsx("path", { d: "M19 3H14.82C14.4 1.84 13.3 1 12 1C10.7 1 9.6 1.84 9.18 3H5C4.46957 3 3.96086 3.21071 3.58579 3.58579C3.21071 3.96086 3 4.46957 3 5V19C3 19.5304 3.21071 20.0391 3.58579 20.4142C3.96086 20.7893 4.46957 21 5 21H19C19.5304 21 20.0391 20.7893 20.4142 20.4142C20.7893 20.0391 21 19.5304 21 19V5C21 4.46957 20.7893 3.96086 20.4142 3.58579C20.0391 3.21071 19.5304 3 19 3ZM12 3C12.2652 3 12.5196 3.10536 12.7071 3.29289C12.8946 3.48043 13 3.73478 13 4C13 4.26522 12.8946 4.51957 12.7071 4.70711C12.5196 4.89464 12.2652 5 12 5C11.7348 5 11.4804 4.89464 11.2929 4.70711C11.1054 4.51957 11 4.26522 11 4C11 3.73478 11.1054 3.48043 11.2929 3.29289C11.4804 3.10536 11.7348 3 12 3ZM5 15H8.11L9.62 12.15L10.38 17.92L14.07 13.21L15.89 15H19V19H5V15ZM19 13.46H16.53L13.93 10.86L11.44 14.05L10.5 7.08L7.17 13.46H5V5H7V6H17V5H19V13.46Z", fill: color ? color : "#666C7F" }) })));
};
var CustomerTrends = function (_a) {
    var color = _a.color, side = _a.side;
    return (jsxRuntime.jsx("svg", __assign({ width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", className: IconSide.LEFtSIDE === side ? "left" : "right" }, { children: jsxRuntime.jsx("path", { d: "M16 11.78L20.24 4.45L21.97 5.45L16.74 14.5L10.23 10.75L5.46 19H22V21H2V3H4V17.54L9.5 8L16 11.78Z", fill: color ? color : "#666C7F" }) })));
};
var Scheduler = function (_a) {
    var color = _a.color, side = _a.side;
    return (jsxRuntime.jsx("svg", __assign({ width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", className: IconSide.LEFtSIDE === side ? "left" : "right" }, { children: jsxRuntime.jsx("path", { d: "M19 19H5V8H19M16 1V3H8V1H6V3H5C3.89 3 3 3.89 3 5V19C3 19.5304 3.21071 20.0391 3.58579 20.4142C3.96086 20.7893 4.46957 21 5 21H19C19.5304 21 20.0391 20.7893 20.4142 20.4142C20.7893 20.0391 21 19.5304 21 19V5C21 4.46957 20.7893 3.96086 20.4142 3.58579C20.0391 3.21071 19.5304 3 19 3H18V1M17 12H12V17H17V12Z", fill: color ? color : "#666C7F" }) })));
};
var KPIIcons = function (_a) {
    var color = _a.color, side = _a.side;
    return (jsxRuntime.jsx("svg", __assign({ width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", className: IconSide.LEFtSIDE === side ? "left" : "right" }, { children: jsxRuntime.jsx("path", { d: "M19 5V7H15V5H19ZM9 5V11H5V5H9ZM19 13V19H15V13H19ZM9 17V19H5V17H9ZM21 3H13V9H21V3ZM11 3H3V13H11V3ZM21 11H13V21H21V11ZM11 15H3V21H11V15Z", fill: color ? color : "#666C7F" }) })));
};

exports.IconType = void 0;
(function (IconType) {
    IconType["MUI"] = "MUI";
    IconType["SVG"] = "SVG";
})(exports.IconType || (exports.IconType = {}));
exports.IconSide = void 0;
(function (IconSide) {
    IconSide["LEFtSIDE"] = "left";
    IconSide["RIGHTSIDE"] = "right";
})(exports.IconSide || (exports.IconSide = {}));
exports.ICONS = void 0;
(function (ICONS) {
    ICONS["ADD"] = "Add";
    ICONS["CREATEICON"] = "Mode";
    ICONS["DELETE"] = "Delete";
    ICONS["ARROWBACKIOS"] = "ArrowBackIos";
    ICONS["ARROWBACK"] = "ArrowBack";
    ICONS["ARROWFORWARD"] = "ArrowForward";
    ICONS["ARROWFORWARDIOS"] = "ArrowForwardIos";
    ICONS["ERROR"] = "Error";
    ICONS["ERROROUTLINE"] = "ErrorOutline";
    ICONS["REPORTGMAILERROR"] = "ReportGmailerrorred";
    ICONS["WARNINGAMBER"] = "WarningAmber";
    ICONS["INVENTORY"] = "Inventory";
    ICONS["INVENTORYOUTLINE"] = "Inventory2Outlined";
    ICONS["NOTIFICATIONOUTLINE"] = "NotificationsNoneOutlined";
    ICONS["INVITATION"] = "InsertInvitationOutlined";
    ICONS["ATOM"] = "SVG-Atom";
    ICONS["CANCELICON"] = "DoDisturbOutlined";
    ICONS["CHECKOUTLINE"] = "CheckCircleOutline";
    ICONS["CHECKCIRCLE"] = "CheckCircle";
    ICONS["CHECK"] = "Check";
    ICONS["DOUBLEARROWLEFT"] = "KeyboardDoubleArrowLeftOutlined";
    ICONS["DOUBLEARROWRIGHT"] = "KeyboardDoubleArrowRightOutlined";
    ICONS["ARROWDOWN"] = "KeyboardArrowDownOutlined";
    ICONS["ARROWTOP"] = "KeyboardControlKeyOutlined";
    ICONS["ARROWLEFT"] = "KeyboardArrowLeftOutlined";
    ICONS["ARROWRIGHT"] = "KeyboardArrowRightOutlined";
    ICONS["ARROWUP"] = "KeyboardArrowUpOutlined";
    ICONS["CIRCLE"] = "Circle";
    ICONS["CLOCK"] = "SVG-Clock";
    ICONS["CANCEL"] = "Cancel";
    ICONS["CANCELOUTLINE"] = "HighlightOffOutlined";
    ICONS["SETTINGSICON"] = "SettingsOutlined";
    ICONS["CREDITCARD"] = "CreditCardOutlined";
    ICONS["DOTSHORIZOUTLINE"] = "MoreHorizOutlined";
    ICONS["DOTSVERTLINE"] = "MoreVertOutlined";
    ICONS["DOWNLOADICON"] = "DownloadOutlined";
    ICONS["EMOCONFUSED"] = "SVG-EmoConfused";
    ICONS["EMOCRY"] = "SVG-EmoCry";
    ICONS["EMOEXCITED"] = "SentimentVerySatisfiedOutlined";
    ICONS["EMOSATISFIED"] = "SentimentSatisfiedOutlined";
    ICONS["EMONEUTRAL"] = "SentimentNeutralOutlined";
    ICONS["VISIBILITY"] = "VisibilityOutlined";
    ICONS["FILTEROUTLINE"] = "SVG-FilterOutline";
    ICONS["FINANCEOUTLINE"] = "SVG-FinanceOutline";
    ICONS["GIFTCARD"] = "CardGiftcardOutlined";
    ICONS["HANDSHAKE"] = "SVG-HandShake";
    ICONS["HELPCERCLE"] = "HelpOutlineOutlined";
    ICONS["RESETICON"] = "RestartAlt";
    ICONS["INFOOUTLINE"] = "InfoOutlined";
    ICONS["SEARCHIOCN"] = "SearchOutlined";
    ICONS["MENUOUTLINE"] = "MenuOutlined";
    ICONS["REMOVEICON"] = "RemoveOutlined";
    ICONS["PERSONSEARCH"] = "PersonSearchOutlined";
    ICONS["SHIELDACCOUNT"] = "SVG-ShieldAccount";
    ICONS["STARICON"] = "StarPurple500Outlined";
    ICONS["STARICONPLUS"] = "StarBorderPurple500Outlined";
    ICONS["TEXTBOXEDIT"] = "SVG-TextBoxEdit";
    ICONS["THUMBDOWN"] = "ThumbDownAltOutlined";
    ICONS["THUMBUP"] = "ThumbUpAltOutlined";
    ICONS["TRASHICON"] = "SVG-TrashICon";
    ICONS["UNFOLDMORE"] = "UnfoldMoreOutlined";
    ICONS["UPLOADICON"] = "UploadOutlined";
    ICONS["WINDOWCLOSE"] = "CloseOutlined";
    ICONS["RELOADICON"] = "SVG-ReloadIcon";
    ICONS["UNFOLDLESSICON"] = "UnfoldLessOutlined";
    ICONS["GROUPOUTLINE"] = "GroupsOutlined";
    ICONS["ADDACCOUNT"] = "SVG-AddAccount";
    ICONS["LOCKACCOUNT"] = "SVG-LockAccount";
    ICONS["BELLHORNICON"] = "SVG-BellHornIcon";
    ICONS["CHEVRONLEFT"] = "SVG-chevronLeft";
    ICONS["CHEVRONRIGHT"] = "SVG-chevronRight";
    ICONS["SUMMARY"] = "SVG-summary";
    ICONS["ANALYTICS"] = "SVG-analytics";
    ICONS["BULLHORN"] = "SVG-bullHorn";
    ICONS["USERLOCK"] = "SVG-UserLock";
    ICONS["IGNITE"] = "SVG-Ignite";
    ICONS["PULSE"] = "SVG-Pulse";
    ICONS["AMPLIFY"] = "SVG-Amplify";
    ICONS["REPORTING"] = "SVG-Reporting";
    ICONS["PLATFORMFACEBOOK"] = "SVG-PlatformFaceBook";
    ICONS["PLATFORMBING"] = "SVG-PlatformBing";
    ICONS["PLATFORMGOOGLEADS"] = "SVG-PlatformGoogleAds";
    ICONS["INSPIRE"] = "SVG-Inspire";
    ICONS["KPIICONS"] = "KPIIcons";
    ICONS["CUSTOMERTRENDS"] = "CustomerTrends";
    ICONS["CUSTOMERFLOWS"] = "CustomerFlows";
    ICONS["DIAGNOSE"] = "Diagnose";
    ICONS["SCHEDULER"] = "Scheduler";
})(exports.ICONS || (exports.ICONS = {}));
var Icon = function (_a) {
    var iconName = _a.iconName, iconSize = _a.iconSize, side = _a.side, color = _a.color, type = _a.type;
    var customStyle = function () {
        if (side === exports.IconSide.LEFtSIDE) {
            return {
                fontSize: iconSize && iconSize.toString() + "rem",
                marginRight: "8px",
                marginTop: "8px",
                color: color,
            };
        }
        else if (side === exports.IconSide.RIGHTSIDE) {
            return {
                fontSize: iconSize && iconSize.toString() + "rem",
                marginLeft: "8px",
                marginRight: "8px",
                marginTop: "8px",
                color: color,
            };
        }
        else {
            return {
                fontSize: iconSize && iconSize.toString() + "rem",
                marginRight: "8px",
                marginTop: "8px",
                color: color,
            };
        }
    };
    var buttonIcon = function (iconName) {
        if (!iconName && type)
            return null;
        if (type === exports.IconType.MUI) {
            switch (iconName) {
                case exports.ICONS.ADD:
                    return jsxRuntime.jsx(iconsMaterial.Add, { fontSize: "small", style: customStyle() });
                case exports.ICONS.CREATEICON:
                    return jsxRuntime.jsx(iconsMaterial.Mode, { style: customStyle() });
                case exports.ICONS.DELETE:
                    return jsxRuntime.jsx(iconsMaterial.Delete, { fontSize: "small", style: customStyle() });
                case exports.ICONS.ARROWBACKIOS:
                    return jsxRuntime.jsx(iconsMaterial.ArrowBackIos, { fontSize: "small", style: customStyle() });
                case exports.ICONS.ARROWBACK:
                    return jsxRuntime.jsx(iconsMaterial.ArrowBack, { fontSize: "small", style: customStyle() });
                case exports.ICONS.ARROWFORWARD:
                    return jsxRuntime.jsx(iconsMaterial.ArrowForward, { fontSize: "small", style: customStyle() });
                case exports.ICONS.ARROWFORWARDIOS:
                    return jsxRuntime.jsx(iconsMaterial.ArrowForwardIos, { fontSize: "small", style: customStyle() });
                case exports.ICONS.ERROR:
                    return jsxRuntime.jsx(iconsMaterial.Error, { fontSize: "small", style: customStyle() });
                case exports.ICONS.ERROROUTLINE:
                    return jsxRuntime.jsx(iconsMaterial.ErrorOutline, { fontSize: "small", style: customStyle() });
                case exports.ICONS.REPORTGMAILERROR:
                    return jsxRuntime.jsx(iconsMaterial.ReportGmailerrorred, { fontSize: "small", style: customStyle() });
                case exports.ICONS.RESETICON:
                    return jsxRuntime.jsx(iconsMaterial.RestartAlt, { fontSize: "small", style: customStyle() });
                case exports.ICONS.WARNINGAMBER:
                    return jsxRuntime.jsx(iconsMaterial.WarningAmber, { fontSize: "small", style: customStyle() });
                case exports.ICONS.INVENTORY:
                    return jsxRuntime.jsx(iconsMaterial.Inventory, { fontSize: "small", style: customStyle() });
                case exports.ICONS.INVENTORYOUTLINE:
                    return jsxRuntime.jsx(iconsMaterial.Inventory2Outlined, { fontSize: "small", style: customStyle() });
                case exports.ICONS.NOTIFICATIONOUTLINE:
                    return (jsxRuntime.jsx(iconsMaterial.NotificationsNoneOutlined, { fontSize: "small", style: customStyle() }));
                case exports.ICONS.INVITATION:
                    return (jsxRuntime.jsx(iconsMaterial.InsertInvitationOutlined, { fontSize: "small", style: customStyle() }));
                case exports.ICONS.CANCELICON:
                    return jsxRuntime.jsx(iconsMaterial.DoDisturbOutlined, { fontSize: "small", style: customStyle() });
                case exports.ICONS.CHECK:
                    return jsxRuntime.jsx(iconsMaterial.Check, { fontSize: "small", style: customStyle() });
                case exports.ICONS.CHECKOUTLINE:
                    return jsxRuntime.jsx(iconsMaterial.CheckCircleOutline, { fontSize: "small", style: customStyle() });
                case exports.ICONS.CHECKCIRCLE:
                    return jsxRuntime.jsx(iconsMaterial.CheckCircle, { fontSize: "small", style: customStyle() });
                case exports.ICONS.DOUBLEARROWLEFT:
                    return (jsxRuntime.jsx(iconsMaterial.KeyboardDoubleArrowLeftOutlined, { fontSize: "small", style: customStyle() }));
                case exports.ICONS.DOUBLEARROWRIGHT:
                    return (jsxRuntime.jsx(iconsMaterial.KeyboardDoubleArrowRightOutlined, { fontSize: "small", style: customStyle() }));
                case exports.ICONS.ARROWDOWN:
                    return (jsxRuntime.jsx(iconsMaterial.KeyboardArrowDownOutlined, { fontSize: "small", style: customStyle() }));
                case exports.ICONS.ARROWTOP:
                    return (jsxRuntime.jsx(iconsMaterial.KeyboardControlKeyOutlined, { fontSize: "small", style: customStyle() }));
                case exports.ICONS.ARROWLEFT:
                    return (jsxRuntime.jsx(iconsMaterial.KeyboardArrowLeftOutlined, { fontSize: "small", style: customStyle() }));
                case exports.ICONS.ARROWRIGHT:
                    return (jsxRuntime.jsx(iconsMaterial.KeyboardArrowRightOutlined, { fontSize: "small", style: customStyle() }));
                case exports.ICONS.ARROWUP:
                    return (jsxRuntime.jsx(iconsMaterial.KeyboardArrowUpOutlined, { fontSize: "small", style: customStyle() }));
                case exports.ICONS.CIRCLE:
                    return jsxRuntime.jsx(iconsMaterial.Circle, { fontSize: "small", style: customStyle() });
                case exports.ICONS.CANCEL:
                    return jsxRuntime.jsx(iconsMaterial.Cancel, { fontSize: "small", style: customStyle() });
                case exports.ICONS.CANCELOUTLINE:
                    return (jsxRuntime.jsx(iconsMaterial.HighlightOffOutlined, { fontSize: "small", style: customStyle() }));
                case exports.ICONS.SETTINGSICON:
                    return jsxRuntime.jsx(iconsMaterial.SettingsOutlined, { fontSize: "small", style: customStyle() });
                case exports.ICONS.PERSONSEARCH:
                    return (jsxRuntime.jsx(iconsMaterial.PersonSearchOutlined, { fontSize: "small", style: customStyle() }));
                case exports.ICONS.CREDITCARD:
                    return jsxRuntime.jsx(iconsMaterial.CreditCardOutlined, { fontSize: "small", style: customStyle() });
                case exports.ICONS.DOTSHORIZOUTLINE:
                    return jsxRuntime.jsx(iconsMaterial.MoreHorizOutlined, { fontSize: "small", style: customStyle() });
                case exports.ICONS.DOTSVERTLINE:
                    return jsxRuntime.jsx(iconsMaterial.MoreVertOutlined, { fontSize: "small", style: customStyle() });
                case exports.ICONS.DOWNLOADICON:
                    return jsxRuntime.jsx(iconsMaterial.DownloadOutlined, { fontSize: "small", style: customStyle() });
                case exports.ICONS.SEARCHIOCN:
                    return jsxRuntime.jsx(iconsMaterial.SearchOutlined, { fontSize: "small", style: customStyle() });
                case exports.ICONS.EMOEXCITED:
                    return (jsxRuntime.jsx(iconsMaterial.SentimentVerySatisfiedOutlined, { fontSize: "small", style: customStyle() }));
                case exports.ICONS.EMOSATISFIED:
                    return (jsxRuntime.jsx(iconsMaterial.SentimentSatisfiedOutlined, { fontSize: "small", style: customStyle() }));
                case exports.ICONS.EMONEUTRAL:
                    return (jsxRuntime.jsx(iconsMaterial.SentimentNeutralOutlined, { fontSize: "small", style: customStyle() }));
                case exports.ICONS.VISIBILITY:
                    return jsxRuntime.jsx(iconsMaterial.VisibilityOutlined, { fontSize: "small", style: customStyle() });
                case exports.ICONS.GIFTCARD:
                    return (jsxRuntime.jsx(iconsMaterial.CardGiftcardOutlined, { fontSize: "small", style: customStyle() }));
                case exports.ICONS.HELPCERCLE:
                    return jsxRuntime.jsx(iconsMaterial.HelpOutlineOutlined, { fontSize: "small", style: customStyle() });
                case exports.ICONS.INFOOUTLINE:
                    return jsxRuntime.jsx(iconsMaterial.InfoOutlined, { fontSize: "small", style: customStyle() });
                case exports.ICONS.MENUOUTLINE:
                    return jsxRuntime.jsx(iconsMaterial.MenuOutlined, { fontSize: "small", style: customStyle() });
                case exports.ICONS.REMOVEICON:
                    return jsxRuntime.jsx(iconsMaterial.RemoveOutlined, { fontSize: "small", style: customStyle() });
                case exports.ICONS.STARICON:
                    return (jsxRuntime.jsx(iconsMaterial.StarPurple500Outlined, { fontSize: "small", style: customStyle() }));
                case exports.ICONS.STARICONPLUS:
                    return (jsxRuntime.jsx(iconsMaterial.StarBorderPurple500Outlined, { fontSize: "small", style: customStyle() }));
                case exports.ICONS.THUMBDOWN:
                    return (jsxRuntime.jsx(iconsMaterial.ThumbDownAltOutlined, { fontSize: "small", style: customStyle() }));
                case exports.ICONS.THUMBUP:
                    return jsxRuntime.jsx(iconsMaterial.ThumbUpAltOutlined, { fontSize: "small", style: customStyle() });
                case exports.ICONS.UNFOLDMORE:
                    return jsxRuntime.jsx(iconsMaterial.UnfoldMoreOutlined, { fontSize: "small", style: customStyle() });
                case exports.ICONS.UPLOADICON:
                    return jsxRuntime.jsx(iconsMaterial.UploadOutlined, { fontSize: "small", style: customStyle() });
                case exports.ICONS.WINDOWCLOSE:
                    return jsxRuntime.jsx(iconsMaterial.CloseOutlined, { fontSize: "small", style: customStyle() });
                case exports.ICONS.UNFOLDLESSICON:
                    return jsxRuntime.jsx(iconsMaterial.UnfoldLessOutlined, { fontSize: "small", style: customStyle() });
                case exports.ICONS.GROUPOUTLINE:
                    return jsxRuntime.jsx(iconsMaterial.GroupsOutlined, { fontSize: "small", style: customStyle() });
            }
        }
        else {
            switch (iconName) {
                case exports.ICONS.ATOM:
                    return jsxRuntime.jsx(Atom, { color: color, side: side });
                case exports.ICONS.CLOCK:
                    return jsxRuntime.jsx(Clock, { color: color, side: side });
                case exports.ICONS.EMOCONFUSED:
                    return jsxRuntime.jsx(EmoConfused, { color: color, side: side });
                case exports.ICONS.EMOCRY:
                    return jsxRuntime.jsx(EmoCry, { color: color, side: side });
                case exports.ICONS.FILTEROUTLINE:
                    return jsxRuntime.jsx(FilterOutline, { color: color, side: side });
                case exports.ICONS.FINANCEOUTLINE:
                    return jsxRuntime.jsx(FinanceOutline, { color: color, side: side });
                case exports.ICONS.HANDSHAKE:
                    return jsxRuntime.jsx(HandShake, { color: color, side: side });
                case exports.ICONS.SHIELDACCOUNT:
                    return jsxRuntime.jsx(ShieldAccount, { color: color, side: side });
                case exports.ICONS.TEXTBOXEDIT:
                    return jsxRuntime.jsx(TextBoxEdit, { color: color, side: side });
                case exports.ICONS.TRASHICON:
                    return jsxRuntime.jsx(TrashICon, { color: color, side: side });
                case exports.ICONS.RELOADICON:
                    return jsxRuntime.jsx(ReloadIcon, { color: color, side: side });
                case exports.ICONS.ADDACCOUNT:
                    return jsxRuntime.jsx(AddAccount, { color: color, side: side });
                case exports.ICONS.LOCKACCOUNT:
                    return jsxRuntime.jsx(LockAccount, { color: color, side: side });
                case exports.ICONS.BELLHORNICON:
                    return jsxRuntime.jsx(BellHornIcon, { color: color, side: side });
                case exports.ICONS.CHEVRONLEFT:
                    return jsxRuntime.jsx(ChevronLeft, { color: color, side: side });
                case exports.ICONS.CHEVRONRIGHT:
                    return jsxRuntime.jsx(ChevronRight, { color: color, side: side });
                case exports.ICONS.SUMMARY:
                    return jsxRuntime.jsx(Summary, { color: color, side: side });
                case exports.ICONS.ANALYTICS:
                    return jsxRuntime.jsx(Analytics, { color: color, side: side });
                case exports.ICONS.BULLHORN:
                    return jsxRuntime.jsx(BullHorn, { color: color, side: side });
                case exports.ICONS.USERLOCK:
                    return jsxRuntime.jsx(UserLock, { color: color, side: side });
                case exports.ICONS.IGNITE:
                    return jsxRuntime.jsx(Ignite, { color: color, side: side });
                case exports.ICONS.PULSE:
                    return jsxRuntime.jsx(Pulse, { color: color, side: side });
                case exports.ICONS.AMPLIFY:
                    return jsxRuntime.jsx(Amplify, { color: color, side: side });
                case exports.ICONS.REPORTING:
                    return jsxRuntime.jsx(Reporting, { color: color, side: side });
                case exports.ICONS.PLATFORMFACEBOOK:
                    return jsxRuntime.jsx(PlatformFaceBook, { color: color, side: side });
                case exports.ICONS.PLATFORMBING:
                    return jsxRuntime.jsx(PlatformBing, { color: color, side: side });
                case exports.ICONS.PLATFORMGOOGLEADS:
                    return jsxRuntime.jsx(PlatformGoogleAds, { color: color, side: side });
                case exports.ICONS.INSPIRE:
                    return jsxRuntime.jsx(Inspire, { color: color, side: side });
                case exports.ICONS.KPIICONS:
                    return jsxRuntime.jsx(KPIIcons, { color: color, side: side });
                case exports.ICONS.CUSTOMERTRENDS:
                    return jsxRuntime.jsx(CustomerTrends, { color: color, side: side });
                case exports.ICONS.CUSTOMERFLOWS:
                    return jsxRuntime.jsx(CustomerFlows, { color: color, side: side });
                case exports.ICONS.DIAGNOSE:
                    return jsxRuntime.jsx(Diagnose, { color: color, side: side });
                case exports.ICONS.SCHEDULER:
                    return jsxRuntime.jsx(Scheduler, { color: color, side: side });
            }
        }
    };
    return jsxRuntime.jsx(jsxRuntime.Fragment, { children: buttonIcon(iconName) });
};

/**
 * WARNING: Don't import this directly.
 * Use `MuiError` from `@mui-internal/babel-macros/MuiError.macro` instead.
 * @param {number} code
 */
function formatMuiErrorMessage(code) {
  // Apply babel-plugin-transform-template-literals in loose mode
  // loose mode is safe if we're concatenating primitives
  // see https://babeljs.io/docs/en/babel-plugin-transform-template-literals#loose
  /* eslint-disable prefer-template */
  let url = 'https://mui.com/production-error/?code=' + code;
  for (let i = 1; i < arguments.length; i += 1) {
    // rest params over-transpile for this case
    // eslint-disable-next-line prefer-rest-params
    url += '&args[]=' + encodeURIComponent(arguments[i]);
  }
  return 'Minified MUI error #' + code + '; visit ' + url + ' for the full message.';
  /* eslint-enable prefer-template */
}

function getDefaultExportFromCjs (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

var propTypes = {exports: {}};

var reactIs$1 = {exports: {}};

var reactIs_production_min$1 = {};

/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var hasRequiredReactIs_production_min$1;

function requireReactIs_production_min$1 () {
	if (hasRequiredReactIs_production_min$1) return reactIs_production_min$1;
	hasRequiredReactIs_production_min$1 = 1;
var b="function"===typeof Symbol&&Symbol.for,c=b?Symbol.for("react.element"):60103,d=b?Symbol.for("react.portal"):60106,e=b?Symbol.for("react.fragment"):60107,f=b?Symbol.for("react.strict_mode"):60108,g=b?Symbol.for("react.profiler"):60114,h=b?Symbol.for("react.provider"):60109,k=b?Symbol.for("react.context"):60110,l=b?Symbol.for("react.async_mode"):60111,m=b?Symbol.for("react.concurrent_mode"):60111,n=b?Symbol.for("react.forward_ref"):60112,p=b?Symbol.for("react.suspense"):60113,q=b?
	Symbol.for("react.suspense_list"):60120,r=b?Symbol.for("react.memo"):60115,t=b?Symbol.for("react.lazy"):60116,v=b?Symbol.for("react.block"):60121,w=b?Symbol.for("react.fundamental"):60117,x=b?Symbol.for("react.responder"):60118,y=b?Symbol.for("react.scope"):60119;
	function z(a){if("object"===typeof a&&null!==a){var u=a.$$typeof;switch(u){case c:switch(a=a.type,a){case l:case m:case e:case g:case f:case p:return a;default:switch(a=a&&a.$$typeof,a){case k:case n:case t:case r:case h:return a;default:return u}}case d:return u}}}function A(a){return z(a)===m}reactIs_production_min$1.AsyncMode=l;reactIs_production_min$1.ConcurrentMode=m;reactIs_production_min$1.ContextConsumer=k;reactIs_production_min$1.ContextProvider=h;reactIs_production_min$1.Element=c;reactIs_production_min$1.ForwardRef=n;reactIs_production_min$1.Fragment=e;reactIs_production_min$1.Lazy=t;reactIs_production_min$1.Memo=r;reactIs_production_min$1.Portal=d;
	reactIs_production_min$1.Profiler=g;reactIs_production_min$1.StrictMode=f;reactIs_production_min$1.Suspense=p;reactIs_production_min$1.isAsyncMode=function(a){return A(a)||z(a)===l};reactIs_production_min$1.isConcurrentMode=A;reactIs_production_min$1.isContextConsumer=function(a){return z(a)===k};reactIs_production_min$1.isContextProvider=function(a){return z(a)===h};reactIs_production_min$1.isElement=function(a){return "object"===typeof a&&null!==a&&a.$$typeof===c};reactIs_production_min$1.isForwardRef=function(a){return z(a)===n};reactIs_production_min$1.isFragment=function(a){return z(a)===e};reactIs_production_min$1.isLazy=function(a){return z(a)===t};
	reactIs_production_min$1.isMemo=function(a){return z(a)===r};reactIs_production_min$1.isPortal=function(a){return z(a)===d};reactIs_production_min$1.isProfiler=function(a){return z(a)===g};reactIs_production_min$1.isStrictMode=function(a){return z(a)===f};reactIs_production_min$1.isSuspense=function(a){return z(a)===p};
	reactIs_production_min$1.isValidElementType=function(a){return "string"===typeof a||"function"===typeof a||a===e||a===m||a===g||a===f||a===p||a===q||"object"===typeof a&&null!==a&&(a.$$typeof===t||a.$$typeof===r||a.$$typeof===h||a.$$typeof===k||a.$$typeof===n||a.$$typeof===w||a.$$typeof===x||a.$$typeof===y||a.$$typeof===v)};reactIs_production_min$1.typeOf=z;
	return reactIs_production_min$1;
}

var reactIs_development$1 = {};

/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var hasRequiredReactIs_development$1;

function requireReactIs_development$1 () {
	if (hasRequiredReactIs_development$1) return reactIs_development$1;
	hasRequiredReactIs_development$1 = 1;



	if (process.env.NODE_ENV !== "production") {
	  (function() {

	// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
	// nor polyfill, then a plain number is used for performance.
	var hasSymbol = typeof Symbol === 'function' && Symbol.for;
	var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
	var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
	var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
	var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
	var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
	var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
	var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
	// (unstable) APIs that have been removed. Can we remove the symbols?

	var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
	var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
	var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
	var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
	var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
	var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
	var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
	var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for('react.block') : 0xead9;
	var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
	var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
	var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;

	function isValidElementType(type) {
	  return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
	  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
	}

	function typeOf(object) {
	  if (typeof object === 'object' && object !== null) {
	    var $$typeof = object.$$typeof;

	    switch ($$typeof) {
	      case REACT_ELEMENT_TYPE:
	        var type = object.type;

	        switch (type) {
	          case REACT_ASYNC_MODE_TYPE:
	          case REACT_CONCURRENT_MODE_TYPE:
	          case REACT_FRAGMENT_TYPE:
	          case REACT_PROFILER_TYPE:
	          case REACT_STRICT_MODE_TYPE:
	          case REACT_SUSPENSE_TYPE:
	            return type;

	          default:
	            var $$typeofType = type && type.$$typeof;

	            switch ($$typeofType) {
	              case REACT_CONTEXT_TYPE:
	              case REACT_FORWARD_REF_TYPE:
	              case REACT_LAZY_TYPE:
	              case REACT_MEMO_TYPE:
	              case REACT_PROVIDER_TYPE:
	                return $$typeofType;

	              default:
	                return $$typeof;
	            }

	        }

	      case REACT_PORTAL_TYPE:
	        return $$typeof;
	    }
	  }

	  return undefined;
	} // AsyncMode is deprecated along with isAsyncMode

	var AsyncMode = REACT_ASYNC_MODE_TYPE;
	var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
	var ContextConsumer = REACT_CONTEXT_TYPE;
	var ContextProvider = REACT_PROVIDER_TYPE;
	var Element = REACT_ELEMENT_TYPE;
	var ForwardRef = REACT_FORWARD_REF_TYPE;
	var Fragment = REACT_FRAGMENT_TYPE;
	var Lazy = REACT_LAZY_TYPE;
	var Memo = REACT_MEMO_TYPE;
	var Portal = REACT_PORTAL_TYPE;
	var Profiler = REACT_PROFILER_TYPE;
	var StrictMode = REACT_STRICT_MODE_TYPE;
	var Suspense = REACT_SUSPENSE_TYPE;
	var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated

	function isAsyncMode(object) {
	  {
	    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
	      hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint

	      console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
	    }
	  }

	  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
	}
	function isConcurrentMode(object) {
	  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
	}
	function isContextConsumer(object) {
	  return typeOf(object) === REACT_CONTEXT_TYPE;
	}
	function isContextProvider(object) {
	  return typeOf(object) === REACT_PROVIDER_TYPE;
	}
	function isElement(object) {
	  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
	}
	function isForwardRef(object) {
	  return typeOf(object) === REACT_FORWARD_REF_TYPE;
	}
	function isFragment(object) {
	  return typeOf(object) === REACT_FRAGMENT_TYPE;
	}
	function isLazy(object) {
	  return typeOf(object) === REACT_LAZY_TYPE;
	}
	function isMemo(object) {
	  return typeOf(object) === REACT_MEMO_TYPE;
	}
	function isPortal(object) {
	  return typeOf(object) === REACT_PORTAL_TYPE;
	}
	function isProfiler(object) {
	  return typeOf(object) === REACT_PROFILER_TYPE;
	}
	function isStrictMode(object) {
	  return typeOf(object) === REACT_STRICT_MODE_TYPE;
	}
	function isSuspense(object) {
	  return typeOf(object) === REACT_SUSPENSE_TYPE;
	}

	reactIs_development$1.AsyncMode = AsyncMode;
	reactIs_development$1.ConcurrentMode = ConcurrentMode;
	reactIs_development$1.ContextConsumer = ContextConsumer;
	reactIs_development$1.ContextProvider = ContextProvider;
	reactIs_development$1.Element = Element;
	reactIs_development$1.ForwardRef = ForwardRef;
	reactIs_development$1.Fragment = Fragment;
	reactIs_development$1.Lazy = Lazy;
	reactIs_development$1.Memo = Memo;
	reactIs_development$1.Portal = Portal;
	reactIs_development$1.Profiler = Profiler;
	reactIs_development$1.StrictMode = StrictMode;
	reactIs_development$1.Suspense = Suspense;
	reactIs_development$1.isAsyncMode = isAsyncMode;
	reactIs_development$1.isConcurrentMode = isConcurrentMode;
	reactIs_development$1.isContextConsumer = isContextConsumer;
	reactIs_development$1.isContextProvider = isContextProvider;
	reactIs_development$1.isElement = isElement;
	reactIs_development$1.isForwardRef = isForwardRef;
	reactIs_development$1.isFragment = isFragment;
	reactIs_development$1.isLazy = isLazy;
	reactIs_development$1.isMemo = isMemo;
	reactIs_development$1.isPortal = isPortal;
	reactIs_development$1.isProfiler = isProfiler;
	reactIs_development$1.isStrictMode = isStrictMode;
	reactIs_development$1.isSuspense = isSuspense;
	reactIs_development$1.isValidElementType = isValidElementType;
	reactIs_development$1.typeOf = typeOf;
	  })();
	}
	return reactIs_development$1;
}

var hasRequiredReactIs;

function requireReactIs () {
	if (hasRequiredReactIs) return reactIs$1.exports;
	hasRequiredReactIs = 1;

	if (process.env.NODE_ENV === 'production') {
	  reactIs$1.exports = requireReactIs_production_min$1();
	} else {
	  reactIs$1.exports = requireReactIs_development$1();
	}
	return reactIs$1.exports;
}

/*
object-assign
(c) Sindre Sorhus
@license MIT
*/

var objectAssign;
var hasRequiredObjectAssign;

function requireObjectAssign () {
	if (hasRequiredObjectAssign) return objectAssign;
	hasRequiredObjectAssign = 1;
	/* eslint-disable no-unused-vars */
	var getOwnPropertySymbols = Object.getOwnPropertySymbols;
	var hasOwnProperty = Object.prototype.hasOwnProperty;
	var propIsEnumerable = Object.prototype.propertyIsEnumerable;

	function toObject(val) {
		if (val === null || val === undefined) {
			throw new TypeError('Object.assign cannot be called with null or undefined');
		}

		return Object(val);
	}

	function shouldUseNative() {
		try {
			if (!Object.assign) {
				return false;
			}

			// Detect buggy property enumeration order in older V8 versions.

			// https://bugs.chromium.org/p/v8/issues/detail?id=4118
			var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
			test1[5] = 'de';
			if (Object.getOwnPropertyNames(test1)[0] === '5') {
				return false;
			}

			// https://bugs.chromium.org/p/v8/issues/detail?id=3056
			var test2 = {};
			for (var i = 0; i < 10; i++) {
				test2['_' + String.fromCharCode(i)] = i;
			}
			var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
				return test2[n];
			});
			if (order2.join('') !== '0123456789') {
				return false;
			}

			// https://bugs.chromium.org/p/v8/issues/detail?id=3056
			var test3 = {};
			'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
				test3[letter] = letter;
			});
			if (Object.keys(Object.assign({}, test3)).join('') !==
					'abcdefghijklmnopqrst') {
				return false;
			}

			return true;
		} catch (err) {
			// We don't expect any of the above to throw, but better to be safe.
			return false;
		}
	}

	objectAssign = shouldUseNative() ? Object.assign : function (target, source) {
		var from;
		var to = toObject(target);
		var symbols;

		for (var s = 1; s < arguments.length; s++) {
			from = Object(arguments[s]);

			for (var key in from) {
				if (hasOwnProperty.call(from, key)) {
					to[key] = from[key];
				}
			}

			if (getOwnPropertySymbols) {
				symbols = getOwnPropertySymbols(from);
				for (var i = 0; i < symbols.length; i++) {
					if (propIsEnumerable.call(from, symbols[i])) {
						to[symbols[i]] = from[symbols[i]];
					}
				}
			}
		}

		return to;
	};
	return objectAssign;
}

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var ReactPropTypesSecret_1;
var hasRequiredReactPropTypesSecret;

function requireReactPropTypesSecret () {
	if (hasRequiredReactPropTypesSecret) return ReactPropTypesSecret_1;
	hasRequiredReactPropTypesSecret = 1;

	var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

	ReactPropTypesSecret_1 = ReactPropTypesSecret;
	return ReactPropTypesSecret_1;
}

var has;
var hasRequiredHas;

function requireHas () {
	if (hasRequiredHas) return has;
	hasRequiredHas = 1;
	has = Function.call.bind(Object.prototype.hasOwnProperty);
	return has;
}

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var checkPropTypes_1;
var hasRequiredCheckPropTypes;

function requireCheckPropTypes () {
	if (hasRequiredCheckPropTypes) return checkPropTypes_1;
	hasRequiredCheckPropTypes = 1;

	var printWarning = function() {};

	if (process.env.NODE_ENV !== 'production') {
	  var ReactPropTypesSecret = requireReactPropTypesSecret();
	  var loggedTypeFailures = {};
	  var has = requireHas();

	  printWarning = function(text) {
	    var message = 'Warning: ' + text;
	    if (typeof console !== 'undefined') {
	      console.error(message);
	    }
	    try {
	      // --- Welcome to debugging React ---
	      // This error was thrown as a convenience so that you can use this stack
	      // to find the callsite that caused this warning to fire.
	      throw new Error(message);
	    } catch (x) { /**/ }
	  };
	}

	/**
	 * Assert that the values match with the type specs.
	 * Error messages are memorized and will only be shown once.
	 *
	 * @param {object} typeSpecs Map of name to a ReactPropType
	 * @param {object} values Runtime values that need to be type-checked
	 * @param {string} location e.g. "prop", "context", "child context"
	 * @param {string} componentName Name of the component for error messages.
	 * @param {?Function} getStack Returns the component stack.
	 * @private
	 */
	function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
	  if (process.env.NODE_ENV !== 'production') {
	    for (var typeSpecName in typeSpecs) {
	      if (has(typeSpecs, typeSpecName)) {
	        var error;
	        // Prop type validation may throw. In case they do, we don't want to
	        // fail the render phase where it didn't fail before. So we log it.
	        // After these have been cleaned up, we'll let them throw.
	        try {
	          // This is intentionally an invariant that gets caught. It's the same
	          // behavior as without this statement except with a better message.
	          if (typeof typeSpecs[typeSpecName] !== 'function') {
	            var err = Error(
	              (componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' +
	              'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.' +
	              'This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.'
	            );
	            err.name = 'Invariant Violation';
	            throw err;
	          }
	          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
	        } catch (ex) {
	          error = ex;
	        }
	        if (error && !(error instanceof Error)) {
	          printWarning(
	            (componentName || 'React class') + ': type specification of ' +
	            location + ' `' + typeSpecName + '` is invalid; the type checker ' +
	            'function must return `null` or an `Error` but returned a ' + typeof error + '. ' +
	            'You may have forgotten to pass an argument to the type checker ' +
	            'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' +
	            'shape all require an argument).'
	          );
	        }
	        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
	          // Only monitor this failure once because there tends to be a lot of the
	          // same error.
	          loggedTypeFailures[error.message] = true;

	          var stack = getStack ? getStack() : '';

	          printWarning(
	            'Failed ' + location + ' type: ' + error.message + (stack != null ? stack : '')
	          );
	        }
	      }
	    }
	  }
	}

	/**
	 * Resets warning cache when testing.
	 *
	 * @private
	 */
	checkPropTypes.resetWarningCache = function() {
	  if (process.env.NODE_ENV !== 'production') {
	    loggedTypeFailures = {};
	  }
	};

	checkPropTypes_1 = checkPropTypes;
	return checkPropTypes_1;
}

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var factoryWithTypeCheckers;
var hasRequiredFactoryWithTypeCheckers;

function requireFactoryWithTypeCheckers () {
	if (hasRequiredFactoryWithTypeCheckers) return factoryWithTypeCheckers;
	hasRequiredFactoryWithTypeCheckers = 1;

	var ReactIs = requireReactIs();
	var assign = requireObjectAssign();

	var ReactPropTypesSecret = requireReactPropTypesSecret();
	var has = requireHas();
	var checkPropTypes = requireCheckPropTypes();

	var printWarning = function() {};

	if (process.env.NODE_ENV !== 'production') {
	  printWarning = function(text) {
	    var message = 'Warning: ' + text;
	    if (typeof console !== 'undefined') {
	      console.error(message);
	    }
	    try {
	      // --- Welcome to debugging React ---
	      // This error was thrown as a convenience so that you can use this stack
	      // to find the callsite that caused this warning to fire.
	      throw new Error(message);
	    } catch (x) {}
	  };
	}

	function emptyFunctionThatReturnsNull() {
	  return null;
	}

	factoryWithTypeCheckers = function(isValidElement, throwOnDirectAccess) {
	  /* global Symbol */
	  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
	  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

	  /**
	   * Returns the iterator method function contained on the iterable object.
	   *
	   * Be sure to invoke the function with the iterable as context:
	   *
	   *     var iteratorFn = getIteratorFn(myIterable);
	   *     if (iteratorFn) {
	   *       var iterator = iteratorFn.call(myIterable);
	   *       ...
	   *     }
	   *
	   * @param {?object} maybeIterable
	   * @return {?function}
	   */
	  function getIteratorFn(maybeIterable) {
	    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
	    if (typeof iteratorFn === 'function') {
	      return iteratorFn;
	    }
	  }

	  /**
	   * Collection of methods that allow declaration and validation of props that are
	   * supplied to React components. Example usage:
	   *
	   *   var Props = require('ReactPropTypes');
	   *   var MyArticle = React.createClass({
	   *     propTypes: {
	   *       // An optional string prop named "description".
	   *       description: Props.string,
	   *
	   *       // A required enum prop named "category".
	   *       category: Props.oneOf(['News','Photos']).isRequired,
	   *
	   *       // A prop named "dialog" that requires an instance of Dialog.
	   *       dialog: Props.instanceOf(Dialog).isRequired
	   *     },
	   *     render: function() { ... }
	   *   });
	   *
	   * A more formal specification of how these methods are used:
	   *
	   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
	   *   decl := ReactPropTypes.{type}(.isRequired)?
	   *
	   * Each and every declaration produces a function with the same signature. This
	   * allows the creation of custom validation functions. For example:
	   *
	   *  var MyLink = React.createClass({
	   *    propTypes: {
	   *      // An optional string or URI prop named "href".
	   *      href: function(props, propName, componentName) {
	   *        var propValue = props[propName];
	   *        if (propValue != null && typeof propValue !== 'string' &&
	   *            !(propValue instanceof URI)) {
	   *          return new Error(
	   *            'Expected a string or an URI for ' + propName + ' in ' +
	   *            componentName
	   *          );
	   *        }
	   *      }
	   *    },
	   *    render: function() {...}
	   *  });
	   *
	   * @internal
	   */

	  var ANONYMOUS = '<<anonymous>>';

	  // Important!
	  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
	  var ReactPropTypes = {
	    array: createPrimitiveTypeChecker('array'),
	    bigint: createPrimitiveTypeChecker('bigint'),
	    bool: createPrimitiveTypeChecker('boolean'),
	    func: createPrimitiveTypeChecker('function'),
	    number: createPrimitiveTypeChecker('number'),
	    object: createPrimitiveTypeChecker('object'),
	    string: createPrimitiveTypeChecker('string'),
	    symbol: createPrimitiveTypeChecker('symbol'),

	    any: createAnyTypeChecker(),
	    arrayOf: createArrayOfTypeChecker,
	    element: createElementTypeChecker(),
	    elementType: createElementTypeTypeChecker(),
	    instanceOf: createInstanceTypeChecker,
	    node: createNodeChecker(),
	    objectOf: createObjectOfTypeChecker,
	    oneOf: createEnumTypeChecker,
	    oneOfType: createUnionTypeChecker,
	    shape: createShapeTypeChecker,
	    exact: createStrictShapeTypeChecker,
	  };

	  /**
	   * inlined Object.is polyfill to avoid requiring consumers ship their own
	   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
	   */
	  /*eslint-disable no-self-compare*/
	  function is(x, y) {
	    // SameValue algorithm
	    if (x === y) {
	      // Steps 1-5, 7-10
	      // Steps 6.b-6.e: +0 != -0
	      return x !== 0 || 1 / x === 1 / y;
	    } else {
	      // Step 6.a: NaN == NaN
	      return x !== x && y !== y;
	    }
	  }
	  /*eslint-enable no-self-compare*/

	  /**
	   * We use an Error-like object for backward compatibility as people may call
	   * PropTypes directly and inspect their output. However, we don't use real
	   * Errors anymore. We don't inspect their stack anyway, and creating them
	   * is prohibitively expensive if they are created too often, such as what
	   * happens in oneOfType() for any type before the one that matched.
	   */
	  function PropTypeError(message, data) {
	    this.message = message;
	    this.data = data && typeof data === 'object' ? data: {};
	    this.stack = '';
	  }
	  // Make `instanceof Error` still work for returned errors.
	  PropTypeError.prototype = Error.prototype;

	  function createChainableTypeChecker(validate) {
	    if (process.env.NODE_ENV !== 'production') {
	      var manualPropTypeCallCache = {};
	      var manualPropTypeWarningCount = 0;
	    }
	    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
	      componentName = componentName || ANONYMOUS;
	      propFullName = propFullName || propName;

	      if (secret !== ReactPropTypesSecret) {
	        if (throwOnDirectAccess) {
	          // New behavior only for users of `prop-types` package
	          var err = new Error(
	            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
	            'Use `PropTypes.checkPropTypes()` to call them. ' +
	            'Read more at http://fb.me/use-check-prop-types'
	          );
	          err.name = 'Invariant Violation';
	          throw err;
	        } else if (process.env.NODE_ENV !== 'production' && typeof console !== 'undefined') {
	          // Old behavior for people using React.PropTypes
	          var cacheKey = componentName + ':' + propName;
	          if (
	            !manualPropTypeCallCache[cacheKey] &&
	            // Avoid spamming the console because they are often not actionable except for lib authors
	            manualPropTypeWarningCount < 3
	          ) {
	            printWarning(
	              'You are manually calling a React.PropTypes validation ' +
	              'function for the `' + propFullName + '` prop on `' + componentName + '`. This is deprecated ' +
	              'and will throw in the standalone `prop-types` package. ' +
	              'You may be seeing this warning due to a third-party PropTypes ' +
	              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.'
	            );
	            manualPropTypeCallCache[cacheKey] = true;
	            manualPropTypeWarningCount++;
	          }
	        }
	      }
	      if (props[propName] == null) {
	        if (isRequired) {
	          if (props[propName] === null) {
	            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
	          }
	          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
	        }
	        return null;
	      } else {
	        return validate(props, propName, componentName, location, propFullName);
	      }
	    }

	    var chainedCheckType = checkType.bind(null, false);
	    chainedCheckType.isRequired = checkType.bind(null, true);

	    return chainedCheckType;
	  }

	  function createPrimitiveTypeChecker(expectedType) {
	    function validate(props, propName, componentName, location, propFullName, secret) {
	      var propValue = props[propName];
	      var propType = getPropType(propValue);
	      if (propType !== expectedType) {
	        // `propValue` being instance of, say, date/regexp, pass the 'object'
	        // check, but we can offer a more precise error message here rather than
	        // 'of type `object`'.
	        var preciseType = getPreciseType(propValue);

	        return new PropTypeError(
	          'Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'),
	          {expectedType: expectedType}
	        );
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createAnyTypeChecker() {
	    return createChainableTypeChecker(emptyFunctionThatReturnsNull);
	  }

	  function createArrayOfTypeChecker(typeChecker) {
	    function validate(props, propName, componentName, location, propFullName) {
	      if (typeof typeChecker !== 'function') {
	        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
	      }
	      var propValue = props[propName];
	      if (!Array.isArray(propValue)) {
	        var propType = getPropType(propValue);
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
	      }
	      for (var i = 0; i < propValue.length; i++) {
	        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
	        if (error instanceof Error) {
	          return error;
	        }
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createElementTypeChecker() {
	    function validate(props, propName, componentName, location, propFullName) {
	      var propValue = props[propName];
	      if (!isValidElement(propValue)) {
	        var propType = getPropType(propValue);
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createElementTypeTypeChecker() {
	    function validate(props, propName, componentName, location, propFullName) {
	      var propValue = props[propName];
	      if (!ReactIs.isValidElementType(propValue)) {
	        var propType = getPropType(propValue);
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement type.'));
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createInstanceTypeChecker(expectedClass) {
	    function validate(props, propName, componentName, location, propFullName) {
	      if (!(props[propName] instanceof expectedClass)) {
	        var expectedClassName = expectedClass.name || ANONYMOUS;
	        var actualClassName = getClassName(props[propName]);
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createEnumTypeChecker(expectedValues) {
	    if (!Array.isArray(expectedValues)) {
	      if (process.env.NODE_ENV !== 'production') {
	        if (arguments.length > 1) {
	          printWarning(
	            'Invalid arguments supplied to oneOf, expected an array, got ' + arguments.length + ' arguments. ' +
	            'A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).'
	          );
	        } else {
	          printWarning('Invalid argument supplied to oneOf, expected an array.');
	        }
	      }
	      return emptyFunctionThatReturnsNull;
	    }

	    function validate(props, propName, componentName, location, propFullName) {
	      var propValue = props[propName];
	      for (var i = 0; i < expectedValues.length; i++) {
	        if (is(propValue, expectedValues[i])) {
	          return null;
	        }
	      }

	      var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
	        var type = getPreciseType(value);
	        if (type === 'symbol') {
	          return String(value);
	        }
	        return value;
	      });
	      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + String(propValue) + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createObjectOfTypeChecker(typeChecker) {
	    function validate(props, propName, componentName, location, propFullName) {
	      if (typeof typeChecker !== 'function') {
	        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
	      }
	      var propValue = props[propName];
	      var propType = getPropType(propValue);
	      if (propType !== 'object') {
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
	      }
	      for (var key in propValue) {
	        if (has(propValue, key)) {
	          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
	          if (error instanceof Error) {
	            return error;
	          }
	        }
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createUnionTypeChecker(arrayOfTypeCheckers) {
	    if (!Array.isArray(arrayOfTypeCheckers)) {
	      process.env.NODE_ENV !== 'production' ? printWarning('Invalid argument supplied to oneOfType, expected an instance of array.') : void 0;
	      return emptyFunctionThatReturnsNull;
	    }

	    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
	      var checker = arrayOfTypeCheckers[i];
	      if (typeof checker !== 'function') {
	        printWarning(
	          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
	          'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.'
	        );
	        return emptyFunctionThatReturnsNull;
	      }
	    }

	    function validate(props, propName, componentName, location, propFullName) {
	      var expectedTypes = [];
	      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
	        var checker = arrayOfTypeCheckers[i];
	        var checkerResult = checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret);
	        if (checkerResult == null) {
	          return null;
	        }
	        if (checkerResult.data && has(checkerResult.data, 'expectedType')) {
	          expectedTypes.push(checkerResult.data.expectedType);
	        }
	      }
	      var expectedTypesMessage = (expectedTypes.length > 0) ? ', expected one of type [' + expectedTypes.join(', ') + ']': '';
	      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`' + expectedTypesMessage + '.'));
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createNodeChecker() {
	    function validate(props, propName, componentName, location, propFullName) {
	      if (!isNode(props[propName])) {
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function invalidValidatorError(componentName, location, propFullName, key, type) {
	    return new PropTypeError(
	      (componentName || 'React class') + ': ' + location + ' type `' + propFullName + '.' + key + '` is invalid; ' +
	      'it must be a function, usually from the `prop-types` package, but received `' + type + '`.'
	    );
	  }

	  function createShapeTypeChecker(shapeTypes) {
	    function validate(props, propName, componentName, location, propFullName) {
	      var propValue = props[propName];
	      var propType = getPropType(propValue);
	      if (propType !== 'object') {
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
	      }
	      for (var key in shapeTypes) {
	        var checker = shapeTypes[key];
	        if (typeof checker !== 'function') {
	          return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
	        }
	        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
	        if (error) {
	          return error;
	        }
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createStrictShapeTypeChecker(shapeTypes) {
	    function validate(props, propName, componentName, location, propFullName) {
	      var propValue = props[propName];
	      var propType = getPropType(propValue);
	      if (propType !== 'object') {
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
	      }
	      // We need to check all keys in case some are required but missing from props.
	      var allKeys = assign({}, props[propName], shapeTypes);
	      for (var key in allKeys) {
	        var checker = shapeTypes[key];
	        if (has(shapeTypes, key) && typeof checker !== 'function') {
	          return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
	        }
	        if (!checker) {
	          return new PropTypeError(
	            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
	            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
	            '\nValid keys: ' + JSON.stringify(Object.keys(shapeTypes), null, '  ')
	          );
	        }
	        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
	        if (error) {
	          return error;
	        }
	      }
	      return null;
	    }

	    return createChainableTypeChecker(validate);
	  }

	  function isNode(propValue) {
	    switch (typeof propValue) {
	      case 'number':
	      case 'string':
	      case 'undefined':
	        return true;
	      case 'boolean':
	        return !propValue;
	      case 'object':
	        if (Array.isArray(propValue)) {
	          return propValue.every(isNode);
	        }
	        if (propValue === null || isValidElement(propValue)) {
	          return true;
	        }

	        var iteratorFn = getIteratorFn(propValue);
	        if (iteratorFn) {
	          var iterator = iteratorFn.call(propValue);
	          var step;
	          if (iteratorFn !== propValue.entries) {
	            while (!(step = iterator.next()).done) {
	              if (!isNode(step.value)) {
	                return false;
	              }
	            }
	          } else {
	            // Iterator will provide entry [k,v] tuples rather than values.
	            while (!(step = iterator.next()).done) {
	              var entry = step.value;
	              if (entry) {
	                if (!isNode(entry[1])) {
	                  return false;
	                }
	              }
	            }
	          }
	        } else {
	          return false;
	        }

	        return true;
	      default:
	        return false;
	    }
	  }

	  function isSymbol(propType, propValue) {
	    // Native Symbol.
	    if (propType === 'symbol') {
	      return true;
	    }

	    // falsy value can't be a Symbol
	    if (!propValue) {
	      return false;
	    }

	    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
	    if (propValue['@@toStringTag'] === 'Symbol') {
	      return true;
	    }

	    // Fallback for non-spec compliant Symbols which are polyfilled.
	    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
	      return true;
	    }

	    return false;
	  }

	  // Equivalent of `typeof` but with special handling for array and regexp.
	  function getPropType(propValue) {
	    var propType = typeof propValue;
	    if (Array.isArray(propValue)) {
	      return 'array';
	    }
	    if (propValue instanceof RegExp) {
	      // Old webkits (at least until Android 4.0) return 'function' rather than
	      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
	      // passes PropTypes.object.
	      return 'object';
	    }
	    if (isSymbol(propType, propValue)) {
	      return 'symbol';
	    }
	    return propType;
	  }

	  // This handles more types than `getPropType`. Only used for error messages.
	  // See `createPrimitiveTypeChecker`.
	  function getPreciseType(propValue) {
	    if (typeof propValue === 'undefined' || propValue === null) {
	      return '' + propValue;
	    }
	    var propType = getPropType(propValue);
	    if (propType === 'object') {
	      if (propValue instanceof Date) {
	        return 'date';
	      } else if (propValue instanceof RegExp) {
	        return 'regexp';
	      }
	    }
	    return propType;
	  }

	  // Returns a string that is postfixed to a warning about an invalid type.
	  // For example, "undefined" or "of type array"
	  function getPostfixForTypeWarning(value) {
	    var type = getPreciseType(value);
	    switch (type) {
	      case 'array':
	      case 'object':
	        return 'an ' + type;
	      case 'boolean':
	      case 'date':
	      case 'regexp':
	        return 'a ' + type;
	      default:
	        return type;
	    }
	  }

	  // Returns class name of the object, if any.
	  function getClassName(propValue) {
	    if (!propValue.constructor || !propValue.constructor.name) {
	      return ANONYMOUS;
	    }
	    return propValue.constructor.name;
	  }

	  ReactPropTypes.checkPropTypes = checkPropTypes;
	  ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache;
	  ReactPropTypes.PropTypes = ReactPropTypes;

	  return ReactPropTypes;
	};
	return factoryWithTypeCheckers;
}

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var factoryWithThrowingShims;
var hasRequiredFactoryWithThrowingShims;

function requireFactoryWithThrowingShims () {
	if (hasRequiredFactoryWithThrowingShims) return factoryWithThrowingShims;
	hasRequiredFactoryWithThrowingShims = 1;

	var ReactPropTypesSecret = requireReactPropTypesSecret();

	function emptyFunction() {}
	function emptyFunctionWithReset() {}
	emptyFunctionWithReset.resetWarningCache = emptyFunction;

	factoryWithThrowingShims = function() {
	  function shim(props, propName, componentName, location, propFullName, secret) {
	    if (secret === ReactPropTypesSecret) {
	      // It is still safe when called from React.
	      return;
	    }
	    var err = new Error(
	      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
	      'Use PropTypes.checkPropTypes() to call them. ' +
	      'Read more at http://fb.me/use-check-prop-types'
	    );
	    err.name = 'Invariant Violation';
	    throw err;
	  }	  shim.isRequired = shim;
	  function getShim() {
	    return shim;
	  }	  // Important!
	  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
	  var ReactPropTypes = {
	    array: shim,
	    bigint: shim,
	    bool: shim,
	    func: shim,
	    number: shim,
	    object: shim,
	    string: shim,
	    symbol: shim,

	    any: shim,
	    arrayOf: getShim,
	    element: shim,
	    elementType: shim,
	    instanceOf: getShim,
	    node: shim,
	    objectOf: getShim,
	    oneOf: getShim,
	    oneOfType: getShim,
	    shape: getShim,
	    exact: getShim,

	    checkPropTypes: emptyFunctionWithReset,
	    resetWarningCache: emptyFunction
	  };

	  ReactPropTypes.PropTypes = ReactPropTypes;

	  return ReactPropTypes;
	};
	return factoryWithThrowingShims;
}

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (process.env.NODE_ENV !== 'production') {
  var ReactIs = requireReactIs();

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  propTypes.exports = requireFactoryWithTypeCheckers()(ReactIs.isElement, throwOnDirectAccess);
} else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  propTypes.exports = requireFactoryWithThrowingShims()();
}

var propTypesExports = propTypes.exports;
var PropTypes = /*@__PURE__*/getDefaultExportFromCjs(propTypesExports);

/**
 * @mui/styled-engine v5.15.6
 *
 * @license MIT
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
function styled$2(tag, options) {
  const stylesFactory = emStyled__default["default"](tag, options);
  if (process.env.NODE_ENV !== 'production') {
    return (...styles) => {
      const component = typeof tag === 'string' ? `"${tag}"` : 'component';
      if (styles.length === 0) {
        console.error([`MUI: Seems like you called \`styled(${component})()\` without a \`style\` argument.`, 'You must provide a `styles` argument: `styled("div")(styleYouForgotToPass)`.'].join('\n'));
      } else if (styles.some(style => style === undefined)) {
        console.error(`MUI: the styled(${component})(...args) API requires all its args to be defined.`);
      }
      return stylesFactory(...styles);
    };
  }
  return stylesFactory;
}

// eslint-disable-next-line @typescript-eslint/naming-convention
const internal_processStyles = (tag, processor) => {
  // Emotion attaches all the styles as `__emotion_styles`.
  // Ref: https://github.com/emotion-js/emotion/blob/16d971d0da229596d6bcc39d282ba9753c9ee7cf/packages/styled/src/base.js#L186
  if (Array.isArray(tag.__emotion_styles)) {
    tag.__emotion_styles = processor(tag.__emotion_styles);
  }
};

function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }
  return target;
}

// https://github.com/sindresorhus/is-plain-obj/blob/main/index.js
function isPlainObject(item) {
  if (typeof item !== 'object' || item === null) {
    return false;
  }
  const prototype = Object.getPrototypeOf(item);
  return (prototype === null || prototype === Object.prototype || Object.getPrototypeOf(prototype) === null) && !(Symbol.toStringTag in item) && !(Symbol.iterator in item);
}
function deepClone(source) {
  if (!isPlainObject(source)) {
    return source;
  }
  const output = {};
  Object.keys(source).forEach(key => {
    output[key] = deepClone(source[key]);
  });
  return output;
}
function deepmerge(target, source, options = {
  clone: true
}) {
  const output = options.clone ? _extends({}, target) : target;
  if (isPlainObject(target) && isPlainObject(source)) {
    Object.keys(source).forEach(key => {
      // Avoid prototype pollution
      if (key === '__proto__') {
        return;
      }
      if (isPlainObject(source[key]) && key in target && isPlainObject(target[key])) {
        // Since `output` is a clone of `target` and we have narrowed `target` in this block we can cast to the same type.
        output[key] = deepmerge(target[key], source[key], options);
      } else if (options.clone) {
        output[key] = isPlainObject(source[key]) ? deepClone(source[key]) : source[key];
      } else {
        output[key] = source[key];
      }
    });
  }
  return output;
}

var reactIs = {exports: {}};

var reactIs_production_min = {};

/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var hasRequiredReactIs_production_min;

function requireReactIs_production_min () {
	if (hasRequiredReactIs_production_min) return reactIs_production_min;
	hasRequiredReactIs_production_min = 1;
var b=Symbol.for("react.element"),c=Symbol.for("react.portal"),d=Symbol.for("react.fragment"),e=Symbol.for("react.strict_mode"),f=Symbol.for("react.profiler"),g=Symbol.for("react.provider"),h=Symbol.for("react.context"),k=Symbol.for("react.server_context"),l=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),n=Symbol.for("react.suspense_list"),p=Symbol.for("react.memo"),q=Symbol.for("react.lazy"),t=Symbol.for("react.offscreen"),u;u=Symbol.for("react.module.reference");
	function v(a){if("object"===typeof a&&null!==a){var r=a.$$typeof;switch(r){case b:switch(a=a.type,a){case d:case f:case e:case m:case n:return a;default:switch(a=a&&a.$$typeof,a){case k:case h:case l:case q:case p:case g:return a;default:return r}}case c:return r}}}reactIs_production_min.ContextConsumer=h;reactIs_production_min.ContextProvider=g;reactIs_production_min.Element=b;reactIs_production_min.ForwardRef=l;reactIs_production_min.Fragment=d;reactIs_production_min.Lazy=q;reactIs_production_min.Memo=p;reactIs_production_min.Portal=c;reactIs_production_min.Profiler=f;reactIs_production_min.StrictMode=e;reactIs_production_min.Suspense=m;
	reactIs_production_min.SuspenseList=n;reactIs_production_min.isAsyncMode=function(){return !1};reactIs_production_min.isConcurrentMode=function(){return !1};reactIs_production_min.isContextConsumer=function(a){return v(a)===h};reactIs_production_min.isContextProvider=function(a){return v(a)===g};reactIs_production_min.isElement=function(a){return "object"===typeof a&&null!==a&&a.$$typeof===b};reactIs_production_min.isForwardRef=function(a){return v(a)===l};reactIs_production_min.isFragment=function(a){return v(a)===d};reactIs_production_min.isLazy=function(a){return v(a)===q};reactIs_production_min.isMemo=function(a){return v(a)===p};
	reactIs_production_min.isPortal=function(a){return v(a)===c};reactIs_production_min.isProfiler=function(a){return v(a)===f};reactIs_production_min.isStrictMode=function(a){return v(a)===e};reactIs_production_min.isSuspense=function(a){return v(a)===m};reactIs_production_min.isSuspenseList=function(a){return v(a)===n};
	reactIs_production_min.isValidElementType=function(a){return "string"===typeof a||"function"===typeof a||a===d||a===f||a===e||a===m||a===n||a===t||"object"===typeof a&&null!==a&&(a.$$typeof===q||a.$$typeof===p||a.$$typeof===g||a.$$typeof===h||a.$$typeof===l||a.$$typeof===u||void 0!==a.getModuleId)?!0:!1};reactIs_production_min.typeOf=v;
	return reactIs_production_min;
}

var reactIs_development = {};

/**
 * @license React
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var hasRequiredReactIs_development;

function requireReactIs_development () {
	if (hasRequiredReactIs_development) return reactIs_development;
	hasRequiredReactIs_development = 1;

	if (process.env.NODE_ENV !== "production") {
	  (function() {

	// ATTENTION
	// When adding new symbols to this file,
	// Please consider also adding to 'react-devtools-shared/src/backend/ReactSymbols'
	// The Symbol used to tag the ReactElement-like types.
	var REACT_ELEMENT_TYPE = Symbol.for('react.element');
	var REACT_PORTAL_TYPE = Symbol.for('react.portal');
	var REACT_FRAGMENT_TYPE = Symbol.for('react.fragment');
	var REACT_STRICT_MODE_TYPE = Symbol.for('react.strict_mode');
	var REACT_PROFILER_TYPE = Symbol.for('react.profiler');
	var REACT_PROVIDER_TYPE = Symbol.for('react.provider');
	var REACT_CONTEXT_TYPE = Symbol.for('react.context');
	var REACT_SERVER_CONTEXT_TYPE = Symbol.for('react.server_context');
	var REACT_FORWARD_REF_TYPE = Symbol.for('react.forward_ref');
	var REACT_SUSPENSE_TYPE = Symbol.for('react.suspense');
	var REACT_SUSPENSE_LIST_TYPE = Symbol.for('react.suspense_list');
	var REACT_MEMO_TYPE = Symbol.for('react.memo');
	var REACT_LAZY_TYPE = Symbol.for('react.lazy');
	var REACT_OFFSCREEN_TYPE = Symbol.for('react.offscreen');

	// -----------------------------------------------------------------------------

	var enableScopeAPI = false; // Experimental Create Event Handle API.
	var enableCacheElement = false;
	var enableTransitionTracing = false; // No known bugs, but needs performance testing

	var enableLegacyHidden = false; // Enables unstable_avoidThisFallback feature in Fiber
	// stuff. Intended to enable React core members to more easily debug scheduling
	// issues in DEV builds.

	var enableDebugTracing = false; // Track which Fiber(s) schedule render work.

	var REACT_MODULE_REFERENCE;

	{
	  REACT_MODULE_REFERENCE = Symbol.for('react.module.reference');
	}

	function isValidElementType(type) {
	  if (typeof type === 'string' || typeof type === 'function') {
	    return true;
	  } // Note: typeof might be other than 'symbol' or 'number' (e.g. if it's a polyfill).


	  if (type === REACT_FRAGMENT_TYPE || type === REACT_PROFILER_TYPE || enableDebugTracing  || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || enableLegacyHidden  || type === REACT_OFFSCREEN_TYPE || enableScopeAPI  || enableCacheElement  || enableTransitionTracing ) {
	    return true;
	  }

	  if (typeof type === 'object' && type !== null) {
	    if (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || // This needs to include all possible module reference object
	    // types supported by any Flight configuration anywhere since
	    // we don't know which Flight build this will end up being used
	    // with.
	    type.$$typeof === REACT_MODULE_REFERENCE || type.getModuleId !== undefined) {
	      return true;
	    }
	  }

	  return false;
	}

	function typeOf(object) {
	  if (typeof object === 'object' && object !== null) {
	    var $$typeof = object.$$typeof;

	    switch ($$typeof) {
	      case REACT_ELEMENT_TYPE:
	        var type = object.type;

	        switch (type) {
	          case REACT_FRAGMENT_TYPE:
	          case REACT_PROFILER_TYPE:
	          case REACT_STRICT_MODE_TYPE:
	          case REACT_SUSPENSE_TYPE:
	          case REACT_SUSPENSE_LIST_TYPE:
	            return type;

	          default:
	            var $$typeofType = type && type.$$typeof;

	            switch ($$typeofType) {
	              case REACT_SERVER_CONTEXT_TYPE:
	              case REACT_CONTEXT_TYPE:
	              case REACT_FORWARD_REF_TYPE:
	              case REACT_LAZY_TYPE:
	              case REACT_MEMO_TYPE:
	              case REACT_PROVIDER_TYPE:
	                return $$typeofType;

	              default:
	                return $$typeof;
	            }

	        }

	      case REACT_PORTAL_TYPE:
	        return $$typeof;
	    }
	  }

	  return undefined;
	}
	var ContextConsumer = REACT_CONTEXT_TYPE;
	var ContextProvider = REACT_PROVIDER_TYPE;
	var Element = REACT_ELEMENT_TYPE;
	var ForwardRef = REACT_FORWARD_REF_TYPE;
	var Fragment = REACT_FRAGMENT_TYPE;
	var Lazy = REACT_LAZY_TYPE;
	var Memo = REACT_MEMO_TYPE;
	var Portal = REACT_PORTAL_TYPE;
	var Profiler = REACT_PROFILER_TYPE;
	var StrictMode = REACT_STRICT_MODE_TYPE;
	var Suspense = REACT_SUSPENSE_TYPE;
	var SuspenseList = REACT_SUSPENSE_LIST_TYPE;
	var hasWarnedAboutDeprecatedIsAsyncMode = false;
	var hasWarnedAboutDeprecatedIsConcurrentMode = false; // AsyncMode should be deprecated

	function isAsyncMode(object) {
	  {
	    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
	      hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint

	      console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 18+.');
	    }
	  }

	  return false;
	}
	function isConcurrentMode(object) {
	  {
	    if (!hasWarnedAboutDeprecatedIsConcurrentMode) {
	      hasWarnedAboutDeprecatedIsConcurrentMode = true; // Using console['warn'] to evade Babel and ESLint

	      console['warn']('The ReactIs.isConcurrentMode() alias has been deprecated, ' + 'and will be removed in React 18+.');
	    }
	  }

	  return false;
	}
	function isContextConsumer(object) {
	  return typeOf(object) === REACT_CONTEXT_TYPE;
	}
	function isContextProvider(object) {
	  return typeOf(object) === REACT_PROVIDER_TYPE;
	}
	function isElement(object) {
	  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
	}
	function isForwardRef(object) {
	  return typeOf(object) === REACT_FORWARD_REF_TYPE;
	}
	function isFragment(object) {
	  return typeOf(object) === REACT_FRAGMENT_TYPE;
	}
	function isLazy(object) {
	  return typeOf(object) === REACT_LAZY_TYPE;
	}
	function isMemo(object) {
	  return typeOf(object) === REACT_MEMO_TYPE;
	}
	function isPortal(object) {
	  return typeOf(object) === REACT_PORTAL_TYPE;
	}
	function isProfiler(object) {
	  return typeOf(object) === REACT_PROFILER_TYPE;
	}
	function isStrictMode(object) {
	  return typeOf(object) === REACT_STRICT_MODE_TYPE;
	}
	function isSuspense(object) {
	  return typeOf(object) === REACT_SUSPENSE_TYPE;
	}
	function isSuspenseList(object) {
	  return typeOf(object) === REACT_SUSPENSE_LIST_TYPE;
	}

	reactIs_development.ContextConsumer = ContextConsumer;
	reactIs_development.ContextProvider = ContextProvider;
	reactIs_development.Element = Element;
	reactIs_development.ForwardRef = ForwardRef;
	reactIs_development.Fragment = Fragment;
	reactIs_development.Lazy = Lazy;
	reactIs_development.Memo = Memo;
	reactIs_development.Portal = Portal;
	reactIs_development.Profiler = Profiler;
	reactIs_development.StrictMode = StrictMode;
	reactIs_development.Suspense = Suspense;
	reactIs_development.SuspenseList = SuspenseList;
	reactIs_development.isAsyncMode = isAsyncMode;
	reactIs_development.isConcurrentMode = isConcurrentMode;
	reactIs_development.isContextConsumer = isContextConsumer;
	reactIs_development.isContextProvider = isContextProvider;
	reactIs_development.isElement = isElement;
	reactIs_development.isForwardRef = isForwardRef;
	reactIs_development.isFragment = isFragment;
	reactIs_development.isLazy = isLazy;
	reactIs_development.isMemo = isMemo;
	reactIs_development.isPortal = isPortal;
	reactIs_development.isProfiler = isProfiler;
	reactIs_development.isStrictMode = isStrictMode;
	reactIs_development.isSuspense = isSuspense;
	reactIs_development.isSuspenseList = isSuspenseList;
	reactIs_development.isValidElementType = isValidElementType;
	reactIs_development.typeOf = typeOf;
	  })();
	}
	return reactIs_development;
}

if (process.env.NODE_ENV === 'production') {
  reactIs.exports = requireReactIs_production_min();
} else {
  reactIs.exports = requireReactIs_development();
}

var reactIsExports = reactIs.exports;

// Simplified polyfill for IE11 support
// https://github.com/JamesMGreene/Function.name/blob/58b314d4a983110c3682f1228f845d39ccca1817/Function.name.js#L3
const fnNameMatchRegex = /^\s*function(?:\s|\s*\/\*.*\*\/\s*)+([^(\s/]*)\s*/;
function getFunctionName(fn) {
  const match = `${fn}`.match(fnNameMatchRegex);
  const name = match && match[1];
  return name || '';
}
function getFunctionComponentName(Component, fallback = '') {
  return Component.displayName || Component.name || getFunctionName(Component) || fallback;
}
function getWrappedName(outerType, innerType, wrapperName) {
  const functionName = getFunctionComponentName(innerType);
  return outerType.displayName || (functionName !== '' ? `${wrapperName}(${functionName})` : wrapperName);
}

/**
 * cherry-pick from
 * https://github.com/facebook/react/blob/769b1f270e1251d9dbdce0fcbd9e92e502d059b8/packages/shared/getComponentName.js
 * originally forked from recompose/getDisplayName with added IE11 support
 */
function getDisplayName(Component) {
  if (Component == null) {
    return undefined;
  }
  if (typeof Component === 'string') {
    return Component;
  }
  if (typeof Component === 'function') {
    return getFunctionComponentName(Component, 'Component');
  }

  // TypeScript can't have components as objects but they exist in the form of `memo` or `Suspense`
  if (typeof Component === 'object') {
    switch (Component.$$typeof) {
      case reactIsExports.ForwardRef:
        return getWrappedName(Component, Component.render, 'ForwardRef');
      case reactIsExports.Memo:
        return getWrappedName(Component, Component.type, 'memo');
      default:
        return undefined;
    }
  }
  return undefined;
}

// It should to be noted that this function isn't equivalent to `text-transform: capitalize`.
//
// A strict capitalization should uppercase the first letter of each word in the sentence.
// We only handle the first word.
function capitalize(string) {
  if (typeof string !== 'string') {
    throw new Error(process.env.NODE_ENV !== "production" ? `MUI: \`capitalize(string)\` expects a string argument.` : formatMuiErrorMessage(7));
  }
  return string.charAt(0).toUpperCase() + string.slice(1);
}

const visuallyHidden = {
  border: 0,
  clip: 'rect(0 0 0 0)',
  height: '1px',
  margin: -1,
  overflow: 'hidden',
  padding: 0,
  position: 'absolute',
  whiteSpace: 'nowrap',
  width: '1px'
};
var visuallyHidden$1 = visuallyHidden;

const _excluded$3 = ["values", "unit", "step"];
const sortBreakpointsValues = values => {
  const breakpointsAsArray = Object.keys(values).map(key => ({
    key,
    val: values[key]
  })) || [];
  // Sort in ascending order
  breakpointsAsArray.sort((breakpoint1, breakpoint2) => breakpoint1.val - breakpoint2.val);
  return breakpointsAsArray.reduce((acc, obj) => {
    return _extends({}, acc, {
      [obj.key]: obj.val
    });
  }, {});
};

// Keep in mind that @media is inclusive by the CSS specification.
function createBreakpoints(breakpoints) {
  const {
      // The breakpoint **start** at this value.
      // For instance with the first breakpoint xs: [xs, sm).
      values = {
        xs: 0,
        // phone
        sm: 600,
        // tablet
        md: 900,
        // small laptop
        lg: 1200,
        // desktop
        xl: 1536 // large screen
      },
      unit = 'px',
      step = 5
    } = breakpoints,
    other = _objectWithoutPropertiesLoose(breakpoints, _excluded$3);
  const sortedValues = sortBreakpointsValues(values);
  const keys = Object.keys(sortedValues);
  function up(key) {
    const value = typeof values[key] === 'number' ? values[key] : key;
    return `@media (min-width:${value}${unit})`;
  }
  function down(key) {
    const value = typeof values[key] === 'number' ? values[key] : key;
    return `@media (max-width:${value - step / 100}${unit})`;
  }
  function between(start, end) {
    const endIndex = keys.indexOf(end);
    return `@media (min-width:${typeof values[start] === 'number' ? values[start] : start}${unit}) and ` + `(max-width:${(endIndex !== -1 && typeof values[keys[endIndex]] === 'number' ? values[keys[endIndex]] : end) - step / 100}${unit})`;
  }
  function only(key) {
    if (keys.indexOf(key) + 1 < keys.length) {
      return between(key, keys[keys.indexOf(key) + 1]);
    }
    return up(key);
  }
  function not(key) {
    // handle first and last key separately, for better readability
    const keyIndex = keys.indexOf(key);
    if (keyIndex === 0) {
      return up(keys[1]);
    }
    if (keyIndex === keys.length - 1) {
      return down(keys[keyIndex]);
    }
    return between(key, keys[keys.indexOf(key) + 1]).replace('@media', '@media not all and');
  }
  return _extends({
    keys,
    values: sortedValues,
    up,
    down,
    between,
    only,
    not,
    unit
  }, other);
}

const shape = {
  borderRadius: 4
};
var shape$1 = shape;

const responsivePropType = process.env.NODE_ENV !== 'production' ? PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.object, PropTypes.array]) : {};
var responsivePropType$1 = responsivePropType;

function merge(acc, item) {
  if (!item) {
    return acc;
  }
  return deepmerge(acc, item, {
    clone: false // No need to clone deep, it's way faster.
  });
}

// The breakpoint **start** at this value.
// For instance with the first breakpoint xs: [xs, sm[.
const values = {
  xs: 0,
  // phone
  sm: 600,
  // tablet
  md: 900,
  // small laptop
  lg: 1200,
  // desktop
  xl: 1536 // large screen
};
const defaultBreakpoints = {
  // Sorted ASC by size. That's important.
  // It can't be configured as it's used statically for propTypes.
  keys: ['xs', 'sm', 'md', 'lg', 'xl'],
  up: key => `@media (min-width:${values[key]}px)`
};
function handleBreakpoints(props, propValue, styleFromPropValue) {
  const theme = props.theme || {};
  if (Array.isArray(propValue)) {
    const themeBreakpoints = theme.breakpoints || defaultBreakpoints;
    return propValue.reduce((acc, item, index) => {
      acc[themeBreakpoints.up(themeBreakpoints.keys[index])] = styleFromPropValue(propValue[index]);
      return acc;
    }, {});
  }
  if (typeof propValue === 'object') {
    const themeBreakpoints = theme.breakpoints || defaultBreakpoints;
    return Object.keys(propValue).reduce((acc, breakpoint) => {
      // key is breakpoint
      if (Object.keys(themeBreakpoints.values || values).indexOf(breakpoint) !== -1) {
        const mediaKey = themeBreakpoints.up(breakpoint);
        acc[mediaKey] = styleFromPropValue(propValue[breakpoint], breakpoint);
      } else {
        const cssKey = breakpoint;
        acc[cssKey] = propValue[cssKey];
      }
      return acc;
    }, {});
  }
  const output = styleFromPropValue(propValue);
  return output;
}
function createEmptyBreakpointObject(breakpointsInput = {}) {
  var _breakpointsInput$key;
  const breakpointsInOrder = (_breakpointsInput$key = breakpointsInput.keys) == null ? void 0 : _breakpointsInput$key.reduce((acc, key) => {
    const breakpointStyleKey = breakpointsInput.up(key);
    acc[breakpointStyleKey] = {};
    return acc;
  }, {});
  return breakpointsInOrder || {};
}
function removeUnusedBreakpoints(breakpointKeys, style) {
  return breakpointKeys.reduce((acc, key) => {
    const breakpointOutput = acc[key];
    const isBreakpointUnused = !breakpointOutput || Object.keys(breakpointOutput).length === 0;
    if (isBreakpointUnused) {
      delete acc[key];
    }
    return acc;
  }, style);
}

function getPath(obj, path, checkVars = true) {
  if (!path || typeof path !== 'string') {
    return null;
  }

  // Check if CSS variables are used
  if (obj && obj.vars && checkVars) {
    const val = `vars.${path}`.split('.').reduce((acc, item) => acc && acc[item] ? acc[item] : null, obj);
    if (val != null) {
      return val;
    }
  }
  return path.split('.').reduce((acc, item) => {
    if (acc && acc[item] != null) {
      return acc[item];
    }
    return null;
  }, obj);
}
function getStyleValue(themeMapping, transform, propValueFinal, userValue = propValueFinal) {
  let value;
  if (typeof themeMapping === 'function') {
    value = themeMapping(propValueFinal);
  } else if (Array.isArray(themeMapping)) {
    value = themeMapping[propValueFinal] || userValue;
  } else {
    value = getPath(themeMapping, propValueFinal) || userValue;
  }
  if (transform) {
    value = transform(value, userValue, themeMapping);
  }
  return value;
}
function style$2(options) {
  const {
    prop,
    cssProperty = options.prop,
    themeKey,
    transform
  } = options;

  // false positive
  // eslint-disable-next-line react/function-component-definition
  const fn = props => {
    if (props[prop] == null) {
      return null;
    }
    const propValue = props[prop];
    const theme = props.theme;
    const themeMapping = getPath(theme, themeKey) || {};
    const styleFromPropValue = propValueFinal => {
      let value = getStyleValue(themeMapping, transform, propValueFinal);
      if (propValueFinal === value && typeof propValueFinal === 'string') {
        // Haven't found value
        value = getStyleValue(themeMapping, transform, `${prop}${propValueFinal === 'default' ? '' : capitalize(propValueFinal)}`, propValueFinal);
      }
      if (cssProperty === false) {
        return value;
      }
      return {
        [cssProperty]: value
      };
    };
    return handleBreakpoints(props, propValue, styleFromPropValue);
  };
  fn.propTypes = process.env.NODE_ENV !== 'production' ? {
    [prop]: responsivePropType$1
  } : {};
  fn.filterProps = [prop];
  return fn;
}

function memoize(fn) {
  const cache = {};
  return arg => {
    if (cache[arg] === undefined) {
      cache[arg] = fn(arg);
    }
    return cache[arg];
  };
}

const properties = {
  m: 'margin',
  p: 'padding'
};
const directions = {
  t: 'Top',
  r: 'Right',
  b: 'Bottom',
  l: 'Left',
  x: ['Left', 'Right'],
  y: ['Top', 'Bottom']
};
const aliases = {
  marginX: 'mx',
  marginY: 'my',
  paddingX: 'px',
  paddingY: 'py'
};

// memoize() impact:
// From 300,000 ops/sec
// To 350,000 ops/sec
const getCssProperties = memoize(prop => {
  // It's not a shorthand notation.
  if (prop.length > 2) {
    if (aliases[prop]) {
      prop = aliases[prop];
    } else {
      return [prop];
    }
  }
  const [a, b] = prop.split('');
  const property = properties[a];
  const direction = directions[b] || '';
  return Array.isArray(direction) ? direction.map(dir => property + dir) : [property + direction];
});
const marginKeys = ['m', 'mt', 'mr', 'mb', 'ml', 'mx', 'my', 'margin', 'marginTop', 'marginRight', 'marginBottom', 'marginLeft', 'marginX', 'marginY', 'marginInline', 'marginInlineStart', 'marginInlineEnd', 'marginBlock', 'marginBlockStart', 'marginBlockEnd'];
const paddingKeys = ['p', 'pt', 'pr', 'pb', 'pl', 'px', 'py', 'padding', 'paddingTop', 'paddingRight', 'paddingBottom', 'paddingLeft', 'paddingX', 'paddingY', 'paddingInline', 'paddingInlineStart', 'paddingInlineEnd', 'paddingBlock', 'paddingBlockStart', 'paddingBlockEnd'];
const spacingKeys = [...marginKeys, ...paddingKeys];
function createUnaryUnit(theme, themeKey, defaultValue, propName) {
  var _getPath;
  const themeSpacing = (_getPath = getPath(theme, themeKey, false)) != null ? _getPath : defaultValue;
  if (typeof themeSpacing === 'number') {
    return abs => {
      if (typeof abs === 'string') {
        return abs;
      }
      if (process.env.NODE_ENV !== 'production') {
        if (typeof abs !== 'number') {
          console.error(`MUI: Expected ${propName} argument to be a number or a string, got ${abs}.`);
        }
      }
      return themeSpacing * abs;
    };
  }
  if (Array.isArray(themeSpacing)) {
    return abs => {
      if (typeof abs === 'string') {
        return abs;
      }
      if (process.env.NODE_ENV !== 'production') {
        if (!Number.isInteger(abs)) {
          console.error([`MUI: The \`theme.${themeKey}\` array type cannot be combined with non integer values.` + `You should either use an integer value that can be used as index, or define the \`theme.${themeKey}\` as a number.`].join('\n'));
        } else if (abs > themeSpacing.length - 1) {
          console.error([`MUI: The value provided (${abs}) overflows.`, `The supported values are: ${JSON.stringify(themeSpacing)}.`, `${abs} > ${themeSpacing.length - 1}, you need to add the missing values.`].join('\n'));
        }
      }
      return themeSpacing[abs];
    };
  }
  if (typeof themeSpacing === 'function') {
    return themeSpacing;
  }
  if (process.env.NODE_ENV !== 'production') {
    console.error([`MUI: The \`theme.${themeKey}\` value (${themeSpacing}) is invalid.`, 'It should be a number, an array or a function.'].join('\n'));
  }
  return () => undefined;
}
function createUnarySpacing(theme) {
  return createUnaryUnit(theme, 'spacing', 8, 'spacing');
}
function getValue(transformer, propValue) {
  if (typeof propValue === 'string' || propValue == null) {
    return propValue;
  }
  const abs = Math.abs(propValue);
  const transformed = transformer(abs);
  if (propValue >= 0) {
    return transformed;
  }
  if (typeof transformed === 'number') {
    return -transformed;
  }
  return `-${transformed}`;
}
function getStyleFromPropValue(cssProperties, transformer) {
  return propValue => cssProperties.reduce((acc, cssProperty) => {
    acc[cssProperty] = getValue(transformer, propValue);
    return acc;
  }, {});
}
function resolveCssProperty(props, keys, prop, transformer) {
  // Using a hash computation over an array iteration could be faster, but with only 28 items,
  // it's doesn't worth the bundle size.
  if (keys.indexOf(prop) === -1) {
    return null;
  }
  const cssProperties = getCssProperties(prop);
  const styleFromPropValue = getStyleFromPropValue(cssProperties, transformer);
  const propValue = props[prop];
  return handleBreakpoints(props, propValue, styleFromPropValue);
}
function style$1(props, keys) {
  const transformer = createUnarySpacing(props.theme);
  return Object.keys(props).map(prop => resolveCssProperty(props, keys, prop, transformer)).reduce(merge, {});
}
function margin(props) {
  return style$1(props, marginKeys);
}
margin.propTypes = process.env.NODE_ENV !== 'production' ? marginKeys.reduce((obj, key) => {
  obj[key] = responsivePropType$1;
  return obj;
}, {}) : {};
margin.filterProps = marginKeys;
function padding(props) {
  return style$1(props, paddingKeys);
}
padding.propTypes = process.env.NODE_ENV !== 'production' ? paddingKeys.reduce((obj, key) => {
  obj[key] = responsivePropType$1;
  return obj;
}, {}) : {};
padding.filterProps = paddingKeys;
process.env.NODE_ENV !== 'production' ? spacingKeys.reduce((obj, key) => {
  obj[key] = responsivePropType$1;
  return obj;
}, {}) : {};

// The different signatures imply different meaning for their arguments that can't be expressed structurally.
// We express the difference with variable names.

function createSpacing(spacingInput = 8) {
  // Already transformed.
  if (spacingInput.mui) {
    return spacingInput;
  }

  // Material Design layouts are visually balanced. Most measurements align to an 8dp grid, which aligns both spacing and the overall layout.
  // Smaller components, such as icons, can align to a 4dp grid.
  // https://m2.material.io/design/layout/understanding-layout.html
  const transform = createUnarySpacing({
    spacing: spacingInput
  });
  const spacing = (...argsInput) => {
    if (process.env.NODE_ENV !== 'production') {
      if (!(argsInput.length <= 4)) {
        console.error(`MUI: Too many arguments provided, expected between 0 and 4, got ${argsInput.length}`);
      }
    }
    const args = argsInput.length === 0 ? [1] : argsInput;
    return args.map(argument => {
      const output = transform(argument);
      return typeof output === 'number' ? `${output}px` : output;
    }).join(' ');
  };
  spacing.mui = true;
  return spacing;
}

function compose(...styles) {
  const handlers = styles.reduce((acc, style) => {
    style.filterProps.forEach(prop => {
      acc[prop] = style;
    });
    return acc;
  }, {});

  // false positive
  // eslint-disable-next-line react/function-component-definition
  const fn = props => {
    return Object.keys(props).reduce((acc, prop) => {
      if (handlers[prop]) {
        return merge(acc, handlers[prop](props));
      }
      return acc;
    }, {});
  };
  fn.propTypes = process.env.NODE_ENV !== 'production' ? styles.reduce((acc, style) => Object.assign(acc, style.propTypes), {}) : {};
  fn.filterProps = styles.reduce((acc, style) => acc.concat(style.filterProps), []);
  return fn;
}

function borderTransform(value) {
  if (typeof value !== 'number') {
    return value;
  }
  return `${value}px solid`;
}
function createBorderStyle(prop, transform) {
  return style$2({
    prop,
    themeKey: 'borders',
    transform
  });
}
const border = createBorderStyle('border', borderTransform);
const borderTop = createBorderStyle('borderTop', borderTransform);
const borderRight = createBorderStyle('borderRight', borderTransform);
const borderBottom = createBorderStyle('borderBottom', borderTransform);
const borderLeft = createBorderStyle('borderLeft', borderTransform);
const borderColor = createBorderStyle('borderColor');
const borderTopColor = createBorderStyle('borderTopColor');
const borderRightColor = createBorderStyle('borderRightColor');
const borderBottomColor = createBorderStyle('borderBottomColor');
const borderLeftColor = createBorderStyle('borderLeftColor');
const outline = createBorderStyle('outline', borderTransform);
const outlineColor = createBorderStyle('outlineColor');

// false positive
// eslint-disable-next-line react/function-component-definition
const borderRadius = props => {
  if (props.borderRadius !== undefined && props.borderRadius !== null) {
    const transformer = createUnaryUnit(props.theme, 'shape.borderRadius', 4, 'borderRadius');
    const styleFromPropValue = propValue => ({
      borderRadius: getValue(transformer, propValue)
    });
    return handleBreakpoints(props, props.borderRadius, styleFromPropValue);
  }
  return null;
};
borderRadius.propTypes = process.env.NODE_ENV !== 'production' ? {
  borderRadius: responsivePropType$1
} : {};
borderRadius.filterProps = ['borderRadius'];
compose(border, borderTop, borderRight, borderBottom, borderLeft, borderColor, borderTopColor, borderRightColor, borderBottomColor, borderLeftColor, borderRadius, outline, outlineColor);

// false positive
// eslint-disable-next-line react/function-component-definition
const gap = props => {
  if (props.gap !== undefined && props.gap !== null) {
    const transformer = createUnaryUnit(props.theme, 'spacing', 8, 'gap');
    const styleFromPropValue = propValue => ({
      gap: getValue(transformer, propValue)
    });
    return handleBreakpoints(props, props.gap, styleFromPropValue);
  }
  return null;
};
gap.propTypes = process.env.NODE_ENV !== 'production' ? {
  gap: responsivePropType$1
} : {};
gap.filterProps = ['gap'];

// false positive
// eslint-disable-next-line react/function-component-definition
const columnGap = props => {
  if (props.columnGap !== undefined && props.columnGap !== null) {
    const transformer = createUnaryUnit(props.theme, 'spacing', 8, 'columnGap');
    const styleFromPropValue = propValue => ({
      columnGap: getValue(transformer, propValue)
    });
    return handleBreakpoints(props, props.columnGap, styleFromPropValue);
  }
  return null;
};
columnGap.propTypes = process.env.NODE_ENV !== 'production' ? {
  columnGap: responsivePropType$1
} : {};
columnGap.filterProps = ['columnGap'];

// false positive
// eslint-disable-next-line react/function-component-definition
const rowGap = props => {
  if (props.rowGap !== undefined && props.rowGap !== null) {
    const transformer = createUnaryUnit(props.theme, 'spacing', 8, 'rowGap');
    const styleFromPropValue = propValue => ({
      rowGap: getValue(transformer, propValue)
    });
    return handleBreakpoints(props, props.rowGap, styleFromPropValue);
  }
  return null;
};
rowGap.propTypes = process.env.NODE_ENV !== 'production' ? {
  rowGap: responsivePropType$1
} : {};
rowGap.filterProps = ['rowGap'];
const gridColumn = style$2({
  prop: 'gridColumn'
});
const gridRow = style$2({
  prop: 'gridRow'
});
const gridAutoFlow = style$2({
  prop: 'gridAutoFlow'
});
const gridAutoColumns = style$2({
  prop: 'gridAutoColumns'
});
const gridAutoRows = style$2({
  prop: 'gridAutoRows'
});
const gridTemplateColumns = style$2({
  prop: 'gridTemplateColumns'
});
const gridTemplateRows = style$2({
  prop: 'gridTemplateRows'
});
const gridTemplateAreas = style$2({
  prop: 'gridTemplateAreas'
});
const gridArea = style$2({
  prop: 'gridArea'
});
compose(gap, columnGap, rowGap, gridColumn, gridRow, gridAutoFlow, gridAutoColumns, gridAutoRows, gridTemplateColumns, gridTemplateRows, gridTemplateAreas, gridArea);

function paletteTransform(value, userValue) {
  if (userValue === 'grey') {
    return userValue;
  }
  return value;
}
const color = style$2({
  prop: 'color',
  themeKey: 'palette',
  transform: paletteTransform
});
const bgcolor = style$2({
  prop: 'bgcolor',
  cssProperty: 'backgroundColor',
  themeKey: 'palette',
  transform: paletteTransform
});
const backgroundColor = style$2({
  prop: 'backgroundColor',
  themeKey: 'palette',
  transform: paletteTransform
});
compose(color, bgcolor, backgroundColor);

function sizingTransform(value) {
  return value <= 1 && value !== 0 ? `${value * 100}%` : value;
}
const width = style$2({
  prop: 'width',
  transform: sizingTransform
});
const maxWidth = props => {
  if (props.maxWidth !== undefined && props.maxWidth !== null) {
    const styleFromPropValue = propValue => {
      var _props$theme, _props$theme2;
      const breakpoint = ((_props$theme = props.theme) == null || (_props$theme = _props$theme.breakpoints) == null || (_props$theme = _props$theme.values) == null ? void 0 : _props$theme[propValue]) || values[propValue];
      if (!breakpoint) {
        return {
          maxWidth: sizingTransform(propValue)
        };
      }
      if (((_props$theme2 = props.theme) == null || (_props$theme2 = _props$theme2.breakpoints) == null ? void 0 : _props$theme2.unit) !== 'px') {
        return {
          maxWidth: `${breakpoint}${props.theme.breakpoints.unit}`
        };
      }
      return {
        maxWidth: breakpoint
      };
    };
    return handleBreakpoints(props, props.maxWidth, styleFromPropValue);
  }
  return null;
};
maxWidth.filterProps = ['maxWidth'];
const minWidth = style$2({
  prop: 'minWidth',
  transform: sizingTransform
});
const height = style$2({
  prop: 'height',
  transform: sizingTransform
});
const maxHeight = style$2({
  prop: 'maxHeight',
  transform: sizingTransform
});
const minHeight = style$2({
  prop: 'minHeight',
  transform: sizingTransform
});
style$2({
  prop: 'size',
  cssProperty: 'width',
  transform: sizingTransform
});
style$2({
  prop: 'size',
  cssProperty: 'height',
  transform: sizingTransform
});
const boxSizing = style$2({
  prop: 'boxSizing'
});
compose(width, maxWidth, minWidth, height, maxHeight, minHeight, boxSizing);

const defaultSxConfig = {
  // borders
  border: {
    themeKey: 'borders',
    transform: borderTransform
  },
  borderTop: {
    themeKey: 'borders',
    transform: borderTransform
  },
  borderRight: {
    themeKey: 'borders',
    transform: borderTransform
  },
  borderBottom: {
    themeKey: 'borders',
    transform: borderTransform
  },
  borderLeft: {
    themeKey: 'borders',
    transform: borderTransform
  },
  borderColor: {
    themeKey: 'palette'
  },
  borderTopColor: {
    themeKey: 'palette'
  },
  borderRightColor: {
    themeKey: 'palette'
  },
  borderBottomColor: {
    themeKey: 'palette'
  },
  borderLeftColor: {
    themeKey: 'palette'
  },
  outline: {
    themeKey: 'borders',
    transform: borderTransform
  },
  outlineColor: {
    themeKey: 'palette'
  },
  borderRadius: {
    themeKey: 'shape.borderRadius',
    style: borderRadius
  },
  // palette
  color: {
    themeKey: 'palette',
    transform: paletteTransform
  },
  bgcolor: {
    themeKey: 'palette',
    cssProperty: 'backgroundColor',
    transform: paletteTransform
  },
  backgroundColor: {
    themeKey: 'palette',
    transform: paletteTransform
  },
  // spacing
  p: {
    style: padding
  },
  pt: {
    style: padding
  },
  pr: {
    style: padding
  },
  pb: {
    style: padding
  },
  pl: {
    style: padding
  },
  px: {
    style: padding
  },
  py: {
    style: padding
  },
  padding: {
    style: padding
  },
  paddingTop: {
    style: padding
  },
  paddingRight: {
    style: padding
  },
  paddingBottom: {
    style: padding
  },
  paddingLeft: {
    style: padding
  },
  paddingX: {
    style: padding
  },
  paddingY: {
    style: padding
  },
  paddingInline: {
    style: padding
  },
  paddingInlineStart: {
    style: padding
  },
  paddingInlineEnd: {
    style: padding
  },
  paddingBlock: {
    style: padding
  },
  paddingBlockStart: {
    style: padding
  },
  paddingBlockEnd: {
    style: padding
  },
  m: {
    style: margin
  },
  mt: {
    style: margin
  },
  mr: {
    style: margin
  },
  mb: {
    style: margin
  },
  ml: {
    style: margin
  },
  mx: {
    style: margin
  },
  my: {
    style: margin
  },
  margin: {
    style: margin
  },
  marginTop: {
    style: margin
  },
  marginRight: {
    style: margin
  },
  marginBottom: {
    style: margin
  },
  marginLeft: {
    style: margin
  },
  marginX: {
    style: margin
  },
  marginY: {
    style: margin
  },
  marginInline: {
    style: margin
  },
  marginInlineStart: {
    style: margin
  },
  marginInlineEnd: {
    style: margin
  },
  marginBlock: {
    style: margin
  },
  marginBlockStart: {
    style: margin
  },
  marginBlockEnd: {
    style: margin
  },
  // display
  displayPrint: {
    cssProperty: false,
    transform: value => ({
      '@media print': {
        display: value
      }
    })
  },
  display: {},
  overflow: {},
  textOverflow: {},
  visibility: {},
  whiteSpace: {},
  // flexbox
  flexBasis: {},
  flexDirection: {},
  flexWrap: {},
  justifyContent: {},
  alignItems: {},
  alignContent: {},
  order: {},
  flex: {},
  flexGrow: {},
  flexShrink: {},
  alignSelf: {},
  justifyItems: {},
  justifySelf: {},
  // grid
  gap: {
    style: gap
  },
  rowGap: {
    style: rowGap
  },
  columnGap: {
    style: columnGap
  },
  gridColumn: {},
  gridRow: {},
  gridAutoFlow: {},
  gridAutoColumns: {},
  gridAutoRows: {},
  gridTemplateColumns: {},
  gridTemplateRows: {},
  gridTemplateAreas: {},
  gridArea: {},
  // positions
  position: {},
  zIndex: {
    themeKey: 'zIndex'
  },
  top: {},
  right: {},
  bottom: {},
  left: {},
  // shadows
  boxShadow: {
    themeKey: 'shadows'
  },
  // sizing
  width: {
    transform: sizingTransform
  },
  maxWidth: {
    style: maxWidth
  },
  minWidth: {
    transform: sizingTransform
  },
  height: {
    transform: sizingTransform
  },
  maxHeight: {
    transform: sizingTransform
  },
  minHeight: {
    transform: sizingTransform
  },
  boxSizing: {},
  // typography
  fontFamily: {
    themeKey: 'typography'
  },
  fontSize: {
    themeKey: 'typography'
  },
  fontStyle: {
    themeKey: 'typography'
  },
  fontWeight: {
    themeKey: 'typography'
  },
  letterSpacing: {},
  textTransform: {},
  lineHeight: {},
  textAlign: {},
  typography: {
    cssProperty: false,
    themeKey: 'typography'
  }
};
var defaultSxConfig$1 = defaultSxConfig;

function objectsHaveSameKeys(...objects) {
  const allKeys = objects.reduce((keys, object) => keys.concat(Object.keys(object)), []);
  const union = new Set(allKeys);
  return objects.every(object => union.size === Object.keys(object).length);
}
function callIfFn(maybeFn, arg) {
  return typeof maybeFn === 'function' ? maybeFn(arg) : maybeFn;
}

// eslint-disable-next-line @typescript-eslint/naming-convention
function unstable_createStyleFunctionSx() {
  function getThemeValue(prop, val, theme, config) {
    const props = {
      [prop]: val,
      theme
    };
    const options = config[prop];
    if (!options) {
      return {
        [prop]: val
      };
    }
    const {
      cssProperty = prop,
      themeKey,
      transform,
      style
    } = options;
    if (val == null) {
      return null;
    }

    // TODO v6: remove, see https://github.com/mui/material-ui/pull/38123
    if (themeKey === 'typography' && val === 'inherit') {
      return {
        [prop]: val
      };
    }
    const themeMapping = getPath(theme, themeKey) || {};
    if (style) {
      return style(props);
    }
    const styleFromPropValue = propValueFinal => {
      let value = getStyleValue(themeMapping, transform, propValueFinal);
      if (propValueFinal === value && typeof propValueFinal === 'string') {
        // Haven't found value
        value = getStyleValue(themeMapping, transform, `${prop}${propValueFinal === 'default' ? '' : capitalize(propValueFinal)}`, propValueFinal);
      }
      if (cssProperty === false) {
        return value;
      }
      return {
        [cssProperty]: value
      };
    };
    return handleBreakpoints(props, val, styleFromPropValue);
  }
  function styleFunctionSx(props) {
    var _theme$unstable_sxCon;
    const {
      sx,
      theme = {}
    } = props || {};
    if (!sx) {
      return null; // Emotion & styled-components will neglect null
    }
    const config = (_theme$unstable_sxCon = theme.unstable_sxConfig) != null ? _theme$unstable_sxCon : defaultSxConfig$1;

    /*
     * Receive `sxInput` as object or callback
     * and then recursively check keys & values to create media query object styles.
     * (the result will be used in `styled`)
     */
    function traverse(sxInput) {
      let sxObject = sxInput;
      if (typeof sxInput === 'function') {
        sxObject = sxInput(theme);
      } else if (typeof sxInput !== 'object') {
        // value
        return sxInput;
      }
      if (!sxObject) {
        return null;
      }
      const emptyBreakpoints = createEmptyBreakpointObject(theme.breakpoints);
      const breakpointsKeys = Object.keys(emptyBreakpoints);
      let css = emptyBreakpoints;
      Object.keys(sxObject).forEach(styleKey => {
        const value = callIfFn(sxObject[styleKey], theme);
        if (value !== null && value !== undefined) {
          if (typeof value === 'object') {
            if (config[styleKey]) {
              css = merge(css, getThemeValue(styleKey, value, theme, config));
            } else {
              const breakpointsValues = handleBreakpoints({
                theme
              }, value, x => ({
                [styleKey]: x
              }));
              if (objectsHaveSameKeys(breakpointsValues, value)) {
                css[styleKey] = styleFunctionSx({
                  sx: value,
                  theme
                });
              } else {
                css = merge(css, breakpointsValues);
              }
            }
          } else {
            css = merge(css, getThemeValue(styleKey, value, theme, config));
          }
        }
      });
      return removeUnusedBreakpoints(breakpointsKeys, css);
    }
    return Array.isArray(sx) ? sx.map(traverse) : traverse(sx);
  }
  return styleFunctionSx;
}
const styleFunctionSx = unstable_createStyleFunctionSx();
styleFunctionSx.filterProps = ['sx'];
var styleFunctionSx$1 = styleFunctionSx;

const _excluded$2 = ["breakpoints", "palette", "spacing", "shape"];
function createTheme(options = {}, ...args) {
  const {
      breakpoints: breakpointsInput = {},
      palette: paletteInput = {},
      spacing: spacingInput,
      shape: shapeInput = {}
    } = options,
    other = _objectWithoutPropertiesLoose(options, _excluded$2);
  const breakpoints = createBreakpoints(breakpointsInput);
  const spacing = createSpacing(spacingInput);
  let muiTheme = deepmerge({
    breakpoints,
    direction: 'ltr',
    components: {},
    // Inject component definitions.
    palette: _extends({
      mode: 'light'
    }, paletteInput),
    spacing,
    shape: _extends({}, shape$1, shapeInput)
  }, other);
  muiTheme = args.reduce((acc, argument) => deepmerge(acc, argument), muiTheme);
  muiTheme.unstable_sxConfig = _extends({}, defaultSxConfig$1, other == null ? void 0 : other.unstable_sxConfig);
  muiTheme.unstable_sx = function sx(props) {
    return styleFunctionSx$1({
      sx: props,
      theme: this
    });
  };
  return muiTheme;
}

const _excluded$1 = ["variant"];
function isEmpty$1(string) {
  return string.length === 0;
}

/**
 * Generates string classKey based on the properties provided. It starts with the
 * variant if defined, and then it appends all other properties in alphabetical order.
 * @param {object} props - the properties for which the classKey should be created.
 */
function propsToClassKey(props) {
  const {
      variant
    } = props,
    other = _objectWithoutPropertiesLoose(props, _excluded$1);
  let classKey = variant || '';
  Object.keys(other).sort().forEach(key => {
    if (key === 'color') {
      classKey += isEmpty$1(classKey) ? props[key] : capitalize(props[key]);
    } else {
      classKey += `${isEmpty$1(classKey) ? key : capitalize(key)}${capitalize(props[key].toString())}`;
    }
  });
  return classKey;
}

const _excluded = ["name", "slot", "skipVariantsResolver", "skipSx", "overridesResolver"];
function isEmpty(obj) {
  return Object.keys(obj).length === 0;
}

// https://github.com/emotion-js/emotion/blob/26ded6109fcd8ca9875cc2ce4564fee678a3f3c5/packages/styled/src/utils.js#L40
function isStringTag(tag) {
  return typeof tag === 'string' &&
  // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  tag.charCodeAt(0) > 96;
}
const getStyleOverrides = (name, theme) => {
  if (theme.components && theme.components[name] && theme.components[name].styleOverrides) {
    return theme.components[name].styleOverrides;
  }
  return null;
};
const transformVariants = variants => {
  let numOfCallbacks = 0;
  const variantsStyles = {};
  if (variants) {
    variants.forEach(definition => {
      let key = '';
      if (typeof definition.props === 'function') {
        key = `callback${numOfCallbacks}`;
        numOfCallbacks += 1;
      } else {
        key = propsToClassKey(definition.props);
      }
      variantsStyles[key] = definition.style;
    });
  }
  return variantsStyles;
};
const getVariantStyles = (name, theme) => {
  let variants = [];
  if (theme && theme.components && theme.components[name] && theme.components[name].variants) {
    variants = theme.components[name].variants;
  }
  return transformVariants(variants);
};
const variantsResolver = (props, styles, variants) => {
  const {
    ownerState = {}
  } = props;
  const variantsStyles = [];
  let numOfCallbacks = 0;
  if (variants) {
    variants.forEach(variant => {
      let isMatch = true;
      if (typeof variant.props === 'function') {
        const propsToCheck = _extends({}, props, ownerState);
        isMatch = variant.props(propsToCheck);
      } else {
        Object.keys(variant.props).forEach(key => {
          if (ownerState[key] !== variant.props[key] && props[key] !== variant.props[key]) {
            isMatch = false;
          }
        });
      }
      if (isMatch) {
        if (typeof variant.props === 'function') {
          variantsStyles.push(styles[`callback${numOfCallbacks}`]);
        } else {
          variantsStyles.push(styles[propsToClassKey(variant.props)]);
        }
      }
      if (typeof variant.props === 'function') {
        numOfCallbacks += 1;
      }
    });
  }
  return variantsStyles;
};
const themeVariantsResolver = (props, styles, theme, name) => {
  var _theme$components;
  const themeVariants = theme == null || (_theme$components = theme.components) == null || (_theme$components = _theme$components[name]) == null ? void 0 : _theme$components.variants;
  return variantsResolver(props, styles, themeVariants);
};

// Update /system/styled/#api in case if this changes
function shouldForwardProp(prop) {
  return prop !== 'ownerState' && prop !== 'theme' && prop !== 'sx' && prop !== 'as';
}
const systemDefaultTheme = createTheme();
const lowercaseFirstLetter = string => {
  if (!string) {
    return string;
  }
  return string.charAt(0).toLowerCase() + string.slice(1);
};
function resolveTheme({
  defaultTheme,
  theme,
  themeId
}) {
  return isEmpty(theme) ? defaultTheme : theme[themeId] || theme;
}
function defaultOverridesResolver(slot) {
  if (!slot) {
    return null;
  }
  return (props, styles) => styles[slot];
}
const muiStyledFunctionResolver = ({
  styledArg,
  props,
  defaultTheme,
  themeId
}) => {
  const resolvedStyles = styledArg(_extends({}, props, {
    theme: resolveTheme(_extends({}, props, {
      defaultTheme,
      themeId
    }))
  }));
  let optionalVariants;
  if (resolvedStyles && resolvedStyles.variants) {
    optionalVariants = resolvedStyles.variants;
    delete resolvedStyles.variants;
  }
  if (optionalVariants) {
    const variantsStyles = variantsResolver(props, transformVariants(optionalVariants), optionalVariants);
    return [resolvedStyles, ...variantsStyles];
  }
  return resolvedStyles;
};
function createStyled(input = {}) {
  const {
    themeId,
    defaultTheme = systemDefaultTheme,
    rootShouldForwardProp = shouldForwardProp,
    slotShouldForwardProp = shouldForwardProp
  } = input;
  const systemSx = props => {
    return styleFunctionSx$1(_extends({}, props, {
      theme: resolveTheme(_extends({}, props, {
        defaultTheme,
        themeId
      }))
    }));
  };
  systemSx.__mui_systemSx = true;
  return (tag, inputOptions = {}) => {
    // Filter out the `sx` style function from the previous styled component to prevent unnecessary styles generated by the composite components.
    internal_processStyles(tag, styles => styles.filter(style => !(style != null && style.__mui_systemSx)));
    const {
        name: componentName,
        slot: componentSlot,
        skipVariantsResolver: inputSkipVariantsResolver,
        skipSx: inputSkipSx,
        // TODO v6: remove `lowercaseFirstLetter()` in the next major release
        // For more details: https://github.com/mui/material-ui/pull/37908
        overridesResolver = defaultOverridesResolver(lowercaseFirstLetter(componentSlot))
      } = inputOptions,
      options = _objectWithoutPropertiesLoose(inputOptions, _excluded);

    // if skipVariantsResolver option is defined, take the value, otherwise, true for root and false for other slots.
    const skipVariantsResolver = inputSkipVariantsResolver !== undefined ? inputSkipVariantsResolver :
    // TODO v6: remove `Root` in the next major release
    // For more details: https://github.com/mui/material-ui/pull/37908
    componentSlot && componentSlot !== 'Root' && componentSlot !== 'root' || false;
    const skipSx = inputSkipSx || false;
    let label;
    if (process.env.NODE_ENV !== 'production') {
      if (componentName) {
        // TODO v6: remove `lowercaseFirstLetter()` in the next major release
        // For more details: https://github.com/mui/material-ui/pull/37908
        label = `${componentName}-${lowercaseFirstLetter(componentSlot || 'Root')}`;
      }
    }
    let shouldForwardPropOption = shouldForwardProp;

    // TODO v6: remove `Root` in the next major release
    // For more details: https://github.com/mui/material-ui/pull/37908
    if (componentSlot === 'Root' || componentSlot === 'root') {
      shouldForwardPropOption = rootShouldForwardProp;
    } else if (componentSlot) {
      // any other slot specified
      shouldForwardPropOption = slotShouldForwardProp;
    } else if (isStringTag(tag)) {
      // for string (html) tag, preserve the behavior in emotion & styled-components.
      shouldForwardPropOption = undefined;
    }
    const defaultStyledResolver = styled$2(tag, _extends({
      shouldForwardProp: shouldForwardPropOption,
      label
    }, options));
    const muiStyledResolver = (styleArg, ...expressions) => {
      const expressionsWithDefaultTheme = expressions ? expressions.map(stylesArg => {
        // On the server Emotion doesn't use React.forwardRef for creating components, so the created
        // component stays as a function. This condition makes sure that we do not interpolate functions
        // which are basically components used as a selectors.
        if (typeof stylesArg === 'function' && stylesArg.__emotion_real !== stylesArg) {
          return props => muiStyledFunctionResolver({
            styledArg: stylesArg,
            props,
            defaultTheme,
            themeId
          });
        }
        if (isPlainObject(stylesArg)) {
          let transformedStylesArg = stylesArg;
          let styledArgVariants;
          if (stylesArg && stylesArg.variants) {
            styledArgVariants = stylesArg.variants;
            delete transformedStylesArg.variants;
            transformedStylesArg = props => {
              let result = stylesArg;
              const variantStyles = variantsResolver(props, transformVariants(styledArgVariants), styledArgVariants);
              variantStyles.forEach(variantStyle => {
                result = deepmerge(result, variantStyle);
              });
              return result;
            };
          }
          return transformedStylesArg;
        }
        return stylesArg;
      }) : [];
      let transformedStyleArg = styleArg;
      if (isPlainObject(styleArg)) {
        let styledArgVariants;
        if (styleArg && styleArg.variants) {
          styledArgVariants = styleArg.variants;
          delete transformedStyleArg.variants;
          transformedStyleArg = props => {
            let result = styleArg;
            const variantStyles = variantsResolver(props, transformVariants(styledArgVariants), styledArgVariants);
            variantStyles.forEach(variantStyle => {
              result = deepmerge(result, variantStyle);
            });
            return result;
          };
        }
      } else if (typeof styleArg === 'function' &&
      // On the server Emotion doesn't use React.forwardRef for creating components, so the created
      // component stays as a function. This condition makes sure that we do not interpolate functions
      // which are basically components used as a selectors.
      styleArg.__emotion_real !== styleArg) {
        // If the type is function, we need to define the default theme.
        transformedStyleArg = props => muiStyledFunctionResolver({
          styledArg: styleArg,
          props,
          defaultTheme,
          themeId
        });
      }
      if (componentName && overridesResolver) {
        expressionsWithDefaultTheme.push(props => {
          const theme = resolveTheme(_extends({}, props, {
            defaultTheme,
            themeId
          }));
          const styleOverrides = getStyleOverrides(componentName, theme);
          if (styleOverrides) {
            const resolvedStyleOverrides = {};
            Object.entries(styleOverrides).forEach(([slotKey, slotStyle]) => {
              resolvedStyleOverrides[slotKey] = typeof slotStyle === 'function' ? slotStyle(_extends({}, props, {
                theme
              })) : slotStyle;
            });
            return overridesResolver(props, resolvedStyleOverrides);
          }
          return null;
        });
      }
      if (componentName && !skipVariantsResolver) {
        expressionsWithDefaultTheme.push(props => {
          const theme = resolveTheme(_extends({}, props, {
            defaultTheme,
            themeId
          }));
          return themeVariantsResolver(props, getVariantStyles(componentName, theme), theme, componentName);
        });
      }
      if (!skipSx) {
        expressionsWithDefaultTheme.push(systemSx);
      }
      const numOfCustomFnsApplied = expressionsWithDefaultTheme.length - expressions.length;
      if (Array.isArray(styleArg) && numOfCustomFnsApplied > 0) {
        const placeholders = new Array(numOfCustomFnsApplied).fill('');
        // If the type is array, than we need to add placeholders in the template for the overrides, variants and the sx styles.
        transformedStyleArg = [...styleArg, ...placeholders];
        transformedStyleArg.raw = [...styleArg.raw, ...placeholders];
      }
      const Component = defaultStyledResolver(transformedStyleArg, ...expressionsWithDefaultTheme);
      if (process.env.NODE_ENV !== 'production') {
        let displayName;
        if (componentName) {
          displayName = `${componentName}${capitalize(componentSlot || '')}`;
        }
        if (displayName === undefined) {
          displayName = `Styled(${getDisplayName(tag)})`;
        }
        Component.displayName = displayName;
      }
      if (tag.muiName) {
        Component.muiName = tag.muiName;
      }
      return Component;
    };
    if (defaultStyledResolver.withConfig) {
      muiStyledResolver.withConfig = defaultStyledResolver.withConfig;
    }
    return muiStyledResolver;
  };
}

const styled = createStyled();
var styled$1 = styled;

var css_248z$2 = "@font-face{font-family:Inter;font-weight:100;src:url(../fonts/Inter-Thin.ttf)}@font-face{font-family:Inter;font-weight:200;src:url(../fonts/Inter-ExtraLight.ttf)}@font-face{font-family:Inter;font-weight:300;src:url(../fonts/Inter-Light.ttf)}@font-face{font-family:Inter;font-weight:400;src:url(../fonts/Inter-Regular.ttf)}@font-face{font-family:Inter;font-weight:500;src:url(../fonts/Inter-Medium.ttf)}@font-face{font-family:Inter;font-weight:600;src:url(../fonts/Inter-SemiBold.ttf)}@font-face{font-family:Inter;font-weight:700;src:url(../fonts/Inter-Bold.ttf)}@font-face{font-family:Inter;font-weight:800;src:url(../fonts/Inter-ExtraBold.ttf)}@font-face{font-family:Inter;font-weight:900;src:url(../fonts/Inter-Black.ttf)}";
styleInject(css_248z$2);

exports.VARIANT = void 0;
(function (VARIANT) {
    VARIANT["PRIMARY"] = "Primary";
    VARIANT["SECONDARY"] = "Secondary";
    VARIANT["TERTIARY"] = "Tertiary";
    VARIANT["TEXT"] = "Text";
})(exports.VARIANT || (exports.VARIANT = {}));
exports.ButtonColor = void 0;
(function (ButtonColor) {
    ButtonColor["PRIMARY"] = "Primary";
    ButtonColor["SECONDARY"] = "Secondary";
})(exports.ButtonColor || (exports.ButtonColor = {}));
/**
 * Primary UI component for user interaction
 */
var KpButton = function (_a) {
    var _b = _a.variant, variant = _b === void 0 ? exports.VARIANT.PRIMARY : _b, disabled = _a.disabled, size = _a.size, label = _a.label, customStyle = _a.customStyle, buttonColor = _a.buttonColor, hasLeftIcon = _a.hasLeftIcon, leftIcon = _a.leftIcon, hasRightIcon = _a.hasRightIcon, rightIcon = _a.rightIcon, leftIconSize = _a.leftIconSize, rightIconSize = _a.rightIconSize, iconColor = _a.iconColor, rightIconType = _a.rightIconType, leftIconType = _a.leftIconType, props = __rest$1(_a, ["variant", "disabled", "size", "label", "customStyle", "buttonColor", "hasLeftIcon", "leftIcon", "hasRightIcon", "rightIcon", "leftIconSize", "rightIconSize", "iconColor", "rightIconType", "leftIconType"]);
    var checkVariant = function (type) {
        if (exports.VARIANT.PRIMARY === type) {
            return "contained";
        }
        else if (exports.VARIANT.SECONDARY === type) {
            return "outlined";
        }
        else if (exports.VARIANT.TERTIARY === type) {
            return "text";
        }
        else {
            return "text";
        }
    };
    var buttonDisabled = function (disabled, borderColor) {
        if (disabled) {
            return { border: "none !important" };
        }
        else {
            return { borderColor: borderColor };
        }
    };
    var styleOptions = function (variant, color, disabled) {
        if (exports.ButtonColor.PRIMARY === color) {
            switch (variant) {
                case exports.VARIANT.PRIMARY:
                    return __assign(__assign({}, customStyle), { backgroundColor: disabled ? "#E0E1E6 !important" : "#253378", "&:hover": {
                            backgroundColor: "#1E2961",
                            boxShadow: "none",
                        }, "&:focus": {
                            backgroundColor: "#151D44",
                            color: "#fff",
                            boxShadow: "none",
                        } });
                case exports.VARIANT.SECONDARY:
                    return __assign(__assign(__assign(__assign({}, customStyle), { backgroundColor: disabled ? "#E0E1E6" : "#EDEFF8", color: "#253378" }), buttonDisabled(disabled, "#253378")), { "&:hover": {
                            backgroundColor: "#253378",
                            color: "#fff",
                            border: "1px solid #D9D9D9",
                            boxShadow: "none",
                        }, "&:focus": {
                            backgroundColor: "#1E2961",
                            color: "#fff",
                            boxShadow: "none",
                        } });
                case exports.VARIANT.TERTIARY:
                    return __assign(__assign({}, customStyle), { color: "#253378", "&:hover": {
                            backgroundColor: "#EDEFF8",
                            color: "#253378",
                            boxShadow: "none",
                        }, "&:focus": {
                            backgroundColor: "#253378",
                            color: "#fff",
                            boxShadow: "none",
                        } });
                case exports.VARIANT.TEXT:
                    return __assign(__assign({}, customStyle), { color: "#2D3D90", textTransform: "capitalize", "&:hover": {
                            backgroundColor: "#fff",
                            boxShadow: "none",
                        } });
                default:
                    return __assign({}, customStyle);
            }
        }
        else {
            switch (variant) {
                case exports.VARIANT.PRIMARY:
                    return __assign(__assign({}, customStyle), { backgroundColor: disabled ? "#E0E1E6 !important" : "#2D3D90", "&:hover": {
                            backgroundColor: "#243173",
                            boxShadow: "none",
                        } });
                case exports.VARIANT.SECONDARY:
                    return __assign(__assign(__assign(__assign({}, customStyle), { backgroundColor: disabled ? "#E0E1E6" : "#EDEFF8", color: "#2D3D90" }), buttonDisabled(disabled, "#2D3D90")), { "&:hover": {
                            backgroundColor: "#2D3D90",
                            color: "#fff",
                            border: "1px solid #D9D9D9",
                            boxShadow: "none",
                        } });
                case exports.VARIANT.TERTIARY:
                    return __assign(__assign({}, customStyle), { color: "#2D3D90", padding: "8px 16px" });
                default:
                    return __assign(__assign({}, customStyle), { color: "#2D3D90", textTransform: "capitalize", "&:hover": {
                            backgroundColor: "#fff",
                        } });
            }
        }
    };
    var ButtonComponent = styled$1(material.Button)(__assign({ fontFamily: "Inter", fontWeight: "600", fontSize: "14px", letterSpacing: "1px", padding: size === "small" ? "6px 12px" : "8px 16px", minWidth: size === "small" ? "81px" : "97px", boxShadow: "none" }, styleOptions(variant, buttonColor, disabled)));
    return (jsxRuntime.jsxs(ButtonComponent, __assign({}, props, { variant: checkVariant(variant), disabled: disabled }, { children: [hasLeftIcon && leftIcon && (jsxRuntime.jsx(Icon, { iconName: leftIcon, iconSize: leftIconSize && leftIconSize, side: exports.IconSide.LEFtSIDE, color: iconColor, type: leftIconType })), label, hasRightIcon && rightIcon && (jsxRuntime.jsx(Icon, { iconName: rightIcon, iconSize: rightIconSize && rightIconSize, side: exports.IconSide.RIGHTSIDE, color: iconColor, type: rightIconType }))] })));
};

/**
 * react-number-format - 5.3.4
 * Author : Sudhanshu Yadav
 * Copyright (c) 2016, 2024 to Sudhanshu Yadav, released under the MIT license.
 * https://github.com/s-yadav/react-number-format
 */

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

function __rest(s, e) {
    var t = {};
    for (var p in s) { if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        { t[p] = s[p]; } }
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        { for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                { t[p[i]] = s[p[i]]; }
        } }
    return t;
}

var SourceType;
(function (SourceType) {
    SourceType["event"] = "event";
    SourceType["props"] = "prop";
})(SourceType || (SourceType = {}));

// basic noop function
function noop() { }
function memoizeOnce(cb) {
    var lastArgs;
    var lastValue = undefined;
    return function () {
        var args = [], len = arguments.length;
        while ( len-- ) args[ len ] = arguments[ len ];

        if (lastArgs &&
            args.length === lastArgs.length &&
            args.every(function (value, index) { return value === lastArgs[index]; })) {
            return lastValue;
        }
        lastArgs = args;
        lastValue = cb.apply(void 0, args);
        return lastValue;
    };
}
function charIsNumber(char) {
    return !!(char || '').match(/\d/);
}
function isNil(val) {
    return val === null || val === undefined;
}
function isNanValue(val) {
    return typeof val === 'number' && isNaN(val);
}
function isNotValidValue(val) {
    return isNil(val) || isNanValue(val) || (typeof val === 'number' && !isFinite(val));
}
function escapeRegExp(str) {
    return str.replace(/[-[\]/{}()*+?.\\^$|]/g, '\\$&');
}
function getThousandsGroupRegex(thousandsGroupStyle) {
    switch (thousandsGroupStyle) {
        case 'lakh':
            return /(\d+?)(?=(\d\d)+(\d)(?!\d))(\.\d+)?/g;
        case 'wan':
            return /(\d)(?=(\d{4})+(?!\d))/g;
        case 'thousand':
        default:
            return /(\d)(?=(\d{3})+(?!\d))/g;
    }
}
function applyThousandSeparator(str, thousandSeparator, thousandsGroupStyle) {
    var thousandsGroupRegex = getThousandsGroupRegex(thousandsGroupStyle);
    var index = str.search(/[1-9]/);
    index = index === -1 ? str.length : index;
    return (str.substring(0, index) +
        str.substring(index, str.length).replace(thousandsGroupRegex, '$1' + thousandSeparator));
}
function usePersistentCallback(cb) {
    var callbackRef = React.useRef(cb);
    // keep the callback ref upto date
    callbackRef.current = cb;
    /**
     * initialize a persistent callback which never changes
     * through out the component lifecycle
     */
    var persistentCbRef = React.useRef(function () {
        var args = [], len = arguments.length;
        while ( len-- ) args[ len ] = arguments[ len ];

        return callbackRef.current.apply(callbackRef, args);
    });
    return persistentCbRef.current;
}
//spilt a float number into different parts beforeDecimal, afterDecimal, and negation
function splitDecimal(numStr, allowNegative) {
    if ( allowNegative === void 0 ) allowNegative = true;

    var hasNegation = numStr[0] === '-';
    var addNegation = hasNegation && allowNegative;
    numStr = numStr.replace('-', '');
    var parts = numStr.split('.');
    var beforeDecimal = parts[0];
    var afterDecimal = parts[1] || '';
    return {
        beforeDecimal: beforeDecimal,
        afterDecimal: afterDecimal,
        hasNegation: hasNegation,
        addNegation: addNegation,
    };
}
function fixLeadingZero(numStr) {
    if (!numStr)
        { return numStr; }
    var isNegative = numStr[0] === '-';
    if (isNegative)
        { numStr = numStr.substring(1, numStr.length); }
    var parts = numStr.split('.');
    var beforeDecimal = parts[0].replace(/^0+/, '') || '0';
    var afterDecimal = parts[1] || '';
    return ("" + (isNegative ? '-' : '') + beforeDecimal + (afterDecimal ? ("." + afterDecimal) : ''));
}
/**
 * limit decimal numbers to given scale
 * Not used .fixedTo because that will break with big numbers
 */
function limitToScale(numStr, scale, fixedDecimalScale) {
    var str = '';
    var filler = fixedDecimalScale ? '0' : '';
    for (var i = 0; i <= scale - 1; i++) {
        str += numStr[i] || filler;
    }
    return str;
}
function repeat(str, count) {
    return Array(count + 1).join(str);
}
function toNumericString(num) {
    var _num = num + ''; // typecast number to string
    // store the sign and remove it from the number.
    var sign = _num[0] === '-' ? '-' : '';
    if (sign)
        { _num = _num.substring(1); }
    // split the number into cofficient and exponent
    var ref = _num.split(/[eE]/g);
    var coefficient = ref[0];
    var exponent = ref[1];
    // covert exponent to number;
    exponent = Number(exponent);
    // if there is no exponent part or its 0, return the coffiecient with sign
    if (!exponent)
        { return sign + coefficient; }
    coefficient = coefficient.replace('.', '');
    /**
     * for scientific notation the current decimal index will be after first number (index 0)
     * So effective decimal index will always be 1 + exponent value
     */
    var decimalIndex = 1 + exponent;
    var coffiecientLn = coefficient.length;
    if (decimalIndex < 0) {
        // if decimal index is less then 0 add preceding 0s
        // add 1 as join will have
        coefficient = '0.' + repeat('0', Math.abs(decimalIndex)) + coefficient;
    }
    else if (decimalIndex >= coffiecientLn) {
        // if decimal index is less then 0 add leading 0s
        coefficient = coefficient + repeat('0', decimalIndex - coffiecientLn);
    }
    else {
        // else add decimal point at proper index
        coefficient =
            (coefficient.substring(0, decimalIndex) || '0') + '.' + coefficient.substring(decimalIndex);
    }
    return sign + coefficient;
}
/**
 * This method is required to round prop value to given scale.
 * Not used .round or .fixedTo because that will break with big numbers
 */
function roundToPrecision(numStr, scale, fixedDecimalScale) {
    //if number is empty don't do anything return empty string
    if (['', '-'].indexOf(numStr) !== -1)
        { return numStr; }
    var shouldHaveDecimalSeparator = (numStr.indexOf('.') !== -1 || fixedDecimalScale) && scale;
    var ref = splitDecimal(numStr);
    var beforeDecimal = ref.beforeDecimal;
    var afterDecimal = ref.afterDecimal;
    var hasNegation = ref.hasNegation;
    var floatValue = parseFloat(("0." + (afterDecimal || '0')));
    var floatValueStr = afterDecimal.length <= scale ? ("0." + afterDecimal) : floatValue.toFixed(scale);
    var roundedDecimalParts = floatValueStr.split('.');
    var intPart = beforeDecimal;
    // if we have cary over from rounding decimal part, add that on before decimal
    if (beforeDecimal && Number(roundedDecimalParts[0])) {
        intPart = beforeDecimal
            .split('')
            .reverse()
            .reduce(function (roundedStr, current, idx) {
            if (roundedStr.length > idx) {
                return ((Number(roundedStr[0]) + Number(current)).toString() +
                    roundedStr.substring(1, roundedStr.length));
            }
            return current + roundedStr;
        }, roundedDecimalParts[0]);
    }
    var decimalPart = limitToScale(roundedDecimalParts[1] || '', scale, fixedDecimalScale);
    var negation = hasNegation ? '-' : '';
    var decimalSeparator = shouldHaveDecimalSeparator ? '.' : '';
    return ("" + negation + intPart + decimalSeparator + decimalPart);
}
/** set the caret positon in an input field **/
function setCaretPosition(el, caretPos) {
    el.value = el.value;
    // ^ this is used to not only get 'focus', but
    // to make sure we don't have it everything -selected-
    // (it causes an issue in chrome, and having it doesn't hurt any other browser)
    if (el !== null) {
        /* @ts-ignore */
        if (el.createTextRange) {
            /* @ts-ignore */
            var range = el.createTextRange();
            range.move('character', caretPos);
            range.select();
            return true;
        }
        // (el.selectionStart === 0 added for Firefox bug)
        if (el.selectionStart || el.selectionStart === 0) {
            el.focus();
            el.setSelectionRange(caretPos, caretPos);
            return true;
        }
        // fail city, fortunately this never happens (as far as I've tested) :)
        el.focus();
        return false;
    }
}
var findChangeRange = memoizeOnce(function (prevValue, newValue) {
    var i = 0, j = 0;
    var prevLength = prevValue.length;
    var newLength = newValue.length;
    while (prevValue[i] === newValue[i] && i < prevLength)
        { i++; }
    //check what has been changed from last
    while (prevValue[prevLength - 1 - j] === newValue[newLength - 1 - j] &&
        newLength - j > i &&
        prevLength - j > i) {
        j++;
    }
    return {
        from: { start: i, end: prevLength - j },
        to: { start: i, end: newLength - j },
    };
});
/*
  Returns a number whose value is limited to the given range
*/
function clamp(num, min, max) {
    return Math.min(Math.max(num, min), max);
}
function geInputCaretPosition(el) {
    /*Max of selectionStart and selectionEnd is taken for the patch of pixel and other mobile device caret bug*/
    return Math.max(el.selectionStart, el.selectionEnd);
}
function addInputMode() {
    return (typeof navigator !== 'undefined' &&
        !(navigator.platform && /iPhone|iPod/.test(navigator.platform)));
}
function getDefaultChangeMeta(value) {
    return {
        from: {
            start: 0,
            end: 0,
        },
        to: {
            start: 0,
            end: value.length,
        },
        lastValue: '',
    };
}
function defaultIsCharacterSame(ref) {
    var currentValue = ref.currentValue;
    var formattedValue = ref.formattedValue;
    var currentValueIndex = ref.currentValueIndex;
    var formattedValueIndex = ref.formattedValueIndex;

    return currentValue[currentValueIndex] === formattedValue[formattedValueIndex];
}
function getCaretPosition(newFormattedValue, lastFormattedValue, curValue, curCaretPos, boundary, isValidInputCharacter, 
/**
 * format function can change the character, the caret engine relies on mapping old value and new value
 * In such case if character is changed, parent can tell which chars are equivalent
 * Some example, all allowedDecimalCharacters are updated to decimalCharacters, 2nd case if user is coverting
 * number to different numeric system.
 */
isCharacterSame) {
    if ( isCharacterSame === void 0 ) isCharacterSame = defaultIsCharacterSame;

    /**
     * if something got inserted on empty value, add the formatted character before the current value,
     * This is to avoid the case where typed character is present on format characters
     */
    var firstAllowedPosition = boundary.findIndex(function (b) { return b; });
    var prefixFormat = newFormattedValue.slice(0, firstAllowedPosition);
    if (!lastFormattedValue && !curValue.startsWith(prefixFormat)) {
        lastFormattedValue = prefixFormat;
        curValue = prefixFormat + curValue;
        curCaretPos = curCaretPos + prefixFormat.length;
    }
    var curValLn = curValue.length;
    var formattedValueLn = newFormattedValue.length;
    // create index map
    var addedIndexMap = {};
    var indexMap = new Array(curValLn);
    for (var i = 0; i < curValLn; i++) {
        indexMap[i] = -1;
        for (var j = 0, jLn = formattedValueLn; j < jLn; j++) {
            var isCharSame = isCharacterSame({
                currentValue: curValue,
                lastValue: lastFormattedValue,
                formattedValue: newFormattedValue,
                currentValueIndex: i,
                formattedValueIndex: j,
            });
            if (isCharSame && addedIndexMap[j] !== true) {
                indexMap[i] = j;
                addedIndexMap[j] = true;
                break;
            }
        }
    }
    /**
     * For current caret position find closest characters (left and right side)
     * which are properly mapped to formatted value.
     * The idea is that the new caret position will exist always in the boundary of
     * that mapped index
     */
    var pos = curCaretPos;
    while (pos < curValLn && (indexMap[pos] === -1 || !isValidInputCharacter(curValue[pos]))) {
        pos++;
    }
    // if the caret position is on last keep the endIndex as last for formatted value
    var endIndex = pos === curValLn || indexMap[pos] === -1 ? formattedValueLn : indexMap[pos];
    pos = curCaretPos - 1;
    while (pos > 0 && indexMap[pos] === -1)
        { pos--; }
    var startIndex = pos === -1 || indexMap[pos] === -1 ? 0 : indexMap[pos] + 1;
    /**
     * case where a char is added on suffix and removed from middle, example 2sq345 becoming $2,345 sq
     * there is still a mapping but the order of start index and end index is changed
     */
    if (startIndex > endIndex)
        { return endIndex; }
    /**
     * given the current caret position if it closer to startIndex
     * keep the new caret position on start index or keep it closer to endIndex
     */
    return curCaretPos - startIndex < endIndex - curCaretPos ? startIndex : endIndex;
}
/* This keeps the caret within typing area so people can't type in between prefix or suffix or format characters */
function getCaretPosInBoundary(value, caretPos, boundary, direction) {
    var valLn = value.length;
    // clamp caret position to [0, value.length]
    caretPos = clamp(caretPos, 0, valLn);
    if (direction === 'left') {
        while (caretPos >= 0 && !boundary[caretPos])
            { caretPos--; }
        // if we don't find any suitable caret position on left, set it on first allowed position
        if (caretPos === -1)
            { caretPos = boundary.indexOf(true); }
    }
    else {
        while (caretPos <= valLn && !boundary[caretPos])
            { caretPos++; }
        // if we don't find any suitable caret position on right, set it on last allowed position
        if (caretPos > valLn)
            { caretPos = boundary.lastIndexOf(true); }
    }
    // if we still don't find caret position, set it at the end of value
    if (caretPos === -1)
        { caretPos = valLn; }
    return caretPos;
}
function caretUnknownFormatBoundary(formattedValue) {
    var boundaryAry = Array.from({ length: formattedValue.length + 1 }).map(function () { return true; });
    for (var i = 0, ln = boundaryAry.length; i < ln; i++) {
        // consider caret to be in boundary if it is before or after numeric value
        boundaryAry[i] = Boolean(charIsNumber(formattedValue[i]) || charIsNumber(formattedValue[i - 1]));
    }
    return boundaryAry;
}
function useInternalValues(value, defaultValue, valueIsNumericString, format, removeFormatting, onValueChange) {
    if ( onValueChange === void 0 ) onValueChange = noop;

    var getValues = usePersistentCallback(function (value, valueIsNumericString) {
        var formattedValue, numAsString;
        if (isNotValidValue(value)) {
            numAsString = '';
            formattedValue = '';
        }
        else if (typeof value === 'number' || valueIsNumericString) {
            numAsString = typeof value === 'number' ? toNumericString(value) : value;
            formattedValue = format(numAsString);
        }
        else {
            numAsString = removeFormatting(value, undefined);
            formattedValue = format(numAsString);
        }
        return { formattedValue: formattedValue, numAsString: numAsString };
    });
    var ref = React.useState(function () {
        return getValues(isNil(value) ? defaultValue : value, valueIsNumericString);
    });
    var values = ref[0];
    var setValues = ref[1];
    var _onValueChange = function (newValues, sourceInfo) {
        if (newValues.formattedValue !== values.formattedValue) {
            setValues({
                formattedValue: newValues.formattedValue,
                numAsString: newValues.value,
            });
        }
        // call parent on value change if only if formatted value is changed
        onValueChange(newValues, sourceInfo);
    };
    // if value is switch from controlled to uncontrolled, use the internal state's value to format with new props
    var _value = value;
    var _valueIsNumericString = valueIsNumericString;
    if (isNil(value)) {
        _value = values.numAsString;
        _valueIsNumericString = true;
    }
    var newValues = getValues(_value, _valueIsNumericString);
    React.useMemo(function () {
        setValues(newValues);
    }, [newValues.formattedValue]);
    return [values, _onValueChange];
}

function defaultRemoveFormatting(value) {
    return value.replace(/[^0-9]/g, '');
}
function defaultFormat(value) {
    return value;
}
function NumberFormatBase(props) {
    var type = props.type; if ( type === void 0 ) type = 'text';
    var displayType = props.displayType; if ( displayType === void 0 ) displayType = 'input';
    var customInput = props.customInput;
    var renderText = props.renderText;
    var getInputRef = props.getInputRef;
    var format = props.format; if ( format === void 0 ) format = defaultFormat;
    var removeFormatting = props.removeFormatting; if ( removeFormatting === void 0 ) removeFormatting = defaultRemoveFormatting;
    var defaultValue = props.defaultValue;
    var valueIsNumericString = props.valueIsNumericString;
    var onValueChange = props.onValueChange;
    var isAllowed = props.isAllowed;
    var onChange = props.onChange; if ( onChange === void 0 ) onChange = noop;
    var onKeyDown = props.onKeyDown; if ( onKeyDown === void 0 ) onKeyDown = noop;
    var onMouseUp = props.onMouseUp; if ( onMouseUp === void 0 ) onMouseUp = noop;
    var onFocus = props.onFocus; if ( onFocus === void 0 ) onFocus = noop;
    var onBlur = props.onBlur; if ( onBlur === void 0 ) onBlur = noop;
    var propValue = props.value;
    var getCaretBoundary = props.getCaretBoundary; if ( getCaretBoundary === void 0 ) getCaretBoundary = caretUnknownFormatBoundary;
    var isValidInputCharacter = props.isValidInputCharacter; if ( isValidInputCharacter === void 0 ) isValidInputCharacter = charIsNumber;
    var isCharacterSame = props.isCharacterSame;
    var otherProps = __rest(props, ["type", "displayType", "customInput", "renderText", "getInputRef", "format", "removeFormatting", "defaultValue", "valueIsNumericString", "onValueChange", "isAllowed", "onChange", "onKeyDown", "onMouseUp", "onFocus", "onBlur", "value", "getCaretBoundary", "isValidInputCharacter", "isCharacterSame"]);
    var ref = useInternalValues(propValue, defaultValue, Boolean(valueIsNumericString), format, removeFormatting, onValueChange);
    var ref_0 = ref[0];
    var formattedValue = ref_0.formattedValue;
    var numAsString = ref_0.numAsString;
    var onFormattedValueChange = ref[1];
    var lastUpdatedValue = React.useRef({ formattedValue: formattedValue, numAsString: numAsString });
    var _onValueChange = function (values, source) {
        lastUpdatedValue.current = { formattedValue: values.formattedValue, numAsString: values.value };
        onFormattedValueChange(values, source);
    };
    var ref$1 = React.useState(false);
    var mounted = ref$1[0];
    var setMounted = ref$1[1];
    var focusedElm = React.useRef(null);
    var timeout = React.useRef({
        setCaretTimeout: null,
        focusTimeout: null,
    });
    React.useEffect(function () {
        setMounted(true);
        return function () {
            clearTimeout(timeout.current.setCaretTimeout);
            clearTimeout(timeout.current.focusTimeout);
        };
    }, []);
    var _format = format;
    var getValueObject = function (formattedValue, numAsString) {
        var floatValue = parseFloat(numAsString);
        return {
            formattedValue: formattedValue,
            value: numAsString,
            floatValue: isNaN(floatValue) ? undefined : floatValue,
        };
    };
    var setPatchedCaretPosition = function (el, caretPos, currentValue) {
        // don't reset the caret position when the whole input content is selected
        if (el.selectionStart === 0 && el.selectionEnd === el.value.length)
            { return; }
        /* setting caret position within timeout of 0ms is required for mobile chrome,
        otherwise browser resets the caret position after we set it
        We are also setting it without timeout so that in normal browser we don't see the flickering */
        setCaretPosition(el, caretPos);
        timeout.current.setCaretTimeout = setTimeout(function () {
            if (el.value === currentValue && el.selectionStart !== caretPos) {
                setCaretPosition(el, caretPos);
            }
        }, 0);
    };
    /* This keeps the caret within typing area so people can't type in between prefix or suffix */
    var correctCaretPosition = function (value, caretPos, direction) {
        return getCaretPosInBoundary(value, caretPos, getCaretBoundary(value), direction);
    };
    var getNewCaretPosition = function (inputValue, newFormattedValue, caretPos) {
        var caretBoundary = getCaretBoundary(newFormattedValue);
        var updatedCaretPos = getCaretPosition(newFormattedValue, formattedValue, inputValue, caretPos, caretBoundary, isValidInputCharacter, isCharacterSame);
        //correct caret position if its outside of editable area
        updatedCaretPos = getCaretPosInBoundary(newFormattedValue, updatedCaretPos, caretBoundary);
        return updatedCaretPos;
    };
    var updateValueAndCaretPosition = function (params) {
        var newFormattedValue = params.formattedValue; if ( newFormattedValue === void 0 ) newFormattedValue = '';
        var input = params.input;
        var source = params.source;
        var event = params.event;
        var numAsString = params.numAsString;
        var caretPos;
        if (input) {
            var inputValue = params.inputValue || input.value;
            var currentCaretPosition = geInputCaretPosition(input);
            /**
             * set the value imperatively, this is required for IE fix
             * This is also required as if new caret position is beyond the previous value.
             * Caret position will not be set correctly
             */
            input.value = newFormattedValue;
            //get the caret position
            caretPos = getNewCaretPosition(inputValue, newFormattedValue, currentCaretPosition);
            //set caret position imperatively
            if (caretPos !== undefined) {
                setPatchedCaretPosition(input, caretPos, newFormattedValue);
            }
        }
        if (newFormattedValue !== formattedValue) {
            // trigger onValueChange synchronously, so parent is updated along with the number format. Fix for #277, #287
            _onValueChange(getValueObject(newFormattedValue, numAsString), { event: event, source: source });
        }
    };
    /**
     * if the formatted value is not synced to parent, or if the formatted value is different from last synced value sync it
     * we also don't need to sync to the parent if no formatting is applied
     * if the formatting props is removed, in which case last formatted value will be different from the numeric string value
     * in such case we need to inform the parent.
     */
    React.useEffect(function () {
        var ref = lastUpdatedValue.current;
        var lastFormattedValue = ref.formattedValue;
        var lastNumAsString = ref.numAsString;
        if (formattedValue !== lastFormattedValue &&
            (formattedValue !== numAsString || lastFormattedValue !== lastNumAsString)) {
            _onValueChange(getValueObject(formattedValue, numAsString), {
                event: undefined,
                source: SourceType.props,
            });
        }
    }, [formattedValue, numAsString]);
    // also if formatted value is changed from the props, we need to update the caret position
    // keep the last caret position if element is focused
    var currentCaretPosition = focusedElm.current
        ? geInputCaretPosition(focusedElm.current)
        : undefined;
    // needed to prevent warning with useLayoutEffect on server
    var useIsomorphicLayoutEffect = typeof window !== 'undefined' ? React.useLayoutEffect : React.useEffect;
    useIsomorphicLayoutEffect(function () {
        var input = focusedElm.current;
        if (formattedValue !== lastUpdatedValue.current.formattedValue && input) {
            var caretPos = getNewCaretPosition(lastUpdatedValue.current.formattedValue, formattedValue, currentCaretPosition);
            /**
             * set the value imperatively, as we set the caret position as well imperatively.
             * This is to keep value and caret position in sync
             */
            input.value = formattedValue;
            setPatchedCaretPosition(input, caretPos, formattedValue);
        }
    }, [formattedValue]);
    var formatInputValue = function (inputValue, event, source) {
        var changeRange = findChangeRange(formattedValue, inputValue);
        var changeMeta = Object.assign(Object.assign({}, changeRange), { lastValue: formattedValue });
        var _numAsString = removeFormatting(inputValue, changeMeta);
        var _formattedValue = _format(_numAsString);
        // formatting can remove some of the number chars, so we need to fine number string again
        _numAsString = removeFormatting(_formattedValue, undefined);
        if (isAllowed && !isAllowed(getValueObject(_formattedValue, _numAsString))) {
            //reset the caret position
            var input = event.target;
            var currentCaretPosition = geInputCaretPosition(input);
            var caretPos = getNewCaretPosition(inputValue, formattedValue, currentCaretPosition);
            input.value = formattedValue;
            setPatchedCaretPosition(input, caretPos, formattedValue);
            return false;
        }
        updateValueAndCaretPosition({
            formattedValue: _formattedValue,
            numAsString: _numAsString,
            inputValue: inputValue,
            event: event,
            source: source,
            input: event.target,
        });
        return true;
    };
    var _onChange = function (e) {
        var el = e.target;
        var inputValue = el.value;
        var changed = formatInputValue(inputValue, e, SourceType.event);
        if (changed)
            { onChange(e); }
    };
    var _onKeyDown = function (e) {
        var el = e.target;
        var key = e.key;
        var selectionStart = el.selectionStart;
        var selectionEnd = el.selectionEnd;
        var value = el.value; if ( value === void 0 ) value = '';
        var expectedCaretPosition;
        //Handle backspace and delete against non numerical/decimal characters or arrow keys
        if (key === 'ArrowLeft' || key === 'Backspace') {
            expectedCaretPosition = Math.max(selectionStart - 1, 0);
        }
        else if (key === 'ArrowRight') {
            expectedCaretPosition = Math.min(selectionStart + 1, value.length);
        }
        else if (key === 'Delete') {
            expectedCaretPosition = selectionStart;
        }
        //if expectedCaretPosition is not set it means we don't want to Handle keyDown
        // also if multiple characters are selected don't handle
        if (expectedCaretPosition === undefined || selectionStart !== selectionEnd) {
            onKeyDown(e);
            return;
        }
        var newCaretPosition = expectedCaretPosition;
        if (key === 'ArrowLeft' || key === 'ArrowRight') {
            var direction = key === 'ArrowLeft' ? 'left' : 'right';
            newCaretPosition = correctCaretPosition(value, expectedCaretPosition, direction);
            // arrow left or right only moves the caret, so no need to handle the event, if we are handling it manually
            if (newCaretPosition !== expectedCaretPosition) {
                e.preventDefault();
            }
        }
        else if (key === 'Delete' && !isValidInputCharacter(value[expectedCaretPosition])) {
            // in case of delete go to closest caret boundary on the right side
            newCaretPosition = correctCaretPosition(value, expectedCaretPosition, 'right');
        }
        else if (key === 'Backspace' && !isValidInputCharacter(value[expectedCaretPosition])) {
            // in case of backspace go to closest caret boundary on the left side
            newCaretPosition = correctCaretPosition(value, expectedCaretPosition, 'left');
        }
        if (newCaretPosition !== expectedCaretPosition) {
            setPatchedCaretPosition(el, newCaretPosition, value);
        }
        /* NOTE: this is just required for unit test as we need to get the newCaretPosition,
                Remove this when you find different solution */
        /* @ts-ignore */
        if (e.isUnitTestRun) {
            setPatchedCaretPosition(el, newCaretPosition, value);
        }
        onKeyDown(e);
    };
    /** required to handle the caret position when click anywhere within the input **/
    var _onMouseUp = function (e) {
        var el = e.target;
        /**
         * NOTE: we have to give default value for value as in case when custom input is provided
         * value can come as undefined when nothing is provided on value prop.
         */
        var correctCaretPositionIfRequired = function () {
            var selectionStart = el.selectionStart;
            var selectionEnd = el.selectionEnd;
            var value = el.value; if ( value === void 0 ) value = '';
            if (selectionStart === selectionEnd) {
                var caretPosition = correctCaretPosition(value, selectionStart);
                if (caretPosition !== selectionStart) {
                    setPatchedCaretPosition(el, caretPosition, value);
                }
            }
        };
        correctCaretPositionIfRequired();
        // try to correct after selection has updated by browser
        // this case is required when user clicks on some position while a text is selected on input
        requestAnimationFrame(function () {
            correctCaretPositionIfRequired();
        });
        onMouseUp(e);
    };
    var _onFocus = function (e) {
        // Workaround Chrome and Safari bug https://bugs.chromium.org/p/chromium/issues/detail?id=779328
        // (onFocus event target selectionStart is always 0 before setTimeout)
        if (e.persist)
            { e.persist(); }
        var el = e.target;
        var currentTarget = e.currentTarget;
        focusedElm.current = el;
        timeout.current.focusTimeout = setTimeout(function () {
            var selectionStart = el.selectionStart;
            var selectionEnd = el.selectionEnd;
            var value = el.value; if ( value === void 0 ) value = '';
            var caretPosition = correctCaretPosition(value, selectionStart);
            //setPatchedCaretPosition only when everything is not selected on focus (while tabbing into the field)
            if (caretPosition !== selectionStart &&
                !(selectionStart === 0 && selectionEnd === value.length)) {
                setPatchedCaretPosition(el, caretPosition, value);
            }
            onFocus(Object.assign(Object.assign({}, e), { currentTarget: currentTarget }));
        }, 0);
    };
    var _onBlur = function (e) {
        focusedElm.current = null;
        clearTimeout(timeout.current.focusTimeout);
        clearTimeout(timeout.current.setCaretTimeout);
        onBlur(e);
    };
    // add input mode on element based on format prop and device once the component is mounted
    var inputMode = mounted && addInputMode() ? 'numeric' : undefined;
    var inputProps = Object.assign({ inputMode: inputMode }, otherProps, {
        type: type,
        value: formattedValue,
        onChange: _onChange,
        onKeyDown: _onKeyDown,
        onMouseUp: _onMouseUp,
        onFocus: _onFocus,
        onBlur: _onBlur,
    });
    if (displayType === 'text') {
        return renderText ? (React__default["default"].createElement(React__default["default"].Fragment, null, renderText(formattedValue, otherProps) || null)) : (React__default["default"].createElement("span", Object.assign({}, otherProps, { ref: getInputRef }), formattedValue));
    }
    else if (customInput) {
        var CustomInput = customInput;
        /* @ts-ignore */
        return React__default["default"].createElement(CustomInput, Object.assign({}, inputProps, { ref: getInputRef }));
    }
    return React__default["default"].createElement("input", Object.assign({}, inputProps, { ref: getInputRef }));
}

function format(numStr, props) {
    var decimalScale = props.decimalScale;
    var fixedDecimalScale = props.fixedDecimalScale;
    var prefix = props.prefix; if ( prefix === void 0 ) prefix = '';
    var suffix = props.suffix; if ( suffix === void 0 ) suffix = '';
    var allowNegative = props.allowNegative;
    var thousandsGroupStyle = props.thousandsGroupStyle; if ( thousandsGroupStyle === void 0 ) thousandsGroupStyle = 'thousand';
    // don't apply formatting on empty string or '-'
    if (numStr === '' || numStr === '-') {
        return numStr;
    }
    var ref = getSeparators(props);
    var thousandSeparator = ref.thousandSeparator;
    var decimalSeparator = ref.decimalSeparator;
    /**
     * Keep the decimal separator
     * when decimalScale is not defined or non zero and the numStr has decimal in it
     * Or if decimalScale is > 0 and fixeDecimalScale is true (even if numStr has no decimal)
     */
    var hasDecimalSeparator = (decimalScale !== 0 && numStr.indexOf('.') !== -1) || (decimalScale && fixedDecimalScale);
    var ref$1 = splitDecimal(numStr, allowNegative);
    var beforeDecimal = ref$1.beforeDecimal;
    var afterDecimal = ref$1.afterDecimal;
    var addNegation = ref$1.addNegation; // eslint-disable-line prefer-const
    //apply decimal precision if its defined
    if (decimalScale !== undefined) {
        afterDecimal = limitToScale(afterDecimal, decimalScale, !!fixedDecimalScale);
    }
    if (thousandSeparator) {
        beforeDecimal = applyThousandSeparator(beforeDecimal, thousandSeparator, thousandsGroupStyle);
    }
    //add prefix and suffix when there is a number present
    if (prefix)
        { beforeDecimal = prefix + beforeDecimal; }
    if (suffix)
        { afterDecimal = afterDecimal + suffix; }
    //restore negation sign
    if (addNegation)
        { beforeDecimal = '-' + beforeDecimal; }
    numStr = beforeDecimal + ((hasDecimalSeparator && decimalSeparator) || '') + afterDecimal;
    return numStr;
}
function getSeparators(props) {
    var decimalSeparator = props.decimalSeparator; if ( decimalSeparator === void 0 ) decimalSeparator = '.';
    var thousandSeparator = props.thousandSeparator;
    var allowedDecimalSeparators = props.allowedDecimalSeparators;
    if (thousandSeparator === true) {
        thousandSeparator = ',';
    }
    if (!allowedDecimalSeparators) {
        allowedDecimalSeparators = [decimalSeparator, '.'];
    }
    return {
        decimalSeparator: decimalSeparator,
        thousandSeparator: thousandSeparator,
        allowedDecimalSeparators: allowedDecimalSeparators,
    };
}
function handleNegation(value, allowNegative) {
    if ( value === void 0 ) value = '';

    var negationRegex = new RegExp('(-)');
    var doubleNegationRegex = new RegExp('(-)(.)*(-)');
    // Check number has '-' value
    var hasNegation = negationRegex.test(value);
    // Check number has 2 or more '-' values
    var removeNegation = doubleNegationRegex.test(value);
    //remove negation
    value = value.replace(/-/g, '');
    if (hasNegation && !removeNegation && allowNegative) {
        value = '-' + value;
    }
    return value;
}
function getNumberRegex(decimalSeparator, global) {
    return new RegExp(("(^-)|[0-9]|" + (escapeRegExp(decimalSeparator))), global ? 'g' : undefined);
}
function isNumericString(val, prefix, suffix) {
    // for empty value we can always treat it as numeric string
    if (val === '')
        { return true; }
    return (!(prefix === null || prefix === void 0 ? void 0 : prefix.match(/\d/)) && !(suffix === null || suffix === void 0 ? void 0 : suffix.match(/\d/)) && typeof val === 'string' && !isNaN(Number(val)));
}
function removeFormatting(value, changeMeta, props) {
    var assign;

    if ( changeMeta === void 0 ) changeMeta = getDefaultChangeMeta(value);
    var allowNegative = props.allowNegative;
    var prefix = props.prefix; if ( prefix === void 0 ) prefix = '';
    var suffix = props.suffix; if ( suffix === void 0 ) suffix = '';
    var decimalScale = props.decimalScale;
    var from = changeMeta.from;
    var to = changeMeta.to;
    var start = to.start;
    var end = to.end;
    var ref = getSeparators(props);
    var allowedDecimalSeparators = ref.allowedDecimalSeparators;
    var decimalSeparator = ref.decimalSeparator;
    var isBeforeDecimalSeparator = value[end] === decimalSeparator;
    /**
     * If only a number is added on empty input which matches with the prefix or suffix,
     * then don't remove it, just return the same
     */
    if (charIsNumber(value) &&
        (value === prefix || value === suffix) &&
        changeMeta.lastValue === '') {
        return value;
    }
    /** Check for any allowed decimal separator is added in the numeric format and replace it with decimal separator */
    if (end - start === 1 && allowedDecimalSeparators.indexOf(value[start]) !== -1) {
        var separator = decimalScale === 0 ? '' : decimalSeparator;
        value = value.substring(0, start) + separator + value.substring(start + 1, value.length);
    }
    var stripNegation = function (value, start, end) {
        /**
         * if prefix starts with - we don't allow negative number to avoid confusion
         * if suffix starts with - and the value length is same as suffix length, then the - sign is from the suffix
         * In other cases, if the value starts with - then it is a negation
         */
        var hasNegation = false;
        var hasDoubleNegation = false;
        if (prefix.startsWith('-')) {
            hasNegation = false;
        }
        else if (value.startsWith('--')) {
            hasNegation = false;
            hasDoubleNegation = true;
        }
        else if (suffix.startsWith('-') && value.length === suffix.length) {
            hasNegation = false;
        }
        else if (value[0] === '-') {
            hasNegation = true;
        }
        var charsToRemove = hasNegation ? 1 : 0;
        if (hasDoubleNegation)
            { charsToRemove = 2; }
        // remove negation/double negation from start to simplify prefix logic as negation comes before prefix
        if (charsToRemove) {
            value = value.substring(charsToRemove);
            // account for the removal of the negation for start and end index
            start -= charsToRemove;
            end -= charsToRemove;
        }
        return { value: value, start: start, end: end, hasNegation: hasNegation };
    };
    var toMetadata = stripNegation(value, start, end);
    var hasNegation = toMetadata.hasNegation;
    ((assign = toMetadata, value = assign.value, start = assign.start, end = assign.end));
    var ref$1 = stripNegation(changeMeta.lastValue, from.start, from.end);
    var fromStart = ref$1.start;
    var fromEnd = ref$1.end;
    var lastValue = ref$1.value;
    // if only prefix and suffix part is updated reset the value to last value
    // if the changed range is from suffix in the updated value, and the the suffix starts with the same characters, allow the change
    var updatedSuffixPart = value.substring(start, end);
    if (value.length &&
        lastValue.length &&
        (fromStart > lastValue.length - suffix.length || fromEnd < prefix.length) &&
        !(updatedSuffixPart && suffix.startsWith(updatedSuffixPart))) {
        value = lastValue;
    }
    /**
     * remove prefix
     * Remove whole prefix part if its present on the value
     * If the prefix is partially deleted (in which case change start index will be less the prefix length)
     * Remove only partial part of prefix.
     */
    var startIndex = 0;
    if (value.startsWith(prefix))
        { startIndex += prefix.length; }
    else if (start < prefix.length)
        { startIndex = start; }
    value = value.substring(startIndex);
    // account for deleted prefix for end
    end -= startIndex;
    /**
     * Remove suffix
     * Remove whole suffix part if its present on the value
     * If the suffix is partially deleted (in which case change end index will be greater than the suffixStartIndex)
     * remove the partial part of suffix
     */
    var endIndex = value.length;
    var suffixStartIndex = value.length - suffix.length;
    if (value.endsWith(suffix))
        { endIndex = suffixStartIndex; }
    // if the suffix is removed from the end
    else if (end > suffixStartIndex)
        { endIndex = end; }
    // if the suffix is removed from start
    else if (end > value.length - suffix.length)
        { endIndex = end; }
    value = value.substring(0, endIndex);
    // add the negation back and handle for double negation
    value = handleNegation(hasNegation ? ("-" + value) : value, allowNegative);
    // remove non numeric characters
    value = (value.match(getNumberRegex(decimalSeparator, true)) || []).join('');
    // replace the decimalSeparator with ., and only keep the first separator, ignore following ones
    var firstIndex = value.indexOf(decimalSeparator);
    value = value.replace(new RegExp(escapeRegExp(decimalSeparator), 'g'), function (match, index) {
        return index === firstIndex ? '.' : '';
    });
    //check if beforeDecimal got deleted and there is nothing after decimal,
    //clear all numbers in such case while keeping the - sign
    var ref$2 = splitDecimal(value, allowNegative);
    var beforeDecimal = ref$2.beforeDecimal;
    var afterDecimal = ref$2.afterDecimal;
    var addNegation = ref$2.addNegation; // eslint-disable-line prefer-const
    //clear only if something got deleted before decimal (cursor is before decimal)
    if (to.end - to.start < from.end - from.start &&
        beforeDecimal === '' &&
        isBeforeDecimalSeparator &&
        !parseFloat(afterDecimal)) {
        value = addNegation ? '-' : '';
    }
    return value;
}
function getCaretBoundary(formattedValue, props) {
    var prefix = props.prefix; if ( prefix === void 0 ) prefix = '';
    var suffix = props.suffix; if ( suffix === void 0 ) suffix = '';
    var boundaryAry = Array.from({ length: formattedValue.length + 1 }).map(function () { return true; });
    var hasNegation = formattedValue[0] === '-';
    // fill for prefix and negation
    boundaryAry.fill(false, 0, prefix.length + (hasNegation ? 1 : 0));
    // fill for suffix
    var valLn = formattedValue.length;
    boundaryAry.fill(false, valLn - suffix.length + 1, valLn + 1);
    return boundaryAry;
}
function validateAndUpdateProps(props) {
    var ref = getSeparators(props);
    var thousandSeparator = ref.thousandSeparator;
    var decimalSeparator = ref.decimalSeparator;
    // eslint-disable-next-line prefer-const
    var prefix = props.prefix; if ( prefix === void 0 ) prefix = '';
    var allowNegative = props.allowNegative; if ( allowNegative === void 0 ) allowNegative = true;
    if (thousandSeparator === decimalSeparator) {
        throw new Error(("\n        Decimal separator can't be same as thousand separator.\n        thousandSeparator: " + thousandSeparator + " (thousandSeparator = {true} is same as thousandSeparator = \",\")\n        decimalSeparator: " + decimalSeparator + " (default value for decimalSeparator is .)\n     "));
    }
    if (prefix.startsWith('-') && allowNegative) {
        // TODO: throw error in next major version
        console.error(("\n      Prefix can't start with '-' when allowNegative is true.\n      prefix: " + prefix + "\n      allowNegative: " + allowNegative + "\n    "));
        allowNegative = false;
    }
    return Object.assign(Object.assign({}, props), { allowNegative: allowNegative });
}
function useNumericFormat(props) {
    // validate props
    props = validateAndUpdateProps(props);
    props.decimalSeparator;
    props.allowedDecimalSeparators;
    props.thousandsGroupStyle;
    var suffix = props.suffix;
    var allowNegative = props.allowNegative;
    var allowLeadingZeros = props.allowLeadingZeros;
    var onKeyDown = props.onKeyDown; if ( onKeyDown === void 0 ) onKeyDown = noop;
    var onBlur = props.onBlur; if ( onBlur === void 0 ) onBlur = noop;
    var thousandSeparator = props.thousandSeparator;
    var decimalScale = props.decimalScale;
    var fixedDecimalScale = props.fixedDecimalScale;
    var prefix = props.prefix; if ( prefix === void 0 ) prefix = '';
    var defaultValue = props.defaultValue;
    var value = props.value;
    var valueIsNumericString = props.valueIsNumericString;
    var onValueChange = props.onValueChange;
    var restProps = __rest(props, ["decimalSeparator", "allowedDecimalSeparators", "thousandsGroupStyle", "suffix", "allowNegative", "allowLeadingZeros", "onKeyDown", "onBlur", "thousandSeparator", "decimalScale", "fixedDecimalScale", "prefix", "defaultValue", "value", "valueIsNumericString", "onValueChange"]);
    // get derived decimalSeparator and allowedDecimalSeparators
    var ref = getSeparators(props);
    var decimalSeparator = ref.decimalSeparator;
    var allowedDecimalSeparators = ref.allowedDecimalSeparators;
    var _format = function (numStr) { return format(numStr, props); };
    var _removeFormatting = function (inputValue, changeMeta) { return removeFormatting(inputValue, changeMeta, props); };
    var _value = isNil(value) ? defaultValue : value;
    // try to figure out isValueNumericString based on format prop and value
    var _valueIsNumericString = valueIsNumericString !== null && valueIsNumericString !== void 0 ? valueIsNumericString : isNumericString(_value, prefix, suffix);
    if (!isNil(value)) {
        _valueIsNumericString = _valueIsNumericString || typeof value === 'number';
    }
    else if (!isNil(defaultValue)) {
        _valueIsNumericString = _valueIsNumericString || typeof defaultValue === 'number';
    }
    var roundIncomingValueToPrecision = function (value) {
        if (isNotValidValue(value))
            { return value; }
        if (typeof value === 'number') {
            value = toNumericString(value);
        }
        /**
         * only round numeric or float string values coming through props,
         * we don't need to do it for onChange events, as we want to prevent typing there
         */
        if (_valueIsNumericString && typeof decimalScale === 'number') {
            return roundToPrecision(value, decimalScale, Boolean(fixedDecimalScale));
        }
        return value;
    };
    var ref$1 = useInternalValues(roundIncomingValueToPrecision(value), roundIncomingValueToPrecision(defaultValue), Boolean(_valueIsNumericString), _format, _removeFormatting, onValueChange);
    var ref$1_0 = ref$1[0];
    var numAsString = ref$1_0.numAsString;
    var formattedValue = ref$1_0.formattedValue;
    var _onValueChange = ref$1[1];
    var _onKeyDown = function (e) {
        var el = e.target;
        var key = e.key;
        var selectionStart = el.selectionStart;
        var selectionEnd = el.selectionEnd;
        var value = el.value; if ( value === void 0 ) value = '';
        // if multiple characters are selected and user hits backspace, no need to handle anything manually
        if (selectionStart !== selectionEnd) {
            onKeyDown(e);
            return;
        }
        // if user hits backspace, while the cursor is before prefix, and the input has negation, remove the negation
        if (key === 'Backspace' &&
            value[0] === '-' &&
            selectionStart === prefix.length + 1 &&
            allowNegative) {
            // bring the cursor to after negation
            setCaretPosition(el, 1);
        }
        // don't allow user to delete decimal separator when decimalScale and fixedDecimalScale is set
        if (decimalScale && fixedDecimalScale) {
            if (key === 'Backspace' && value[selectionStart - 1] === decimalSeparator) {
                setCaretPosition(el, selectionStart - 1);
                e.preventDefault();
            }
            else if (key === 'Delete' && value[selectionStart] === decimalSeparator) {
                e.preventDefault();
            }
        }
        // if user presses the allowed decimal separator before the separator, move the cursor after the separator
        if ((allowedDecimalSeparators === null || allowedDecimalSeparators === void 0 ? void 0 : allowedDecimalSeparators.includes(key)) && value[selectionStart] === decimalSeparator) {
            setCaretPosition(el, selectionStart + 1);
        }
        var _thousandSeparator = thousandSeparator === true ? ',' : thousandSeparator;
        // move cursor when delete or backspace is pressed before/after thousand separator
        if (key === 'Backspace' && value[selectionStart - 1] === _thousandSeparator) {
            setCaretPosition(el, selectionStart - 1);
        }
        if (key === 'Delete' && value[selectionStart] === _thousandSeparator) {
            setCaretPosition(el, selectionStart + 1);
        }
        onKeyDown(e);
    };
    var _onBlur = function (e) {
        var _value = numAsString;
        // if there no no numeric value, clear the input
        if (!_value.match(/\d/g)) {
            _value = '';
        }
        // clear leading 0s
        if (!allowLeadingZeros) {
            _value = fixLeadingZero(_value);
        }
        // apply fixedDecimalScale on blur event
        if (fixedDecimalScale && decimalScale) {
            _value = roundToPrecision(_value, decimalScale, fixedDecimalScale);
        }
        if (_value !== numAsString) {
            var formattedValue = format(_value, props);
            _onValueChange({
                formattedValue: formattedValue,
                value: _value,
                floatValue: parseFloat(_value),
            }, {
                event: e,
                source: SourceType.event,
            });
        }
        onBlur(e);
    };
    var isValidInputCharacter = function (inputChar) {
        if (inputChar === decimalSeparator)
            { return true; }
        return charIsNumber(inputChar);
    };
    var isCharacterSame = function (ref) {
        var currentValue = ref.currentValue;
        var lastValue = ref.lastValue;
        var formattedValue = ref.formattedValue;
        var currentValueIndex = ref.currentValueIndex;
        var formattedValueIndex = ref.formattedValueIndex;

        var curChar = currentValue[currentValueIndex];
        var newChar = formattedValue[formattedValueIndex];
        /**
         * NOTE: as thousand separator and allowedDecimalSeparators can be same, we need to check on
         * typed range if we have typed any character from allowedDecimalSeparators, in that case we
         * consider different characters like , and . same within the range of updated value.
         */
        var typedRange = findChangeRange(lastValue, currentValue);
        var to = typedRange.to;
        if (currentValueIndex >= to.start &&
            currentValueIndex < to.end &&
            allowedDecimalSeparators &&
            allowedDecimalSeparators.includes(curChar) &&
            newChar === decimalSeparator) {
            return true;
        }
        return curChar === newChar;
    };
    return Object.assign(Object.assign({}, restProps), { value: formattedValue, valueIsNumericString: false, isValidInputCharacter: isValidInputCharacter,
        isCharacterSame: isCharacterSame, onValueChange: _onValueChange, format: _format, removeFormatting: _removeFormatting, getCaretBoundary: function (formattedValue) { return getCaretBoundary(formattedValue, props); }, onKeyDown: _onKeyDown, onBlur: _onBlur });
}
function NumericFormat(props) {
    var numericFormatProps = useNumericFormat(props);
    return React__default["default"].createElement(NumberFormatBase, Object.assign({}, numericFormatProps));
}

// temp solution
var styles = {
    input: {
        "&::placeholder": {
            fontSize: "12px",
            fontFamily: "Inter",
        },
    },
};
var TextInput = material.styled(material.TextField)({
    width: "100%",
    fontSize: "14px",
    fontFamily: "Inter",
    "& .MuiOutlinedInput-root.Mui-focused": {
        "& > fieldset": {
            borderColor: "#253378",
        },
    },
    "& .MuiOutlinedInput-root:hover": {
        "& > fieldset": {
            borderColor: "#253378",
        },
    },
    "& .MuiInputLabel-asterisk": {
        color: "red",
    },
});
var SearchIcon = material.styled(SearchOutlinedIcon__default["default"])({
    fontSize: "18px",
});
var Error$1 = material.styled(ErrorIcon__default["default"])({
    color: "#C64343",
    fontSize: "18px",
});
var Wrapper = material.styled(material.Box)({
    display: "block",
    width: "100%",
    marginTop: "4px",
});
var CounterLabel = material.styled(material.InputLabel)({
    float: "right",
    fontFamily: "Inter",
    fontSize: "12px",
});
var FieldLabel$1 = material.styled(material.InputLabel)({
    textAlign: "left",
    fontSize: "12px",
    paddingBottom: "4px",
    fontFamily: "Inter",
});
var HelperLabel$1 = material.styled(material.InputLabel)({
    float: "left",
    fontSize: "12px",
    fontFamily: "Inter",
});
/**
 * Primary UI component for user interaction
 */
var KpFormInput = function (_a) {
    var register = _a.register, hasLabel = _a.hasLabel, label = _a.label, _b = _a.size, size = _b === void 0 ? "medium" : _b, isMandatory = _a.isMandatory, isMandatoryColor = _a.isMandatoryColor, placeholder = _a.placeholder, hasIcon = _a.hasIcon, hasHelperText = _a.hasHelperText, helperText = _a.helperText, maxChars = _a.maxChars, onClick = _a.onClick, hasCharCount = _a.hasCharCount, disabled = _a.disabled, error = _a.error, errorIcon = _a.errorIcon, onChange = _a.onChange, defaultValue = _a.defaultValue, _c = _a.isNumberInput, isNumberInput = _c === void 0 ? false : _c, props = __rest$1(_a, ["register", "hasLabel", "label", "size", "isMandatory", "isMandatoryColor", "placeholder", "hasIcon", "hasHelperText", "helperText", "maxChars", "onClick", "hasCharCount", "disabled", "error", "errorIcon", "onChange", "defaultValue", "isNumberInput"]);
    var _d = React.useState(0), textCount = _d[0], setTextCount = _d[1];
    var _e = React.useState(false), focused = _e[0], setFocused = _e[1];
    var _f = React.useState(typeof defaultValue !== "undefined" ? defaultValue : ""), value = _f[0], setValue = _f[1];
    var changeItem = function (e) {
        setTextCount(e.target.value.length);
        setValue(e.target.value);
    };
    React.useEffect(function () {
        if (isNumberInput) {
            var stringWithoutCommas = String(value).split(",").join("");
            onChange && onChange(stringWithoutCommas);
        }
        else {
            onChange && onChange(value);
        }
    }, [value]);
    function useOutsideAlerter(ref) {
        React.useEffect(function () {
            function handleClickOutside(event) {
                if (ref.current && !ref.current.contains(event.target)) {
                    setFocused(false);
                }
            }
            document.addEventListener("mousedown", handleClickOutside);
            return function () {
                document.removeEventListener("mousedown", handleClickOutside);
            };
        }, [ref]);
    }
    var color = disabled ? "#9E9E9E" : error ? "#C64343" : null;
    var inputRef = React.useRef(null);
    useOutsideAlerter(inputRef);
    return (jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [hasLabel && (jsxRuntime.jsx(FieldLabel$1, __assign({ sx: isMandatory
                    ? {
                        color: focused ? "#9E9E9E" : "#9E9E9E",
                        "&::after": { content: '"*"', color: isMandatoryColor },
                    }
                    : {
                        color: focused ? "#9E9E9E" : "#9E9E9E",
                    } }, { children: label }))), isNumberInput ? (jsxRuntime.jsx(NumericFormat, __assign({ value: value, thousandSeparator: ",", customInput: TextInput }, props, (register ? __assign({}, register) : { ref: inputRef }), { disabled: disabled, inputProps: { maxLength: maxChars }, onChange: function (e) { return changeItem(e); }, id: "search", size: size, variant: "outlined", onFocus: function () { return setFocused(true); }, placeholder: placeholder, sx: __assign({}, styles), InputProps: {
                    endAdornment: (jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [hasIcon && (jsxRuntime.jsx(material.IconButton, __assign({ disabled: disabled, onClick: onClick && onClick }, { children: jsxRuntime.jsx(SearchIcon, {}) }))), errorIcon && error && jsxRuntime.jsx(Error$1, {})] })),
                }, InputLabelProps: { sx: { color: color, fontSize: "14px" } } }))) : (jsxRuntime.jsx(TextInput, __assign({}, props, (register ? __assign({}, register) : { ref: inputRef }), { disabled: disabled, inputProps: { maxLength: maxChars }, onChange: function (e) { return changeItem(e); }, id: "search", size: size, variant: "outlined", onFocus: function () { return setFocused(true); }, value: value, placeholder: placeholder, sx: __assign({}, styles), InputProps: {
                    endAdornment: (jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [hasIcon && (jsxRuntime.jsx(material.IconButton, __assign({ disabled: disabled, onClick: onClick && onClick }, { children: jsxRuntime.jsx(SearchIcon, {}) }))), errorIcon && error && jsxRuntime.jsx(Error$1, {})] })),
                }, InputLabelProps: { sx: { color: color, fontSize: "14px" } } }))), hasHelperText && (jsxRuntime.jsxs(Wrapper, { children: [jsxRuntime.jsx(HelperLabel$1, __assign({ sx: { color: color } }, { children: helperText })), hasCharCount && (jsxRuntime.jsxs(CounterLabel, __assign({ sx: { color: color } }, { children: [textCount, "/", maxChars] })))] }))] }));
};

/**
 * Primary UI component for user interaction
 */
var KpAlert = function (_a) {
    var title = _a.title, content = _a.content, status = _a.status, hasIcon = _a.hasIcon, hasTitle = _a.hasTitle, hasClose = _a.hasClose, props = __rest$1(_a, ["title", "content", "status", "hasIcon", "hasTitle", "hasClose"]);
    var hasTitleStatus = hasTitle && hasTitle ? true : false;
    var hasIconStatus = hasIcon && hasIcon ? true : false;
    var onCloseHandler = hasClose && hasClose ? true : false;
    var _b = React.useState(true), showing = _b[0], setShowing = _b[1];
    var getTheamColor = function () {
        switch (status) {
            case 'error':
                return '#C64343';
            case 'warning':
                return '#EA9B42';
            case 'info':
                return '#253378';
            case 'success':
                return '#5FA562';
            default:
                return '#5FA562';
        }
    };
    var AlertComponent = styled$1(Alert__default["default"])({
        background: '#F4F4F6',
        borderLeft: "7px solid ".concat(getTheamColor()),
        borderRadius: '0 4px 4px 0',
        fontFamily: "Inter",
        fontSize: '14px',
        "& .MuiAlert-icon": {
            color: getTheamColor()
        },
        "& .MuiAlertTitle-root": {
            fontSize: '13px',
            paddingTop: '3px',
            fontFamily: "Inter",
            color: getTheamColor()
        },
        "& .MuiAlertMessage-root": {
            Padding: 100
        },
    });
    return (jsxRuntime.jsx(jsxRuntime.Fragment, { children: showing ?
            jsxRuntime.jsx(jsxRuntime.Fragment, { children: onCloseHandler ?
                    jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [hasIconStatus ?
                                jsxRuntime.jsxs(AlertComponent, __assign({}, props, { severity: status, onClose: function () { setShowing(false); } }, { children: [hasTitleStatus ? jsxRuntime.jsx(AlertTitle__default["default"], { children: title }) : null, content] }))
                                :
                                    jsxRuntime.jsxs(AlertComponent, __assign({}, props, { severity: status, onClose: function () { setShowing(false); }, icon: hasIconStatus }, { children: [hasTitleStatus ? jsxRuntime.jsx(AlertTitle__default["default"], { children: title }) : null, content] })), " "] })
                    :
                        jsxRuntime.jsx(jsxRuntime.Fragment, { children: hasIconStatus ?
                                jsxRuntime.jsxs(AlertComponent, __assign({}, props, { severity: status }, { children: [hasTitleStatus ? jsxRuntime.jsx(AlertTitle__default["default"], { children: title }) : null, content] }))
                                :
                                    jsxRuntime.jsxs(Alert__default["default"], __assign({}, props, { icon: hasIconStatus, severity: status }, { children: [hasTitleStatus ? jsxRuntime.jsx(AlertTitle__default["default"], { children: title }) : null, content] })) }) })
            : null }));
};

var KpSnackbar = function (_a) {
    var title = _a.title, content = _a.content, status = _a.status, hasTitle = _a.hasTitle, verticalPlacement = _a.verticalPlacement, horizontalPlacement = _a.horizontalPlacement, hasIcon = _a.hasIcon, hasClose = _a.hasClose, duration = _a.duration, onClose = _a.onClose; __rest$1(_a, ["title", "content", "status", "hasTitle", "verticalPlacement", "horizontalPlacement", "hasIcon", "hasClose", "duration", "onClose"]);
    var _b = React.useState(true), showing = _b[0], setShowing = _b[1];
    var hasTitleStatus = hasTitle && hasTitle ? true : false;
    var hasIconStatus = hasIcon && hasIcon ? true : false;
    var onCloseHandler = hasClose && hasClose ? true : false;
    var severityCurrent = status && status ? status : 'success';
    var getTheamColor = function () {
        switch (status) {
            case 'error':
                return '#C64343';
            case 'warning':
                return '#EA9B42';
            case 'info':
                return '#4387C6';
            case 'success':
                return '#5FA562';
            default: return '#5FA562';
        }
    };
    var AlertComponent = styled$1(Alert__default["default"])({
        borderRadius: '0 0 4px 4px',
        fontSize: '13px',
        height: 'auto',
        padding: '6px 15px',
        fontFamily: "Inter",
        color: '#1E2332',
        "& .MuiAlert-icon": {
            color: getTheamColor(),
            fontSize: '21px',
            paddingTop: 3,
            fontFamily: "Inter"
        },
        "& .MuiAlertTitle-root": {
            fontSize: '13px',
            fontFamily: "Inter",
            paddingTop: '0px',
            color: getTheamColor(),
        },
        "& .MuiAlert-message": {
            overflow: 'hidden',
            paddingTop: '5px',
            paddingBottom: 0,
        },
        "& .MuiAlert-action": {
            paddingTop: 0,
            fontSize: '12px',
            fontFamily: "Inter"
        }
    });
    React.useEffect(function () {
        setState({
            open: true,
            vertical: verticalPlacement || 'top',
            horizontal: horizontalPlacement || 'right'
        });
    }, [verticalPlacement, horizontalPlacement]);
    var _c = React__default["default"].useState({
        open: true,
        vertical: 'top',
        horizontal: 'left',
    }), state = _c[0], setState = _c[1];
    var vertical = state.vertical, horizontal = state.horizontal, open = state.open;
    var handleClose = function () {
        setState(__assign(__assign({}, state), { open: false }));
        typeof onClose !== "undefined" && onClose(state);
    };
    return (jsxRuntime.jsx(jsxRuntime.Fragment, { children: showing ? jsxRuntime.jsx(jsxRuntime.Fragment, { children: onCloseHandler ?
                jsxRuntime.jsx(jsxRuntime.Fragment, { children: hasIconStatus ?
                        jsxRuntime.jsx(Snackbar__default["default"], __assign({ open: open, anchorOrigin: { vertical: vertical, horizontal: horizontal }, autoHideDuration: duration, onClose: handleClose }, { children: jsxRuntime.jsxs(AlertComponent, __assign({ onClose: function () { setShowing(false); }, severity: severityCurrent }, { children: [hasTitleStatus ? jsxRuntime.jsx(AlertTitle__default["default"], { children: title }) : null, content] })) }))
                        :
                            jsxRuntime.jsx(Snackbar__default["default"], __assign({ open: open, anchorOrigin: { vertical: vertical, horizontal: horizontal }, autoHideDuration: duration, onClose: handleClose }, { children: jsxRuntime.jsxs(AlertComponent, __assign({ onClose: function () { setShowing(false); }, icon: hasIconStatus, severity: severityCurrent }, { children: [hasTitleStatus ? jsxRuntime.jsx(AlertTitle__default["default"], { children: title }) : null, content] })) })) }) :
                jsxRuntime.jsx(jsxRuntime.Fragment, { children: hasIconStatus ?
                        jsxRuntime.jsx(Snackbar__default["default"], __assign({ open: open, anchorOrigin: { vertical: vertical, horizontal: horizontal }, autoHideDuration: duration, onClose: handleClose }, { children: jsxRuntime.jsxs(AlertComponent, __assign({ severity: severityCurrent }, { children: [hasTitleStatus ? jsxRuntime.jsx(AlertTitle__default["default"], { children: title }) : null, content] })) }))
                        :
                            jsxRuntime.jsx(Snackbar__default["default"], __assign({ open: open, anchorOrigin: { vertical: vertical, horizontal: horizontal }, autoHideDuration: duration, onClose: handleClose }, { children: jsxRuntime.jsxs(AlertComponent, __assign({ icon: hasIconStatus, severity: severityCurrent }, { children: [hasTitleStatus ? jsxRuntime.jsx(AlertTitle__default["default"], { children: title }) : null, content] })) })) }) })
            : null }));
};

var FormControlWrapper = material.styled(material.FormControl)({
    width: "100%",
});
var SelectField = material.styled(material.Select)({
    width: '100%',
    fontSize: '14px',
    textAlign: 'start',
    fontFamily: "Inter",
    height: '40px',
    '.MuiOutlinedInput-notchedOutline': {
        borderColor: "#C1C4CD",
    },
    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
        borderColor: "#253378",
    },
    '&:hover .MuiOutlinedInput-notchedOutline': {
        borderColor: "#C1C4CD",
    },
});
var SelectMenuItem = material.styled(material.MenuItem)({
    fontFamily: "Inter",
    fontSize: '12px'
});
var FieldLabel = material.styled(material.InputLabel)({
    textAlign: 'left',
    fontSize: '12px',
    paddingBottom: '4px',
    fontFamily: "Inter"
});
var HelperLabel = material.styled(material.InputLabel)({
    float: 'left',
    fontSize: '12px',
    paddingTop: '4px',
    fontFamily: "Inter"
});
var Placeholder = material.styled(material.InputLabel)({
    float: 'left',
    fontSize: '12px',
    fontFamily: "Inter"
});
material.styled(ErrorIcon__default["default"])({
    color: "#C64343",
    fontSize: "18px"
});
var InputField = material.styled(material.TextField)({
    width: '98%',
    margin: '10px',
    fontSize: '14px',
});
function getStyles(name, Option, theme) {
    return {
        fontWeight: Option.indexOf(name) === -1
            ? theme.typography.fontWeightRegular
            : theme.typography.fontWeightMedium,
    };
}
var KpFormSelect = function (_a) {
    var register = _a.register, hasLabel = _a.hasLabel, label = _a.label, placeholder = _a.placeholder, value = _a.value, hasHelperText = _a.hasHelperText, helperText = _a.helperText, isMandatory = _a.isMandatory, isMandatoryColor = _a.isMandatoryColor, onChange = _a.onChange, disabled = _a.disabled, error = _a.error, data = _a.data, _b = _a.withSearch, withSearch = _b === void 0 ? false : _b, _c = _a.searchFieldPlaceholder, searchFieldPlaceholder = _c === void 0 ? "Type to search..." : _c;
    var theme = styles$1.useTheme();
    var color = disabled ? "#9E9E9E" : error ? "#C64343" : null;
    var _d = React.useState([]), Option = _d[0], setOption = _d[1];
    var _e = React.useState(false), focused = _e[0], setFocused = _e[1];
    var selectRef = React.useRef(null);
    var _f = React.useState(""), searchText = _f[0], setSearchText = _f[1];
    var containsText = function (text, searchText) { return text.toLowerCase().indexOf(searchText.toLowerCase()) > -1; };
    var displayedOptions = React.useMemo(function () { return data.filter(function (option) { return containsText(option, searchText); }); }, [searchText]);
    var handleChange = function (event) {
        var value = event.target.value;
        setOption(typeof value === 'string' ? value.split(',') : value);
    };
    React.useEffect(function () {
        onChange(Option);
    }, [Option, onChange]);
    React.useEffect(function () {
        if (typeof value !== 'undefined' && value !== null) {
            setOption(typeof data[value] === 'string' ? data[value].split(',') : data[value]);
        }
    }, []);
    function useOutsideAlerter(ref) {
        React.useEffect(function () {
            function handleClickOutside(event) {
                if (ref.current && !ref.current.contains(event.target)) {
                    setFocused(false);
                }
            }
            document.addEventListener("mousedown", handleClickOutside);
            return function () {
                document.removeEventListener("mousedown", handleClickOutside);
            };
        }, [ref]);
    }
    useOutsideAlerter(selectRef);
    return (jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [hasLabel && (jsxRuntime.jsx(FieldLabel, __assign({ sx: isMandatory
                    ? {
                        color: focused ? "#9E9E9E" : "#9E9E9E",
                        "&::after": { content: '"*"', color: isMandatoryColor },
                    }
                    : {
                        color: focused ? "#9E9E9E" : "#9E9E9E",
                    } }, { children: label }))), jsxRuntime.jsx(FormControlWrapper, __assign({ variant: "outlined", required: isMandatory }, { children: jsxRuntime.jsxs(SelectField, __assign({}, (register ? __assign({}, register) : { ref: selectRef }), { onFocus: function () { return setFocused(true); }, displayEmpty: true, disabled: disabled, value: Option, onChange: handleChange, renderValue: function (selected) {
                        if (selected.length === 1) {
                            return selected.join(', ');
                        }
                        return jsxRuntime.jsx(Placeholder, { children: placeholder });
                    } }, { children: [withSearch &&
                            jsxRuntime.jsx(InputField, { size: "small", autoFocus: true, placeholder: searchFieldPlaceholder, fullWidth: true, inputProps: {
                                    startAdornment: (jsxRuntime.jsx(material.InputAdornment, __assign({ position: "start" }, { children: jsxRuntime.jsx(SearchIcon__default["default"], {}) })))
                                }, onKeyDown: function (e) {
                                    if (e.key !== "Escape") {
                                        e.stopPropagation();
                                    }
                                }, onChange: function (e) { return setSearchText(e.target.value); } }), displayedOptions.map(function (dataObj) { return (jsxRuntime.jsx(SelectMenuItem, __assign({ value: dataObj, style: getStyles(dataObj, Option, theme) }, { children: dataObj }), dataObj)); })] })) })), hasHelperText && jsxRuntime.jsx(HelperLabel, __assign({ sx: { color: color } }, { children: helperText }))] }));
};

var tabJsxElement = function (word) {
    return jsxRuntime.jsx(Typography__default["default"], __assign({ sx: { fontFamily: "Inter" } }, { children: word }));
};
var tabImageJSX = function () {
    return jsxRuntime.jsx(PhoneMissedIcon__default["default"], {});
};
/**
 * Primary UI component for user interaction
 */
var KpTabs = function (_a) {
    var tabsDataArray = _a.tabsDataArray, props = __rest$1(_a, ["tabsDataArray"]);
    var data = tabsDataArray || [];
    var _b = React__namespace.useState(props.currentTab || "1"), value = _b[0], setValue = _b[1];
    var handleChange = function (event, newValue) {
        setValue(newValue);
    };
    var TabComponent = styled$1(Tab__default["default"])({
        fontSize: "14px",
        fontFamily: "Inter",
        height: "21px",
        padding: "0 7.5px",
        maxWidth: "200px",
        textTransform: "none",
        color: "#151D44",
        "&.Mui-selected": {
            fontSize: "14px",
            fontFamily: "Inter",
            color: "#151D44",
            fontWeight: 600,
        },
    });
    return (jsxRuntime.jsx(jsxRuntime.Fragment, { children: jsxRuntime.jsx(Box__default["default"], __assign({ sx: { width: "100%", typography: "body1" } }, { children: jsxRuntime.jsxs(TabContext__default["default"], __assign({ value: value }, { children: [jsxRuntime.jsx(Box__default["default"], __assign({ sx: { borderBottom: 1, borderColor: "divider" } }, { children: jsxRuntime.jsx(TabList__default["default"], __assign({ TabIndicatorProps: {
                                style: {
                                    backgroundColor: "#151D44",
                                },
                            }, onChange: handleChange, "aria-label": "lab API tabs example" }, { children: data &&
                                data.map(function (item) { return (jsxRuntime.jsx(TabComponent, { disabled: item.disabled, label: item.tabLable, value: item.tabCode, icon: (item === null || item === void 0 ? void 0 : item.icons) ? item === null || item === void 0 ? void 0 : item.icons : "", iconPosition: (item === null || item === void 0 ? void 0 : item.iconPosition) ? item === null || item === void 0 ? void 0 : item.iconPosition : "end" }, item.tabCode)); }) })) })), data &&
                        data.map(function (item) { return (jsxRuntime.jsx(TabPanel__default["default"], __assign({ value: item.tabCode }, { children: item.tabContent }), item.tabCode)); })] })) })) }));
};

var sampleInnerComponent = function () {
    return (jsxRuntime.jsx(MailIcon__default["default"], {}));
};
var KpBadge = function (_a) {
    var type = _a.type, value = _a.value, maxCount = _a.maxCount, color = _a.color, vertical = _a.vertical, horizontal = _a.horizontal, innerComponent = _a.innerComponent; __rest$1(_a, ["type", "value", "maxCount", "color", "vertical", "horizontal", "innerComponent"]);
    var BadgeComponent = styled$1(Badge__default["default"])({
        "& .MuiBadge-badge": {
            background: color,
            color: '#ffff',
            fontFamily: "Inter"
        }
    });
    return (jsxRuntime.jsx(jsxRuntime.Fragment, { children: jsxRuntime.jsx(BadgeComponent, __assign({ variant: type, anchorOrigin: {
                vertical: vertical,
                horizontal: horizontal,
            }, badgeContent: value && value, max: maxCount && maxCount }, { children: innerComponent })) }));
};

var sampleInnerTooltipComponent = function () {
    return (jsxRuntime.jsx(Button__default["default"], __assign({ style: { margin: '60px 200px', fontFamily: "Inter" } }, { children: 'Sample Inner Component' })));
};
var KpTooltip = function (_a) {
    var position = _a.position, content = _a.content, innerComponent = _a.innerComponent; __rest$1(_a, ["position", "content", "innerComponent"]);
    return (jsxRuntime.jsx(jsxRuntime.Fragment, { children: jsxRuntime.jsx(material.Tooltip, __assign({ title: content, placement: position, arrow: true, PopperProps: {
                sx: {
                    "& .MuiTooltip-tooltip": {
                        background: '#1E2332',
                        borderRadius: '3px',
                        fontFamily: "Inter"
                    },
                    "& .MuiTooltip-arrow": {
                        "&:before": {
                            background: '#1E2332',
                        },
                    }
                }
            } }, { children: innerComponent })) }));
};

var css_248z$1 = ".custom-sidebar>div{background:#f4f4f6!important;overflow:inherit!important}.css-10hburv-MuiTypography-root{font-family:Inter,-apple-system,BlinkMacSystemFont,‘Segoe Ui’,sans-serif!important;line-height:21px!important}.MuiListItemText-root{margin-bottom:0!important;margin-top:0!important}.MuiListItemText-primary{font-family:Inter,-apple-system,BlinkMacSystemFont,‘Segoe Ui’,sans-serif!important;font-size:14px!important;line-height:21px!important}.icon-wrapper{align-items:center;display:flex}.hide-SideMenu-text{text-indent:-9999px}.hide-SubMenu-list{display:none!important}.setMargin-top{margin-top:0}.menuHover-Text{background:#1e2332;border-radius:5px;color:#fff;display:none;font-size:12px;line-height:18px;min-width:95px;position:absolute;right:-81px;text-align:center;top:4px;width:auto}.sideMenu-hover:hover>.menuHover-Text{display:block;text-indent:0}";
styleInject(css_248z$1);

function KpSidebarMenu(_a) {
    var currentRoute = _a.currentRoute, open = _a.open, onRouteChange = _a.onRouteChange;
    var _b = React.useState(), menu = _b[0], setMenu = _b[1];
    var _c = React.useState(open), isSideBarOpen = _c[0]; _c[1];
    var navigate = reactRouterDom.useNavigate();
    React.useEffect(function () {
        organizeMenu(currentRoute);
    }, [currentRoute]);
    var organizeMenu = function (path) {
        onRouteChange(path, setMenu);
    };
    var onMenuItemClick = function (menuItem) {
        navigate(menuItem.link);
    };
    return (jsxRuntime.jsx(material.Box, __assign({ sx: { height: "100%" } }, { children: jsxRuntime.jsx(material.List, __assign({ component: "nav", "aria-labelledby": "nested-list-subheader" }, { children: isSideBarOpen &&
                (menu === null || menu === void 0 ? void 0 : menu.map(function (menuItem, index) {
                    return (jsxRuntime.jsxs(material.ListItemButton, __assign({ sx: {
                            backgroundColor: menuItem.isCurrentStep ? "white" : "",
                            pointerEvents: menuItem.isGroupItem ? "none" : "",
                            borderRadius: "6px",
                            marginRight: "10px",
                            marginLeft: "10px",
                            marginBottom: "6px",
                        }, onClick: function () { return onMenuItemClick(menuItem); } }, { children: [menuItem.icon && (jsxRuntime.jsx(material.ListItemIcon, __assign({ sx: {
                                    minWidth: "40px",
                                    opacity: menuItem.isGroupItem &&
                                        !menuItem.isCompletedStep &&
                                        !menuItem.isCurrentStep
                                        ? "0.2"
                                        : "1",
                                } }, { children: menuItem.icon }))), menuItem.isGroupItem && (jsxRuntime.jsx(material.Box, __assign({ sx: {
                                    marginRight: "1rem",
                                    width: "25px",
                                    height: "25px",
                                    borderRadius: "50%",
                                    backgroundColor: menuItem.isCompletedStep && index !== 4
                                        ? "#666C7F"
                                        : "#fff",
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    fontSize: "14px",
                                    fontWeight: "700",
                                    color: menuItem.isCompletedStep && index !== 4
                                        ? "#fff"
                                        : "#1E2332",
                                    border: menuItem.isCompletedStep && index !== 4
                                        ? ""
                                        : "1px solid #1E2332",
                                    opacity: menuItem.isGroupItem &&
                                        !menuItem.isCompletedStep &&
                                        !menuItem.isCurrentStep
                                        ? "0.2"
                                        : "1",
                                } }, { children: index }))), jsxRuntime.jsx(material.ListItemText, { primaryTypographyProps: {
                                    fontWeight: menuItem.isCurrentStep
                                        ? "700 !important"
                                        : "400 !important",
                                }, sx: {
                                    color: "black",
                                    opacity: menuItem.isGroupItem &&
                                        !menuItem.isCompletedStep &&
                                        !menuItem.isCurrentStep
                                        ? "0.2"
                                        : "1",
                                }, primary: menuItem.title }), menuItem.isParent && !menuItem.isBackAllow && (jsxRuntime.jsx(material.ListItemIcon, __assign({ sx: { marginLeft: "6rem" } }, { children: jsxRuntime.jsx(ArrowForwardIcon__default["default"], {}) })))] }), menuItem.id));
                })) })) })));
}

/**
 * Primary UI component for user interaction
 */
var KpSidebar = function (_a) {
    //if (listItems && listItems?.length === 0) return null;
    var listItems = _a.listItems, title = _a.title, footer = _a.footer; _a.activeMenuColor; var backGroundColor = _a.backGroundColor, sidebarHeight = _a.sidebarHeight, sidbarToggleClick = _a.sidbarToggleClick, onClick = _a.onClick, _b = _a.isMenuSideBar, isMenuSideBar = _b === void 0 ? false : _b, _c = _a.currentRoute, currentRoute = _c === void 0 ? "/" : _c, onMenuRouteChange = _a.onMenuRouteChange, preventCollapseOnSelect = _a.preventCollapseOnSelect, hideText = _a.hideText, onHoverText = _a.onHoverText, props = __rest$1(_a, ["listItems", "title", "footer", "activeMenuColor", "backGroundColor", "sidebarHeight", "sidbarToggleClick", "onClick", "isMenuSideBar", "currentRoute", "onMenuRouteChange", "preventCollapseOnSelect", "hideText", "onHoverText"]);
    var _d = React.useState(true), open = _d[0], setOpen = _d[1];
    var _e = React.useState(false), openSubItem = _e[0], setOpenSubItem = _e[1];
    var _f = React.useState(null), subItemIndex = _f[0], setSubItemIndex = _f[1];
    var _g = React.useState([]), openedSubItems = _g[0], setOpenedSubItems = _g[1];
    var _h = React.useState(0), selectedGroup = _h[0], setSelectedGroup = _h[1];
    var _j = React.useState(0), selectedItem = _j[0], setSelectedItem = _j[1];
    React.useEffect(function () {
        sessionStorage.removeItem("openedSubItems");
    }, []);
    React.useEffect(function () {
        listItems === null || listItems === void 0 ? void 0 : listItems.forEach(function (data, index) {
            setActiveParentItemIndex(data, index);
        });
    }, [listItems]);
    var location = reactRouterDom.useLocation();
    // Checks for active sub-items. If any sub-item is active, it sets the parent's index as selected.
    var setActiveParentItemIndex = function (dataObject, parentIndex) {
        var _a;
        if ("subItems" in dataObject &&
            ((_a = dataObject.subItems) === null || _a === void 0 ? void 0 : _a.find(function (item) { return item.active; }))) {
            onSubitemClick(parentIndex);
            setOpenedSubItems(function (prevState) { return __spreadArray(__spreadArray([], prevState, true), [parentIndex], false); });
            var sessionStorageArray = sessionStorage.getItem("openedSubItems");
            var storedArray = sessionStorageArray
                ? __spreadArray(__spreadArray([], JSON.parse(sessionStorageArray), true), [parentIndex], false) : [];
            sessionStorage.setItem("openedSubItems", JSON.stringify(storedArray));
        }
    };
    var toggleSlider = function () {
        setOpen(!open);
        sidbarToggleClick && sidbarToggleClick(!open);
    };
    var handleListItemClick = function (event, listItem) {
        if (listItem.group) {
            setSelectedGroup(listItem.id);
        }
        else {
            setSelectedGroup(0);
            setSelectedItem(listItem.id);
        }
        localStorage.setItem("selectedItem", JSON.stringify(listItem.id));
        onClick && onClick(listItem.id);
    };
    var onSubitemClick = function (index) {
        if (preventCollapseOnSelect) {
            if (!openedSubItems.includes(index)) {
                setOpenedSubItems(function (prevState) {
                    var newState = __spreadArray(__spreadArray([], prevState, true), [index], false);
                    sessionStorage.setItem("openedSubItems", JSON.stringify(newState));
                    return newState;
                });
            }
            else {
                setOpenedSubItems(function (prevState) {
                    var newState = prevState.filter(function (item) { return item !== index; });
                    sessionStorage.setItem("openedSubItems", JSON.stringify(newState));
                    return newState;
                });
            }
        }
        else {
            if (subItemIndex === index) {
                setOpenSubItem(!openSubItem);
            }
            else {
                setOpenSubItem(true);
            }
            setSubItemIndex(index);
        }
    };
    var subMenuStyle = function () {
        return {
            backgroundColor: backGroundColor ? backGroundColor : "#F4F4F6",
            display: "block",
        };
    };
    var listItemTextStyle = function (isSelected) {
        if (isSelected)
            return {
                fontWeight: "700",
                color: "#1E2332",
            };
        else
            return {
                fontWeight: "400",
                color: "#666C7F",
            };
    };
    var subItems = function (sublistItems, index) {
        var openedSubItemsJson = sessionStorage.getItem("openedSubItems");
        var openedSubItems = openedSubItemsJson
            ? JSON.parse(openedSubItemsJson)
            : [];
        var getRenderConditions = function () {
            if (preventCollapseOnSelect) {
                return openedSubItems.includes(index);
            }
            return subItemIndex === index && openSubItem;
        };
        return (jsxRuntime.jsx(jsxRuntime.Fragment, { children: getRenderConditions() && (jsxRuntime.jsx(material.Box, __assign({ component: "div", style: __assign({}, subMenuStyle()), className: !open && hideText ? "hide-SubMenu-list" : "" }, { children: jsxRuntime.jsx(material.List, { children: sublistItems &&
                        sublistItems.map(function (listItem, index) {
                            return (jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [React.createElement(material.ListItem, __assign({ sx: { paddingTop: "0px" } }, props, { key: index }), listItem.url ? (jsxRuntime.jsx(material.ListItemButton, __assign({ to: listItem.url, component: reactRouterDom.Link, sx: (location.pathname === listItem.url &&
                                            listItem.id === selectedItem) ||
                                            (listItem === null || listItem === void 0 ? void 0 : listItem.active)
                                            ? {
                                                backgroundColor: "white",
                                                borderRadius: "6px",
                                                ":hover": {
                                                    borderRadius: "6px",
                                                    backgroundColor: "white",
                                                },
                                            }
                                            : {
                                                ":hover": {
                                                    borderRadius: "6px",
                                                },
                                            }, onClick: function (event) {
                                            return handleListItemClick(event, listItem);
                                        }, className: !open && hideText ? "hide-SideMenu-text" : "" }, { children: listItem && listItem.listIcon && (jsxRuntime.jsx(jsxRuntime.Fragment, { children: jsxRuntime.jsx(material.ListItemText, { sx: {
                                                    paddingLeft: listItem.listIcon
                                                        ? "0px"
                                                        : "0px",
                                                    marginRight: "20px",
                                                    marginBottom: "0px",
                                                    marginLeft: listItem.listIcon
                                                        ? "20px"
                                                        : "-20px",
                                                }, primaryTypographyProps: listItemTextStyle((location.pathname === listItem.url &&
                                                    listItem.id === selectedItem) ||
                                                    !!listItem.active), primary: listItem.listText.length !== 0
                                                    ? listItem.listText
                                                    : "Item Name", className: !open && hideText
                                                    ? "hide-SideMenu-text"
                                                    : "" }) })) }))) : (jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [listItem && listItem.listIcon && (jsxRuntime.jsx("span", { children: listItem.listIcon })), listItem && (jsxRuntime.jsx("span", __assign({ className: !open && hideText ? "hide-SideMenu-text" : "" }, { children: listItem.listText.length !== 0
                                                    ? listItem.listText
                                                    : "Item Name" })))] }))), listItem.group && (jsxRuntime.jsxs(material.Box, __assign({ sx: {
                                            display: listItem.group.id === selectedGroup
                                                ? "block"
                                                : "none",
                                            backgroundColor: "white",
                                            padding: "8px 16px",
                                            margin: "8px 0px",
                                            borderRadius: "6px",
                                            userSelect: "none",
                                        } }, { children: [jsxRuntime.jsx(material.Box, __assign({ sx: { textAlign: "center", margin: "16px 0px" } }, { children: listItem.group.groupName.length !== 0
                                                    ? listItem.group.groupName
                                                    : "Group Name" })), listItem.group.groupItems.map(function (groupItem, index) {
                                                var _a;
                                                return (jsxRuntime.jsxs(material.Box, __assign({ sx: {
                                                        display: "flex",
                                                        alignItems: "center",
                                                        backgroundColor: groupItem.url === location.pathname
                                                            ? "#F4F4F6"
                                                            : "",
                                                        gap: "8px",
                                                        padding: "8px 16px",
                                                        marginBottom: "8px",
                                                        borderRadius: "6px",
                                                        marginLeft: "32px",
                                                    } }, { children: [jsxRuntime.jsx(material.Box, __assign({ sx: {
                                                                backgroundColor: groupItem.url === location.pathname
                                                                    ? (_a = listItem.group) === null || _a === void 0 ? void 0 : _a.color
                                                                    : "",
                                                                border: groupItem.url === location.pathname
                                                                    ? ""
                                                                    : "1px solid #1E2332",
                                                                color: groupItem.url === location.pathname
                                                                    ? "white"
                                                                    : "#1E2332",
                                                                width: "24px",
                                                                height: "24px",
                                                                padding: "2px 7px",
                                                                display: "flex",
                                                                justifyContent: "center",
                                                                alignItems: "center",
                                                                borderRadius: "12px",
                                                                fontSize: "14px",
                                                                fontWeight: "700",
                                                            }, className: !open && hideText
                                                                ? "hide-SideMenu-text"
                                                                : "" }, { children: groupItem.id })), jsxRuntime.jsx(material.Box, __assign({ sx: { marginTop: "2px" } }, { children: groupItem.content }))] }), index));
                                            })] })))] }));
                        }) }) }))) }));
    };
    var footerCss = function () {
        return {
            fontSize: "12px",
            lineHeight: "18px",
            backgroundColor: backGroundColor ? backGroundColor : "#F4F4F6",
            width: "250px",
            marginLeft: open ? "0" : "-235px",
            padding: "0 15px",
            boxSizing: "border-box",
            fontFamily: "Inter",
        };
    };
    var SideBarComponent = material.styled(material.Box)({
        flex: 1,
        backgroundColor: backGroundColor ? backGroundColor : "#F4F4F6",
        width: !open && hideText ? "78px" : "250px",
        marginLeft: !open && hideText ? "0px" : open ? "0" : "-235px",
        padding: "0 15px",
        boxSizing: "border-box",
        fontFamily: "Inter",
    });
    var getRenderConditionsForArrowIcons = function (index) {
        var openedSubItemsJson = sessionStorage.getItem("openedSubItems");
        var openedSubItems = openedSubItemsJson
            ? JSON.parse(openedSubItemsJson)
            : [];
        if (preventCollapseOnSelect) {
            return openedSubItems.includes(index);
        }
        return subItemIndex === index && openSubItem;
    };
    var sideList = function () { return (jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [!open ? (jsxRuntime.jsx(material.IconButton, __assign({ onClick: toggleSlider, style: {
                    background: "transparent",
                    position: "absolute",
                    right: "-27px",
                    top: "15px",
                } }, { children: jsxRuntime.jsx(Icon, { color: "#fff", iconName: "SVG-chevronRight", iconSize: 2, side: "left", type: exports.IconType.SVG }) }))) : (jsxRuntime.jsx(material.IconButton, __assign({ onClick: toggleSlider, style: {
                    background: "transparent",
                    position: "absolute",
                    right: "-27px",
                    top: "15px",
                } }, { children: jsxRuntime.jsx(Icon, { color: "#fff", iconName: "SVG-chevronLeft", iconSize: 2, side: "left", type: exports.IconType.SVG }) }))), jsxRuntime.jsxs(SideBarComponent, __assign({ component: "div", className: hideText ? "setMargin-top" : "" }, { children: [title && !hideText && (jsxRuntime.jsx("h3", __assign({ style: {
                            color: "#666C7F",
                            padding: "10px 16px",
                            fontSize: "16px",
                            letterSpacing: "0.15px",
                        } }, { children: !open && hideText ? "" : title }))), !isMenuSideBar ? (jsxRuntime.jsx(material.List, { children: listItems &&
                            listItems.map(function (listItem, index) { return (jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [React.createElement(material.ListItem, __assign({}, props, { key: index, onClick: function () { return onSubitemClick(index); }, sx: { padding: "0px", margin: "8px 0px" } }), listItem.url ? (jsxRuntime.jsxs(material.ListItemButton, __assign({ to: listItem.url, component: reactRouterDom.Link, onClick: function (event) {
                                            return handleListItemClick(event, listItem);
                                        }, sx: (location.pathname === listItem.url &&
                                            listItem.id === selectedItem) ||
                                            (listItem === null || listItem === void 0 ? void 0 : listItem.active)
                                            ? {
                                                backgroundColor: "white",
                                                borderRadius: "6px",
                                                height: "40px",
                                                ":hover": {
                                                    borderRadius: "6px",
                                                    backgroundColor: "white",
                                                },
                                            }
                                            : {
                                                ":hover": {
                                                    borderRadius: "6px",
                                                },
                                                height: "40px",
                                            }, className: !open && hideText ? "hide-SideMenu-text" : "" }, { children: [listItem && (jsxRuntime.jsxs(material.Box, __assign({ sx: { display: "flex", alignItems: "center" } }, { children: [(listItem === null || listItem === void 0 ? void 0 : listItem.listIcon) && (jsxRuntime.jsx(material.ListItemIcon, __assign({ sx: { minWidth: "0px" } }, { children: jsxRuntime.jsxs("span", __assign({ className: "icon-wrapper ".concat(!open && hideText && onHoverText
                                                                ? "sideMenu-hover"
                                                                : "") }, { children: [listItem.listIcon, !open && hideText && onHoverText && (jsxRuntime.jsx("span", __assign({ className: "menuHover-Text" }, { children: listItem.listText.length !== 0
                                                                        ? listItem.listText
                                                                        : "Item Name" })))] })) }))), jsxRuntime.jsx(material.ListItemText, { primary: listItem.listText.length !== 0
                                                            ? listItem.listText
                                                            : "Item Name", primaryTypographyProps: listItemTextStyle((location.pathname === listItem.url &&
                                                            listItem.id === selectedItem) ||
                                                            !!listItem.active), className: !open && hideText ? "hide-text" : "" })] }))), listItem && listItem.subItems && (jsxRuntime.jsx("span", __assign({ style: {
                                                    position: "absolute",
                                                    right: "0",
                                                    top: "10px",
                                                } }, { children: jsxRuntime.jsx(Icon, { color: listItem.active ? "#1E2332" : "#666C7F", iconName: getRenderConditionsForArrowIcons(index)
                                                        ? exports.ICONS.ARROWTOP
                                                        : exports.ICONS.ARROWDOWN, iconSize: 1.5, side: "left", type: exports.IconType.MUI }) })))] }))) : (jsxRuntime.jsxs(material.Box, __assign({ sx: {
                                            padding: "8px 16px",
                                            display: "flex",
                                            alignItems: "center",
                                        } }, { children: [listItem && listItem.listIcon && (jsxRuntime.jsx(jsxRuntime.Fragment, { children: jsxRuntime.jsxs("span", __assign({ className: !open && hideText && onHoverText
                                                        ? "sideMenu-hover"
                                                        : "" }, { children: [listItem.listIcon, !open && hideText && onHoverText && (jsxRuntime.jsx("span", __assign({ className: "menuHover-Text" }, { children: listItem.listText.length !== 0
                                                                ? listItem.listText
                                                                : "Item Name" })))] })) })), listItem && (jsxRuntime.jsx("span", __assign({ style: {
                                                    marginLeft: "".concat(listItem.listIcon ? "0px" : "32px"),
                                                    fontSize: "14px",
                                                    color: "#666C7F",
                                                    lineHeight: "21px",
                                                }, className: !open && hideText ? "hide-SideMenu-text" : "" }, { children: listItem.listText.length !== 0
                                                    ? listItem.listText
                                                    : "Item Name" }))), listItem && listItem.subItems && (jsxRuntime.jsx("span", __assign({ style: { position: "absolute", right: "0" }, className: !open && hideText ? "hide-SideMenu-text" : "" }, { children: jsxRuntime.jsx(Icon, { color: listItem.active ? "#1E2332" : "#666C7F", iconName: getRenderConditionsForArrowIcons(index)
                                                        ? exports.ICONS.ARROWTOP
                                                        : exports.ICONS.ARROWDOWN, iconSize: 1.5, side: "left", type: exports.IconType.MUI }) })))] })))), listItem &&
                                        listItem.subItems &&
                                        subItems(listItem.subItems, index), listItem.group && (jsxRuntime.jsxs(material.Box, __assign({ sx: {
                                            display: listItem.group.id === selectedGroup
                                                ? "block"
                                                : "none",
                                            backgroundColor: "white",
                                            padding: "8px 16px",
                                            margin: "8px 0px",
                                            borderRadius: "6px",
                                            userSelect: "none",
                                        } }, { children: [jsxRuntime.jsx(material.Box, __assign({ sx: { margin: "16px 0px", marginLeft: "32px" } }, { children: listItem.group.groupName.length !== 0
                                                    ? listItem.group.groupName
                                                    : "Group Name" })), listItem.group.groupItems.map(function (groupItem, index) {
                                                var _a;
                                                return (jsxRuntime.jsxs(material.Box, __assign({ sx: {
                                                        display: "flex",
                                                        alignItems: "center",
                                                        backgroundColor: groupItem.url === location.pathname
                                                            ? "#F4F4F6"
                                                            : "",
                                                        gap: "8px",
                                                        padding: "8px 16px",
                                                        marginBottom: "8px",
                                                        borderRadius: "6px",
                                                        marginLeft: "32px",
                                                    } }, { children: [jsxRuntime.jsx(material.Box, __assign({ sx: {
                                                                backgroundColor: groupItem.url === location.pathname
                                                                    ? (_a = listItem.group) === null || _a === void 0 ? void 0 : _a.color
                                                                    : "",
                                                                border: groupItem.url === location.pathname
                                                                    ? ""
                                                                    : "1px solid #1E2332",
                                                                color: groupItem.url === location.pathname
                                                                    ? "white"
                                                                    : "#1E2332",
                                                                width: "24px",
                                                                height: "24px",
                                                                padding: "2px 7px",
                                                                display: "flex",
                                                                justifyContent: "center",
                                                                alignItems: "center",
                                                                borderRadius: "12px",
                                                                fontSize: "14px",
                                                                fontWeight: "700",
                                                            } }, { children: groupItem.id })), jsxRuntime.jsx(material.Box, __assign({ sx: { marginTop: "2px", fontWeight: "700" } }, { children: groupItem.content }))] }), index));
                                            })] })))] })); }) })) : (jsxRuntime.jsx(KpSidebarMenu, { currentRoute: currentRoute, open: open, onRouteChange: function (path, setMenu) {
                            onMenuRouteChange && onMenuRouteChange(path, setMenu);
                        } }))] })), jsxRuntime.jsx("div", __assign({ style: __assign({}, footerCss()) }, { children: footer && footer }))] })); };
    return (jsxRuntime.jsx(material.Drawer, __assign({ variant: "permanent", open: open, anchor: "left", onClose: toggleSlider, sx: {
            backgroundColor: backGroundColor ? backGroundColor : "#F4F4F6",
            "& .MuiDrawer-root": {
                position: "absolute",
            },
            "& .MuiPaper-root": {
                position: "absolute",
            },
            height: sidebarHeight,
        }, className: "custom-sidebar" }, { children: jsxRuntime.jsx(jsxRuntime.Fragment, { children: sideList() }) })));
};

exports.VARIANTS = void 0;
(function (VARIANTS) {
    VARIANTS["DEFAULT"] = "Default";
    VARIANTS["SECONDARY"] = "Secondary";
    VARIANTS["TERTIARY"] = "Tertiary";
})(exports.VARIANTS || (exports.VARIANTS = {}));
exports.STATUS = void 0;
(function (STATUS) {
    STATUS["PRIMARY"] = "Primary";
    STATUS["SECONDARY"] = "Secondary";
    STATUS["SUCCESS"] = "Success";
    STATUS["WARNING"] = "Warning";
    STATUS["ERROR"] = "Error";
    STATUS["INFO"] = "Info";
    STATUS["DISABLED"] = "Disabled";
})(exports.STATUS || (exports.STATUS = {}));
/**
 * Primary UI component for user interaction
 */
var KpLabel = function (_a) {
    var _b = _a.variant, variant = _b === void 0 ? exports.VARIANTS.DEFAULT : _b, _c = _a.status, status = _c === void 0 ? exports.STATUS.PRIMARY : _c, content = _a.content, hasIconStatus = _a.hasIconStatus, icon = _a.icon, leftIconType = _a.leftIconType, iconColor = _a.iconColor, props = __rest$1(_a, ["variant", "status", "content", "hasIconStatus", "icon", "leftIconType", "iconColor"]);
    var checkVariant = function (type) {
        if (exports.VARIANTS.DEFAULT === type) {
            return "contained";
        }
        else if (exports.VARIANTS.SECONDARY === type) {
            return "outlined";
        }
        else if (exports.VARIANTS.TERTIARY === type) {
            return "text";
        }
        else {
            return "text";
        }
    };
    var styleOptions = function (variant, status) {
        if (exports.STATUS.PRIMARY === status) {
            switch (variant) {
                case exports.VARIANTS.DEFAULT:
                    return {
                        backgroundColor: "#253378",
                        "&:hover": {
                            backgroundColor: "#253378",
                            boxShadow: 'none'
                        },
                    };
                case exports.VARIANTS.SECONDARY:
                    return {
                        backgroundColor: "#EDEFF8",
                        color: "#253378",
                        "&:hover": {
                            backgroundColor: "#EDEFF8",
                            boxShadow: 'none',
                            border: 'none'
                        },
                    };
                case exports.VARIANTS.TERTIARY:
                    return {
                        backgroundColor: "#ffff",
                        color: '#253378',
                        border: '1px solid #253378',
                        "&:hover": {
                            backgroundColor: "#ffff",
                            boxShadow: 'none'
                        },
                    };
            }
        }
        else if (exports.STATUS.SECONDARY === status) {
            switch (variant) {
                case exports.VARIANTS.DEFAULT:
                    return {
                        backgroundColor: "#2D3D90",
                        "&:hover": {
                            backgroundColor: "#2D3D90",
                            boxShadow: 'none'
                        },
                    };
                case exports.VARIANTS.SECONDARY:
                    return {
                        backgroundColor: "#EDEFF8",
                        "&:hover": {
                            backgroundColor: "#EDEFF8",
                            boxShadow: 'none',
                            border: 'none'
                        },
                    };
                case exports.VARIANTS.TERTIARY:
                    return {
                        backgroundColor: "#ffff",
                        color: "#2D3D90",
                        border: '1px solid #2D3D90',
                        "&:hover": {
                            backgroundColor: "#ffff",
                            boxShadow: 'none'
                        },
                    };
            }
        }
        else if (exports.STATUS.SUCCESS === status) {
            switch (variant) {
                case exports.VARIANTS.DEFAULT:
                    return {
                        backgroundColor: "#5FA562",
                        "&:hover": {
                            backgroundColor: "#5FA562",
                            boxShadow: 'none'
                        },
                    };
                case exports.VARIANTS.SECONDARY:
                    return {
                        backgroundColor: "#EFF6EF",
                        color: '#5FA562',
                        "&:hover": {
                            backgroundColor: "#EFF6EF",
                            boxShadow: 'none',
                            border: 'none'
                        }
                    };
                case exports.VARIANTS.TERTIARY:
                    return {
                        backgroundColor: "#ffff",
                        color: '#5FA562',
                        border: '1px solid #5FA562',
                        "&:hover": {
                            backgroundColor: "#ffff",
                            boxShadow: 'none'
                        }
                    };
            }
        }
        else if (exports.STATUS.INFO === status) {
            switch (variant) {
                case exports.VARIANTS.DEFAULT:
                    return {
                        backgroundColor: "#4387C6",
                        "&:hover": {
                            backgroundColor: "#4387C6",
                            boxShadow: 'none'
                        }
                    };
                case exports.VARIANTS.SECONDARY:
                    return {
                        backgroundColor: "#ECF3F9",
                        color: "#4387C6",
                        "&:hover": {
                            backgroundColor: "#ECF3F9",
                            boxShadow: 'none',
                            border: 'none'
                        }
                    };
                case exports.VARIANTS.TERTIARY:
                    return {
                        backgroundColor: "#ffff",
                        border: '1px solid #4387C6',
                        color: "#4387C6",
                        "&:hover": {
                            backgroundColor: "#ffff",
                            boxShadow: 'none'
                        }
                    };
            }
        }
        else if (exports.STATUS.ERROR === status) {
            switch (variant) {
                case exports.VARIANTS.DEFAULT:
                    return {
                        backgroundColor: "#C64343",
                        "&:hover": {
                            backgroundColor: "#C64343",
                            boxShadow: 'none'
                        }
                    };
                case exports.VARIANTS.SECONDARY:
                    return {
                        backgroundColor: "#F9ECEC",
                        color: "#C64343",
                        "&:hover": {
                            backgroundColor: "#F9ECEC",
                            boxShadow: 'none',
                            border: 'none'
                        }
                    };
                case exports.VARIANTS.TERTIARY:
                    return {
                        backgroundColor: '#ffff',
                        border: '1px solid #C64343',
                        color: "#C64343",
                        "&:hover": {
                            backgroundColor: '#ffff',
                            boxShadow: 'none'
                        }
                    };
            }
        }
        else if (exports.STATUS.WARNING === status) {
            switch (variant) {
                case exports.VARIANTS.DEFAULT:
                    return {
                        backgroundColor: "#EA9B42",
                        "&:hover": {
                            backgroundColor: "#EA9B42",
                            boxShadow: 'none'
                        }
                    };
                case exports.VARIANTS.SECONDARY:
                    return {
                        backgroundColor: "#FDF5EC",
                        color: "#EA9B42",
                        "&:hover": {
                            backgroundColor: "#FDF5EC",
                            boxShadow: 'none',
                            border: 'none'
                        }
                    };
                case exports.VARIANTS.TERTIARY:
                    return {
                        backgroundColor: "#ffff",
                        color: "#EA9B42",
                        border: '1px solid #EA9B42',
                        "&:hover": {
                            backgroundColor: "#ffff",
                            boxShadow: 'none'
                        }
                    };
            }
        }
        else if (exports.STATUS.DISABLED === status) {
            switch (variant) {
                case exports.VARIANTS.DEFAULT:
                    return {
                        backgroundColor: "#9BA0AF",
                        "&:hover": {
                            backgroundColor: "#9BA0AF",
                            boxShadow: 'none'
                        }
                    };
                case exports.VARIANTS.SECONDARY:
                    return {
                        backgroundColor: "#E0E1E6",
                        color: "#9BA0AF",
                        "&:hover": {
                            backgroundColor: "#E0E1E6",
                            boxShadow: 'none',
                            border: 'none'
                        }
                    };
                case exports.VARIANTS.TERTIARY:
                    return {
                        backgroundColor: "#ffff",
                        color: "#9BA0AF",
                        border: '1px solid #9BA0AF',
                        "&:hover": {
                            backgroundColor: "#ffff",
                            boxShadow: 'none'
                        }
                    };
            }
        }
    };
    var BoxComponent = styled$1(material.Button)(__assign({ display: 'inline-flex', alignItems: 'flex-start', m: 1, p: 1, fontSize: '12px', "&:hover": {
            backgroundColor: 'none',
            boxShadow: 'none',
            border: 'none !important'
        }, cursor: 'default', lineHeight: '18px', padding: '5px 5px 3px 4px', border: 'none', boxShadow: 'none', borderRadius: "2px", textOverflow: 'ellipsis', justifyContent: 'space-between', fontFamily: "Inter" }, styleOptions(variant, status)));
    return (jsxRuntime.jsx(jsxRuntime.Fragment, { children: jsxRuntime.jsx(BoxComponent, __assign({ disableRipple: true, variant: checkVariant(variant) }, { children: jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [" ", hasIconStatus ?
                                jsxRuntime.jsx(Icon, __assign({ iconName: icon, side: 'left', type: leftIconType, color: iconColor, iconSize: 0.9 }, props))
                                : null] }), content] }) })) }));
};

var TitleLabel = material.styled(material.InputLabel)({
    fontSize: "32px",
    fontWeight: 500,
    lineHeight: "38.19px",
    color: "#1E2332",
    fontFamily: "Inter"
});
var DismissOverview = material.styled(material.InputLabel)({
    color: "#253378",
    fontSize: "14px",
    fontWeight: 400,
    lineHeight: "21px",
    textDecoration: "underline",
    textDecorationColor: "#253378",
    marginTop: "16px",
    cursor: 'pointer',
    fontFamily: "Inter"
});
var ContentData = material.styled(material.Typography)({
    display: "flex",
    fontSize: "16px",
    color: "#1E2332",
    lineHeight: "21px",
    fontWeight: 400,
    alignItems: "center",
    marginTop: "8px",
    fontFamily: "Inter"
});
var TextControllerExpand = material.styled(material.InputLabel)({
    color: "#253378",
    fontSize: "14px",
    fontWeight: 400,
    lineHeight: "21px",
    textDecoration: "underline",
    textDecorationColor: "#253378",
    cursor: 'pointer',
    fontFamily: "Inter"
});
var TextControllerCollapse = material.styled(material.InputLabel)({
    color: "#253378",
    fontSize: "14px",
    fontWeight: 400,
    lineHeight: "21px",
    textDecoration: "underline",
    textDecorationColor: "#253378",
    cursor: 'pointer',
    fontFamily: "Inter",
});
var NavWrapper = material.styled('div')({
    display: 'table',
    cursor: 'pointer',
});
var NavIcon = material.styled(Icon)({
    color: "#243173",
    display: "table-cell",
    verticalAlign: "middle"
});
var NavText = material.styled(material.Typography)({
    color: "#243173",
    fontSize: '14px',
    fontWeight: 700,
    lineHeight: '21px',
    fontFamily: "Inter",
    display: "table-cell",
    verticalAlign: "middle",
});
var KpOverview = function (_a) {
    // type,
    _a.stepper; var title = _a.title, content = _a.content, contentLength = _a.contentLength, contentDismissible = _a.contentDismissible, navigationText = _a.navigationText, navigationIcon = _a.navigationIcon, iconType = _a.iconType, onNavPress = _a.onNavPress, withNavigation = _a.withNavigation, _b = _a.showActionButton, showActionButton = _b === void 0 ? true : _b, onActionBtnClick = _a.onActionBtnClick, actionBtnText = _a.actionBtnText; __rest$1(_a, ["stepper", "title", "content", "contentLength", "contentDismissible", "navigationText", "navigationIcon", "iconType", "onNavPress", "withNavigation", "showActionButton", "onActionBtnClick", "actionBtnText"]);
    var _c = React.useState(false), isExpanded = _c[0], setExpand = _c[1];
    var _d = React.useState(false), dismiss = _d[0], setDismiss = _d[1];
    var onBtnClick = function () {
        if (typeof onNavPress !== 'undefined') {
            onNavPress();
        }
    };
    return (jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [withNavigation &&
                jsxRuntime.jsxs(NavWrapper, __assign({ onClick: onBtnClick }, { children: [jsxRuntime.jsx(NavIcon, { iconName: navigationIcon, type: iconType, color: "#243173" }), jsxRuntime.jsx(NavText, { children: navigationText })] })), jsxRuntime.jsxs(Stack__default["default"], __assign({ direction: "row", spacing: 4, mt: 1, mr: 3, sx: { alignItems: "center" } }, { children: [jsxRuntime.jsx(TitleLabel, { children: title }), showActionButton &&
                        jsxRuntime.jsx(NavText, __assign({ sx: { cursor: 'pointer', textTransform: "uppercase", alignItems: "right" }, onClick: function (e) { return onActionBtnClick === null || onActionBtnClick === void 0 ? void 0 : onActionBtnClick(title); } }, { children: actionBtnText }))] })), !dismiss && (jsxRuntime.jsx(jsxRuntime.Fragment, { children: content.length > contentLength ? (jsxRuntime.jsx(jsxRuntime.Fragment, { children: !isExpanded ? (jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [jsxRuntime.jsx(ContentData, { children: content.slice(0, contentLength) }), jsxRuntime.jsx(TextControllerExpand, __assign({ onClick: function () { return setExpand(true); } }, { children: "Expand content" }))] })) : (jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [jsxRuntime.jsx(ContentData, { children: content }), jsxRuntime.jsx(TextControllerCollapse, __assign({ onClick: function () { return setExpand(false); } }, { children: "Collapse content" }))] })) })) : (jsxRuntime.jsx(jsxRuntime.Fragment, { children: jsxRuntime.jsx(ContentData, { children: content }) })) })), !dismiss && contentDismissible !== "" && (jsxRuntime.jsx(DismissOverview, __assign({ onClick: function () { return setDismiss(true); } }, { children: contentDismissible })))] }));
};

var KpLogo = function (_a) {
    var color = _a.color, _b = _a.width, width = _b === void 0 ? 1165 : _b, _c = _a.height, height = _c === void 0 ? 345 : _c; __rest$1(_a, ["color", "width", "height"]);
    var logoStyles = {
        display: 'flex',
        alignItems: 'center',
        height: '100%',
        width: '100%'
    };
    var blueLogo = function () {
        return (jsxRuntime.jsxs("svg", __assign({ width: width, height: height, viewBox: "0 0 1165 345", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, { children: [jsxRuntime.jsx("mask", __assign({ id: "mask0_1111_8855", style: { maskType: 'luminance' }, maskUnits: "userSpaceOnUse", x: "145", y: "83", width: "182", height: "182" }, { children: jsxRuntime.jsx("path", { d: "M236.11 115.212C268.491 115.212 290.439 139.521 290.439 173.998C290.439 208.044 268.491 232.784 236.11 232.784C204.067 232.784 181.758 208.838 181.758 173.998C181.758 139.884 204.067 115.212 236.11 115.212ZM236.11 264.719C288.997 264.719 326.786 225.884 326.786 173.93C326.786 121.726 288.997 83.1405 236.47 83.1405C183.561 83.1405 145.411 121.976 145.411 174.225C145.411 226.247 183.561 264.719 236.11 264.719Z", fill: "white" }) })), jsxRuntime.jsx("g", __assign({ mask: "url(#mask0_1111_8855)" }, { children: jsxRuntime.jsx("path", { d: "M329.039 81.0069H143.158V266.989H329.039V81.0069Z", fill: "#151D44" }) })), jsxRuntime.jsx("mask", __assign({ id: "mask1_1111_8855", style: { maskType: 'luminance' }, maskUnits: "userSpaceOnUse", x: "349", y: "83", width: "171", height: "260" }, { children: jsxRuntime.jsx("path", { d: "M384.743 173.998C384.743 139.952 404.528 114.486 439.072 114.486C455.364 114.122 471.356 118.943 484.771 128.263V215.353C470.755 228.789 454.553 233.511 437.63 233.511C404.888 233.511 384.743 209.565 384.743 173.998ZM437.269 342.73C486.844 342.73 519.698 315.879 519.698 265.083V110.128C495.226 92.3556 469.673 83.2766 438.351 83.2766C384.743 83.2766 349.477 122.475 349.477 174.066C349.477 228.54 381.859 264.856 431.884 264.856C451.906 265.306 471.386 258.281 486.573 245.132C486.213 251.668 485.852 258.932 485.852 265.832C485.852 294.862 468.231 311.544 436.909 311.544C417.845 311.544 395.537 305.37 376.067 294.135L362.389 322.802C384.022 334.378 411.017 342.73 437.269 342.73Z", fill: "white" }) })), jsxRuntime.jsx("g", __assign({ mask: "url(#mask1_1111_8855)" }, { children: jsxRuntime.jsx("path", { d: "M521.952 81.0069H347.224V345H521.952V81.0069Z", fill: "#151D44" }) })), jsxRuntime.jsx("mask", __assign({ id: "mask2_1111_8855", style: { maskType: 'luminance' }, maskUnits: "userSpaceOnUse", x: "550", y: "83", width: "149", height: "177" }, { children: jsxRuntime.jsx("path", { d: "M550.209 259.272H585.114V163.421C585.114 133.665 604.2 114.44 629.032 114.44C650.259 114.44 663.577 127.128 663.577 151.46V259.227H698.549V144.968C698.549 106.133 674.799 83.2766 639.173 83.2766C616.504 83.2766 597.417 91.9924 583.739 108.675L582.658 88.724H550.209V259.272Z", fill: "white" }) })), jsxRuntime.jsx("g", __assign({ mask: "url(#mask2_1111_8855)" }, { children: jsxRuntime.jsx("path", { d: "M700.735 81.0069H547.956V261.542H700.735V81.0069Z", fill: "#151D44" }) })), jsxRuntime.jsx("mask", __assign({ id: "mask3_1111_8855", style: { maskType: 'luminance' }, maskUnits: "userSpaceOnUse", x: "731", y: "88", width: "36", height: "172" }, { children: jsxRuntime.jsx("path", { d: "M766.083 88.724H731.178V259.272H766.083V88.724Z", fill: "white" }) })), jsxRuntime.jsx("g", __assign({ mask: "url(#mask3_1111_8855)" }, { children: jsxRuntime.jsx("path", { d: "M768.337 86.4543H728.925V261.542H768.337V86.4543Z", fill: "#151D44" }) })), jsxRuntime.jsx("mask", __assign({ id: "mask4_1111_8855", style: { maskType: 'luminance' }, maskUnits: "userSpaceOnUse", x: "794", y: "37", width: "91", height: "226" }, { children: jsxRuntime.jsx("path", { d: "M859.644 262.54C867.923 262.403 876.149 261.182 884.116 258.909L881.254 228.789C877.137 229.874 872.911 230.483 868.657 230.605C855.7 230.605 850.292 222.979 850.292 194.289V117.754H879.812V88.724H850.292V37.1783H815.387V88.724H794.16V117.754H815.387V197.581C815.387 243.656 829.786 262.54 859.644 262.54Z", fill: "white" }) })), jsxRuntime.jsx("g", __assign({ mask: "url(#mask4_1111_8855)" }, { children: jsxRuntime.jsx("path", { d: "M886.391 34.9086H791.907V264.788H886.391V34.9086Z", fill: "#151D44" }) })), jsxRuntime.jsx("mask", __assign({ id: "mask5_1111_8855", style: { maskType: 'luminance' }, maskUnits: "userSpaceOnUse", x: "914", y: "88", width: "36", height: "172" }, { children: jsxRuntime.jsx("path", { d: "M949.261 88.724H914.356V259.272H949.261V88.724Z", fill: "white" }) })), jsxRuntime.jsx("g", __assign({ mask: "url(#mask5_1111_8855)" }, { children: jsxRuntime.jsx("path", { d: "M951.514 86.4543H912.103V261.542H951.514V86.4543Z", fill: "#151D44" }) })), jsxRuntime.jsx("mask", __assign({ id: "mask6_1111_8855", style: { maskType: 'luminance' }, maskUnits: "userSpaceOnUse", x: "974", y: "88", width: "172", height: "172" }, { children: jsxRuntime.jsx("path", { d: "M1047.82 259.272H1072.3L1145.4 92.3556V88.724H1110.49L1080.61 162.014C1073.42 179.809 1065.85 200.123 1060.83 213.537C1056.14 200.123 1048.59 179.809 1041.38 162.014L1011.16 88.724H974.814V92.3556L1047.82 259.272Z", fill: "white" }) })), jsxRuntime.jsx("g", __assign({ mask: "url(#mask6_1111_8855)" }, { children: jsxRuntime.jsx("path", { d: "M1147.65 86.4543H972.561V261.542H1147.65V86.4543Z", fill: "#151D44" }) })), jsxRuntime.jsx("mask", __assign({ id: "mask7_1111_8855", style: { maskType: 'luminance' }, maskUnits: "userSpaceOnUse", x: "1121", y: "222", width: "42", height: "40" }, { children: jsxRuntime.jsx("path", { d: "M1142.31 261.973C1154.18 261.973 1162.75 253.802 1162.75 242.34C1162.75 230.878 1154.18 222.707 1142.31 222.707C1130.43 222.707 1121.53 230.878 1121.53 242.34C1121.53 253.802 1130.1 261.973 1142.31 261.973Z", fill: "white" }) })), jsxRuntime.jsx("g", __assign({ mask: "url(#mask7_1111_8855)" }, { children: jsxRuntime.jsx("path", { d: "M1165 220.437H1119.28V264.265H1165V220.437Z", fill: "#22DBD1" }) })), jsxRuntime.jsx("mask", __assign({ id: "mask8_1111_8855", style: { maskType: 'luminance' }, maskUnits: "userSpaceOnUse", x: "726", y: "17", width: "43", height: "40" }, { children: jsxRuntime.jsx("path", { d: "M747.718 56.7434C759.594 56.7434 768.156 48.5497 768.156 37.0875C768.156 25.6253 759.594 17.4543 747.718 17.4543C735.505 17.4543 726.942 25.648 726.942 37.0875C726.942 48.527 735.505 56.7434 747.718 56.7434Z", fill: "white" }) })), jsxRuntime.jsx("g", __assign({ mask: "url(#mask8_1111_8855)" }, { children: jsxRuntime.jsx("path", { d: "M770.41 15.2753H724.689V59.104H770.41V15.2753Z", fill: "#151D44" }) })), jsxRuntime.jsx("mask", __assign({ id: "mask9_1111_8855", style: { maskType: 'luminance' }, maskUnits: "userSpaceOnUse", x: "911", y: "17", width: "42", height: "40" }, { children: jsxRuntime.jsx("path", { d: "M931.887 56.7434C943.763 56.7434 952.348 48.5497 952.348 37.0875C952.348 25.6253 943.763 17.4543 931.887 17.4543C920.012 17.4543 911.134 25.648 911.134 37.0875C911.134 48.527 919.697 56.7434 931.887 56.7434Z", fill: "white" }) })), jsxRuntime.jsx("g", __assign({ mask: "url(#mask9_1111_8855)" }, { children: jsxRuntime.jsx("path", { d: "M954.601 15.2753H908.88V59.104H954.601V15.2753Z", fill: "#151D44" }) })), jsxRuntime.jsx("mask", __assign({ id: "mask10_1111_8855", style: { maskType: 'luminance' }, maskUnits: "userSpaceOnUse", x: "2", y: "2", width: "38", height: "258" }, { children: jsxRuntime.jsx("path", { d: "M39.1187 2.26973H2.25336V259.794H39.1187V2.26973Z", fill: "white" }) })), jsxRuntime.jsx("g", __assign({ mask: "url(#mask10_1111_8855)" }, { children: jsxRuntime.jsx("path", { d: "M41.3721 0H0V262.064H41.3721V0Z", fill: "#151D44" }) })), jsxRuntime.jsx("mask", __assign({ id: "mask11_1111_8855", style: { maskType: 'luminance' }, maskUnits: "userSpaceOnUse", x: "21", y: "87", width: "129", height: "175" }, { children: jsxRuntime.jsx("path", { d: "M21.7677 174.679L101.538 261.973H149.76L70.8464 174.679L147.259 87.3849L98.9461 87.748L21.7677 174.679Z", fill: "white" }) })), jsxRuntime.jsx("g", __assign({ mask: "url(#mask11_1111_8855)" }, { children: jsxRuntime.jsx("path", { d: "M151.991 85.1151H19.5143V264.243H151.991V85.1151Z", fill: "#22DBD1" }) }))] })));
    };
    var whiteLogo = function () {
        return (jsxRuntime.jsxs("svg", __assign({ width: width, height: height, viewBox: "0 0 1165 345", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, { children: [jsxRuntime.jsx("mask", __assign({ id: "mask0_1111_8855", style: { maskType: 'luminance' }, maskUnits: "userSpaceOnUse", x: "145", y: "83", width: "182", height: "182" }, { children: jsxRuntime.jsx("path", { d: "M236.11 115.212C268.491 115.212 290.439 139.521 290.439 173.998C290.439 208.044 268.491 232.784 236.11 232.784C204.067 232.784 181.758 208.838 181.758 173.998C181.758 139.884 204.067 115.212 236.11 115.212ZM236.11 264.719C288.997 264.719 326.786 225.884 326.786 173.93C326.786 121.726 288.997 83.1405 236.47 83.1405C183.561 83.1405 145.411 121.976 145.411 174.225C145.411 226.247 183.561 264.719 236.11 264.719Z", fill: "white" }) })), jsxRuntime.jsx("g", __assign({ mask: "url(#mask0_1111_8855)" }, { children: jsxRuntime.jsx("path", { d: "M329.039 81.0069H143.158V266.989H329.039V81.0069Z", fill: "white" }) })), jsxRuntime.jsx("mask", __assign({ id: "mask1_1111_8855", style: { maskType: 'luminance' }, maskUnits: "userSpaceOnUse", x: "349", y: "83", width: "171", height: "260" }, { children: jsxRuntime.jsx("path", { d: "M384.743 173.998C384.743 139.952 404.528 114.486 439.072 114.486C455.364 114.122 471.356 118.943 484.771 128.263V215.353C470.755 228.789 454.553 233.511 437.63 233.511C404.888 233.511 384.743 209.565 384.743 173.998ZM437.269 342.73C486.844 342.73 519.698 315.879 519.698 265.083V110.128C495.226 92.3556 469.673 83.2766 438.351 83.2766C384.743 83.2766 349.477 122.475 349.477 174.066C349.477 228.54 381.859 264.856 431.884 264.856C451.906 265.306 471.386 258.281 486.573 245.132C486.213 251.668 485.852 258.932 485.852 265.832C485.852 294.862 468.231 311.544 436.909 311.544C417.845 311.544 395.537 305.37 376.067 294.135L362.389 322.802C384.022 334.378 411.017 342.73 437.269 342.73Z", fill: "white" }) })), jsxRuntime.jsx("g", __assign({ mask: "url(#mask1_1111_8855)" }, { children: jsxRuntime.jsx("path", { d: "M521.952 81.0069H347.224V345H521.952V81.0069Z", fill: "white" }) })), jsxRuntime.jsx("mask", __assign({ id: "mask2_1111_8855", style: { maskType: 'luminance' }, maskUnits: "userSpaceOnUse", x: "550", y: "83", width: "149", height: "177" }, { children: jsxRuntime.jsx("path", { d: "M550.209 259.272H585.114V163.421C585.114 133.665 604.2 114.44 629.032 114.44C650.259 114.44 663.577 127.128 663.577 151.46V259.227H698.549V144.968C698.549 106.133 674.799 83.2766 639.173 83.2766C616.504 83.2766 597.417 91.9924 583.739 108.675L582.658 88.724H550.209V259.272Z", fill: "white" }) })), jsxRuntime.jsx("g", __assign({ mask: "url(#mask2_1111_8855)" }, { children: jsxRuntime.jsx("path", { d: "M700.735 81.0069H547.956V261.542H700.735V81.0069Z", fill: "white" }) })), jsxRuntime.jsx("mask", __assign({ id: "mask3_1111_8855", style: { maskType: 'luminance' }, maskUnits: "userSpaceOnUse", x: "731", y: "88", width: "36", height: "172" }, { children: jsxRuntime.jsx("path", { d: "M766.083 88.724H731.178V259.272H766.083V88.724Z", fill: "white" }) })), jsxRuntime.jsx("g", __assign({ mask: "url(#mask3_1111_8855)" }, { children: jsxRuntime.jsx("path", { d: "M768.337 86.4543H728.925V261.542H768.337V86.4543Z", fill: "white" }) })), jsxRuntime.jsx("mask", __assign({ id: "mask4_1111_8855", style: { maskType: 'luminance' }, maskUnits: "userSpaceOnUse", x: "794", y: "37", width: "91", height: "226" }, { children: jsxRuntime.jsx("path", { d: "M859.644 262.54C867.923 262.403 876.149 261.182 884.116 258.909L881.254 228.789C877.137 229.874 872.911 230.483 868.657 230.605C855.7 230.605 850.292 222.979 850.292 194.289V117.754H879.812V88.724H850.292V37.1783H815.387V88.724H794.16V117.754H815.387V197.581C815.387 243.656 829.786 262.54 859.644 262.54Z", fill: "white" }) })), jsxRuntime.jsx("g", __assign({ mask: "url(#mask4_1111_8855)" }, { children: jsxRuntime.jsx("path", { d: "M886.391 34.9086H791.907V264.788H886.391V34.9086Z", fill: "white" }) })), jsxRuntime.jsx("mask", __assign({ id: "mask5_1111_8855", style: { maskType: 'luminance' }, maskUnits: "userSpaceOnUse", x: "914", y: "88", width: "36", height: "172" }, { children: jsxRuntime.jsx("path", { d: "M949.261 88.724H914.356V259.272H949.261V88.724Z", fill: "white" }) })), jsxRuntime.jsx("g", __assign({ mask: "url(#mask5_1111_8855)" }, { children: jsxRuntime.jsx("path", { d: "M951.514 86.4543H912.103V261.542H951.514V86.4543Z", fill: "white" }) })), jsxRuntime.jsx("mask", __assign({ id: "mask6_1111_8855", style: { maskType: 'luminance' }, maskUnits: "userSpaceOnUse", x: "974", y: "88", width: "172", height: "172" }, { children: jsxRuntime.jsx("path", { d: "M1047.82 259.272H1072.3L1145.4 92.3556V88.724H1110.49L1080.61 162.014C1073.42 179.809 1065.85 200.123 1060.83 213.537C1056.14 200.123 1048.59 179.809 1041.38 162.014L1011.16 88.724H974.814V92.3556L1047.82 259.272Z", fill: "white" }) })), jsxRuntime.jsx("g", __assign({ mask: "url(#mask6_1111_8855)" }, { children: jsxRuntime.jsx("path", { d: "M1147.65 86.4543H972.561V261.542H1147.65V86.4543Z", fill: "white" }) })), jsxRuntime.jsx("mask", __assign({ id: "mask7_1111_8855", style: { maskType: 'luminance' }, maskUnits: "userSpaceOnUse", x: "1121", y: "222", width: "42", height: "40" }, { children: jsxRuntime.jsx("path", { d: "M1142.31 261.973C1154.18 261.973 1162.75 253.802 1162.75 242.34C1162.75 230.878 1154.18 222.707 1142.31 222.707C1130.43 222.707 1121.53 230.878 1121.53 242.34C1121.53 253.802 1130.1 261.973 1142.31 261.973Z", fill: "white" }) })), jsxRuntime.jsx("g", __assign({ mask: "url(#mask7_1111_8855)" }, { children: jsxRuntime.jsx("path", { d: "M1165 220.437H1119.28V264.265H1165V220.437Z", fill: "#22DBD1" }) })), jsxRuntime.jsx("mask", __assign({ id: "mask8_1111_8855", style: { maskType: 'luminance' }, maskUnits: "userSpaceOnUse", x: "726", y: "17", width: "43", height: "40" }, { children: jsxRuntime.jsx("path", { d: "M747.718 56.7434C759.594 56.7434 768.156 48.5497 768.156 37.0875C768.156 25.6253 759.594 17.4543 747.718 17.4543C735.505 17.4543 726.942 25.648 726.942 37.0875C726.942 48.527 735.505 56.7434 747.718 56.7434Z", fill: "white" }) })), jsxRuntime.jsx("g", __assign({ mask: "url(#mask8_1111_8855)" }, { children: jsxRuntime.jsx("path", { d: "M770.41 15.2753H724.689V59.104H770.41V15.2753Z", fill: "white" }) })), jsxRuntime.jsx("mask", __assign({ id: "mask9_1111_8855", style: { maskType: 'luminance' }, maskUnits: "userSpaceOnUse", x: "911", y: "17", width: "42", height: "40" }, { children: jsxRuntime.jsx("path", { d: "M931.887 56.7434C943.763 56.7434 952.348 48.5497 952.348 37.0875C952.348 25.6253 943.763 17.4543 931.887 17.4543C920.012 17.4543 911.134 25.648 911.134 37.0875C911.134 48.527 919.697 56.7434 931.887 56.7434Z", fill: "white" }) })), jsxRuntime.jsx("g", __assign({ mask: "url(#mask9_1111_8855)" }, { children: jsxRuntime.jsx("path", { d: "M954.601 15.2753H908.88V59.104H954.601V15.2753Z", fill: "white" }) })), jsxRuntime.jsx("mask", __assign({ id: "mask10_1111_8855", style: { maskType: 'luminance' }, maskUnits: "userSpaceOnUse", x: "2", y: "2", width: "38", height: "258" }, { children: jsxRuntime.jsx("path", { d: "M39.1187 2.26973H2.25336V259.794H39.1187V2.26973Z", fill: "white" }) })), jsxRuntime.jsx("g", __assign({ mask: "url(#mask10_1111_8855)" }, { children: jsxRuntime.jsx("path", { d: "M41.3721 0H0V262.064H41.3721V0Z", fill: "white" }) })), jsxRuntime.jsx("mask", __assign({ id: "mask11_1111_8855", style: { maskType: 'luminance' }, maskUnits: "userSpaceOnUse", x: "21", y: "87", width: "129", height: "175" }, { children: jsxRuntime.jsx("path", { d: "M21.7677 174.679L101.538 261.973H149.76L70.8464 174.679L147.259 87.3849L98.9461 87.748L21.7677 174.679Z", fill: "white" }) })), jsxRuntime.jsx("g", __assign({ mask: "url(#mask11_1111_8855)" }, { children: jsxRuntime.jsx("path", { d: "M151.991 85.1151H19.5143V264.243H151.991V85.1151Z", fill: "#22DBD1" }) }))] })));
    };
    return (jsxRuntime.jsx("div", __assign({ style: logoStyles }, { children: color && color == 'Blue' ? blueLogo() : whiteLogo() })));
};

var HeaderWrapper = material.styled('div')({
    width: '100%',
    height: '64px',
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottom: '1px solid #E0E1E6',
    boxSizing: 'border-box',
    paddingInline: '16px'
});
var LeftWrapper = material.styled('div')({
    display: 'flex',
    alignItems: 'center',
    height: '100%'
});
var ProductWrapper = material.styled('div')({
    display: "flex",
    flexDirection: 'row',
    height: '100%',
    alignItems: 'center',
});
var LogoWrapper = material.styled('div')({
    height: '28px',
    width: '95.24px',
});
material.styled(material.Typography)({
    fontSize: '16px',
    fontWeight: 700,
    lineHeight: '19.36px',
    fontFamily: "Inter",
    color: '#1E2332'
});
var PlatformTextButton = material.styled(material.IconButton)({
    fontSize: '16px',
    fontWeight: 700,
    lineHeight: '19.36px',
    fontFamily: "Inter",
    color: '#1E2332',
});
var SwitcherWrapper = material.styled('div')({
    width: '185px',
    display: 'flex',
    flexDirection: 'row',
    marginLeft: '8px',
    paddingLeft: '16px',
    alignItems: 'center',
});
var TabWrapper = material.styled('div')({
    display: 'flex',
    marginLeft: '24px'
});
var TabButton = material.styled(material.Tab)({
    display: 'block',
    fontSize: '14px',
    lineHeight: '21px',
    color: '#151D44',
    textTransform: 'capitalize',
});
var RightWrapper = material.styled('div')({
    display: 'flex',
    width: '515px',
    alignItems: 'center',
    justifyContent: 'flex-end',
    height: '100%',
});
var ClientText = material.styled(material.Typography)({
    color: '#9BA0AF',
    fontSize: '14px',
    fontFamily: "Inter"
});
var Line1 = material.styled(material.Divider)({
    marginTop: '8px',
    marginBottom: '8px',
    marginLeft: '24px',
    marginRight: '24px',
    borderColor: '#E0E1E6'
});
var Line2 = material.styled(material.Divider)({
    marginTop: '8px',
    marginBottom: '8px',
    marginRight: '24px',
    borderColor: '#E0E1E6'
});
var IconWrapper = material.styled('div')({
    display: 'flex',
    flexDirection: 'row'
});
var IconBtn = material.styled(material.IconButton)({
    width: '24px',
    height: '24px',
    marginRight: '24px'
});
var UserWrapper = material.styled('div')({
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
});
var UserDetailsWrapper = material.styled('div')({
    display: 'flex',
    flexDirection: 'column',
    marginLeft: '8px'
});
var UserAvatar = material.styled(material.Avatar)({
    width: '40px',
    height: '40px'
});
var UserName = material.styled(material.Typography)({
    fontSize: '14px',
    fontWeight: 400,
    lineHeight: '21px',
    color: '#1E2332',
    fontFamily: "Inter"
});
var UserRole = material.styled(material.Typography)({
    fontSize: '12px',
    fontWeight: 400,
    lineHeight: '18px',
    color: '#9BA0AF',
    fontFamily: "Inter"
});
var IconBtnDropDown = material.styled(material.IconButton)({
    width: '24px',
    height: '24px',
    marginLeft: '14px',
});
var ContentHolder = material.styled('div')({
    display: 'flex',
    position: 'absolute',
    backgroundColor: '#ffffff',
    zIndex: 1500,
    top: '40px',
    overflow: 'hidden',
    boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.15)',
    borderRadius: '4px'
});
var randomColor = Math.floor(Math.random() * 16777215).toString(16);
var TestJSXElementOne = function () {
    return (jsxRuntime.jsxs(material.Box, __assign({ sx: { width: '200px', display: 'flex', flexDirection: 'column' } }, { children: [jsxRuntime.jsx(material.Typography, __assign({ sx: { fontFamily: "Inter" } }, { children: "Access Manger" })), jsxRuntime.jsx(material.Typography, __assign({ sx: { fontFamily: "Inter" } }, { children: "Pulse" }))] })));
};
var TestJSXElementTwo = function () {
    return (jsxRuntime.jsxs(material.Box, __assign({ sx: { display: 'flex', width: '200px', flexDirection: 'column' } }, { children: [jsxRuntime.jsx(material.Typography, __assign({ sx: { fontFamily: "Inter" } }, { children: "Change Tenant..." })), jsxRuntime.jsx(material.Typography, __assign({ sx: { fontFamily: "Inter" } }, { children: "Logout" }))] })));
};
var DropDownMenu = function (_a) {
    var dropDownOpenIcon = _a.dropDownOpenIcon, dropDownCloseIcon = _a.dropDownCloseIcon, dropDownIconSize = _a.dropDownIconSize, iconColor = _a.iconColor, iconType = _a.iconType, content = _a.content, triggerOpen = _a.triggerOpen, props = __rest$1(_a, ["dropDownOpenIcon", "dropDownCloseIcon", "dropDownIconSize", "iconColor", "iconType", "content", "triggerOpen"]);
    var _b = React.useState(triggerOpen), isOpen = _b[0], setOpen = _b[1];
    var contentHolderRef = React.useRef(null);
    var toggleBtn = function () {
        setOpen(!isOpen);
    };
    React.useEffect(function () {
        document.addEventListener("mousedown", handleOutsideClick);
        return function () {
            document.removeEventListener("mousedown", handleOutsideClick);
        };
    });
    var handleOutsideClick = function (e) {
        if (contentHolderRef.current && !contentHolderRef.current.contains(e.target)) {
            setOpen(false);
        }
    };
    React.useEffect(function () {
        setOpen(triggerOpen);
    }, [triggerOpen]);
    return (jsxRuntime.jsx(jsxRuntime.Fragment, { children: jsxRuntime.jsxs(IconBtnDropDown, __assign({ disableRipple: true, onClick: toggleBtn }, { children: [jsxRuntime.jsx(Icon, { iconName: isOpen ? dropDownCloseIcon : dropDownOpenIcon, iconSize: dropDownIconSize, color: iconColor, type: iconType }), isOpen &&
                    jsxRuntime.jsx(ContentHolder, __assign({ ref: contentHolderRef }, props, { children: content }))] })) }));
};
var KpHeader = function (_a) {
    var tabs = _a.tabs, productName = _a.productName, companyName = _a.companyName, userName = _a.userName, userRole = _a.userRole, hasNotification = _a.hasNotification, notificationCount = _a.notificationCount, dropDownOpenIcon = _a.dropDownOpenIcon, dropDownCloseIcon = _a.dropDownCloseIcon, dropDownIconSize = _a.dropDownIconSize, iconColor = _a.iconColor, iconType = _a.iconType, platformSwitcherContent = _a.platformSwitcherContent, appOptionContent = _a.appOptionContent, onHelp = _a.onHelp, onNotification = _a.onNotification, isIconListShowing = _a.isIconListShowing, settingsIconShow = _a.settingsIconShow, helpIconShow = _a.helpIconShow, notificationIconShow = _a.notificationIconShow, onSettings = _a.onSettings, platformSwitcherProps = _a.platformSwitcherProps, appOptionProps = _a.appOptionProps, onTabClick = _a.onTabClick, maxCountNotification = _a.maxCountNotification, dropdownMenuDisabled = _a.dropdownMenuDisabled, avatarBgColor = _a.avatarBgColor;
    var _b = React.useState(tabs.length > 0 ? tabs[0].id : null), value = _b[0], setValue = _b[1];
    var _c = React.useState(tabs.length && tabs[0].status), tabStatus = _c[0], setTabStatus = _c[1];
    var _d = React.useState(false), userOpsExpanded = _d[0], setUserOpsExpanded = _d[1];
    var _e = React.useState(false), platFormExpanded = _e[0], setPlatFormExpanded = _e[1];
    var props = __assign({}, platformSwitcherProps);
    var props2 = __assign({}, appOptionProps);
    var onHelpClick = function () {
        onHelp();
    };
    var onNotificationClick = function () {
        onNotification();
    };
    var onSettingsClick = function () {
        onSettings();
    };
    var onTabChange = function (event, newValue) {
        setValue(newValue);
        onTabClick(newValue);
    };
    React.useEffect(function () {
        if (value !== null) {
            var selectedTab = tabs.find(function (tab) { return tab.id === value; });
            setTabStatus(selectedTab.status);
        }
    }, [value]);
    var styleInactive = __assign({}, tabStatus === 'Inactive' && { color: '#151D44' });
    return (jsxRuntime.jsx(jsxRuntime.Fragment, { children: jsxRuntime.jsxs(HeaderWrapper, { children: [jsxRuntime.jsxs(LeftWrapper, { children: [jsxRuntime.jsxs(ProductWrapper, __assign({ style: { width: !dropdownMenuDisabled ? '320.24px' : '82.8px' } }, { children: [jsxRuntime.jsx(LogoWrapper, { children: jsxRuntime.jsx(KpLogo, { color: "Blue", width: 94.24, height: 28 }) }), !dropdownMenuDisabled && (jsxRuntime.jsxs(SwitcherWrapper, { children: [jsxRuntime.jsx(PlatformTextButton, __assign({ disableRipple: true, onClick: function () { setPlatFormExpanded(!platFormExpanded); } }, { children: productName.length > 15 ? "".concat(productName.slice(0, 14), "...") : productName })), jsxRuntime.jsx(DropDownMenu, __assign({ dropDownOpenIcon: dropDownOpenIcon, dropDownCloseIcon: dropDownCloseIcon, dropDownIconSize: dropDownIconSize, iconColor: iconColor, iconType: iconType, content: platformSwitcherContent }, props, { triggerOpen: platFormExpanded }))] }))] })), jsxRuntime.jsx(TabWrapper, { children: jsxRuntime.jsx(material.Tabs, __assign({ value: value, onChange: onTabChange, sx: { color: '#151D44', height: '55px', paddingTop: '10px', fontFamily: "Inter" }, TabIndicatorProps: {
                                    style: {
                                        backgroundColor: "#151D44",
                                        color: '#151D44',
                                        display: "".concat(tabStatus === 'Inactive' ? 'none' : 'block')
                                    }
                                } }, { children: tabs.map(function (_a) {
                                    var status = _a.status, label = _a.label, id = _a.id;
                                    return (jsxRuntime.jsx(TabButton, { disableRipple: true, value: id, label: label, sx: { color: '#151D44', fontFamily: "Inter", textTransform: 'capitalize', '&.Mui-selected': __assign({}, styleInactive) }, disabled: status === 'Disabled' ? true : false }, id));
                                }) })) })] }), jsxRuntime.jsxs(RightWrapper, { children: [jsxRuntime.jsx(ClientText, { children: companyName }), jsxRuntime.jsx(Line1, { orientation: "vertical", flexItem: true }), isIconListShowing &&
                            jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [jsxRuntime.jsxs(IconWrapper, { children: [helpIconShow && (jsxRuntime.jsx(IconBtn, __assign({ size: "large", color: "inherit", onClick: onHelpClick }, { children: jsxRuntime.jsx(KpBadge, { color: "#EA421A", vertical: 'top', horizontal: 'right', innerComponent: jsxRuntime.jsx(Icon, { iconName: exports.ICONS.HELPCERCLE, type: exports.IconType.MUI, color: "#666C7F" }) }) }))), notificationIconShow && (jsxRuntime.jsx(IconBtn, __assign({ size: "large", "aria-label": "show 17 new notifications", color: "inherit", onClick: onNotificationClick }, { children: jsxRuntime.jsx(KpBadge, { color: "#EA421A", vertical: 'top', horizontal: 'right', maxCount: maxCountNotification, value: hasNotification ? notificationCount : undefined, innerComponent: jsxRuntime.jsx(Icon, { iconName: exports.ICONS.NOTIFICATIONOUTLINE, type: exports.IconType.MUI, color: "#666C7F" }) }) }))), settingsIconShow && (jsxRuntime.jsx(IconBtn, __assign({ size: "large", color: "inherit", onClick: onSettingsClick }, { children: jsxRuntime.jsx(KpBadge, { color: "#EA421A", vertical: 'top', horizontal: 'right', innerComponent: jsxRuntime.jsx(Icon, { iconName: exports.ICONS.SETTINGSICON, type: exports.IconType.MUI, color: "#666C7F" }) }) })))] }), jsxRuntime.jsx(Line2, { orientation: "vertical", flexItem: true })] }), jsxRuntime.jsxs(UserWrapper, { children: [jsxRuntime.jsx(UserAvatar, __assign({ sx: { bgcolor: avatarBgColor ? avatarBgColor : "#".concat(randomColor) }, onClick: function () { setUserOpsExpanded(!userOpsExpanded); } }, { children: userName.slice(0, 1) })), jsxRuntime.jsxs(UserDetailsWrapper, { children: [jsxRuntime.jsx(UserName, { children: userName.length > 15 ? "".concat(userName.slice(0, 15), "...") : userName }), jsxRuntime.jsx(UserRole, { children: userRole.length > 20 ? "".concat(userRole.slice(0, 20), "...") : userRole })] }), jsxRuntime.jsx(DropDownMenu, __assign({ dropDownOpenIcon: dropDownOpenIcon, dropDownCloseIcon: dropDownCloseIcon, dropDownIconSize: dropDownIconSize, iconColor: iconColor, iconType: iconType, triggerOpen: userOpsExpanded, content: appOptionContent }, props2))] })] })] }) }));
};

exports.MODALTYPE = void 0;
(function (MODALTYPE) {
    MODALTYPE["DEFAULT"] = "Default";
    MODALTYPE["INFORMATIVE"] = "Informative";
})(exports.MODALTYPE || (exports.MODALTYPE = {}));
exports.MODALVARIANT = void 0;
(function (MODALVARIANT) {
    MODALVARIANT["PRIMARY"] = "Primary";
    MODALVARIANT["SECONDARY"] = "Secondary";
    MODALVARIANT["TERTIARY"] = "Tertiary";
    MODALVARIANT["TEXT"] = "Text";
})(exports.MODALVARIANT || (exports.MODALVARIANT = {}));
exports.ModalButtonColor = void 0;
(function (ModalButtonColor) {
    ModalButtonColor["PRIMARY"] = "Primary";
    ModalButtonColor["SECONDARY"] = "Secondary";
})(exports.ModalButtonColor || (exports.ModalButtonColor = {}));
exports.ModalIconType = void 0;
(function (ModalIconType) {
    ModalIconType["MUI"] = "MUI";
    ModalIconType["SVG"] = "SVG";
})(exports.ModalIconType || (exports.ModalIconType = {}));
var style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    height: 'auto',
    bgcolor: 'background.paper',
    border: '2px solid #fffff',
    borderRadius: '6px',
    boxShadow: 24,
    pt: 2,
    pb: 2,
};
var ModalTestJSXElementTwo = function () {
    return (jsxRuntime.jsx("p", { children: "Modal content" }));
};
var ModelTestHeaderElement = function () {
    return (jsxRuntime.jsx(material.OutlinedInput, { placeholder: "Input value", sx: { ml: 10 } }));
};
var ModelTestFooterElement = function () {
    return (jsxRuntime.jsx("p", { children: "Footer content" }));
};
var ModalTestJSXElementOne = function () {
    return (jsxRuntime.jsxs(Box__default["default"], __assign({ sx: { display: 'flex', flexDirection: 'column' } }, { children: [jsxRuntime.jsx(Typography__default["default"], __assign({ variant: "h6" }, { children: "Name your campaign" })), jsxRuntime.jsx(Typography__default["default"], __assign({ variant: "body1", gutterBottom: true }, { children: "You can always change this name later on." })), jsxRuntime.jsxs(Box__default["default"], __assign({ sx: { mt: 3 } }, { children: [jsxRuntime.jsx(Typography__default["default"], __assign({ variant: "caption", display: "block", gutterBottom: true }, { children: "Name" })), jsxRuntime.jsx(material.OutlinedInput, { placeholder: "New customer engagement", fullWidth: true })] })), jsxRuntime.jsxs(Stack__default["default"], __assign({ direction: "row", spacing: 2, sx: { mt: 2 } }, { children: [jsxRuntime.jsxs("div", { children: [jsxRuntime.jsx(Typography__default["default"], __assign({ variant: "subtitle2", gutterBottom: true }, { children: "Kognition smart build" })), jsxRuntime.jsx(Typography__default["default"], __assign({ variant: "caption", gutterBottom: true }, { children: "Turn off for manual settings" }))] }), jsxRuntime.jsx(material.Switch, {})] }))] })));
};
var KpModal = function (_a) {
    var type = _a.type, title = _a.title, content = _a.content, handleSubmit = _a.handleSubmit, submitBtnVariant = _a.submitBtnVariant, submitBtnSize = _a.submitBtnSize, submitBtnColor = _a.submitBtnColor, submitBtnHasLeftIcon = _a.submitBtnHasLeftIcon, submitBtnLeftIcon = _a.submitBtnLeftIcon, submitBtnHasRightIcon = _a.submitBtnHasRightIcon, submitBtnRightIcon = _a.submitBtnRightIcon, submitBtnDisabled = _a.submitBtnDisabled, cancelBtnVariant = _a.cancelBtnVariant, cancelBtnSize = _a.cancelBtnSize, cancelBtnColor = _a.cancelBtnColor, cancelBtnHasLeftIcon = _a.cancelBtnHasLeftIcon, cancelBtnLeftIcon = _a.cancelBtnLeftIcon, cancelBtnHasRightIcon = _a.cancelBtnHasRightIcon, cancelBtnRightIcon = _a.cancelBtnRightIcon, cancelBtnDisabled = _a.cancelBtnDisabled, cancelBtnText = _a.cancelBtnText, submitBtnText = _a.submitBtnText, handleRejection = _a.handleRejection, isOpen = _a.isOpen, _b = _a.isFooterContent, isFooterContent = _b === void 0 ? false : _b, footerContent = _a.footerContent, _c = _a.isHeaderContent, isHeaderContent = _c === void 0 ? false : _c, headerContent = _a.headerContent; __rest$1(_a, ["type", "title", "content", "handleSubmit", "submitBtnVariant", "submitBtnSize", "submitBtnColor", "submitBtnHasLeftIcon", "submitBtnLeftIcon", "submitBtnHasRightIcon", "submitBtnRightIcon", "submitBtnDisabled", "cancelBtnVariant", "cancelBtnSize", "cancelBtnColor", "cancelBtnHasLeftIcon", "cancelBtnLeftIcon", "cancelBtnHasRightIcon", "cancelBtnRightIcon", "cancelBtnDisabled", "cancelBtnText", "submitBtnText", "handleRejection", "isOpen", "isFooterContent", "footerContent", "isHeaderContent", "headerContent"]);
    var _d = React__default["default"].useState(isOpen), open = _d[0], setOpen = _d[1];
    React.useEffect(function () {
        isOpen ? handleOpen() : null;
    }, [isOpen]);
    var handleOpen = function () { return setOpen(true); };
    var onAcceptanceClick = function (e) {
        e.preventDefault();
        handleSubmit && handleSubmit();
    };
    var onCancelClick = function () {
        setOpen(false);
        handleRejection && handleRejection();
    };
    var handleClose = function (event, reason) {
        if (reason && reason == "backdropClick" || reason == "escapeKeyDown")
            return;
        setOpen(false);
    };
    var submitButtonProps = {
        variant: submitBtnVariant,
        buttonColor: submitBtnColor,
        disabled: submitBtnDisabled,
        hasLeftIcon: submitBtnHasLeftIcon,
        hasRightIcon: submitBtnHasRightIcon,
        label: submitBtnText,
        leftIcon: submitBtnLeftIcon,
        leftIconType: exports.ModalIconType.MUI,
        onClick: function (e) {
            onAcceptanceClick(e);
        },
        rightIcon: submitBtnRightIcon,
        rightIconType: exports.ModalIconType.MUI,
        size: submitBtnSize
    };
    var cancelButtonProps = {
        variant: cancelBtnVariant,
        buttonColor: cancelBtnColor,
        disabled: cancelBtnDisabled,
        hasLeftIcon: cancelBtnHasLeftIcon,
        hasRightIcon: cancelBtnHasRightIcon,
        label: cancelBtnText,
        leftIcon: cancelBtnLeftIcon,
        leftIconType: exports.ModalIconType.MUI,
        onClick: function () {
            onCancelClick();
        },
        rightIcon: cancelBtnRightIcon,
        rightIconType: exports.ModalIconType.MUI,
        size: cancelBtnSize
    };
    return (jsxRuntime.jsx(Stack__default["default"], { children: jsxRuntime.jsx(material.Modal, __assign({ open: open, componentsProps: { backdrop: { style: { backgroundColor: "#1E2332", opacity: '0.6' } } }, onClose: handleClose, "aria-labelledby": "modal-modal-title", "aria-describedby": "modal-modal-description" }, { children: jsxRuntime.jsxs(Box__default["default"], __assign({ sx: style }, { children: [jsxRuntime.jsxs(Box__default["default"], __assign({ sx: { display: "flex", flexDirection: "row", alignItems: "center", mb: 2 } }, { children: [jsxRuntime.jsx(Typography__default["default"], __assign({ id: "transition-modal-title", variant: "h5", component: "div", sx: { color: "#1E2332", ml: 3, mb: 1, fontFamily: 'Inter', fontSize: "20px", fontWeight: "600", textOverflow: "ellipsis" } }, { children: title })), isHeaderContent &&
                                jsxRuntime.jsx(material.Container, { children: headerContent })] })), jsxRuntime.jsx(material.Divider, { variant: "fullWidth", flexItem: true }), jsxRuntime.jsxs("form", __assign({ onSubmit: onAcceptanceClick }, { children: [jsxRuntime.jsx(material.Container, __assign({ sx: { mt: 2, mr: 3 } }, { children: content })), jsxRuntime.jsx(Stack__default["default"], __assign({ direction: "row-reverse", spacing: 1, mt: 1, mr: 3 }, { children: jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [" ", type === exports.MODALTYPE.DEFAULT ? (jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [jsxRuntime.jsx(KpButton, __assign({ type: "submit" }, submitButtonProps, { children: submitBtnText })), jsxRuntime.jsx(KpButton, __assign({}, cancelButtonProps, { children: cancelBtnText }))] })) : (jsxRuntime.jsx(KpButton, __assign({ type: "submit" }, submitButtonProps, { children: submitBtnText })))] }) }))] })), isFooterContent ?
                        jsxRuntime.jsx(material.Container, __assign({ sx: { mt: 2, mr: 2 } }, { children: footerContent })) : null] })) })) }));
};

var KpStepper = React.forwardRef(function (_a, ref) {
    var steps = _a.steps, width = _a.width, backgroundColor = _a.backgroundColor, currentStep = _a.currentStep, selectedStepperInnerPaddingTop = _a.selectedStepperInnerPaddingTop, selectedStepperInnerPaddingBottom = _a.selectedStepperInnerPaddingBottom; __rest$1(_a, ["steps", "width", "backgroundColor", "currentStep", "selectedStepperInnerPaddingTop", "selectedStepperInnerPaddingBottom"]);
    var StepperUnselect = styles$1.styled("div")(function (_a) {
        _a.theme; var indexValue = _a.indexValue;
        return ({
            height: "25px",
            width: "25px",
            backgroundColor: indexValue < currentStep ? backgroundColor : '#fff',
            border: indexValue < currentStep ? backgroundColor : '1px solid #C1C4CD',
            color: indexValue < currentStep ? '#fff' : "#C1C4CD",
            borderRadius: "50%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            cursor: "pointer",
            fontFamily: "Inter",
            fontSize: "14px",
            fontStyle: "normal",
            fontWeight: "700",
            lineHeight: "21px",
            opacity: backgroundColor === null ? 0.5 : 1,
        });
    });
    var StepperSelect = styles$1.styled("div")(function (_a) {
        _a.theme;
        return ({
            border: "1px solid #1E2332",
            borderRadius: "30px",
            padding: "0.5rem",
            fontFamily: "Inter",
            fontSize: "14px",
            fontStyle: "normal",
            fontWeight: "400",
            lineHeight: "21px",
            paddingLeft: "10px",
            paddingRight: "10px",
            paddingTop: selectedStepperInnerPaddingTop,
            paddingBottom: selectedStepperInnerPaddingBottom,
        });
    });
    var SpanSelect = styles$1.styled("span")(function (_a) {
        _a.theme;
        return ({
            fontFamily: "Inter",
            fontSize: "14px",
            fontStyle: "normal",
            fontWeight: "700",
            lineHeight: "21px",
            marginRight: "20xp",
            paddingRight: "12px",
        });
    });
    var StepperComponent = styles$1.styled(Box__default["default"])(function (_a) {
        _a.theme;
        return ({
            width: width,
        });
    });
    // Define state variables for the active step and completed steps
    var _b = React__default["default"].useState(0), activeStep = _b[0], setActiveStep = _b[1];
    var _c = React__default["default"].useState({}), completed = _c[0]; _c[1];
    // Function to handle going back to the previous step
    var onBack = function () {
        if (activeStep !== 0) {
            handleBack();
        }
    };
    // Function to handle going to the next step
    var onNext = function () {
        handleNext();
    };
    // Expose onBack and onNext functions to the parent component using useImperativeHandle
    React.useImperativeHandle(ref, function () { return ({ onBack: onBack, onNext: onNext }); });
    // Function to get the total number of steps
    var totalSteps = function () {
        return steps.length;
    };
    // Function to get the number of completed steps
    var completedSteps = function () {
        return Object.keys(completed).length;
    };
    // Function to check if the current step is the last step
    var isLastStep = function () {
        return activeStep === totalSteps() - 1;
    };
    // Function to check if all steps are completed
    var allStepsCompleted = function () {
        return completedSteps() === totalSteps();
    };
    // Function to handle going to the next step
    var handleNext = function () {
        var newActiveStep = isLastStep() && !allStepsCompleted()
            ? steps.findIndex(function (step, i) { return !(i in completed); })
            : activeStep + 1;
        setActiveStep(newActiveStep);
    };
    // Function to handle going back to the previous step
    var handleBack = function () {
        setActiveStep(function (prevActiveStep) { return prevActiveStep - 1; });
    };
    // Function to handle clicking on a specific step
    var handleStep = function (step) { return function () {
        setActiveStep(step);
    }; };
    return (
    // Render the stepper component
    jsxRuntime.jsx(StepperComponent, { children: jsxRuntime.jsx(material.Stepper, __assign({ nonLinear: true, activeStep: currentStep === undefined ? activeStep : currentStep }, { children: steps.map(function (step, index) { return (jsxRuntime.jsx(material.Step, __assign({ sx: { paddingRight: '0px', paddingLeft: '0px' }, completed: completed[index] }, { children: currentStep === undefined ? (activeStep) : currentStep !== index ? (jsxRuntime.jsx(StepperUnselect, __assign({ indexValue: index, onClick: function () { return handleStep(index); } }, { children: index + 1 }))) : (jsxRuntime.jsxs(StepperSelect, __assign({ onClick: handleStep(index) }, { children: [jsxRuntime.jsx(SpanSelect, { children: index + 1 }), step.label] }))) }), step.label)); }) })) }));
});

var KpAccordion = function (_a) {
    var activeAccordionIds = _a.activeAccordionIds, accordionContent = _a.accordionContent, border = _a.border, boxShadow = _a.boxShadow, borderRadius = _a.borderRadius, isExpandMoreLeft = _a.isExpandMoreLeft, onChange = _a.onChange;
    var _b = React__default["default"].useState(activeAccordionIds || []), expanded = _b[0], setExpanded = _b[1];
    React.useEffect(function () {
        if (onChange) {
            onChange(expanded);
        }
    }, [expanded]);
    var handleChange = function (panel) { return function (event, isExpanded) {
        if (isExpanded) {
            setExpanded(__spreadArray(__spreadArray([], expanded, true), [panel], false));
        }
        else {
            setExpanded(expanded.filter(function (id) { return id !== panel; }));
        }
    }; };
    return (jsxRuntime.jsx(material.Box, __assign({ sx: { display: 'flex', flexDirection: 'column', gap: '16px' } }, { children: accordionContent.map(function (item, index) { return (jsxRuntime.jsxs(material.Accordion, __assign({ expanded: expanded.includes(item.id), onChange: handleChange(item.id), sx: {
                boxShadow: boxShadow || "none",
                borderBottom: 'none',
                '&:before': {
                    display: 'none',
                },
                border: border || "none",
                borderRadius: borderRadius + 'px !important',
                borderColor: item.accordionborderColor,
            }, disableGutters: true }, { children: [jsxRuntime.jsx(material.AccordionSummary, __assign({ sx: { borderBottom: 'none', flexDirection: isExpandMoreLeft ? 'row-reverse' : 'row' }, expandIcon: jsxRuntime.jsx(ExpandMoreIcon__default["default"], {}) }, { children: jsxRuntime.jsx(material.Typography, __assign({ sx: { fontSize: '1rem', fontWeight: '700', fontFamily: 'Inter' } }, { children: item.accordionTitle })) })), jsxRuntime.jsxs(material.AccordionDetails, __assign({ sx: { borderTop: border, borderColor: item.accordionborderColor } }, { children: [item.accordionContent && (jsxRuntime.jsx(jsxRuntime.Fragment, { children: item.accordionContent })), item.accordionSubContent && (jsxRuntime.jsx(KpAccordion, { activeAccordionIds: activeAccordionIds, accordionContent: item.accordionSubContent }))] }))] }), index)); }) })));
};

var css_248z = ".draggable-list-container{font-family:Inter;margin-bottom:30px}.draggable-list-item{background-color:#fff;border:1px solid #e0e1e6;border-radius:6px;cursor:grabbing;height:44px;margin-bottom:7px;user-select:none}.draggable-list-item span{padding-left:5px}.draggable-list-item .dragging{border:1px solid #e0e1e6;border-radius:6px;cursor:grabbing;padding:10px;touch-action:none;-ms-touch-action:none}.draggable-list-item.disabled{color:#9ba0af!important}.draggable-list-item .draggable-list-item-button-view:hover{background-color:#eee;border-radius:50%;cursor:pointer;padding:4px}.draggable-list-item .draggable-list-item-button-view{height:20px;width:20px}.draggable-list-item.disabled .draggable-list-item-button-view{border-radius:50%;color:#9ba0af!important;height:20px;width:20px}.draggable-list-item.disabled .draggable-list-item-button-view:hover{background-color:#eee;cursor:pointer;padding:4px}.draggable-list-item-button-drag{height:20px!important;width:20px!important}.draggable-list-item .draggable-list-item-button-drag{color:#666c7f}.draggable-list-item.disabled .draggable-list-item-button-drag{color:inherit}.draggable-list-item-text span{color:#1e2332;font-size:14px!important;font-weight:400!important;line-height:21px!important}.draggable-list-item.disabled .draggable-list-item-text span{color:inherit}";
styleInject(css_248z);

var KpDraggableList = function (_a) {
    var items = _a.items, onOrderChange = _a.onOrderChange, enableVisibility = _a.enableVisibility, disabled = _a.disabled; __rest$1(_a, ["items", "onOrderChange", "enableVisibility", "disabled"]);
    var _b = React.useState(items.sort(function (a, b) { return a.fieldOrder - b.fieldOrder; })), listItems = _b[0], setListItems = _b[1];
    var _c = React.useState(listItems[listItems.length - 1]), previousStateLastItem = _c[0], setPreviousStateLastItem = _c[1];
    var _d = React.useState(listItems[listItems.length - 1].visible), previousStateLastItemVisibility = _d[0], setLastItemVisibility = _d[1];
    var _e = React.useState(), isDragging = _e[0], setIsDragging = _e[1];
    var containerRef = React.useRef();
    var container = containerRef.current;
    var wrapper = document.querySelector(".draggable-list-container");
    var parentWrapper = wrapper === null || wrapper === void 0 ? void 0 : wrapper.parentNode;
    React.useEffect(function () {
        var lastItem = listItems[listItems.length - 1];
        if (previousStateLastItemVisibility !== lastItem.visible) {
            parentWrapper.scrollTop = parentWrapper.scrollHeight;
            setLastItemVisibility(lastItem.visible);
        }
        setPreviousStateLastItem(lastItem);
    }, [listItems, previousStateLastItem]);
    var dragStart = function (e, index) {
        if (!detectLeftButton(e))
            return;
        setIsDragging(index);
        var items = __spreadArray([], container === null || container === void 0 ? void 0 : container.childNodes, true);
        var dragItem = items[index];
        var itemsBelowDragItem = items.slice(index + 1);
        var notDragItems = items.filter(function (_, i) { return i != index; });
        var dragData = listItems[index];
        var newData;
        // This is applicable only for the storybook demo example.
        var child = document.querySelector(".innerZoomElementWrapper");
        var dragBoundingRect = dragItem.getBoundingClientRect();
        //distance between two cards
        var space = items[1].getBoundingClientRect().top -
            items[0].getBoundingClientRect().bottom;
        dragItem.style.position = "fixed";
        dragItem.style.zIndex = 5000;
        dragItem.style.width = dragBoundingRect.width + "px";
        dragItem.style.height = dragBoundingRect.height + "px";
        if (!child) {
            dragItem.style.top = dragBoundingRect.top + "px";
            dragItem.style.bottom = dragBoundingRect.bottom + "px";
        }
        dragItem.style.cursor = "grabbing";
        var div = document.createElement("div");
        div.id = "div-temp";
        div.style.width = dragBoundingRect.width + "px";
        container.appendChild(div);
        //move the elements below dragItem
        //distance to be moved
        var distance = dragBoundingRect.height + space;
        itemsBelowDragItem.forEach(function (item) {
            item.style.transform = "translateY(".concat(distance, "px)");
        });
        //get the original coordinates of the mouse pointer
        var x = e.clientX;
        var y = e.clientY;
        //perform the function on hover
        document.onpointermove = dragMove;
        function dragMove(e) {
            //calculate the distance the mouse pointer has traveled.
            //Original coordinates minus current coordinates.
            var posX = e.clientX - x;
            var posY = e.clientY - y;
            //Move item
            dragItem.style.transform = "translate(".concat(posX, "px, ").concat(posY, "px)");
            dragItem.style.cursor = "grabbing";
            //swap position and data
            notDragItems.forEach(function (item) {
                //Check two elements are overlapping
                var rect1 = dragItem.getBoundingClientRect();
                var rect2 = item.getBoundingClientRect();
                var isOverlapping = rect1.y < rect2.y + rect2.height / 2 &&
                    rect1.y + rect1.height / 2 > rect2.y;
                var minScrollLimit = parentWrapper.scrollHeight / 2;
                var maxScrollLimit = parentWrapper.clientHeight;
                // Auto scroll the parent container when elements dragged in to both top and bottom edges.
                if (rect1.y > maxScrollLimit) {
                    parentWrapper.scrollTop += 1;
                }
                else if (rect1.y < minScrollLimit) {
                    parentWrapper.scrollTop -= 1;
                }
                if (isOverlapping) {
                    if (item.getAttribute("style")) {
                        item.style.transform = "";
                        index++;
                    }
                    else {
                        item.style.transform = "translateY(".concat(distance, "px)");
                        index--;
                    }
                    //swap data
                    newData = listItems.filter(function (item) { return item.fieldId !== dragData.fieldId; });
                    newData.splice(index, 0, dragData);
                    newData = newData.map(function (item, newIndex) { return (__assign(__assign({}, item), { fieldOrder: newIndex })); });
                }
            });
        }
        //finish onpointer event
        document.onpointerup = dragEnd;
        // Handle end of the drag event
        function dragEnd() {
            document.onpointerup = null;
            document.onpointermove = null;
            setIsDragging(undefined);
            dragItem.style.top = dragBoundingRect.top + "px";
            dragItem.style.bottom = dragBoundingRect.bottom + "px";
            dragItem.style = "";
            container.removeChild(div);
            items.forEach(function (item) { return (item.style = ""); });
            if (newData !== undefined) {
                setListItems(newData);
                onOrderChange(newData);
            }
        }
    };
    var detectLeftButton = function (e) {
        e = e || window.event;
        if ("buttons" in e) {
            return e.buttons === 1;
        }
        var button = e.which || e.button;
        return button === 1;
    };
    //Toggle the state of the view button
    var toggleVisibility = function (index) {
        var updatedItems = __spreadArray([], listItems, true);
        updatedItems[index].visible = !updatedItems[index].visible;
        setListItems(updatedItems);
        onOrderChange(updatedItems);
    };
    function generateListItemClassName(isDragging, isVisible) {
        var classNames = ["draggable-list-item"];
        if (isDragging) {
            classNames.push("dragging");
        }
        if (enableVisibility && typeof isVisible !== undefined && !isVisible) {
            classNames.push("disabled");
        }
        return classNames.join(" ");
    }
    return (jsxRuntime.jsx("div", __assign({ className: "draggable-list-container", ref: containerRef, style: {
            pointerEvents: disabled ? "none" : "unset",
        } }, { children: listItems.map(function (item, index) {
            // Filter out undefined index values
            return index !== undefined && (jsxRuntime.jsx("div", { children: jsxRuntime.jsxs(ListItem__default["default"], __assign({ onMouseDown: function (e) { return dragStart(e, index); }, className: generateListItemClassName(isDragging === index, item.visible) }, { children: [jsxRuntime.jsx(DragIndicatorIcon__default["default"], { className: "draggable-list-item-button-drag" }), jsxRuntime.jsx(ListItemText__default["default"], { primary: item.content, className: "draggable-list-item-text" }), enableVisibility ? (item.visible ? (jsxRuntime.jsx(VisibilityIcon__default["default"], { className: "draggable-list-item-button-view", onClick: function () { return toggleVisibility(index); } })) : (jsxRuntime.jsx(VisibilityOffIcon__default["default"], { className: "draggable-list-item-button-view", onClick: function () { return toggleVisibility(index); } }))) : null] }), item.fieldId) }));
        }) })));
};

material.styled('div')({
    display: 'flex',
    position: 'absolute',
    backgroundColor: '#ffffff',
    zIndex: 50,
    top: '50px',
    overflow: 'hidden',
    boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.15)',
    borderRadius: '4px'
});
material.styled(IconButton__default["default"])({
    width: '24px',
    height: '24px',
    marginLeft: '14px'
});
material.styled('div')({
    width: '185px',
    display: 'flex',
    flexDirection: 'row',
    marginLeft: '8px',
    paddingLeft: '16px',
    alignItems: 'center',
});
// temp solution
var inputStyles = {
    fontFamily: 'Inter',
    'input': {
        '&::placeholder': {
            fontSize: '12px',
            fontFamily: 'Inter'
        }
    }
};
var TableHeaderComponent = function (_a) {
    var tableTitle = _a.tableTitle, onSearchTermChange = _a.onSearchTermChange, isFilterEnabled = _a.isFilterEnabled, filterValues = _a.filterValues, maxHeight = _a.maxHeight, onFilterApply = _a.onFilterApply, onFilterItemsHeightChange = _a.onFilterItemsHeightChange, searchOnButtonClick = _a.searchOnButtonClick, onSearchButtonClick = _a.onSearchButtonClick, searchQueryValue = _a.searchQueryValue; __rest$1(_a, ["tableTitle", "onSearchTermChange", "isFilterEnabled", "filterValues", "maxHeight", "onFilterApply", "onFilterItemsHeightChange", "searchOnButtonClick", "onSearchButtonClick", "searchQueryValue"]);
    var _b = React.useState(false), isFilterOpen = _b[0], setIsFilterOpen = _b[1];
    var _c = React.useState(0), filterItemsHeight = _c[0], setFilterItemsHeight = _c[1];
    var _d = React.useState(""); _d[0]; _d[1];
    var onClickFilter = function () {
        setIsFilterOpen(!isFilterOpen);
    };
    var _e = React.useState(filterValues || []), filterData = _e[0], setFilterData = _e[1];
    var filterItemsWrapperRef = React.useCallback(function (node) {
        if (node !== null) {
            setFilterItemsHeight(node.getBoundingClientRect().height);
        }
        else {
            setFilterItemsHeight(0);
        }
    }, []);
    React.useMemo(function () {
        onFilterItemsHeightChange && onFilterItemsHeightChange(filterItemsHeight);
    }, [filterItemsHeight, onFilterItemsHeightChange]);
    var onFilterItemClick = function (item, isChecked) {
        var updatedFilteredList = filterData.map(function (filterItem) { return (filterItem.id === item.id ? __assign(__assign({}, filterItem), { isChecked: isChecked }) : filterItem); }).map(function (filterItem) { return filterItem.id === item.id && filterItem.isChecked === false && filterItem.type === 'DROP_DOWN' ? __assign(__assign({}, filterItem), { selectedValue: 'Select an option' }) : filterItem; });
        setFilterData(updatedFilteredList);
    };
    var clearFilter = function () {
        setFilterData(function (filterList) { return filterList.map(function (filterItem) { return __assign(__assign({}, filterItem), { isChecked: false, selectedValue: 'Select an option' }); }); });
    };
    var deleteChip = function (chipToDelete) {
        setFilterData(function (filterList) { return filterList.map(function (filterItem) { return (filterItem.id === chipToDelete.id ? __assign(__assign({}, filterItem), { isChecked: false, selectedValue: 'Select an option' }) : filterItem); }); });
    };
    var filterDropDownItemSelect = function (item, value) {
        setFilterData(function (filterList) { return filterList.map(function (filterItem) { return (filterItem.id === item.id ? __assign(__assign({}, filterItem), { selectedValue: value }) : filterItem); }); });
    };
    var renderDropDownContent = function (value) {
        if (Array.isArray(value)) {
            return value.map(function (item, index) { return jsxRuntime.jsx(material.MenuItem, __assign({ disabled: item === 'Select an option', value: item }, { children: item }), index); });
        }
    };
    var setFilterContent = function () {
        return (jsxRuntime.jsx(jsxRuntime.Fragment, { children: jsxRuntime.jsx(material.FormGroup, { children: filterData.map(function (item, index) {
                    var _a, _b;
                    switch (item.type) {
                        case 'CHECK_BOX':
                            return jsxRuntime.jsx(material.FormControl, { children: jsxRuntime.jsx(material.FormControlLabel, { control: jsxRuntime.jsx(material.Checkbox, { sx: (_a = {},
                                            _a["&, &.".concat(material.checkboxClasses.colorPrimary)] = {
                                                color: '#C1C4CD',
                                            },
                                            _a["&, &.".concat(material.checkboxClasses.checked)] = {
                                                color: '#253378',
                                            },
                                            _a), name: "subscribe", checked: item.isChecked, onChange: function (e) { onFilterItemClick(item, e.target.checked); } }), label: item.name }) }, index);
                        case 'DROP_DOWN':
                            return jsxRuntime.jsxs(material.FormControl, __assign({ size: 'small', sx: { borderColor: 'red' } }, { children: [jsxRuntime.jsx(material.FormControlLabel, { control: jsxRuntime.jsx(material.Checkbox, { sx: (_b = {},
                                                _b["&, &.".concat(material.checkboxClasses.colorPrimary)] = {
                                                    color: '#C1C4CD',
                                                },
                                                _b["&, &.".concat(material.checkboxClasses.checked)] = {
                                                    color: '#253378',
                                                },
                                                _b), name: "subscribe", checked: item.isChecked, onChange: function (e) { onFilterItemClick(item, e.target.checked); } }), label: item.name }), jsxRuntime.jsx(material.Select, __assign({ sx: {
                                            '.MuiOutlinedInput-notchedOutline': {
                                                borderColor: "#C1C4CD",
                                            },
                                            '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                                                borderColor: "#253378",
                                            },
                                            '&:hover .MuiOutlinedInput-notchedOutline': {
                                                borderColor: "#C1C4CD",
                                            },
                                        }, value: item.selectedValue, onChange: function (e) { return filterDropDownItemSelect(item, e.target.value); }, displayEmpty: true, inputProps: { 'aria-label': 'Without label' }, disabled: !item.isChecked }, { children: renderDropDownContent(item.value) }))] }), index);
                    }
                }) }) }));
    };
    return (jsxRuntime.jsx(jsxRuntime.Fragment, { children: jsxRuntime.jsxs(Grid__default["default"], __assign({ container: true, spacing: 1, sx: { padding: "10px" } }, { children: [jsxRuntime.jsx(Grid__default["default"], __assign({ item: true, xs: 8 }, { children: jsxRuntime.jsx(Typography__default["default"], __assign({ variant: "h6", id: "tableTitle", sx: {
                            color: '#666C7F',
                            fontSize: 20,
                            fontWeight: 600,
                            fontFamily: "Inter"
                        } }, { children: tableTitle })) })), jsxRuntime.jsxs(Grid__default["default"], __assign({ sx: { display: 'flex' }, item: true, xs: 4 }, { children: [typeof searchOnButtonClick !== "undefined" && searchOnButtonClick ? (jsxRuntime.jsx(TextField__default["default"], { onChange: function (e) {
                                onSearchTermChange && onSearchTermChange(e.target.value);
                            }, id: "search", label: "Search", size: "small", variant: "outlined", value: searchQueryValue, sx: __assign({}, inputStyles), fullWidth: true, InputProps: {
                                endAdornment: (jsxRuntime.jsx(IconButton__default["default"], __assign({ onClick: function () { return onSearchButtonClick && onSearchButtonClick(); } }, { children: jsxRuntime.jsx(SearchOutlinedIcon__default["default"], { sx: { color: "#9E9E9E", fontSize: "18px" } }) }))),
                            }, InputLabelProps: { sx: { color: '#9E9E9E', fontSize: '14px', fontFamily: "Inter" } } })) : (jsxRuntime.jsx(TextField__default["default"], { onChange: function (e) { onSearchTermChange && onSearchTermChange(e.target.value); }, id: "search", label: "Search", size: "small", variant: "outlined", sx: __assign({}, inputStyles), fullWidth: true, InputProps: {
                                endAdornment: (jsxRuntime.jsx(IconButton__default["default"], { children: jsxRuntime.jsx(SearchOutlinedIcon__default["default"], { sx: { color: "#9E9E9E", fontSize: "18px" } }) })),
                            }, InputLabelProps: {
                                sx: { color: "#9E9E9E", fontSize: "14px", fontFamily: "Inter" },
                            } })), isFilterEnabled &&
                            jsxRuntime.jsxs(material.Box, __assign({ sx: { position: 'relative', width: '200px', marginLeft: '20px', display: 'flex', alignItems: 'center' } }, { children: [jsxRuntime.jsxs(material.Box, __assign({ sx: { display: 'flex', alignItems: 'center' }, onClick: onClickFilter }, { children: [jsxRuntime.jsx(Typography__default["default"], __assign({ sx: { cursor: 'pointer', marginRight: '10px' }, fontWeight: 600, fontSize: '12px', letterSpacing: '1px', lineHeight: '18px', color: '#666C7F' }, { children: "FILTER BY" })), isFilterOpen ? jsxRuntime.jsx(iconsMaterial.ExpandLess, {}) : jsxRuntime.jsx(iconsMaterial.ExpandMore, {})] })), isFilterOpen &&
                                        jsxRuntime.jsxs(material.Box, __assign({ sx: {
                                                position: 'absolute',
                                                display: 'flex',
                                                flexDirection: 'column',
                                                justifyContent: 'space-between',
                                                zIndex: '3',
                                                top: '40px',
                                                right: '10px',
                                                width: '300px',
                                                maxHeight: "".concat(maxHeight, "px"),
                                                backgroundColor: '#fff',
                                                borderRadius: '6px',
                                                boxShadow: '0px 1px 18px 0px rgba(137, 158, 175, 0.12), 0px 6px 10px 0px rgba(137, 158, 175, 0.14), 0px 3px 5px -1px rgba(137, 158, 175, 0.20)',
                                                overflow: 'auto',
                                                padding: '8px',
                                            } }, { children: [jsxRuntime.jsxs(material.Box, __assign({ sx: {} }, { children: [jsxRuntime.jsx(KpFormInput, { hasIcon: true, helperText: "Helper text", label: "Label", maxChars: 100, 
                                                            // onChange={() => { console.log('search 1') }}
                                                            // onClick={() => { console.log('search 2') }}
                                                            placeholder: "Search...", size: "small" }), jsxRuntime.jsx(material.Box, __assign({ sx: { margin: '1rem', height: "270px", overflow: 'auto' } }, { children: setFilterContent() }))] })), jsxRuntime.jsxs(material.Box, __assign({ sx: {
                                                        // flexGrow: '1',
                                                        height: '50px',
                                                        alignSelf: 'flex-end',
                                                        display: 'flex',
                                                        justifyContent: 'end',
                                                        gap: '1rem',
                                                        padding: '8px',
                                                    } }, { children: [jsxRuntime.jsx(KpButton, { buttonColor: "Primary", customStyle: {}, iconColor: "#fff", label: "CLEAR", leftIcon: "Mode", leftIconSize: 0.9, leftIconType: "MUI", onClick: function () {
                                                                clearFilter();
                                                                setIsFilterOpen(false);
                                                            }, rightIcon: "ArrowForwardIos", rightIconSize: 0.9, rightIconType: "MUI", size: "small", variant: "Tertiary" }), jsxRuntime.jsx(KpButton, { buttonColor: "Primary", customStyle: {}, iconColor: "#fff", label: "APPLY", leftIcon: "Mode", leftIconSize: 0.9, leftIconType: "MUI", onClick: function () {
                                                                onFilterApply && onFilterApply(filterData.filter(function (item) { return item.isChecked; }));
                                                                setIsFilterOpen(false);
                                                            }, rightIcon: "ArrowForwardIos", rightIconSize: 0.9, rightIconType: "MUI", size: "small", variant: "Tertiary" })] }))] }))] }))] })), filterData.find(function (item) { return item.isChecked === true; }) !== undefined &&
                    jsxRuntime.jsxs(Grid__default["default"], __assign({ ref: filterItemsWrapperRef, item: true, sx: { width: '100%', padding: '1rem 0.5rem !important', display: 'flex', flexWrap: 'wrap', gap: '10px', alignItems: 'center' } }, { children: [filterData.map(function (chip) {
                                return (jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [chip.isChecked &&
                                            chip.selectedValue !== 'Select an option' && chip.type === 'DROP_DOWN' ?
                                            jsxRuntime.jsx(material.Chip, { variant: "outlined", label: chip.name + ' - ' + chip.selectedValue, onDelete: function () { return deleteChip(chip); } }, chip.id)
                                            : null, chip.isChecked && chip.type === 'CHECK_BOX' && jsxRuntime.jsx(material.Chip, { variant: "outlined", label: chip.name, onDelete: function () { return deleteChip(chip); } }, chip.id)] }));
                            }), filterData.find(function (item) { return item.isChecked === true; }) !== undefined &&
                                jsxRuntime.jsx(material.Box, __assign({ onClick: function () { clearFilter(); }, sx: { fontFamily: 'Inter', color: '#253378', fontSiz: '14px', textDecoration: 'underline', cursor: 'pointer' } }, { children: "clear all" }))] }))] })) }));
};

var StyledGridOverlay = styles$1.styled('div')(function (_a) {
    var theme = _a.theme;
    return ({
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px 0px',
        '& .ant-empty-img-1': {
            fill: theme.palette.mode === 'light' ? '#aeb8c2' : '#262626',
        },
        '& .ant-empty-img-2': {
            fill: theme.palette.mode === 'light' ? '#f5f5f7' : '#595959',
        },
        '& .ant-empty-img-3': {
            fill: theme.palette.mode === 'light' ? '#dce0e6' : '#434343',
        },
        '& .ant-empty-img-4': {
            fill: theme.palette.mode === 'light' ? '#fff' : '#1c1c1c',
        },
        '& .ant-empty-img-5': {
            fillOpacity: theme.palette.mode === 'light' ? '0.8' : '0.08',
            fill: theme.palette.mode === 'light' ? '#f5f5f5' : '#fff',
        },
    });
});
function CustomNoRowsOverlay() {
    return (jsxRuntime.jsxs(StyledGridOverlay, { children: [jsxRuntime.jsx("svg", __assign({ width: "120", height: "100", viewBox: "0 0 184 152", "aria-hidden": true, focusable: "false" }, { children: jsxRuntime.jsxs("g", __assign({ fill: "none", fillRule: "evenodd" }, { children: [jsxRuntime.jsxs("g", __assign({ transform: "translate(24 31.67)" }, { children: [jsxRuntime.jsx("ellipse", { className: "ant-empty-img-5", cx: "67.797", cy: "106.89", rx: "67.797", ry: "12.668" }), jsxRuntime.jsx("path", { className: "ant-empty-img-1", d: "M122.034 69.674L98.109 40.229c-1.148-1.386-2.826-2.225-4.593-2.225h-51.44c-1.766 0-3.444.839-4.592 2.225L13.56 69.674v15.383h108.475V69.674z" }), jsxRuntime.jsx("path", { className: "ant-empty-img-2", d: "M33.83 0h67.933a4 4 0 0 1 4 4v93.344a4 4 0 0 1-4 4H33.83a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4z" }), jsxRuntime.jsx("path", { className: "ant-empty-img-3", d: "M42.678 9.953h50.237a2 2 0 0 1 2 2V36.91a2 2 0 0 1-2 2H42.678a2 2 0 0 1-2-2V11.953a2 2 0 0 1 2-2zM42.94 49.767h49.713a2.262 2.262 0 1 1 0 4.524H42.94a2.262 2.262 0 0 1 0-4.524zM42.94 61.53h49.713a2.262 2.262 0 1 1 0 4.525H42.94a2.262 2.262 0 0 1 0-4.525zM121.813 105.032c-.775 3.071-3.497 5.36-6.735 5.36H20.515c-3.238 0-5.96-2.29-6.734-5.36a7.309 7.309 0 0 1-.222-1.79V69.675h26.318c2.907 0 5.25 2.448 5.25 5.42v.04c0 2.971 2.37 5.37 5.277 5.37h34.785c2.907 0 5.277-2.421 5.277-5.393V75.1c0-2.972 2.343-5.426 5.25-5.426h26.318v33.569c0 .617-.077 1.216-.221 1.789z" })] })), jsxRuntime.jsx("path", { className: "ant-empty-img-3", d: "M149.121 33.292l-6.83 2.65a1 1 0 0 1-1.317-1.23l1.937-6.207c-2.589-2.944-4.109-6.534-4.109-10.408C138.802 8.102 148.92 0 161.402 0 173.881 0 184 8.102 184 18.097c0 9.995-10.118 18.097-22.599 18.097-4.528 0-8.744-1.066-12.28-2.902z" }), jsxRuntime.jsxs("g", __assign({ className: "ant-empty-img-4", transform: "translate(149.65 15.383)" }, { children: [jsxRuntime.jsx("ellipse", { cx: "20.654", cy: "3.167", rx: "2.849", ry: "2.815" }), jsxRuntime.jsx("path", { d: "M5.698 5.63H0L2.898.704zM9.259.704h4.985V5.63H9.259z" })] }))] })) })), jsxRuntime.jsx(Box__default["default"], __assign({ sx: { mt: 1 } }, { children: "No Data" }))] }));
}

var TableComponent = function (_a) {
    var rows = _a.rows, tableHeaders = _a.tableHeaders, deleteAllowed = _a.deleteAllowed, menuAllowed = _a.menuAllowed, viewAllowed = _a.viewAllowed, customBtnsAllowed = _a.customBtnsAllowed, editAllowed = _a.editAllowed, editClicked = _a.editClicked, viewClicked = _a.viewClicked, deleteClicked = _a.deleteClicked, menuItemClicked = _a.menuItemClicked, onRequestSort = _a.onRequestSort, onRowSelect = _a.onRowSelect, tableSelection = _a.tableSelection, allowMultiSelect = _a.allowMultiSelect, hideIdColumn = _a.hideIdColumn, selectedList = _a.selectedList, selectionColor = _a.selectionColor, maxTableDataWidth = _a.maxTableDataWidth, onSortData = _a.onSortData; __rest$1(_a, ["rows", "tableHeaders", "deleteAllowed", "menuAllowed", "viewAllowed", "customBtnsAllowed", "editAllowed", "editClicked", "viewClicked", "deleteClicked", "menuItemClicked", "onRequestSort", "onRowSelect", "tableSelection", "allowMultiSelect", "hideIdColumn", "selectedList", "selectionColor", "maxTableDataWidth", "onSortData"]);
    var _b = React.useState(), orderByValue = _b[0], setOrderByValue = _b[1];
    var _c = React__default["default"].useState('asc'), order = _c[0], setOrder = _c[1];
    var _d = React__default["default"].useState('calories'), orderBy = _d[0], setOrderBy = _d[1];
    var _e = React.useState({}), anchorElMap = _e[0], setAnchorElMap = _e[1];
    var _f = React__default["default"].useState(Array.isArray(selectedList) ? allowMultiSelect ? selectedList : [selectedList[0]] : []), selected = _f[0], setSelected = _f[1];
    var handleMenuOpen = function (event, rowId) {
        var _a;
        var newAnchorElMap = __assign(__assign({}, anchorElMap), (_a = {}, _a[rowId] = event.currentTarget, _a));
        setAnchorElMap(newAnchorElMap);
    };
    var handleMenuClose = function (rowId) {
        setAnchorElMap(function (prevMap) {
            var _a;
            return (__assign(__assign({}, prevMap), (_a = {}, _a[rowId] = null, _a)));
        });
    };
    React.useEffect(function () {
        setOrderByValue(orderBy);
    }, [orderBy]);
    React.useEffect(function () {
        setSelected(Array.isArray(selectedList) ? allowMultiSelect ? selectedList : [selectedList[0]] : []);
    }, [selectedList, allowMultiSelect]);
    var createSortHandler = function (property) { return function (event) {
        var isAsc = orderBy === property && order === 'asc';
        if (typeof onSortData !== 'undefined') {
            onSortData(property, isAsc);
        }
        setOrderByValue(property);
        setOrder(isAsc ? 'desc' : 'asc');
        onRequestSort(event, property, isAsc ? 'desc' : 'asc');
        setOrderBy(property);
    }; };
    var handleSelectAllClick = function (event) {
        if (event.target.checked) {
            var newSelected = rows.map(function (n) { return n; });
            setSelected(newSelected);
            onRowSelect(newSelected);
            return;
        }
        setSelected([]);
        onRowSelect([]);
    };
    var handleClick = function (event, row) {
        var selectedIndex = selected.map(function (x) { return x.id; }).indexOf(row.id);
        var newSelected = __spreadArray([], selected, true);
        if (selectedIndex === -1) {
            newSelected.push(row);
        }
        else {
            newSelected.splice(selectedIndex, 1);
        }
        onRowSelect(newSelected);
        setSelected(newSelected);
    };
    var isSelected = function (id) {
        return selected.map(function (row) { return row.id; }).indexOf(id) !== -1;
    };
    console.log("order", order);
    return (jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [jsxRuntime.jsx(TableHead__default["default"], { children: jsxRuntime.jsxs(TableRow__default["default"], { children: [tableSelection && (jsxRuntime.jsx(TableCell__default["default"], __assign({ padding: "checkbox" }, { children: jsxRuntime.jsx(material.Checkbox, { color: selectionColor === "info" ? 'info' : selectionColor, sx: selectionColor === "info"
                                    ? {
                                        color: "#253378",
                                        "&.Mui-checked": {
                                            color: "#253378",
                                        },
                                    }
                                    : null, indeterminate: (selected === null || selected === void 0 ? void 0 : selected.length) > 0 && (selected === null || selected === void 0 ? void 0 : selected.length) < (rows === null || rows === void 0 ? void 0 : rows.length), checked: (rows === null || rows === void 0 ? void 0 : rows.length) > 0 && (selected === null || selected === void 0 ? void 0 : selected.length) === (rows === null || rows === void 0 ? void 0 : rows.length), onChange: handleSelectAllClick, inputProps: {
                                    'aria-label': 'select all',
                                }, disabled: !allowMultiSelect }) }))), tableHeaders === null || tableHeaders === void 0 ? void 0 : tableHeaders.map(function (headCell) { return (jsxRuntime.jsx(TableCell__default["default"], __assign({ sx: {
                                textAlign: 'left',
                                color: '#666C7F',
                                fontSize: '12px',
                                fontWeight: 700,
                                lineHeight: '18px',
                                fontFamily: "Inter"
                            }, sortDirection: orderByValue === headCell.id ? order : false }, { children: jsxRuntime.jsxs(material.TableSortLabel, __assign({ active: orderByValue === headCell.id, direction: orderByValue === headCell.id ? order : 'asc', onClick: createSortHandler(headCell.id), IconComponent: order === 'desc' ? ArrowDropDownIcon__default["default"] : ArrowDropUpIcon__default["default"] }, { children: [headCell.label, orderByValue === headCell.id ? (jsxRuntime.jsx(material.Box, __assign({ component: "span", sx: visuallyHidden$1 }, { children: order === 'desc' ? 'sorted descending' : 'sorted ascending' }))) : null] })) }), headCell.id)); }), jsxRuntime.jsx(TableCell__default["default"], __assign({ sx: {
                                textAlign: 'right',
                                color: '#666C7F',
                                fontSize: '12px',
                                fontWeight: 700,
                                lineHeight: '18px',
                                fontFamily: "Inter"
                            } }, { children: "Actions" }))] }) }), jsxRuntime.jsxs(TableBody__default["default"], { children: [rows && rows.map(function (row, index1) {
                        var isItemSelected = isSelected(row.id);
                        var labelId = "enhanced-table-checkbox-".concat(index1);
                        return (jsxRuntime.jsxs(TableRow__default["default"], __assign({ sx: {
                                padding: '8px !important',
                            }, hover: true }, { children: [tableSelection && (jsxRuntime.jsx(TableCell__default["default"], __assign({ padding: "checkbox" }, { children: jsxRuntime.jsx(material.Checkbox, { color: selectionColor === "info" ? 'info' : selectionColor, sx: selectionColor === "info"
                                            ? {
                                                color: "#253378",
                                                "&.Mui-checked": {
                                                    color: "#253378",
                                                },
                                            }
                                            : null, onClick: function (event) { return handleClick(event, row); }, checked: isItemSelected, inputProps: {
                                            'aria-labelledby': labelId,
                                        } }) }))), Object.entries(row).map(function (val, index2) {
                                    if (val[0] === "customButtons")
                                        return;
                                    if (hideIdColumn && val[0] === "id")
                                        return;
                                    return jsxRuntime.jsx(TableCell__default["default"], __assign({ align: 'left', sx: { fontFamily: "Inter", padding: "8px", maxWidth: typeof maxTableDataWidth !== "undefined" ? "".concat(maxTableDataWidth, "px") : "unset", wordBreak: typeof maxTableDataWidth !== "undefined" ? "break-word" : "unset" } }, { children: val[1] }), index2);
                                }), jsxRuntime.jsxs(TableCell__default["default"], __assign({ sx: { padding: "8px" }, align: 'right' }, { children: [jsxRuntime.jsx(jsxRuntime.Fragment, { children: customBtnsAllowed && (jsxRuntime.jsx(jsxRuntime.Fragment, { children: row === null || row === void 0 ? void 0 : row.customButtons })) }), jsxRuntime.jsx(jsxRuntime.Fragment, { children: editAllowed && (jsxRuntime.jsx(material.Tooltip, __assign({ title: "Edit" }, { children: jsxRuntime.jsx(material.IconButton, __assign({ "aria-label": "edit", sx: { cursor: 'pointer' }, onClick: function (e) { return editClicked(row); } }, { children: jsxRuntime.jsx(iconsMaterial.ModeOutlined, { fontSize: "small" }) })) }))) }), jsxRuntime.jsx(jsxRuntime.Fragment, { children: deleteAllowed && (jsxRuntime.jsx(material.Tooltip, __assign({ title: "Delete" }, { children: jsxRuntime.jsx(material.IconButton, __assign({ "aria-label": "delete", sx: { cursor: 'pointer' }, onClick: function (e) { return deleteClicked(row); } }, { children: jsxRuntime.jsx(iconsMaterial.DeleteOutlineOutlined, { fontSize: "small" }) })) }))) }), jsxRuntime.jsx(jsxRuntime.Fragment, { children: viewAllowed && (jsxRuntime.jsx(material.Tooltip, __assign({ title: "View" }, { children: jsxRuntime.jsx(material.IconButton, __assign({ "aria-label": "view", sx: { cursor: 'pointer' }, onClick: function (e) { return viewClicked(row); } }, { children: jsxRuntime.jsx(iconsMaterial.VisibilityOutlined, { fontSize: "small" }) })) }))) }), jsxRuntime.jsx(jsxRuntime.Fragment, { children: menuAllowed && (jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [jsxRuntime.jsx(material.IconButton, __assign({ "aria-label": "more", id: "long-button", "aria-haspopup": "true", onClick: function (e) { return handleMenuOpen(e, row.id); } }, { children: jsxRuntime.jsx(MoreVertIcon__default["default"], {}) })), jsxRuntime.jsxs(Menu__default["default"], __assign({ anchorEl: anchorElMap[row.id], open: Boolean(anchorElMap[row.id]), onClose: function (e) { return handleMenuClose(row.id); }, anchorOrigin: {
                                                            vertical: 'bottom',
                                                            horizontal: 'right',
                                                        }, transformOrigin: {
                                                            vertical: 'top',
                                                            horizontal: 'right',
                                                        }, PaperProps: { style: { minWidth: '8rem' } } }, { children: [jsxRuntime.jsx(MenuItem__default["default"], __assign({ onClick: function (e) { return menuItemClicked && menuItemClicked(row, "VIEW"); } }, { children: "View" })), jsxRuntime.jsx(MenuItem__default["default"], __assign({ onClick: function (e) { return menuItemClicked && menuItemClicked(row, "EDIT"); } }, { children: "Edit" })), jsxRuntime.jsx(MenuItem__default["default"], __assign({ onClick: function (e) { return menuItemClicked && menuItemClicked(row, "DELETE"); } }, { children: "Delete" }))] }))] })) })] }))] }), index1));
                    }), !(rows === null || rows === void 0 ? void 0 : rows.length) && (jsxRuntime.jsx(TableRow__default["default"], { children: jsxRuntime.jsx(TableCell__default["default"], __assign({ colSpan: 12 }, { children: jsxRuntime.jsx(CustomNoRowsOverlay, {}) })) }))] })] }));
};

var TablePaginationActions = function (props) {
    var theme = styles$1.useTheme();
    var page = props.page, rowsPerPage = props.rowsPerPage, rowsPerPageOptions = props.rowsPerPageOptions, onPageChange = props.onPageChange, onPageNumberChange = props.onPageNumberChange, onFirstPageClick = props.onFirstPageClick, onLastPageButtonClick = props.onLastPageButtonClick, onBackButtonClick = props.onBackButtonClick, onNextButtonClick = props.onNextButtonClick, onRowsPerPageChange = props.onRowsPerPageChange, totalNumberOfData = props.totalNumberOfData;
    var noOfPages = Math.ceil(totalNumberOfData / rowsPerPage);
    var handleFirstPageButtonClick = function (event) {
        onPageChange(event, 1);
        onFirstPageClick(event);
    };
    var handleBackButtonClick = function (event) {
        onPageChange(event, page - 1);
        onBackButtonClick(event);
    };
    var handleNextButtonClick = function (event) {
        onPageChange(event, page + 1);
        onNextButtonClick(event);
    };
    var handleLastPageButtonClick = function (event) {
        onPageChange(event, Math.max(0, Math.ceil(totalNumberOfData / rowsPerPage)));
        onLastPageButtonClick(event);
    };
    var handlePageNumberSelect = function (event) {
        onPageChange(event, event.target.value);
        onPageNumberChange(event, event.target.value);
    };
    var handleRowsPerPage = function (event) {
        onPageChange(event, 1);
        onRowsPerPageChange(event, event.target.value);
    };
    return (jsxRuntime.jsx(Box__default["default"], { children: jsxRuntime.jsxs(Stack__default["default"], __assign({ direction: "row", spacing: 2 }, { children: [jsxRuntime.jsxs(Box__default["default"], __assign({ sx: { display: "flex", alignItems: "center" } }, { children: [jsxRuntime.jsx(material.Typography, __assign({ sx: { color: "#666C7F", fontSize: "14px", fontFamily: "Inter" } }, { children: "Rows per page :" })), jsxRuntime.jsx(material.Select, __assign({ defaultValue: rowsPerPage, sx: {
                                boxShadow: "none",
                                ".MuiOutlinedInput-notchedOutline": { border: 0 },
                                fontFamily: "Inter",
                                fontSize: "14px",
                            }, onChange: handleRowsPerPage, value: rowsPerPage }, { children: rowsPerPageOptions.map(function (item, i) {
                                return (jsxRuntime.jsx(material.MenuItem, __assign({ value: item, sx: { fontFamily: "Inter", fontSize: "14px" } }, { children: item }), i));
                            }) }))] })), jsxRuntime.jsx(material.Typography, __assign({ sx: {
                        paddingTop: "18px",
                        color: "#666C7F",
                        fontSize: "14px",
                        fontFamily: "Inter",
                    } }, { children: "".concat(page === 1 ? 1 : (page - 1) * rowsPerPage) +
                        "-" +
                        "".concat(page * rowsPerPage > totalNumberOfData
                            ? totalNumberOfData
                            : page * rowsPerPage) +
                        "   of   " +
                        "".concat(totalNumberOfData) })), jsxRuntime.jsx(IconButton__default["default"], __assign({ onClick: handleFirstPageButtonClick, disabled: page === 1, "aria-label": "first page" }, { children: theme.direction === "rtl" ? jsxRuntime.jsx(LastPageIcon__default["default"], {}) : jsxRuntime.jsx(FirstPageIcon__default["default"], {}) })), jsxRuntime.jsx(IconButton__default["default"], __assign({ onClick: handleBackButtonClick, disabled: page === 1, "aria-label": "previous page" }, { children: theme.direction === "rtl" ? (jsxRuntime.jsx(KeyboardArrowRight__default["default"], {})) : (jsxRuntime.jsx(KeyboardArrowLeft__default["default"], {})) })), jsxRuntime.jsx(material.Select, __assign({ defaultValue: page, sx: {
                        boxShadow: "none",
                        ".MuiOutlinedInput-notchedOutline": { border: 0 },
                        fontFamily: "Inter",
                        fontSize: "14px",
                    }, onChange: handlePageNumberSelect, value: page }, { children: __spreadArray([], Array(noOfPages), true).map(function (e, i) {
                        return (jsxRuntime.jsx(material.MenuItem, __assign({ value: i + 1, sx: { fontFamily: "Inter", fontSize: "14px" } }, { children: i + 1 }), i + 1));
                    }) })), jsxRuntime.jsx(IconButton__default["default"], __assign({ onClick: handleNextButtonClick, disabled: page >= Math.ceil(totalNumberOfData / rowsPerPage), "aria-label": "next page" }, { children: theme.direction === "rtl" ? (jsxRuntime.jsx(KeyboardArrowLeft__default["default"], {})) : (jsxRuntime.jsx(KeyboardArrowRight__default["default"], {})) })), jsxRuntime.jsx(IconButton__default["default"], __assign({ onClick: handleLastPageButtonClick, disabled: page >= Math.ceil(totalNumberOfData / rowsPerPage), "aria-label": "last page" }, { children: theme.direction === "rtl" ? jsxRuntime.jsx(FirstPageIcon__default["default"], {}) : jsxRuntime.jsx(LastPageIcon__default["default"], {}) }))] })) }));
};

var customBtn = function () {
    return (jsxRuntime.jsx(KpButton, { buttonColor: "Primary", customStyle: {}, iconColor: "#fff", label: "PAUSE", leftIcon: "Mode", leftIconSize: 0.9, leftIconType: "MUI", onClick: function noRefCheck() { }, rightIcon: "ArrowForwardIos", rightIconSize: 0.9, rightIconType: "MUI", size: "default", variant: "Tertiary" }));
};
exports.COLOR = void 0;
(function (COLOR) {
    COLOR["DEFAULT"] = "default";
    COLOR["PRIMARY"] = "primary";
    COLOR["SECONDARY"] = "secondary";
    COLOR["ERROR"] = "error";
    COLOR["INFO"] = "info";
    COLOR["SUCCESS"] = "success";
    COLOR["WARNING"] = "warning";
})(exports.COLOR || (exports.COLOR = {}));
var KpTable = function (_a) {
    var tableTitle = _a.tableTitle, rows = _a.rows, totalNumberOfData = _a.totalNumberOfData, tableHeaders = _a.tableHeaders, isDeleteAllow = _a.isDeleteAllow, isViewAllow = _a.isViewAllow, isEditAllow = _a.isEditAllow, isCustomIconsAllowed = _a.isCustomIconsAllowed, isMenuAllow = _a.isMenuAllow, onChangeSearchValue = _a.onChangeSearchValue, rowsPerPage = _a.rowsPerPage, currentPage = _a.currentPage, rowsPerPageOptions = _a.rowsPerPageOptions, onRowsPerPageChange = _a.onRowsPerPageChange, onEditClicked = _a.onEditClicked, onViewClicked = _a.onViewClicked, onDeleteClicked = _a.onDeleteClicked, onMenuItemClicked = _a.onMenuItemClicked, onFirstPageClick = _a.onFirstPageClick, onBackButtonClick = _a.onBackButtonClick, onNextButtonClick = _a.onNextButtonClick, onLastPageButtonClick = _a.onLastPageButtonClick, onPageNumberChange = _a.onPageNumberChange, onRequestSort = _a.onRequestSort, onRowSelect = _a.onRowSelect, maxHeight = _a.maxHeight, tableSelection = _a.tableSelection, allowMultiSelect = _a.allowMultiSelect, selectedList = _a.selectedList, hideIdColumn = _a.hideIdColumn, selectionColor = _a.selectionColor, isFilterEnabled = _a.isFilterEnabled, filterValues = _a.filterValues, onFilterApply = _a.onFilterApply, searchOnButtonClick = _a.searchOnButtonClick, onSearchButtonClick = _a.onSearchButtonClick, searchQueryValue = _a.searchQueryValue, maxTableDataWidth = _a.maxTableDataWidth, onSortData = _a.onSortData; __rest$1(_a, ["tableTitle", "rows", "totalNumberOfData", "tableHeaders", "isDeleteAllow", "isViewAllow", "isEditAllow", "isCustomIconsAllowed", "isMenuAllow", "onChangeSearchValue", "rowsPerPage", "currentPage", "rowsPerPageOptions", "onRowsPerPageChange", "onEditClicked", "onViewClicked", "onDeleteClicked", "onMenuItemClicked", "onFirstPageClick", "onBackButtonClick", "onNextButtonClick", "onLastPageButtonClick", "onPageNumberChange", "onRequestSort", "onRowSelect", "maxHeight", "tableSelection", "allowMultiSelect", "selectedList", "hideIdColumn", "selectionColor", "isFilterEnabled", "filterValues", "onFilterApply", "searchOnButtonClick", "onSearchButtonClick", "searchQueryValue", "maxTableDataWidth", "onSortData"]);
    var _b = React.useState(currentPage), page = _b[0], setPage = _b[1];
    var _c = React.useState(rowsPerPage), pageSize = _c[0], setPageSize = _c[1];
    var _d = React.useState(0), filterItemsHeight = _d[0], setFilterItemsHeight = _d[1];
    var handleChangePage = function (event, newPage) {
        setPage(newPage);
    };
    var onPageNumberChangeAction = function (event, pageIndex) {
        onPageNumberChange(event, pageIndex + 1);
    };
    var handleChangeRowsPerPage = function (event, rowsPerPage) {
        setPageSize(rowsPerPage);
        onRowsPerPageChange(rowsPerPage);
        //setPageSize(parseInt(event.target.value, 10));
        //setPage(0);
    };
    React.useEffect(function () {
        setPage(currentPage);
    }, [currentPage]);
    return (jsxRuntime.jsx(Box__default["default"], __assign({ sx: { width: "100%" } }, { children: jsxRuntime.jsxs(Paper__default["default"], __assign({ elevation: 0, sx: { width: "100%", borderRadius: "6px", border: "1px solid #E0E1E6" } }, { children: [jsxRuntime.jsx(TableHeaderComponent, { tableTitle: tableTitle, onSearchTermChange: onChangeSearchValue, isFilterEnabled: isFilterEnabled || false, filterValues: filterValues || [], maxHeight: maxHeight, onFilterApply: onFilterApply, onFilterItemsHeightChange: setFilterItemsHeight, searchOnButtonClick: searchOnButtonClick, onSearchButtonClick: onSearchButtonClick, searchQueryValue: searchQueryValue }), jsxRuntime.jsx(material.TableContainer, __assign({ sx: { maxHeight: maxHeight - filterItemsHeight } }, { children: jsxRuntime.jsx(Table__default["default"], __assign({ sx: { minWidth: 650 }, stickyHeader: true, "aria-label": "sticky table" }, { children: jsxRuntime.jsx(TableComponent, { tableHeaders: tableHeaders, rows: rows, viewAllowed: isViewAllow, editAllowed: isEditAllow, deleteAllowed: isDeleteAllow, menuAllowed: isMenuAllow, editClicked: onEditClicked, customBtnsAllowed: isCustomIconsAllowed, viewClicked: onViewClicked, deleteClicked: onDeleteClicked, onRequestSort: onRequestSort, menuItemClicked: onMenuItemClicked, onRowSelect: onRowSelect, tableSelection: tableSelection, allowMultiSelect: allowMultiSelect, hideIdColumn: hideIdColumn, selectedList: selectedList, selectionColor: selectionColor, maxTableDataWidth: maxTableDataWidth, onSortData: onSortData }) })) })), jsxRuntime.jsx(material.TableFooter, __assign({ sx: { display: "flex", width: "100%", justifyContent: "flex-end" } }, { children: jsxRuntime.jsx(TablePaginationActions, { component: "div", showFirstButton: true, showLastButton: true, totalNumberOfData: totalNumberOfData, rowsPerPage: pageSize, page: page, rowsPerPageOptions: rowsPerPageOptions, onPageChange: handleChangePage, onPageNumberChange: onPageNumberChangeAction, onLastPageButtonClick: onLastPageButtonClick, onNextButtonClick: onNextButtonClick, onFirstPageClick: onFirstPageClick, onBackButtonClick: onBackButtonClick, onRowsPerPageChange: handleChangeRowsPerPage }) }))] })) })));
};

exports.Icon = Icon;
exports.KpAccordion = KpAccordion;
exports.KpAlert = KpAlert;
exports.KpBadge = KpBadge;
exports.KpButton = KpButton;
exports.KpDraggableList = KpDraggableList;
exports.KpFormInput = KpFormInput;
exports.KpFormSelect = KpFormSelect;
exports.KpHeader = KpHeader;
exports.KpLabel = KpLabel;
exports.KpLogo = KpLogo;
exports.KpModal = KpModal;
exports.KpOverview = KpOverview;
exports.KpSidebar = KpSidebar;
exports.KpSnackbar = KpSnackbar;
exports.KpStepper = KpStepper;
exports.KpTable = KpTable;
exports.KpTabs = KpTabs;
exports.KpTooltip = KpTooltip;
exports.ModalTestJSXElementOne = ModalTestJSXElementOne;
exports.ModalTestJSXElementTwo = ModalTestJSXElementTwo;
exports.ModelTestFooterElement = ModelTestFooterElement;
exports.ModelTestHeaderElement = ModelTestHeaderElement;
exports.TestJSXElementOne = TestJSXElementOne;
exports.TestJSXElementTwo = TestJSXElementTwo;
exports.customBtn = customBtn;
exports.sampleInnerComponent = sampleInnerComponent;
exports.sampleInnerTooltipComponent = sampleInnerTooltipComponent;
exports.tabImageJSX = tabImageJSX;
exports.tabJsxElement = tabJsxElement;
