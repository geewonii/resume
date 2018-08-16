import React, { PureComponent } from 'react';
import styles from "./index.css";

export default class Headers extends PureComponent {
  componentDidMount() {
    const { data, onCallBack } = this.props
    
    if(Array.isArray(data)) {
      let n = 0
      const container = document.getElementById("text")
      const timer = setInterval(() => {
        container.innerHTML += data[n]
        n += 1
        if(n >= data.length){
          window.clearInterval(timer)
          onCallBack && onCallBack()
        }
      }, 200)
    }
  }
  render() {
    return (
      <div className={styles.headers}>
        <div className={styles.contents}>
          <div className={styles.tHalfCircle}></div>
          <div className={styles.tBackground}></div>
          <div id="text" className={styles.headersText}></div>
        </div>
      </div>
    )
  }
}
