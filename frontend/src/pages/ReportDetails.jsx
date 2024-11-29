import { useParams } from "react-router-dom";
import reports from "../data/reports";
import { useEffect, useState } from "react";
import { getReport } from "../api/api";

const ReportDetails = () => {
    const { id } = useParams();

    const [loading, setLoading] = useState(false);
    const [report, setReport] = useState({});

    useEffect(() => {
        const fetchReport = async () => {
            setLoading(true);

            try {
                const response = await getReport(id);
                if (response.success === true)
                    setReport(response.report);
            } catch (error) {

            } finally {
                setLoading(false);
            }
        }

        fetchReport();
    }, [id])

    return (
        <main>
            <h1>Report Details</h1>
            <a
                className="link-btn"
                href="/">
                Back to Reports
            </a>

            {loading ? <p>Loading...</p> :
                <>
                    <h2>{report?.title}</h2>
                    <p>Status: {report?.reportStatus}</p>
                    <h4>Findings</h4>
                    <p>{report?.findings}</p>
                    <h4>Impression</h4>
                    <p>{report?.impression}</p>
                </>
            }
        </main>
    );
}

export default ReportDetails;