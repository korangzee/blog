<meta name="title" content="nuxt.js로-블로그-만들기-(1)-install-하기">
<meta name="date" content="2019-11-19">


# nuxt.js로 블로그 만들기 (1) install 하기

# 설치

mac os 기준으로 설명한다.
```js
$ brew install yarn // mac os - brew를 이용해서 yarn을 설치
$ yarn create nuxt-app <프로젝트 이름> // yarn을 이용해 nuxt-app설치
```
# 각종 설정

- Project name: 본인에 맞게 입력
- project description: 본인에 맞게 입력
- Author name: 본인에 맞게 입력
- UI framework: vuetify.js 선택
    - Material Design framework이며, 쉽게 그럴듯한 디자인을 줄 수 있다는 장점이 있음.
- server framework: 본인에 맞게 선택
    - 필자는 Express 사용. 사용자가 많아 관련 문서를 찾기 쉽다는 장점.
- Nuxt.js modules: Axios 선택
- linting tools: 본인에 맞게 선택
- test framework: 본인에 맞게 선택
- rendering mode: 본인에 맞게 선택
    - 블로그의 경우엔 SEO가 중요하니 SSR을 사용할 수 있게 Universal로
    - 그렇지 않은 경우에는 SPA도 가능.
- development tool: 본인에 맞게 선택

# Dev

```bash
$ cd blog
$ yarn dev // localhost:3000으로 접속 가능
```

# 참고 사이트

[NUXT로 혼자 웹사이트 만들기 2 설치](https://fkkmemi.github.io/nuxt/nuxt-002-install/)