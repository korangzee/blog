<template>
  <v-row>
    <v-col align="center" cols="12">
      <v-card flat>
        <v-card-title>
          개인정보 처리방침
        </v-card-title>
        <v-card-text>
           ■ 수집하는 개인정보 항목
          회사는 회원가입, 상담, 서비스 신청 등등을 위해 아래와 같은 개인정보를 수집하고 있습니다.
          ο 수집항목 : 이름 , 생년월일 , 성별 , 로그인ID , 비밀번호 , 비밀번호 질문과 답변 , 자택 전화번호 , 자택 주소 , 휴대전화번호 , 이메일 , 직업 , 회사명 , 부서 , 직책 , 회사전화번호 , 취미 , 결혼여부 , 기념일 , 법정대리인정보 , 서비스 이용기록 , 접속 로그 , 접속 IP 정보 , 결제기록
          ο 개인정보 수집방법 : 홈페이지(회원가입) , 서면양식
          ■ 개인정보의 수집 및 이용목적
          회사는 수집한 개인정보를 다음의 목적을 위해 활용합니다.
          ο 서비스 제공에 관한 계약 이행 및 서비스 제공
          ο 회원 관리
          회원제 서비스 이용에 따른 본인확인 , 개인 식별 , 연령확인 , 만14세 미만 아동 개인정보 수집 시 법정 대리인 동의여부 확인 , 고지사항 전달 ο 마케팅 및 광고에 활용
          접속 빈도 파악 또는 회원의 서비스 이용에 대한 통계
          ■ 개인정보의 보유 및 이용기간
          회사는 개인정보 수집 및 이용목적이 달성된 후에는 예외 없이 해당 정보를 지체 없이 파기합니다.
        </v-card-text>
        <!-- <v-card-action>
          <v-btn href="https://api.instagram.com/oauth/authorize?app_id=2461918490735728&redirect_uri=https://korangzee.github.io/blog/auth/&scope=user_profile,user_media&response_type=code">
            받아오기
          </v-btn>
        </v-card-action> -->
      </v-card>
    </v-col>

    <v-col cols="12">
      <v-card>
          <!-- <v-card-title>
              사진 보관함abcd
          </v-card-title> -->
          <v-divider></v-divider>
          <v-card-text>
              <!-- <v-col v-for="item in items" cols="4">
                  <v-img aspect-ratio="1" :src="item.data().url"></v-img>
              </v-col> -->
              asdf
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
}
</script>