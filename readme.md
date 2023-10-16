# pnpm + yarn workspace + lerna 로 모노레포 구축 poc

## pnpm

1. 공식 사이트
https://pnpm.io/

2. pnpm vs yarn berry
https://yceffort.kr/2022/05/npm-vs-yarn-vs-pnpm

3. 도입 이유

* node_modules symlink 형태로 빠른 빌드 속도를 자랑함

* 뭔가 익숙해서...
1)  npm : 겁나 느림
2)  yarn(v1) : 사실상 신규 개발은 지원 중단함.
3) yarn berry(v2) : node_modules 미설치 형태가 뭔가 익숙치 않아서 보류...

4. 설치 방법

```
brew install pnpm

// alias 등록
vi ~/.zshrc

alias pn=pnpm
```



## 참고 문서/영상링크

1. [우아콘 2022] 우리는 하나다! 모노레포 with pnpm
https://velog.io/@dbwjd5864/%EC%9A%B0%EC%95%84%EC%BD%98-2022-%EC%9A%B0%EB%A6%AC%EB%8A%94-%ED%95%98%EB%82%98%EB%8B%A4-%EB%AA%A8%EB%85%B8%EB%A0%88%ED%8F%AC-with-pnpm