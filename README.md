# typescript 기본 설정법
* create-react-app을 사용하지 않음.
* webpack 수동 설정.

## 참고
* [참고 사이트](http://jeonghwan-kim.github.io/dev/2019/06/25/react-ts.html)

## 설치
1. **npm 초기화**
```js
$ npm init -y
```

2. **리액트 패키지 설치**
```js
$ npm install --save react react-dom
```

3. **타입 정의 파일 다운**
```js
$ npm install --save @types/react @types/react-dom
```

4. **typescript 패키지 설치**
```js
$ npm install --save-dev typescript
```

5. **다운로드한 typescript 명령어를 이용해 타입스크립트 설정파일을 생성.**
```js
$ npx typescript --init
```

6. **tsconfig.json 설정**
```js
"compilorOptions": {
  // react 컴파일 설정
  "jsx": "react"
  ...
```

## webpack 빌드 설정
1. **ts-loader와 webpack package 설치**
```js
$ npm install --save-dev ts-loader webpack webpack-cli
```

2. **webpack-dev-server을 이용한 자동화**
```js
$ npm install --save-dev webpack-dev-server
```

2. **webpack.config.js 설정**
```js
module.exports = {
  mode: 'development',

  // 엔트리 포인트
  entry: './src/index.tsx',

  // '/dist' 디렉토리에 빌드 output
  output: {
    filename: 'main.js',
    path: __dirname + "/dist"
  },

  // 디버깅을 위해 빌드 결과물에 소스맵 추가
  devtool: 'source-map',

  // 개발서버 정보 셋팅
  devServer: {
    contentBase: './', // static 파일 제공 위치.
    publicPath: '/dist', // 빌드 파일 위치.
    compress: true,
    port: 8000,
  },

  resolve: {
    // 파일 확장자 처리
    extensions: [".ts", ".tsx", ".js"],
  },

  module: {
    rules: [
      // .ts나 .tsx 확장자를 ts-loader가 트랜스 파일
      {test: /\.tsx?$/, loader: "ts-loader" },
    ]
  }
}
```

3. **package.json 설정**
```js
...
"scripts": {
  "dev": "webpack-dev-server",
  "build": "webpack"
}
...
```

## 실행
* **빌드**
```js
$ yarn build
```

* **개발자 모드**
```js
$ yarn dev
```