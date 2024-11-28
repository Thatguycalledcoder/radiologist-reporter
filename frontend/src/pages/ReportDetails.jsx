import { useParams } from "react-router-dom";

const ReportDetails = () => {
    const { id } = useParams();

    return (
        <>
            <h1>Welcome</h1>
            <p>This is the report details page.</p>
            <p>Report ID: {id} </p>
        </>
    );
}

export default ReportDetails;