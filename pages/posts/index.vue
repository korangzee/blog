<template>
  <v-row>
    <v-col cols="12">
      <h1>My posts</h1>
    </v-col>
    <v-col v-for="(post, idx) in posts" :key="post.attributes.title" cols="3">
      <v-card>
        <v-card-title>
          {{ post.attributes.title }}
        </v-card-title>
        <v-card-text>
        </v-card-text>
        
        <v-card-actions>
          <v-spacer>
          </v-spacer>
            <nuxt-link :to="$route.path + postNames[idx]">
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
    async asyncData() {
      const resolve = require.context("~/contents/", true, /\.md$/)
      const imports = resolve.keys().map((key) => {
        const [, name] = key.match(/\/(.+)\.md$/);
        return resolve(key);
      });
      return {
        postNames: resolve.keys().map(item => { return  item.split('.')[1]}),
        posts: imports
      }
    },
    mounted(){
      console.log(this.postNames)
      console.log(this.posts)
      console.log(this.$route.path)
    }
  }
</script>