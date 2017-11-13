# onlyGetPost

> 解决服务器屏蔽非(GET, POST)请求问题 将 Rest模式 非(GET, POST)请求 转换为 POST 请求。
## 安装

### 1. 直接 \<script\> 引入
```html
<script src="path/to/onlyGetPost.js"></script>
```
or
```html
<script src="path/to/onlyGetPost.min.js"></script>
```

### 2. NPM
```bash
$ npm install only-get-post [--save]
```

## 使用
> 使用axios作为示例，也支持其他 ajax 库。
```js
// 开启hook
onlyGetPost.hook();
axios.delete('/user/1') // ====> POST '/user/1?_method=DELETE'
// 卸载hook
onlyGetPost.unhook();
// 卸载之后 请求还原
axios.delete('/user/1') // ====> DELETE '/user/1'
```
