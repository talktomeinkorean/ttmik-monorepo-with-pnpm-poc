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

5. 패키지 의존성 추가

```
cd next1/
pnpm add -w shared-module@0.0.0

```

6. root에 npm 설치하기

```
 pn install typescript  --ignore-workspace-root-check  
```


## 참고 문서/영상링크

1. [우아콘 2022] 우리는 하나다! 모노레포 with pnpm
https://velog.io/@dbwjd5864/%EC%9A%B0%EC%95%84%EC%BD%98-2022-%EC%9A%B0%EB%A6%AC%EB%8A%94-%ED%95%98%EB%82%98%EB%8B%A4-%EB%AA%A8%EB%85%B8%EB%A0%88%ED%8F%AC-with-pnpm


## pnpm + changesets는
pnpm은 패키지 매니저 중 하나로, npm이나 yarn과 유사하게 Node.js 프로젝트의 의존성을 관리하는 데 사용됩니다. pnpm은 효율적인 패키지 관리를 위해 하드 링크와 심볼릭 링크를 사용하여 노드 모듈의 저장을 최적화합니다.

changesets는 소프트웨어 개발에서 버전 관리와 변경 로그 관리를 돕는 툴입니다. changesets를 사용하면 프로젝트의 다양한 패키지에 대한 변경 사항을 추적하고, 이를 기반으로 새로운 버전을 자동으로 생성하고 발행할 수 있습니다.

pnpm과 changesets이 함께 사용될 때, pnpm은 프로젝트의 의존성을 관리하고, changesets은 프로젝트의 변경 사항과 버전 관리를 담당합니다. 이렇게 함께 사용함으로써, 프로젝트의 의존성 관리와 버전 관리를 보다 효율적으로 수행할 수 있게 됩니다.

```
pnpm add -Dw @changesets/cli  
pnpm changeset init     

```

## lerna

```
npx lerna create [프로젝트명]
``````
