import reports from "../data/reports";

const Reports = () => {
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
        </main>
    );
}

export default Reports;