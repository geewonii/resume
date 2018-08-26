import React, { PureComponent } from 'react';
import styles from "./index.css";
import LinearGradient from "../components/LinearGradient";
import Headers from "../components/headers";
import List from "../components/list";
import axios from "axios";
import logo from "../assets/logo1.png";
import { Tooltip, Spin, Icon } from "antd";

export default class Home extends PureComponent {
  state = {
    result: null,
    data: [
      { id: 1, msg: <Tooltip title="现住址番禺大石"><h3>周靖人</h3></Tooltip> },
      { id: 2, msg: <h3>基于react的个人简历</h3> },
      {
        id: 3, msg:
          <p>web前端<span>·</span>
            <a href="http://geewonii.top">网络笔记</a><span>·</span>
            <a href="https://github.com/geewonii">github</a>
          </p>
      },
      {
        id: 4, msg:
          <p>
            男 <span>|</span> 25 <span>|</span>
            <Tooltip title="广州杰莱信息技术有限公司">2年工作经历</Tooltip>
            <span>|</span>
            <Tooltip title="华南理工大学广州学院">本科</Tooltip>
          </p>
      },
      {
        id: 5, msg:
          <p>
            <a href="tel:17620034561">17620034561</a>
            <span>|</span>
            598442441@qq.com
        </p>
      }
    ],
  }

  componentDidMount() {
    this.getDetails()
  }

  getDetails() {
    axios.get('/details')
    .then(response => {
      const { result } = response.data
      this.setState({result})
    })
    .catch(error => {
      console.log(error)
      axios.get('/spare.json')
      .then(response => {
        const { result } = response.data
        this.setState({result})
      })
      .catch(error => console.log(error))
    })
  }

  render() {
    const { data, result } = this.state
    const containers =  data && result ?
      <div className={styles.container}>
        <LinearGradient />
        <img className={`${styles.logos} ${styles.bounceInDown}`} src={logo} alt="头像" />
        <Headers data={data} />
        <div className={styles.context}><List result={result} /></div>
      </div>
      :
      <div className={styles.spins}>
        <Spin
          size={'large'}
          indicator={<Icon type="loading" spin />}
          tip={'加载中...'}
        />
      </div>

    return <div>{containers}</div>
  }
}
