<template>
  <v-row>
    <v-col align="center">
      <v-card flat>  
        <v-card-title>
          {{ item }}
        </v-card-title>
        <v-card-text>
            
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import Post from '@/pages/posts/_id/'

export default {
  data() {
    return {
      item: [],
    }
  }
}
</script>
