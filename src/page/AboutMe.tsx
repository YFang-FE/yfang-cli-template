/*
 * @Author: super
 * @Date: 2019-04-11 17:32:02
 * @Last Modified by: super
 * @Last Modified time: 2019-09-04 15:34:02
 */
/**
 * PropTypes 用于类型判断错误提示, styled-components 组件样式处理
 * mobx 全局状态管理的使用实例 la
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { inject, observer } from 'mobx-react';

type Props = {
    title: string;
    globalState?: any;
};

@inject('globalState')
@observer
class Blog extends Component<Props, any> {
    constructor(props: Props) {
        super(props);
    }
    componentDidMount() {}
    render() {
        return (
            <div>
                {this.props.title}
                <div style={{ marginTop: '10px' }}>
                    mobx-globalState-count: {this.props.globalState.clickTime}
                </div>
            </div>
        );
    }
}
// @ts-ignore
Blog.propTypes = {
    title: PropTypes.string,
};

@inject('globalState')
@observer
class AboutMe extends Component<Props, any> {
    constructor(props: Props) {
        super(props);
    }
    render() {
        const Title = styled.h1`
            font-size: 1.5em;
            text-align: center;
            color: palevioletred;
        `;
        return (
            <div>
                <Title>{this.props.globalState.title}</Title>
                <h2>A cli for create project</h2>
                <h3>Easily, expediently, Perfectly</h3>
                <h3>
                    Create javascript library, react app, vue app and so on!
                </h3>
                <h3>
                    <a
                        href="https://github.com/YFang-FE/yfang-cli"
                        target="_blank"
                    >
                        Star
                    </a>
                    &nbsp;me at Github
                </h3>
                <Blog title="my github: https://github.com/YFang-FE/yfang-cli"/>
                <div>
                    <p>You clicked {this.props.globalState.clickTime} times</p>
                    <button
                        onClick={() => this.props.globalState.addClickTime()}
                    >
                        Click me
                    </button>
                </div>
            </div>
        );
    }
}

export default AboutMe;
