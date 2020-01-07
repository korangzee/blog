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
              사진 보관함a
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
export default {
  data() {
    return {
      items: [],
    }
  },
  created(){
    console.log(this.$router)
  },
  methods: {
    async getFromInsta(){
      console.log(this.$router)

            // GET 요청으로 code를 받아온다.
                // let res = await axios({
                //     method: 'get',
                //     url: 'https://api.instagram.com/oauth/authorize?app_id=2461918490735728&redirect_uri=https://korangzee.github.io/blog/&scope=user_profile,user_media&response_type=code',
                // })

                // console.log(res)




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