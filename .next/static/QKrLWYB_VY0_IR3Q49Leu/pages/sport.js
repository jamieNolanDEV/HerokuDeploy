(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{17:function(e,t,n){"use strict";n.d(t,"a",function(){return l});var r=n(0),a=n.n(r);function o(e){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function c(e){return(c=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function i(e,t){return(i=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function u(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var l=function(e){function t(e){var n,r,a,s,i,l;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),r=this,a=c(t).call(this,e),n=!a||"object"!==o(a)&&"function"!=typeof a?u(r):a,s=u(u(n)),l=function(e){""!=e.target.newsSource.value&&n.props.setNewsSource(e.target.newsSource.value),e.preventDefault()},(i="formSubmitted")in s?Object.defineProperty(s,i,{value:l,enumerable:!0,configurable:!0,writable:!0}):s[i]=l,n.state={},n}var n,l,p;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&i(e,t)}(t,r["Component"]),n=t,(l=[{key:"render",value:function(){return a.a.createElement("div",null,a.a.createElement("div",{id:"search"},a.a.createElement("h3",null,"Enter newsapi.org source"),a.a.createElement("form",{onSubmit:this.formSubmitted},a.a.createElement("input",{name:"newsSource",placeholder:"News Source name",type:"text"}),a.a.createElement("button",null,"Update News"))))}}])&&s(n.prototype,l),p&&s(n,p),t}()},344:function(e,t,n){__NEXT_REGISTER_PAGE("/sport",function(){return e.exports=n(345),{page:e.exports.default}})},345:function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return N});var r=n(1),a=n.n(r),o=n(5),s=n.n(o),c=n(0),i=n.n(c),u=n(6),l=n.n(u),p=n(14),f=n.n(p),m=n(17);function y(e){return(y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function h(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function d(e){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function b(e,t){return(b=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function w(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function x(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function g(e,t,n,r,a,o,s){try{var c=e[o](s),i=c.value}catch(e){return void n(e)}c.done?t(i):Promise.resolve(i).then(r,a)}function v(e){return function(){var t=this,n=arguments;return new Promise(function(r,a){var o=e.apply(t,n);function s(e){g(o,r,a,s,c,"next",e)}function c(e){g(o,r,a,s,c,"throw",e)}s(void 0)})}}var j="1ca5555189744b988820ce51c9b5f181";function E(e){return S.apply(this,arguments)}function S(){return(S=v(a.a.mark(function e(t){var n,r;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,f()(t);case 3:return n=e.sent,e.next=6,n.json();case 6:return r=e.sent,e.abrupt("return",r);case 10:return e.prev=10,e.t0=e.catch(0),e.abrupt("return",e.t0);case 13:case"end":return e.stop()}},e,this,[[0,10]])}))).apply(this,arguments)}var N=function(e){function t(e){var n,r,a;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),r=this,a=d(t).call(this,e),n=!a||"object"!==y(a)&&"function"!=typeof a?w(r):a,x(w(w(n)),"setNewsSource",function(e){n.setState({newsSource:e,url:"https://newsapi.org/v2/top-headlines?sources=".concat(e,"&apiKey=").concat(j)})}),x(w(w(n)),"searchNewsAPI",function(e){n.setState({newsSource:"".concat(e.target.innerText),url:"https://newsapi.org/v2/".concat(e.target.name,"&apiKey=").concat(j)}),console.log(n.state.url)}),x(w(w(n)),"formatDate",function(e){var t=new Date(e),n=new Array("Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"),r=new Array("January","February","March","April","May","June","July","August","September","October","November","December"),a=n[t.getDay()],o=r[t.getMonth()],s=t.getFullYear(),c=t.getHours(),i=t.getMinutes().toString().padStart(2,"0"),u=t.getSeconds();return"".concat(a," ").concat(o," ").concat(s," ").concat(c,":").concat(i," ").concat(u,"s").toString()}),n.state={newsSource:"",url:"",articles:[]},n}var n,r,o,c,u;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&b(e,t)}(t,i.a.Component),n=t,r=[{key:"render",value:function(){var e=this;return 0==this.state.articles.length&&(this.state.articles=this.props.articles),i.a.createElement("div",{className:"jsx-148142509"},i.a.createElement(m.a,{setNewsSource:this.setNewsSource}),i.a.createElement("ul",{className:"jsx-148142509 newsMenu"},i.a.createElement("li",{className:"jsx-148142509"},i.a.createElement("a",{href:"#",onClick:this.searchNewsAPI,name:"top-headlines?country=ie",className:"jsx-148142509"},"Top Headlines Ireland")),i.a.createElement("li",{className:"jsx-148142509"},i.a.createElement("a",{href:"#",onClick:this.searchNewsAPI,name:"top-headlines?country=ie&category=business",className:"jsx-148142509"},"Business News Ireland")),i.a.createElement("li",{className:"jsx-148142509"},i.a.createElement("a",{href:"#",onClick:this.searchNewsAPI,name:"everything?q=technology",className:"jsx-148142509"},"Technology News")),i.a.createElement("li",{className:"jsx-148142509"},i.a.createElement("a",{href:"#",onClick:this.searchNewsAPI,name:"top-headlines?country=ie&category=weather",className:"jsx-148142509"},"Weather in Ireland"))),i.a.createElement("h3",{className:"jsx-148142509"},this.state.newsSource.split("-").join(" ")),i.a.createElement("div",{className:"jsx-148142509"},this.state.articles.map(function(t,n){return i.a.createElement("section",{key:n,className:"jsx-148142509"},i.a.createElement("h3",{className:"jsx-148142509"},t.title),i.a.createElement("p",{className:"jsx-148142509 author"},t.author,e.formatDate(t.publishedAt)),i.a.createElement("img",{src:t.urlToImage,alt:"article image",className:"jsx-148142509 img-article"}),i.a.createElement("p",{className:"jsx-148142509"},t.description),i.a.createElement("p",{className:"jsx-148142509"},t.content),i.a.createElement("p",{className:"jsx-148142509"},i.a.createElement(l.a,{as:"/article/".concat(n),href:"/article?id=".concat(n)},i.a.createElement("a",{className:"jsx-148142509"},"Read More"))))})),i.a.createElement(s.a,{styleId:"148142509",css:["section.jsx-148142509{width:50%;border:1px solid gray;background-color:rgb(240,248,255);padding:1em;margin:1em;}",".author.jsx-148142509{font-style:italic;font-size:0.8em;}",".img-article.jsx-148142509{max-width:50%;}",".newsMenu.jsx-148142509{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;margin:0;padding:0;margin-top:20px;}",".newsMenu.jsx-148142509 li.jsx-148142509{display:inline-table;padding-left:20px;}",".newsMenu.jsx-148142509 li.jsx-148142509 a.jsx-148142509{font-size:1em;color:blue;display:block;-webkit-text-decoration:none;text-decoration:none;}",".newsMenu.jsx-148142509 li.jsx-148142509 a.jsx-148142509:hover{color:rgb(255,187,0);-webkit-text-decoration:underline;text-decoration:underline;}"]}))}},{key:"componentDidUpdate",value:(u=v(a.a.mark(function e(t,n){var r;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(this.state.url===n.url){e.next=5;break}return e.next=3,E(this.state.url);case 3:r=e.sent,Array.isArray(r.articles)?(this.state.articles=r.articles,this.setState(this.state)):(console.error(r),response&&(response.statusCode=400,response.end(r.message)));case 5:case"end":return e.stop()}},e,this)})),function(e,t){return u.apply(this,arguments)})}],o=[{key:"getInitialProps",value:(c=v(a.a.mark(function e(t){var n,r;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n="https://newsapi.org/v2/top-headlines?country=us&category=sports&apiKey=".concat(j),e.next=3,E(n);case 3:if(r=e.sent,!Array.isArray(r.articles)){e.next=8;break}return e.abrupt("return",{articles:r.articles});case 8:console.error(r),t&&(t.statusCode=400,t.end(r.message));case 10:case"end":return e.stop()}},e,this)})),function(e){return c.apply(this,arguments)})}],r&&h(n.prototype,r),o&&h(n,o),t}()}},[[344,1,0]]]);