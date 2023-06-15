# vue-admin-template

> 这是一个极简的 vue admin 管理后台。它只包含了 Element UI & axios & iconfont & permission control & lint，这些搭建后台必要的东西。

[线上地址](http://panjiachen.github.io/vue-admin-template)

[国内访问](https://panjiachen.gitee.io/vue-admin-template)

## Build Setup

```bash
# 克隆项目
git clone https://github.com/PanJiaChen/vue-admin-template.git

# 进入项目目录
cd vue-admin-template

# 安装依赖
npm install

# 启动服务
npm run dev
```

浏览器访问 [http://localhost:80](http://localhost:80)

## 发布

```bash
# 构建测试环境
npm run build:stage

# 构建生产环境
npm run build:prod
```

## 其它

```bash
# 预览发布环境效果
npm run preview

# 预览发布环境效果 + 静态资源分析
npm run preview -- --report

# 代码格式检查
npm run lint

# 代码格式检查并自动修复
npm run lint -- --fix
```

# 前端开发遇到的问题

## 访问后端接口

### 登录
1. 更改api/user中登录的路径
2. vue.config.js中注释第41行左右```before: require('./mock/mock-server.js')```
3. 更改.env.development中的```VUE_APP_BASE_API```

### 跨域问题
- 问题：```No 'Access-Control-Allow-Origin'```
- 产生：
	1. 访问协议 http https
	2. IP地址 192.168.1.1 193.168.1.2
	3. 端口号 80 8080
- 解决：后端直接在controller上加```@CrossOrigin()```注解

### 路由跳转

#### 问题

第一次点击修改进行数据回显第二次再去点击添加讲师，进入表单页面，但是问题：表单页面还是显示修改回显数据，正确效果应该是表单数据清空
#### 解决
在
```js
if(this.$route.params && this.$route.params.id) {
	const id = this.$route.params.id
    this.getInfo(id)
} else {
	// 手动清空，但是没用
    this.teacher = {}
}
```
多次路由跳转到同一个页面，在页面中created方法只会执行第一次，后面在进行跳转不会执行的
最终方案：对路由跳转进行监听

### 403错误码

1. 跨域
2. 接口地址写错

### 章节问题
点击修改章节会去后台查数据然后将id也赋值(虽然前端没有定义)，再点击添加章节会判断id不为空所以调用更新方法
#### 解决
在打开弹出窗按钮是就将chapter清空，尤其是id