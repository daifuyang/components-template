# 通过 rollup 快速封装一个组件

[官方文档](https://rollupjs.org/guide/en/)

## 前提条件

> 安装 rollup
```
npm install --global rollup
```

> 配置文件

```
package.json
 "scripts": {
    "dev": "rollup -c -w",
    "build": "rollup -c",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
```

> 所需模块
```
package.json
  "devDependencies": {
    "@rollup/plugin-image": "^2.1.1",
    "@rollup/plugin-typescript": "^8.3.1",
    "@types/react": "^17.0.39",
    "postcss": "^8.4.7",
    "postcss-url": "^10.1.3",
    "react": "^17.0.2",
    "rollup-plugin-postcss": "^4.0.2",
    "tslib": "^2.3.1",
    "typescript": "^4.6.2",
  }
```
