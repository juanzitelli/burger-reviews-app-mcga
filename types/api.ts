type KnownStatus = "ok" | "error";

type APIResponse = {
  status: KnownStatus;
  msg?: string;
};

export type ListAPIResponse<T> = APIResponse & {
  payload: {
    list: T[];
  };
};

export type ItemAPIResponse<T> = APIResponse & {
  payload: {
    item: T;
  };
};

export type ErrorResponse = APIResponse;
export type SuccessResponse<T> = ItemAPIResponse<T> | ListAPIResponse<T>;
