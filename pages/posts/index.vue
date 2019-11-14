<template>
  <v-row>
    <v-col cols="12">
      <h1>My posts</h1>
    </v-col>

    <v-col cols="3" v-for="post in posts" :key="post.title">
      <v-card>
        <v-card-title>
          {{ post.title }}
        </v-card-title>
        <v-card-text>
        </v-card-text>
        
        <v-card-actions>
          <v-spacer>
          </v-spacer>
            <nuxt-link :to="$route.path + '/' + post.title">
              <v-btn>
                보러 가기
              </v-btn>
            </nuxt-link>

        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>
<script>
export default {
  async mounted(){
    const resolve = await require.context("~/contents/", true, /\.md$/)
    
    let _posts = []
    for(var i in resolve.keys()){
      let html_str =  await require('~/contents' + resolve.keys()[i].slice(1)).default
      
      // html string 으로 부터 meta data parsing
      var el = await document.createElement('html');
      el.innerHTML = html_str // html string
      
      let metaArray = []
      let meta = await el.getElementsByTagName('meta');
      
      for(var j in meta){
        metaArray.push({name:meta[j].name, content:meta[j].content})
      }

      let title = await metaArray.filter(item => item.name === 'title')[0].content
      let date = await metaArray.filter(item => item.name === 'date')[0].content
      
      _posts.push({html:html_str, title:title, date:date})
    }
    this.posts = _posts
  },
  data() {
    return {
      posts: [],
    }
  }
}
</script>