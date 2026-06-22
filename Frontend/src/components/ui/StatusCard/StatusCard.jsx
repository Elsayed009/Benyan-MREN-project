import styles from "./StatusCard.module.css";

function StatusCard({ count, title }) {
  return (
    <div
      className={`${styles["card-status"]} align-items-center card-status d-flex`}
    >
      <div
        className={`${styles.icon} w-100 align-items-center d-flex icon justify-content-center`}
      >
        <i className="fa-solid fa-users"></i>
      </div>
      <div
        className={`${styles.data} align-items-center d-flex data flex-column gap-2 w-100`}
      >
        <span className={styles.count}>{count}</span>
        <span className={styles.title}>{title}</span>
      </div>
    </div>
  );
}

export default StatusCard;
