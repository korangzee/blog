<template>
  <v-row>
    <v-col align="center" cols="12">
      <v-card flat>
        <v-card-title>
          인스타그램 연동
        </v-card-title>
        <v-card-text>
           내 인스타그램 내의 사진을 받아와 보자
        </v-card-text>
        <v-card-action>
          <v-btn href="https://api.instagram.com/oauth/authorize?app_id=2461918490735728&redirect_uri=https://korangzee.github.io/blog/auth/&scope=user_profile,user_media&response_type=code">
            받아오기
          </v-btn>
        </v-card-action>
      </v-card>
    </v-col>

    <v-col cols="12">
      <v-card>
          <v-card-title>
              사진 보관함
          </v-card-title>
          <v-divider></v-divider>
          <v-card-text>
              <!-- <v-col v-for="item in items" cols="4">
                  <v-img aspect-ratio="1" :src="item.data().url"></v-img>
              </v-col> -->
          </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>


<script>
import axios from 'axios'
export default {
  data() {
    return {
      items: [],
      code: '',
    }
  },
  async created(){
    console.log(this.$router)
    console.log(this.$router.history)
    console.log(this.$router.history.current)
    console.log(this.$router.history.current.query)
    console.log(this.$router.history.current.query.code)
    this.code = this.$router.history.current.query.code
    if(this.code) {
      console.log('post')
      let res = await axios.post(`https://api.instagram.com/oauth/access_token`, { headers: { 'Content-type': 'application/x-www-form-urlencoded', 'Access-Control-Allow-Origin': '*'}, app_id : '2461918490735728', app_secret: '05711ff94fdcca7b23a7cc4371c95c21', grant_type: 'authorization_code', redirect_uri:'https://korangzee.github.io/blog/auth/', code:this.code})
      console.log(res)
    }
  },
  methods: {
    async getFromInsta(){
      console.log(this.$router)

            // GET 요청으로 code를 받아온다.

            // code를 활용하여 액세스 토큰을 받아온다
            // 액세스 토큰을 활용하여 고객의 미디어 아이디를 받아온다
            // 각 미디어 아이디로부터 정보를 받아와서 firestore에 기록하고, storage에 다운로드한다.

            // let refs = await this.$storage.child('userProfiles').child(this.currentUser.uid).child('photoLibrary')
            // console.log(refs)
            // console.log(refs.child.length)
            // let url = await refs.getDownloadURL()
            // let name = refs.name
      }
  }
}
</script>