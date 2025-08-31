export const SAULT_ROUNDS = 12;
export const EXP_REFRESH_TOKEN_TIME_IN_DAYS = 1;
export const EXP_FORGOT_PASS_CODE_TIME_IN_MINUTES = 15;
export const MAX_ATTEMPTS_CONFIRMATION_CODE = 5;
export const USER_SOCKET_CONNECTION_KEY = (userId: string) => `user:${userId}`;
export const ORG_SOCKET_CONNECTION_KEY = (orgId: string) => `org:${orgId}`;
