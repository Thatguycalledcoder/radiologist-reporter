import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getReport } from "../api/api";

const ReportDetails = () => {
    const { id } = useParams();

    const [loading, setLoading] = useState(false);
    const [report, setReport] = useState(null);

    useEffect(() => {
        const fetchReport = async () => {
            setLoading(true);

            try {
                const response = await getReport(id);
                if (response.success === true)
                    setReport(response.report);
            } catch (error) {
                console.error('Error fetching report:', error);
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
                <div>
                    {report ?
                        <>
                            <h2>{report?.title}</h2>
                            <p>Status: {report?.reportStatus}</p>
                            <h4>Findings</h4>
                            <p>{report?.findings}</p>
                            <h4>Impression</h4>
                            <p>{report?.impression}</p>
                        </>
                        : <p>No report found with the given ID.</p>
                    }
                </div>
            }
        </main>
    );
}

export default ReportDetails;