# 逻辑结构

Step1: 用户输入代码

Step2: 解析代码,

Step3: 转译代码

Step4: 执行代码, 生成schema

Step5: 基于schema, 模拟执行DataStructure, 生成DSL

Step6: 渲染算法可视化

## 逻辑顺序

Code => Schema => DataStructure => VStory => 可视化

## 简要描述

Code: 用户输入的代码
Schema: 算法执行过程统一描述语言, 支持多种语言生成同一个JSON描述的Schema
DataStructure: 数据结构, 接收一个Schema, 输出一个DSL; 允许脱离Schema, 直接调用DataStructure生成DSL
VStory: 可视化故事
