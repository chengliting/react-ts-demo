# 1.project summary

It's a project that writing with react and typescript.



> Learn more,  check out the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).
> 
> To learn React, check out the [React documentation](https://reactjs.org/).

# 2.prepare before code

## run project

`npm i`

`npm start`

# 3.Folder Structure

```
my-app
├── README.md
├── node_modules 
├── package.json
├── tsconfig.json 配置 typescript
├── public  不參與打包、包含項目靜態文件
│   ├── favicon.ico
│   ├── index.html 靜態文件入口
│   ├── manifest.json 配置PWA
│   └── robots.txt 配置爬蟲相關
└── src
    ├── App.js 描述App本身
    ├── App.test.js
    ├── index.js 入口文件
    ├── serviceWorker.js
    ├── reportWebVitals.js 做埋點上報功能
    └── setupTests.js 配置單元測試
```
