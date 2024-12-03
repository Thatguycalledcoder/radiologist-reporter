import { useEffect, useState } from "react";
import { fetchReports } from "../api/api";

const Reports = () => {
    const [loading, setLoading] = useState(false);
    const [reports, setReports] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);

            try {
                const response = await fetchReports();
                if (response.success === true)
                    setReports(response.reports);
            }
            catch (error) {
                console.error('Error fetching reports:', error);
            }
            finally {
                setLoading(false);
            }
        }

        fetchData();
    }, [])

    return (
        <main>
            <header>
                <h1>Reports</h1>
            </header>
            <a
                className="link-btn"
                href="/add-report">
                Add Report +
            </a>
            {loading ? <p>Loading...</p> :
                <ul className="report-card">
                    {reports.length > 0 ? reports.map(report => (
                        <li
                            key={report.id}>
                            <a
                                href={`/report/${report.id}`}
                            >
                                <h4>{report.title}</h4>
                                <p>Status: {report.reportStatus}</p>
                                <h5>Findings</h5>
                                <p>{report.findings}</p>
                                <h5>Impression</h5>
                                <p>{report.impression}</p>
                            </a>
                        </li>
                    ))
                        : (
                            <p>
                                No reports to show.&nbsp;
                                <span>
                                    <a href="/add-report">
                                        Add Report
                                    </a>
                                </span>
                            </p>
                        )}
                </ul>
            }
        </main>
    );
}

export default Reports;