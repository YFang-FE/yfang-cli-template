/*
 * @Author: super
 * @Date: 2019-04-11 17:18:31
 * @Last Modified by: super
 * @Last Modified time: 2019-09-04 18:01:45
 * @ function 组件，使用 react hook
 */

/**
 * 基于 react hook 的实践，函数组件与类组件的不同
 */
import React, { useState } from 'react';

function Introduct() {
    // count = 0 , setCount 为 count 的设置方法
    const [count, setCount] = useState(0);

    return (
        <div>
            <h1>Welcome to yfang-cli</h1>
            <h3>You can use this to develop your project.</h3>
            <p>This project will help you create a project easily.</p>
            <p>You use webpack, vue, vue-router, vuex, sass and so on.</p>
            <p>I hope that can be helpful for you!!</p>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>Click me</button>
        </div>
    );
}

export default Introduct;
