# pnpm + pnpm workspace + git action 자동화 

## 테스트 방법

1. 해당 repo를 clone 받습니다.

```
git clone https://github.com/talktomeinkorean/ttmik-monorepo-with-pnpm-poc.git
```

2. pnpm을 설치합니다.
```
brew install pnpm

// alias 등록
vi ~/.zshrc

alias pn=pnpm
```

3. 설치가 끝났다면 vscode에서 해당 레포를열고 pnpm install을 해줍니다.

4. 그럼 node_modules가 생깁니다.

5. 각 packages 안에는 폴더가 있고 각 폴더 안에는 별도의 package.json이 있습니다.
따라서 각 packages 안에 들어가서도 pnpm install을 해야합니다. 

```
cd packages
cd next1
pnpm install
```

6. next1에서 자유로운 개발을 해보세요!

그리고 main과 dev 브랜치에 각각 올리면 알잘딱깔센으로 next.talktomeinkorean.kr에 내용이 반영됩니다

https://next.talktomeinkorean.kr/

## 명령어

1. 특정 폴더에 패키지 추가하기

```
pn --filter next1 add -D tailwindcss
```

 pnpx create-turbo@latest -e with-tailwind         



 ## headless 하게 컴포넌트 설계하기 (dropdown)

 https://martinfowler.com/articles/headless-component.html#IntroducingTheHeadlessComponentPattern


 ## Headless 컴포넌트 (checkbox)

 https://www.howdy-mj.me/design/headless-components