import styles from "./index.css";

export default (props) => {
  const { data } = props
  const headTexts = Array.isArray(data) && data.map(item => <div key={item.id}>{item.msg}</div>)

  return (
    <div className={styles.headers}>
      <div className={styles.contents}>
        <div className={styles.tHalfCircle}></div>
        <div className={styles.tBackground}></div>
        <div className={`${styles.headersText}`}>{headTexts}</div>
      </div>
    </div>
  )
}