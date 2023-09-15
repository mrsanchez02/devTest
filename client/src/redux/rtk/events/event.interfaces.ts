

export interface IRecentEventRequest {
    task: string,
    child: string,
    phoneNumber: string,
    firstName: string,
    lastName: string,
    device: string
    status: string
}
export interface IRecentEventResponse {
    tasks?: [],
    error?: {
        message: string;
    };
}