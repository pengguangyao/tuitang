# react-tuitang
基于react + dva + Nodejs的一个部分功能的项目

## 目的

- 主要是自己独立完成一套完整的前后端流程，虽然项目很小，但从中也可以了解到如何简单的用node搭建接口，在node后台用fetch请求服务器的数据，然后再返回给前端，渲染页面，也面也是用了组件化开发的思想，这里用的是react+dva搭建的前端。

### 运行

克隆项目文件

```
git clone https://github.com/pengguangyao/tuitang.git
```

进入前端duitang文件夹目录安装依赖:

```
npm install
```

进入后端duitang-server文件夹下启动项目

```
npm run dev
```

### 注意事项

- 在此项目中，特别要注意的一点是，在点击获取更多数据的时候，这个事件如果要写在componentDidMount生命周期函数中时，每次需要手动清除div上的事件，不然会造成多次的重复请求。大大降低性能。其实，最好的处理办法就是把监听事件写在元素标签内，就可以避免这个问题。

### 截屏

请求更多数据

![](assets/more.gif)
