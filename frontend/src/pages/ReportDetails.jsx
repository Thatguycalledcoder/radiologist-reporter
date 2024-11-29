import { useParams } from "react-router-dom";
import reports from "../data/reports";

const ReportDetails = () => {
    const { id } = useParams();

    const report = reports.find(report => report.id === parseInt(id));

    return (
        <main>
            <h1>Report Details</h1>
            <a
                className="link-btn"
                href="/">
                Back to Reports
            </a>

            <h2>{report.title}</h2>
            <p>Status: {report.reportStatus}</p>
            <h4>Findings</h4>
            <p>{report.findings}</p>
            <h4>Impression</h4>
            <p>{report.impression}</p>
        </main>
    );
}

export default ReportDetails;