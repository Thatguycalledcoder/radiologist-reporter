import axios from 'axios';

export const fetchReports = async () => {
    try {
        const response = await axios.get('https://api.example.com/reports');
        return response.data;
    }
    catch (error) {
        console.error('Error fetching reports:', error.message);
        return false;
    }
};

export const getReport = async (id) => {
    try {
        const response = await axios.get(`https://api.example.com/reports/${id}`);
        return response.data;
    }
    catch (error) {
        console.error('Error fetching report:', error.message);
        return false;
    }
}

export const createReport = async ({title, reportStatus, findings, impression}) => {
    if (!title || !reportStatus || !findings || !impression)
        throw new Error('Title, report status, findings, and impression are required');

    try {
        const reportData = {
            "title": title,
            "status": reportStatus,
            "findings": findings,
            "impression": impression
        }

        const response = await axios.post('https://api.example.com/reports', reportData);
        return response.data;
    }
    catch (error) {
        console.error('Error creating report:', error.message);
        return false;
    }
}