import styles from "./FormDashboard.module.css";

function FormDashboard() {
  return (
    <div className="container py-4">
      <div className={styles.formWrapper}>
        <h5 className="fw-semibold mb-4">Add New User</h5>

        <form>
          <div className="row g-3">
            <div className="col-12 col-md-6">
              <label className="form-label">User Name</label>
              <input type="text" className={`form-control ${styles.input}`} />
            </div>

            <div className="col-12 col-md-6">
              <label className="form-label">Email Address</label>
              <input type="email" className={`form-control ${styles.input}`} />
            </div>

            <div className="col-12 col-md-6">
              <label className="form-label">Password</label>
              <input
                type="password"
                className={`form-control ${styles.input}`}
              />
            </div>

            <div className="col-12 col-md-6">
              <label className="form-label">Confirm Password</label>
              <input
                type="password"
                className={`form-control ${styles.input}`}
              />
            </div>

            <div className="col-12 d-flex justify-content-end mt-3">
              <button type="submit" className="btn btn-primary btn-sm">
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default FormDashboard;
