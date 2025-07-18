import apiClientSimple from './api-client-simple';
import apiClientAdvanced from './api-client-advanced';

const mode: 'simple' | 'advanced' = 'simple';

const apiClient = mode === 'simple' ? apiClientAdvanced : apiClientSimple;

export { apiClient }; 