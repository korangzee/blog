(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{552:function(t,o,n){"use strict";n.r(o),o.default='<section><meta name="title" content="nuxt.js로-블로그-만들기-(1)-install-하기">\n<meta name="date" content="2019-11-19">\n<h1>nuxt.js로 블로그 만들기 (1) install 하기</h1>\n<h1>설치</h1>\n<p>mac os 기준으로 설명한다.</p>\n<pre><code class="language-js">$ brew install yarn <span class="hljs-comment">// mac os - brew를 이용해서 yarn을 설치</span>\n$ yarn create nuxt-app &lt;프로젝트 이름&gt; <span class="hljs-comment">// yarn을 이용해 nuxt-app설치</span>\n</code></pre>\n<h1>각종 설정</h1>\n<ul>\n<li>Project name: 본인에 맞게 입력</li>\n<li>project description: 본인에 맞게 입력</li>\n<li>Author name: 본인에 맞게 입력</li>\n<li>UI framework: vuetify.js 선택\n<ul>\n<li>Material Design framework이며, 쉽게 그럴듯한 디자인을 줄 수 있다는 장점이 있음.</li>\n</ul>\n</li>\n<li>server framework: 본인에 맞게 선택\n<ul>\n<li>필자는 Express 사용. 사용자가 많아 관련 문서를 찾기 쉽다는 장점.</li>\n</ul>\n</li>\n<li>Nuxt.js modules: Axios 선택</li>\n<li>linting tools: 본인에 맞게 선택</li>\n<li>test framework: 본인에 맞게 선택</li>\n<li>rendering mode: 본인에 맞게 선택\n<ul>\n<li>블로그의 경우엔 SEO가 중요하니 SSR을 사용할 수 있게 Universal로</li>\n<li>그렇지 않은 경우에는 SPA도 가능.</li>\n</ul>\n</li>\n<li>development tool: 본인에 맞게 선택</li>\n</ul>\n<h1>Dev</h1>\n<pre><code class="language-bash">$ <span class="hljs-built_in">cd</span> blog\n$ yarn dev // localhost:3000으로 접속 가능\n</code></pre>\n<h1>참고 사이트</h1>\n<p><a href="https://fkkmemi.github.io/nuxt/nuxt-002-install/">NUXT로 혼자 웹사이트 만들기 2 설치</a></p>\n</section>\n'},553:function(t,o,n){"use strict";n.r(o),o.default='<section><meta name="title" content="nuxt.js로-블로그-만들기-(2)-github-pages에-deploy하기">\n<meta name="date" content="2019-11-20">\n<h1>nuxt.js로 블로그 만들기 (2) github pages에 deploy하기</h1>\n<h1>github에서 저장소를 새로 만들기</h1>\n<ul>\n<li>저장소 이름이 <username>.github.io면, <username>.github.io로 접속 가능</li>\n<li>저장소 이름을 위와 같은 형식이 아니라 일반적인 방식인 <repository-name>으로 지정하면, <username>.github.io/<repository-name>으로 접속 가능</li>\n</ul>\n<h1>router 세팅</h1>\n<p>저장소이름이 <repository-name>이라면, router의 정상적인 작동을 위해서 nuxt.config.js에서 다음을 추가</p>\n<pre><code class="language-js"><span class="hljs-comment">//nuxt.config.js</span>\n\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n  <span class="hljs-attr">router</span>: {\n    <span class="hljs-attr">base</span>: <span class="hljs-string">\'/blog/\'</span>\n  },\n}\n</code></pre>\n<h1>push-dir 설치</h1>\n<p>yarn으로 push-dir를 설치</p>\n<pre><code>yarn add push-dir --save-dev\n</code></pre>\n<p>package.json에 다음과 같이 추가</p>\n<pre><code class="language-js"><span class="hljs-string">"scripts"</span>: {\n  <span class="hljs-string">"dev"</span>: <span class="hljs-string">"nuxt"</span>,\n  <span class="hljs-string">"build"</span>: <span class="hljs-string">"nuxt build"</span>,\n  <span class="hljs-string">"start"</span>: <span class="hljs-string">"nuxt start"</span>,\n  <span class="hljs-string">"generate"</span>: <span class="hljs-string">"nuxt generate"</span>,\n  <span class="hljs-string">"deploy"</span>: <span class="hljs-string">"push-dir --dir=dist --branch=gh-pages --cleanup"</span> <span class="hljs-comment">// 이 줄을 추가</span>\n},\n</code></pre>\n<h1>git 저장소와 연결</h1>\n<pre><code class="language-bash">$ git add .\n$ git commit -m <span class="hljs-string">"init"</span>\n$ git remote add origin https://github.com/&lt;username&gt;/&lt;repository-name&gt;\n$ git push -u origin master\n</code></pre>\n<h1>generate &amp; deploy</h1>\n<p>아래의 명령어를 통해 deploy할 내용이 담긴 dist 폴더를 생성한다.</p>\n<pre><code class="language-bash">$ yarn generate // dist 폴더를 생성\n$ yarn deploy // github pages에 배포\n</code></pre>\n<h1>주의사항</h1>\n<p>만약 yarn deploy시 다음과 같은 에러가 뜬다면..</p>\n<pre><code class="language-bash">aborted: git not clean\nerror Command failed with <span class="hljs-built_in">exit</span> code 1.\n</code></pre>\n<p>다음과 같은 순서대로 실행 해주면 해결 됨.</p>\n<pre><code class="language-bash">$ yarn generate // dist 폴더를 생성\n$ git add .\n$ git commit -m <span class="hljs-string">"init"</span>\n$ git push -u origin master\n$ yarn deploy // github pages에 배포\n</code></pre>\n<h1>참고 사이트</h1>\n<p><a href="https://nuxtjs.org/faq/github-pages/">nuxtjs.org</a></p>\n<p><a href="https://hackernoon.com/create-and-publish-a-nuxt-powered-website-on-github-pages-3e922dfa7372">Create and publish a Nuxt.js powered website on Github pages</a></p>\n</section>\n'},554:function(t,o,n){var content=n(570);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(13).default)("1ee63fe1",content,!0,{sourceMap:!1})},568:function(t,o,n){var map={"./nuxt.js로-블로그-만들기-(1)-install-하기.md":552,"./nuxt.js로-블로그-만들기-(2)-github-pages에-deploy하기.md":553};function e(t){var o=r(t);return n(o)}function r(t){if(!n.o(map,t)){var o=new Error("Cannot find module '"+t+"'");throw o.code="MODULE_NOT_FOUND",o}return map[t]}e.keys=function(){return Object.keys(map)},e.resolve=r,t.exports=e,e.id=568},569:function(t,o,n){"use strict";var e=n(554);n.n(e).a},570:function(t,o,n){(t.exports=n(12)(!1)).push([t.i,".foo[data-v-204c3a56] code{box-shadow:none;color:#000}.foo[data-v-204c3a56] body{font-family:Helvetica,arial,sans-serif;font-size:14px;line-height:1.6;background-color:#fff;padding:30px;color:#333}.foo[data-v-204c3a56] body>:first-child{margin-top:0!important}.foo[data-v-204c3a56] body>:last-child{margin-bottom:0!important}.foo[data-v-204c3a56] a{color:#4183c4;text-decoration:none}.foo[data-v-204c3a56] a.absent{color:#c00}.foo[data-v-204c3a56] a.anchor{display:block;padding-left:30px;margin-left:-30px;cursor:pointer;position:absolute;top:0;left:0;bottom:0}.foo[data-v-204c3a56] h1,.foo[data-v-204c3a56] h2,.foo[data-v-204c3a56] h3,.foo[data-v-204c3a56] h4,.foo[data-v-204c3a56] h5,.foo[data-v-204c3a56] h6{margin:20px 0 10px;padding:0;font-weight:700;-webkit-font-smoothing:antialiased;cursor:text;position:relative}.foo[data-v-204c3a56] h1:first-child,.foo[data-v-204c3a56] h1:first-child+.foo>>>h2,.foo[data-v-204c3a56] h2:first-child,.foo[data-v-204c3a56] h3:first-child,.foo[data-v-204c3a56] h4:first-child,.foo[data-v-204c3a56] h5:first-child,.foo[data-v-204c3a56] h6:first-child{margin-top:0;padding-top:0}.foo[data-v-204c3a56] h1:hover a.anchor,.foo[data-v-204c3a56] h2:hover a.anchor,.foo[data-v-204c3a56] h3:hover a.anchor,.foo[data-v-204c3a56] h4:hover a.anchor,.foo[data-v-204c3a56] h5:hover a.anchor,.foo[data-v-204c3a56] h6:hover a.anchor{text-decoration:none}.foo[data-v-204c3a56] h1 tt,.foo[data-v-204c3a56] h2 tt,.foo[data-v-204c3a56] h3 tt,.foo[data-v-204c3a56] h4 tt,.foo[data-v-204c3a56] h5 tt,.foo[data-v-204c3a56] h6 tt,h1 code[data-v-204c3a56],h2 code[data-v-204c3a56],h3 code[data-v-204c3a56],h4 code[data-v-204c3a56],h5 code[data-v-204c3a56],h6 code[data-v-204c3a56]{font-size:inherit}.foo[data-v-204c3a56] h1{font-size:28px;color:#000}.foo[data-v-204c3a56] h2{font-size:24px;border-bottom:1px solid #ccc;color:#000}.foo[data-v-204c3a56] h3{font-size:18px}.foo[data-v-204c3a56] h4{font-size:16px}.foo[data-v-204c3a56] h5,.foo[data-v-204c3a56] h6{font-size:14px}.foo[data-v-204c3a56] h6{color:#777}.foo[data-v-204c3a56] blockquote,.foo[data-v-204c3a56] dl,.foo[data-v-204c3a56] li,.foo[data-v-204c3a56] ol,.foo[data-v-204c3a56] p,.foo[data-v-204c3a56] pre,.foo[data-v-204c3a56] table,.foo[data-v-204c3a56] ul{margin:15px 0}.foo[data-v-204c3a56] hr{border:0;color:#ccc;height:4px;padding:0}.foo[data-v-204c3a56] a:first-child h1,.foo[data-v-204c3a56] a:first-child h2,.foo[data-v-204c3a56] a:first-child h3,.foo[data-v-204c3a56] a:first-child h4,.foo[data-v-204c3a56] a:first-child h5,.foo[data-v-204c3a56] a:first-child h6,.foo[data-v-204c3a56] body>h1:first-child,.foo[data-v-204c3a56] body>h1:first-child+h2,.foo[data-v-204c3a56] body>h2:first-child,.foo[data-v-204c3a56] body>h3:first-child,.foo[data-v-204c3a56] body>h4:first-child,.foo[data-v-204c3a56] body>h5:first-child,.foo[data-v-204c3a56] body>h6:first-child{margin-top:0;padding-top:0}.foo[data-v-204c3a56] h1 p,.foo[data-v-204c3a56] h2 p,.foo[data-v-204c3a56] h3 p,.foo[data-v-204c3a56] h4 p,.foo[data-v-204c3a56] h5 p,.foo[data-v-204c3a56] h6 p{margin-top:0}.foo[data-v-204c3a56] li p.first{display:inline-block}.foo[data-v-204c3a56] ul,ol[data-v-204c3a56]{padding-left:30px}.foo[data-v-204c3a56] ol :first-child,.foo[data-v-204c3a56] ul :first-child{margin-top:0}.foo[data-v-204c3a56] ol :last-child,.foo[data-v-204c3a56] ul :last-child{margin-bottom:0}.foo[data-v-204c3a56] dl{padding:0}.foo[data-v-204c3a56] dl dt{font-size:14px;font-weight:700;font-style:italic;padding:0;margin:15px 0 5px}.foo[data-v-204c3a56] dl dt:first-child{padding:0}.foo[data-v-204c3a56] dl dt>:first-child{margin-top:0}.foo[data-v-204c3a56] dl dt>:last-child{margin-bottom:0}.foo[data-v-204c3a56] dl dd{margin:0 0 15px;padding:0 15px}.foo[data-v-204c3a56] dl dd>:first-child{margin-top:0}.foo[data-v-204c3a56] dl dd>:last-child{margin-bottom:0}.foo[data-v-204c3a56] blockquote{border-left:4px solid #ddd;padding:0 15px;color:#777}.foo[data-v-204c3a56] blockquote>:first-child{margin-top:0}.foo[data-v-204c3a56] blockquote>:last-child{margin-bottom:0}.foo[data-v-204c3a56] table{padding:0}.foo[data-v-204c3a56] table tr{border-top:1px solid #ccc;background-color:#fff;margin:0;padding:0}.foo[data-v-204c3a56] table tr:nth-child(2n){background-color:#f8f8f8}.foo[data-v-204c3a56] table tr th{font-weight:700}.foo[data-v-204c3a56] table tr td,.foo[data-v-204c3a56] table tr th{border:1px solid #ccc;text-align:left;margin:0;padding:6px 13px}.foo[data-v-204c3a56] table tr td :first-child,.foo[data-v-204c3a56] table tr th :first-child{margin-top:0}.foo[data-v-204c3a56] table tr td :last-child,.foo[data-v-204c3a56] table tr th :last-child{margin-bottom:0}.foo[data-v-204c3a56] img{max-width:100%}.foo[data-v-204c3a56] span.frame,.foo[data-v-204c3a56] span.frame>span{display:block;overflow:hidden}.foo[data-v-204c3a56] span.frame>span{border:1px solid #ddd;float:left;margin:13px 0 0;padding:7px;width:auto}.foo[data-v-204c3a56] span.frame span img{display:block;float:left}.foo[data-v-204c3a56] span.frame span span{clear:both;color:#333;display:block;padding:5px 0 0}.foo[data-v-204c3a56] span.align-center{display:block;overflow:hidden;clear:both}.foo[data-v-204c3a56] span.align-center>span{display:block;overflow:hidden;margin:13px auto 0;text-align:center}.foo[data-v-204c3a56] span.align-center span img{margin:0 auto;text-align:center}.foo[data-v-204c3a56] span.align-right{display:block;overflow:hidden;clear:both}.foo[data-v-204c3a56] span.align-right>span{display:block;overflow:hidden;margin:13px 0 0;text-align:right}.foo[data-v-204c3a56] span.align-right span img{margin:0;text-align:right}.foo[data-v-204c3a56] span.float-left{display:block;margin-right:13px;overflow:hidden;float:left}.foo[data-v-204c3a56] span.float-left span{margin:13px 0 0}.foo[data-v-204c3a56] span.float-right{display:block;margin-left:13px;overflow:hidden;float:right}.foo[data-v-204c3a56] span.float-right>span{display:block;overflow:hidden;margin:13px auto 0;text-align:right}.foo[data-v-204c3a56] code,.foo[data-v-204c3a56] tt{margin:0 2px;padding:0 5px;white-space:nowrap;border:1px solid #eaeaea;background-color:#f8f8f8;border-radius:3px}.foo[data-v-204c3a56] pre code{margin:0;padding:0;white-space:pre;border:none;background:transparent}.foo[data-v-204c3a56] .highlight pre,.foo[data-v-204c3a56] pre{background-color:#f8f8f8;border:1px solid #ccc;font-size:13px;line-height:19px;overflow:auto;padding:6px 10px;border-radius:3px}.foo[data-v-204c3a56] pre code,.foo[data-v-204c3a56] pre tt{background-color:transparent;border:none}",""])},581:function(t,o,n){"use strict";n.r(o);n(37),n(78);var e={asyncData:function(t){var o,e;return regeneratorRuntime.async((function(r){for(;;)switch(r.prev=r.next){case 0:return o=t.params,r.next=3,regeneratorRuntime.awrap(n(568)("./".concat(o.slug,".md")));case 3:return e=r.sent,console.log(e),r.abrupt("return",{post:e.default});case 6:case"end":return r.stop()}}))},mounted:function(){var t,o,meta,i;return regeneratorRuntime.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,regeneratorRuntime.awrap(document.createElement("html"));case 2:return(t=n.sent).innerHTML=this.post,o=[],n.next=7,regeneratorRuntime.awrap(t.getElementsByTagName("meta"));case 7:for(i in meta=n.sent)o.push({name:meta[i].name,content:meta[i].content});return n.next=11,regeneratorRuntime.awrap(o.filter((function(t){return"title"===t.name}))[0].content);case 11:return this.title=n.sent,n.next=14,regeneratorRuntime.awrap(o.filter((function(t){return"date"===t.name}))[0].content);case 14:this.date=n.sent;case 15:case"end":return n.stop()}}),null,this)},data:function(){return{title:"",date:""}}},r=(n(569),n(56)),component=Object(r.a)(e,(function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"foo",domProps:{innerHTML:this._s(this.post)}})}),[],!1,null,"204c3a56",null);o.default=component.exports}}]);