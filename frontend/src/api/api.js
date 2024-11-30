import axios from 'axios';

const instance = axios.create({
    baseURL: "http://127.0.0.1:8000/"
});

export const fetchReports = async () => {
    try {
        const response = await instance.get('/reports');
        return response.data;
    }
    catch (error) {
        console.error('Error fetching reports:', error.message);
        return false;
    }
};

export const getReport = async (id) => {
    try {
        const response = await instance.get(`/reports/${id}`);
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
            "reportStatus": reportStatus,
            "findings": findings,
            "impression": impression
        }

        const response = await instance.post('/reports', reportData);
        return response.data;
    }
    catch (error) {
        console.error('Error creating report:', error.message);
        return false;
    }
}