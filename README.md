#PageCtrl

分页组件，用于前端页面处理分页问题。                    

1. 支持AMD            
2. 支持[grunt-imweb-tpl-complie](https://www.npmjs.org/package/grunt-imweb-tpl-complie)模版组件              
3. 兼容所有浏览器                 
4. 基于Jquery                

### 使用 Usage:

**1、实例化**

```js
/* @info new PageCtrl(ctn, fn)     
 * @param ctn {Dom} 目标节点           
 * @param fn {Function} 点击页码回调函数 cur-当前点击页码；pre-点击之前页面       
 */
 
var pc = new PageCtrl($('.sort-page'), function pageActionFn(cur, pre) {
	console.log('当前点击：'+cur + ', pre：'+pre);
});
```
**2、初始化**

```js
/* @param total {Number} 总页码数；     
 * @param idx {Number} 当前页码，默认从1开始；       
 * @param max {Number} 最多显示数，可为空默认为5；限制页码区域，超出部分用…代替         
 */

pageCtrl.init({
    'total': 100,
    'idx': 1
    'max': 5
});
```

### 展示 Show:

根据设定的`total, idx, max`3个值进行计算，将分页模块智能展示为几种不同样式。
具体请查看[demo](http://littendomo.sinaapp.com/pagectrl/example.html)。

![demo](http://littendomo.sinaapp.com/pagectrl/demo-img/0.png)
