import useSWR from "swr";
import axios from "axios";
import { SuccessResponse } from "../../types/api";
import { Review } from "../../types/entities";

const fetcher = (url: string) => axios.get(url).then((res) => res.data);

export const useReviews = () => {
  return useSWR<SuccessResponse<Review>>(
    `${process.env.NEXT_PUBLIC_API_URL || ""}/reviews`,
    fetcher,
    {
      revalidateIfStale: true,
      revalidateOnFocus: true,
      revalidateOnReconnect: true,
    }
  );
};
