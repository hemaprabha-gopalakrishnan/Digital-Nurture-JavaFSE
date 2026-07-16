import CohortDetails from "./Components/CohortDetails";
import styles from "./Stylesheets/CohortDetails.module.css";

function App() {
  return (
    <div className={styles.container}>

      <div className={styles.heading}>
      </div>

      <div className={styles.row}>

        <CohortDetails
          cohortCode="INTADMDF10 - .NET FSD"
          startDate="22-Feb-2022"
          status="Scheduled"
          coach="Aathma"
          trainer="Jojo Jose"
        />

        <CohortDetails
          cohortCode="ADM21JF014 - Java FSD"
          startDate="10-Sep-2021"
          status="Ongoing"
          coach="Apoorv"
          trainer="Elisa Smith"
        />

        <CohortDetails
          cohortCode="CDBJF21025 - Java FSD"
          startDate="24-Dec-2021"
          status="Ongoing"
          coach="Aathma"
          trainer="John Doe"
        />

      </div>

    </div>
  );
}

export default App;