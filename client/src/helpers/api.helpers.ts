import { REQUEST_STATUS, ApiHook, ApiResponse } from "../types/api.types";

export const updateRequestStatus = (config: any): ApiHook => ({
    status: REQUEST_STATUS.inprogress,
    error: undefined,
    data: {} as ApiResponse,
    requestConfig: config
});

export const isLoading = (status: REQUEST_STATUS): boolean => {
    return !status || status === REQUEST_STATUS.inprogress;
}