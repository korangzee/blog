<meta name="title" content="nuxt.js로-블로그-만들기-(2)-github-pages에-deploy하기">
<meta name="date" content="2019-11-20">

# nuxt.js로 블로그 만들기 (2) github pages에 deploy하기

# github에서 저장소를 새로 만들기

- 저장소 이름이 <username>.github.io면, <username>.github.io로 접속 가능
- 저장소 이름을 위와 같은 형식이 아니라 일반적인 방식인 <repository-name>으로 지정하면, <username>.github.io/<repository-name>으로 접속 가능

# router 세팅

저장소이름이 <repository-name>이라면, router의 정상적인 작동을 위해서 nuxt.config.js에서 다음을 추가

```js
//nuxt.config.js

export default {
  router: {
    base: '/blog/'
  },
}
```

# push-dir 설치

yarn으로 push-dir를 설치

```
yarn add push-dir --save-dev
```

package.json에 다음과 같이 추가
```js
"scripts": {
  "dev": "nuxt",
  "build": "nuxt build",
  "start": "nuxt start",
  "generate": "nuxt generate",
  "deploy": "push-dir --dir=dist --branch=gh-pages --cleanup" // 이 줄을 추가
},
```

# git 저장소와 연결

```bash
$ git add .
$ git commit -m "init"
$ git remote add origin https://github.com/<username>/<repository-name>
$ git push -u origin master
```

# generate & deploy

아래의 명령어를 통해 deploy할 내용이 담긴 dist 폴더를 생성한다.

```bash
$ yarn generate // dist 폴더를 생성
$ yarn deploy // github pages에 배포
```

# 주의사항

만약 yarn deploy시 다음과 같은 에러가 뜬다면..

```bash
aborted: git not clean
error Command failed with exit code 1.
```

다음과 같은 순서대로 실행 해주면 해결 됨.

```bash
$ yarn generate // dist 폴더를 생성
$ git add .
$ git commit -m "init"
$ git push -u origin master
$ yarn deploy // github pages에 배포
```

# 참고 사이트

[nuxtjs.org](https://nuxtjs.org/faq/github-pages/)

[Create and publish a Nuxt.js powered website on Github pages](https://hackernoon.com/create-and-publish-a-nuxt-powered-website-on-github-pages-3e922dfa7372)