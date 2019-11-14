<template>

<div class="foo" v-html="post">
</div>

  
</template>


<script>

export default {
  async asyncData({ params }) {
    let post = await require(`~/contents/${params.slug}.md`); // md파일 가져오기
    console.log(post)
    return {
      post: post.default, // 가져온 내용의 html 부분을 내용을 post로
    } 
  },
  async mounted(){
    // 가져온 html string으로 부터 meta data parsing
    let el = await document.createElement('html');
    el.innerHTML = this.post
    
    let metaArray = []
    let meta = await el.getElementsByTagName('meta')
    
    for(var i in meta){
      metaArray.push({name:meta[i].name, content:meta[i].content})
    }
    
    this.title = await metaArray.filter(item => item.name === 'title')[0].content
    this.date = await metaArray.filter(item => item.name === 'date')[0].content
    
  },
  data(){
    return {
      title: '',
      date: '',

    }
  }
}
</script>


<style scoped>

.foo >>> code {
    box-shadow: none;
    color: black;
}

.foo >>> body {
  font-family: Helvetica, arial, sans-serif;
  font-size: 14px;
  line-height: 1.6;
  padding-top: 10px;
  padding-bottom: 10px;
  background-color: white;
  padding: 30px;
  color: #333;
}

.foo >>> body > *:first-child {
  margin-top: 0 !important;
}

.foo >>> body > *:last-child {
  margin-bottom: 0 !important;
}

.foo >>> a {
  color: #4183C4;
  text-decoration: none;
}

.foo >>> a.absent {
  color: #cc0000;
}

.foo >>> a.anchor {
  display: block;
  padding-left: 30px;
  margin-left: -30px;
  cursor: pointer;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
}

.foo >>> h1, .foo >>> h2, .foo >>> h3, .foo >>> h4, .foo >>> h5, .foo >>> h6 {
  margin: 20px 0 10px;
  padding: 0;
  font-weight: bold;
  -webkit-font-smoothing: antialiased;
  cursor: text;
  position: relative;
}

.foo >>> h2:first-child, .foo >>> h1:first-child, .foo >>> h1:first-child + .foo >>> h2, .foo >>> h3:first-child, .foo >>> h4:first-child, .foo >>> h5:first-child, .foo >>> h6:first-child {
  margin-top: 0;
  padding-top: 0;
}

.foo >>> h1:hover a.anchor, .foo >>> h2:hover a.anchor, .foo >>> h3:hover a.anchor, .foo >>> h4:hover a.anchor, .foo >>> h5:hover a.anchor, .foo >>> h6:hover a.anchor {
  text-decoration: none;
}

.foo >>> h1 tt, h1 code {
  font-size: inherit;
}

.foo >>> h2 tt, h2 code {
  font-size: inherit;
}

.foo >>> h3 tt, h3 code {
  font-size: inherit;
}

.foo >>> h4 tt, h4 code {
  font-size: inherit;
}

.foo >>> h5 tt, h5 code {
  font-size: inherit;
}

.foo >>> h6 tt, h6 code {
  font-size: inherit;
}

.foo >>> h1 {
  font-size: 28px;
  color: black;
}

.foo >>> h2 {
  font-size: 24px;
  border-bottom: 1px solid #cccccc;
  color: black;
}

.foo >>> h3 {
  font-size: 18px;
}

.foo >>> h4 {
  font-size: 16px;
}

.foo >>> h5 {
  font-size: 14px;
}

.foo >>> h6 {
  color: #777777;
  font-size: 14px;
}

.foo >>> p, .foo >>> blockquote, .foo >>> ul, .foo >>> ol, .foo >>> dl, .foo >>> li, .foo >>> table, .foo >>> pre {
  margin: 15px 0;
}

.foo >>> hr {
  border: 0 none;
  color: #cccccc;
  height: 4px;
  padding: 0;
}

.foo >>> body > h2:first-child {
  margin-top: 0;
  padding-top: 0;
}

.foo >>> body > h1:first-child {
  margin-top: 0;
  padding-top: 0;
}

.foo >>> body > h1:first-child + h2 {
  margin-top: 0;
  padding-top: 0;
}

.foo >>> body > h3:first-child, .foo >>> body > h4:first-child, .foo >>> body > h5:first-child, .foo >>> body > h6:first-child {
  margin-top: 0;
  padding-top: 0;
}

.foo >>> a:first-child h1, .foo >>> a:first-child h2, .foo >>> a:first-child h3, .foo >>> a:first-child h4, .foo >>> a:first-child h5, .foo >>> a:first-child h6 {
  margin-top: 0;
  padding-top: 0;
}

.foo >>> h1 p, .foo >>> h2 p, .foo >>> h3 p, .foo >>> h4 p, .foo >>> h5 p, .foo >>> h6 p {
  margin-top: 0;
}

