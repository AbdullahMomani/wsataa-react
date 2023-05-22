const tokenSelector = (state: any) => state.admin?.entities?.tokens?.token;
const refreshTokenSelector = (state: any) => state.auth?.entities?.tokens?.refresh?.token;
const tempTokenSelector = (state: any) => state.auth?.tempToken;

export { tokenSelector, tempTokenSelector, refreshTokenSelector };
