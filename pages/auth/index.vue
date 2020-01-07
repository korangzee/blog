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
          <v-btn>
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
              <v-col v-for="item in items" cols="4">
                  <v-img aspect-ratio="1" :src="item.data().url"></v-img>
              </v-col>
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
  }
  
}
</script>