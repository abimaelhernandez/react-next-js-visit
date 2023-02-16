import { useEffect, useState } from "react"
import styles from '@/styles/UserInfo.module.scss'

const UserInfo = props => {
  const [date, setDate] = useState(new Date());
  
  useEffect(() => {
         setInterval(() => setDate(new Date()), 30000);
  }, []);

  return (
    <div className={styles.userInfo}>
      <div className={styles.container}>
        <div className={styles.avatar}>
          <div className={styles.img} />
        </div>
        <div className={styles.settings}>
          <p className={styles.logo} /> 
          {props.info.settings} 
        </div>
        <div className={styles.welcome}>
          {props.info.welcome}
        </div>
        <p className={styles.languages}>
          <span onClick={props.eng}> en </span> &nbsp; <span onClick={props.esp}> es </span>
        </p>
        <button className={styles.button}>{props.info.button}</button>
        <div className={styles.date}>
          <p className={styles.hour}>
          {date.toLocaleTimeString('it-IT', 
            {
                hour12: true,
                hour: 'numeric',
                minute: 'numeric',
            })}
          </p>
          <p className={styles.day}>
            {' '}
            {date.toLocaleDateString(`${props.info.displayLang}`,
            {
              weekday: 'long', 
              month: 'long', 
              day: 'numeric'
            }
            )}
          </p>
        </div>
      </div>
    </div>
  )
}

export default UserInfo