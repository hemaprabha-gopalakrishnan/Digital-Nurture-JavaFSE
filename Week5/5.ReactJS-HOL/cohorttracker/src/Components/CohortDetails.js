import styles from "../Stylesheets/CohortDetails.module.css";

function CohortDetails(props) {
  return (
    <div className={styles.card}>
      <h3
        style={{
          color: props.status === "Ongoing" ? "green" : "blue",
        }}
      >
        {props.cohortCode}
      </h3>

      <p><b>Started On</b></p>
      <p>{props.startDate}</p>

      <p><b>Current Status</b></p>
      <p>{props.status}</p>

      <p><b>Coach</b></p>
      <p>{props.coach}</p>

      <p><b>Trainer</b></p>
      <p>{props.trainer}</p>
    </div>
  );
}

export default CohortDetails;