.foo >>> li p.first {
  display: inline-block;
}

.foo >>> ul, ol {
  padding-left: 30px;
}

.foo >>> ul :first-child, .foo >>> ol :first-child {
  margin-top: 0;
}

.foo >>> ul :last-child, .foo >>> ol :last-child {
  margin-bottom: 0;
}

.foo >>> dl {
  padding: 0;
}

.foo >>> dl dt {
  font-size: 14px;
  font-weight: bold;
  font-style: italic;
  padding: 0;
  margin: 15px 0 5px;
}

.foo >>> dl dt:first-child {
  padding: 0;
}

.foo >>> dl dt > :first-child {
  margin-top: 0;
}

.foo >>> dl dt > :last-child {
  margin-bottom: 0;
}

.foo >>> dl dd {
  margin: 0 0 15px;
  padding: 0 15px;
}

.foo >>> dl dd > :first-child {
  margin-top: 0;
}

.foo >>> dl dd > :last-child {
  margin-bottom: 0;
}

.foo >>> blockquote {
  border-left: 4px solid #dddddd;
  padding: 0 15px;
  color: #777777;
}

.foo >>> blockquote > :first-child {
  margin-top: 0;
}

.foo >>> blockquote > :last-child {
  margin-bottom: 0;
}

.foo >>> table {
  padding: 0;
}

.foo >>> table tr {
  border-top: 1px solid #cccccc;
  background-color: white;
  margin: 0;
  padding: 0;
}

.foo >>> table tr:nth-child(2n) {
  background-color: #f8f8f8;
}

.foo >>> table tr th {
  font-weight: bold;
  border: 1px solid #cccccc;
  text-align: left;
  margin: 0;
  padding: 6px 13px;
}

.foo >>> table tr td {
  border: 1px solid #cccccc;
  text-align: left;
  margin: 0;
  padding: 6px 13px;
}

.foo >>> table tr th :first-child, .foo >>> table tr td :first-child {
  margin-top: 0;
}

.foo >>> table tr th :last-child, .foo >>> table tr td :last-child {
  margin-bottom: 0;
}

.foo >>> img {
  max-width: 100%;
}

.foo >>> span.frame {
  display: block;
  overflow: hidden;
}

.foo >>> span.frame > span {
  border: 1px solid #dddddd;
  display: block;
  float: left;
  overflow: hidden;
  margin: 13px 0 0;
  padding: 7px;
  width: auto;
}

.foo >>> span.frame span img {
  display: block;
  float: left;
}

.foo >>> span.frame span span {
  clear: both;
  color: #333333;
  display: block;
  padding: 5px 0 0;
}

.foo >>> span.align-center {
  display: block;
  overflow: hidden;
  clear: both;
}

.foo >>> span.align-center > span {
  display: block;
  overflow: hidden;
  margin: 13px auto 0;
  text-align: center;
}

.foo >>> span.align-center span img {
  margin: 0 auto;
  text-align: center;
}

.foo >>> span.align-right {
  display: block;
  overflow: hidden;
  clear: both;
}

.foo >>> span.align-right > span {
  display: block;
  overflow: hidden;
  margin: 13px 0 0;
  text-align: right;
}

.foo >>> span.align-right span img {
  margin: 0;
  text-align: right;
}

.foo >>> span.float-left {
  display: block;
  margin-right: 13px;
  overflow: hidden;
  float: left;
}

.foo >>> span.float-left span {
  margin: 13px 0 0;
}

.foo >>> span.float-right {
  display: block;
  margin-left: 13px;
  overflow: hidden;
  float: right;
}

.foo >>> span.float-right > span {
  display: block;
  overflow: hidden;
  margin: 13px auto 0;
  text-align: right;
}

.foo >>> code, .foo >>> tt {
  margin: 0 2px;
  padding: 0 5px;
  white-space: nowrap;
  border: 1px solid #eaeaea;
  background-color: #f8f8f8;
  border-radius: 3px;
}

.foo >>> pre code {
  margin: 0;
  padding: 0;
  white-space: pre;
  border: none;
  background: transparent;
}

.foo >>> .highlight pre {
  background-color: #f8f8f8;
  border: 1px solid #cccccc;
  font-size: 13px;
  line-height: 19px;
  overflow: auto;
  padding: 6px 10px;
  border-radius: 3px;
}

.foo >>> pre {
  background-color: #f8f8f8;
  border: 1px solid #cccccc;
  font-size: 13px;
  line-height: 19px;
  overflow: auto;
  padding: 6px 10px;
  border-radius: 3px;
}

.foo >>> pre code, .foo >>> pre tt {
  background-color: transparent;
  border: none;
}
</style>