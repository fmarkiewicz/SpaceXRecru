import { useState } from "react";
import { useQuery } from "react-query";
import { getLaunches, LaunchesQueryOptions } from "../../services";

export const useLaunchesQuery = () => {
  const [page, setPage] = useState(0);
  const [sort, setSort] = useState("");
  const select = {
    docs: [{
      details: 1,
      name: 1,
      success: 1,
      failures: 1,
      upcoming: 1,
      static_fire_date_unix: 1,
      links: { patch: 1 },
    },]
  };
  // const select = "name";
  const limit = 10;

  const { data, isLoading } = useQuery<Object[], {}>(
    ["launches"],
    async () => {
      const options: LaunchesQueryOptions = { page, limit, sort, select };
      return getLaunches(options);
    },
    {
      onError: (error) => {
        console.log("ERROR: ", error);
      },
    }
  );

  return {
    data,
    isLoading,
  };
};
