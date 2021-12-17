import useSWR from "swr";
import axios from "axios";
import { SuccessResponse } from "../../types/api";
import { Review } from "../../types/entities";

const fetcher = (url: string) => axios.get(url).then((res) => res.data);

export const useReview = ({ reviewId }: { reviewId: Review["_id"] }) => {
  return useSWR<SuccessResponse<Review>>(
    `${process.env.NEXT_PUBLIC_API_URL}/reviews/${reviewId}`,
    fetcher,
    {
      revalidateIfStale: true,
      revalidateOnFocus: true,
      revalidateOnReconnect: true,
    }
  );
};
