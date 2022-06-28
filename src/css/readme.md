# 公共样式描述

主要定义全局的样式 间距，颜色的的变量，其他 scss 引用,定义一下单个样式类，提高开发效率，方便后期修改，

### 文件说明

[tool.scss] 定义全局样式
[variables.scss] 定义样式变量

### 主要样式

1.  内外间距 大中小
2.  字体大小
3.  字体颜色
4.  主题颜色
5.  背景色
6.  选中颜色
7.  标题大小

### 定义规则

统一由 `nio` 开头、中划线 、大（large）中（省略）小(small)、中划线 、具体样式， （例如 .nio-pl-large）,可以 简写，单字义明确如（.nio-mr{margin-right:12px;}）

### 主要样式类：

```css
/* 标题 */
.nio-title {
    font-size: 16px;
    color: $font-title-color;
    line-height: 16px;
}

.nio-title-small {
    font-size: 14px;
    color: $font-title-color;
    line-height: 14px;
}
.nio-title-large {
    font-size: 18px;
    color: $font-title-color;
    line-height: 18px;
}
.nio-font-size {
    font-size: $font-size;
}
/*字体颜色 禁用*/
.nio-tips-color {
    color: $font-tips-color;
}
/*字体颜色 常规*/
.nio-font-color {
    color: $font-color;
}
.nio-disable-color {
    color: $font-disable-color;
}
.nio-background {
    background: $nio-background;
}

.nio-color,
.nio-theme,
.nio-active {
    color: $nio-theme;
}

.nio-ml-middle {
    margin-left: $nio-spacing-middle;
}
.nio-ml {
    margin-left: $nio-spacing;
}
.nio-ml-large {
    margin-left: $nio-large-spacing;
}
.nio-mr-middle {
    margin-right: $nio-middle-spacing;
}
.nio-mr {
    margin-right: $nio-spacing;
}
.nio-mr-large {
    margin-right: $nio-large-spacing;
}
.nio-mt-middle {
    margin-top: $nio-middle-spacing;
}
.nio-mt {
    margin-top: $nio-spacing;
}
.nio-mt-large {
    margin-top: $nio-spacing-large;
}
.nio-mb-middle {
    margin-bottom: $nio-middle-spacing;
}
.nio-mb {
    margin-bottom: $nio-spacing;
}
.nio-mb-large {
    margin-bottom: $nio-large-spacing;
}
.nio-pl-middle {
    padding-left: $nio-middle-spacing;
}
.nio-pl {
    padding-left: $nio-spacing;
}
.nio-pl-large {
    padding-left: $nio-large-spacing;
}
.nio-pr-middle {
    padding-right: $nio-middle-spacing;
}
.nio-pr {
    padding-right: $nio-spacing;
}
.nio-pr--large {
    padding-right: $nio-large-spacing;
}
.nio-middle-pt {
    padding-top: $nio-middle-spacing;
}
.nio-pt {
    padding-top: $nio-spacing;
}
.nio-large-pt {
    padding-top: $nio-large-spacing;
}

.nio-middle-pb {
    padding-bottom: $nio-middle-spacing;
}
.nio-pb {
    padding-bottom: $nio-spacing;
}
.nio-large-pb {
    padding-bottom: $nio-large-spacing;
}
.nio-right {
    text-align: right;
}
.nio-center {
    text-align: center;
}
.nio-hidden {
    overflow: hidden;
}
.nio-block {
    display: block;
}
.nio-hide {
    display: none;
    opacity: 0;
}
.nio-inline-block {
    display: inline-block;
}
.nio-pointer {
    cursor: pointer;
}
.nio-oneline {
    width: 100%;
    display: inline-block;
    overflow: hidden; /*超出部分隐藏*/
    white-space: nowrap; /*不换行*/
    text-overflow: ellipsis; /*超出部分文字以...显示*/
}
```
