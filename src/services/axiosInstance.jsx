import axios from 'axios';

// Create an instance of axios with custom configuration
const axiosInstance = axios.create( {
	baseURL: 'https://98c4d225-e49f-4c2d-927d-4f361720940c.mock.pstmn.io', // API base URL
	timeout: 5000, // Request timeout in milliseconds
	headers: {
		'Content-Type': 'application/json', // Set default content type
	},
} );

// Request interceptor
axiosInstance.interceptors.request.use(
	( config ) =>
	{
		// You can modify request config here
		return config;
	},
	( error ) =>
	{
		// Handle request error
		return Promise.reject( error );
	}
);

// Response interceptor
axiosInstance.interceptors.response.use(
	( response ) =>
	{
		return response;
	},
	( error ) =>
	{
		// Handle response error
		return Promise.reject( error );
	}
);

export default axiosInstance;
