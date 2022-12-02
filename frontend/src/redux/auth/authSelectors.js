export const getGlobalAdminState = ({ auth }) => auth;
export const getIsAuthorized = ({ auth }) => auth.isAuthorized
export const getError = ({ auth }) => auth.error;
