# starting package

- next 설치
  ```jsx
  npx create-next-app
  ```
- typescript ⇒ yes로 해주기
- next 12 , react 17
  ```jsx
  yarn add next@12.1.0 react@17.0.2 react-dom@17.0.2 --exact
  ```

> ❗️ **라이브러리 하위 모듈 버전 고정하기**사용하고 있는 외부 라이브러리가 의존하는 모듈의 특정 버전으로 고정시키고 싶을 경우
> \*\*\*\*해주세요.
>
> **npm 패키지 매니저** 사용 시 **package.json**에 다음을 추가해주세요
>
> ```jsx
> {
> 	"devDependencies": {
> 	...
> 	},
> 	"overrides": {
> 	"@types/react" : "17.0.2"
> }
> ```

- 라이브러리 하위 모듈 고정
  **yarn 패키지 매니저** 사용 시 **package.json** 에 다음을 추가
      ```jsx
      {
      	"devDependencies": {
      	...
      	},
      	"resolutions": {
      	"@types/react" : "17.0.2"
      }
      ```
- package.json에서 버젼 동일한 것으로 변경
- emotion 설치
  ```jsx
  **yarn add @emotion/react
  yarn add @emotion/styled**
  ```
- ❗️버젼을 변경했으므로 node_modules를 전부 다 삭제한 이후 yarn install로 재설치
- eslint 설치
  ```jsx
  yarn add eslint
  ```
- eslint 설정
  ```jsx
  npx eslint --init
  ```
- eslint 세부설정
  ```jsx
  How would you like to use ESlint ? => syntax, problems, code style

  Waht type of modiles does your project use? => Javascript modules (import/export)

  Which framework does your project use? => react

  Does your project use TypeScript? => Yes

  Where does your code run? => Browser

  How would you like to define a style for your project? => Use a popular style guide

  Which style guide do you want to follow? => standard

  What format do you want your config file to be in? => Javascript
  Checking...
  ...

  Which package manager do you want to use? => yarn
  ```
- eslint 필요없는 설정 꺼놓기
  ```jsx
  rules: {
      **"react/react-in-jsx-scope": "off",
      "@typescript-eslint/explicit-function-return-type": "off",
      "@typescript-eslint/strict-boolean-expressions": "off",
      "@typescript-eslint/no-misused-promises": "off",
      "@typescript-eslint/triple-slash-reference": "off",**
    },
  ```
- prettier 설치
  ```jsx
  yarn add --dev --exact prettier
  ```
- eslint & prettier 연결
  ```jsx
  yarn add eslint-config-prettier --dev
  ```
- eslint의 오류 해결하기 위해 tsconfig의 ".eslintrc.js" 추가
  ```jsx
  "include": [
      "next-env.d.ts",
      "**/*.ts",
      "**/*.tsx",
      ".eslintrc.js"
    ],
  ```
- 원활한 prettier 작동을위해 파일을 위해 .vscode를 최상단 폴더에 만든후에
  setting.json 파일 생성후 아래 내용 입력
  ```jsx
  {
      "editor.formatOnSave": true,
      "editor.defaultFormatter": "esbenp.prettier-vscode"
    }
  ```

# 끝

- package.json 결과
