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