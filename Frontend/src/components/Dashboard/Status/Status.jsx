import StatusCard from "../../ui/StatusCard/StatusCard";
import styles from "./Status.module.css";
function Status() {
  return (
    <div className="py-4">
      <div className={`${styles.title} mb-4`}>Status</div>

      <div className="container">
        <div className="row g-3">
          <div className="col-12 col-sm-6 col-lg-3">
            <StatusCard count="120" title="Projects" />
          </div>
          <div className="col-12 col-sm-6 col-lg-3">
            <StatusCard count="12" title="Developers" />
          </div>
          <div className="col-12 col-sm-6 col-lg-3">
            <StatusCard count="1200" title="Users" />
          </div>
          <div className="col-12 col-sm-6 col-lg-3">
            <StatusCard count="120" title="Blogs" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Status;
