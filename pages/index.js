import React, { PureComponent } from 'react';
import styles from "./index.css";
import Headers from "../components/headers";
import List from "../components/list";
// import ThreeCube from "../components/threeCube";
import logo from "../assets/logo1.png";

import { Spin, Icon } from "antd";
const antIcon = <Icon type="loading" style={{ fontSize: 24, color: "#f1897e" }} spin />

export default class Home extends PureComponent {
  static defaultProps = {};
  state = {
    ok: false,
    data: [
      `<h3>周靖人</h3>`,
      `<h3>基于react的个人简历</h3>`,
      `<p>
        web前端
        <span>·</span>
        <a href="http://geewonii.top">网络笔记</a>
        <span>·</span>
        <a href="https://github.com/geewonii">github</a>
      </p>`,
      `<p>男 <span>|</span> 25 <span>|</span> 2年工作经历 <span>|</span> 本科</p>`,
      `<p>17620034561 <span>|</span> 598442441@qq.com</p>`
    ]
  };
  callback() {
    this.setState({ok: true})
  }
  render() {
    const { data, ok } = this.state;

    return (
      <div className={styles.container}>
      <div className={styles.backgroundMask}></div>
      {
        <Spin indicator={antIcon} />
      }
      <img className={styles.logos} src={logo} alt="头像" />
        {/* <ThreeCube /> */}
        <Headers data={data} onCallBack={this.callback.bind(this)} />
        <div className={styles.context}>
          { ok ? <List /> : null }
        </div>
      </div>
    )
  }
}
