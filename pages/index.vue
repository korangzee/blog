<template>
  <v-row>
    <v-col>
      <v-card>
        <v-card-title class="headline">
          Welcome to the Korangzee's blog!
        </v-card-title>
        <v-card-text>
          <p>다양한 IT, Finance에 관한 내용을 다루는 블로그 입니다.</p>
          <p>건전한 토론과 의사소통은 언제든 환영입니다</p>
          <p>email: korangzee@gmail.com</p>
        </v-card-text>
        <v-card-actions>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import Logo from '~/components/Logo.vue'
import VuetifyLogo from '~/components/VuetifyLogo.vue'

export default {
  components: {
    Logo,
    VuetifyLogo
  }
}
</script>
