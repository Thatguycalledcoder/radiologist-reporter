import { useState } from "react";

const AddReport = () => {
    const [title, setTitle] = useState("");
    const [reportStatus, setReportStatus] = useState("");
    const [findings, setFindings] = useState("");
    const [impression, setImpression] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        setMessage("");
        // Basic validation
        if (!title || !reportStatus || !findings || !impression) {
            setMessage("Please fill in all fields.");
            return;
        }

        // More specific validation for a radiologist reporting system
        if (title.length < 5) {
            setMessage("Title must be at least 5 characters.");
            return;
        }

        // Validate report status (ensure it's a valid status, e.g., "Preliminary", "Final")
        const validReportStatuses = ["new", "unread", "prelim", "final"];
        if (!validReportStatuses.includes(reportStatus)) {
            setMessage("Invalid report status.");
            return;
        }

        // Validate findings and impression (e.g., minimum length, specific keywords)
        if (findings.length < 20) {
            setMessage("Findings must be more detailed. (at least 20 characters)");
            return;
        }

        if (impression.length < 10) {
            setMessage("Impression must be more detailed. (at least 10 characters)");
            return;
        }

        console.log(`Title: ${title} \nStatus: ${reportStatus} \nFindings: ${findings} \nImpression: ${impression}`)
    }

    return (
        <main>
            <h1>Add Report</h1>
            <a
                className="link-btn"
                href="/">
                Back to Reports
            </a>
            <form
                className="report-form"
                onSubmit={handleSubmit}>
                {message && <p className="report-form-error">{message}</p>}

                <label htmlFor="title">Title:</label>
                <input
                    type="text"
                    id="title"
                    name="title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                />

                <label htmlFor="status">Status:</label>
                <select
                    id="status"
                    name="status"
                    value={reportStatus}
                    onChange={(e) => setReportStatus(e.target.value)}
                    required>
                    <option value="">Select status...</option>
                    <option value="new">New</option>
                    <option value="unread">Unread</option>
                    <option value="prelim">Prelim</option>
                    <option value="final">Final</option>
                </select>

                <label htmlFor="findings">Findings:</label>
                <textarea
                    id="findings"
                    name="findings"
                    rows={8}
                    value={findings}
                    onChange={(e) => setFindings(e.target.value)}
                    required />

                <label htmlFor="impression">Impression:</label>
                <textarea
                    id="impression"
                    name="impression"
                    rows={6}
                    value={impression}
                    onChange={(e) => setImpression(e.target.value)}
                    required />

                <button
                    type="submit"
                >
                    Add Report +
                </button>
            </form>
        </main>
    );
}

export default AddReport;