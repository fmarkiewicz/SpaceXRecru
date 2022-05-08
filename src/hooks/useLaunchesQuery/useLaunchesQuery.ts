import { useCallback, useState } from "react";
import { useInfiniteQuery } from "react-query";
import { useToast } from "../../contexts";
import {
  getLaunches,
  LaunchesQueryOptions,
  LaunchFilters,
} from "../../services";
import { Launch, Meta } from "../../types";

export const useLaunchesQuery = () => {
  const limit = 10;
  const { setToast } = useToast();
  const [search, setSearch] = useState("");
  const [sortAsc, setSortAsc] = useState(false);
  const [filter, setFilter] = useState<LaunchFilters>("");
  const select = {
    details: 1,
    name: 1,
    success: 1,
    failures: 1,
    upcoming: 1,
    static_fire_date_utc: 1,
    links: { patch: 1 },
  };

  const launchesQuery = useInfiniteQuery<{ docs: Launch[] } & Meta, any>(
    ["launches", sortAsc, filter, search],
    ({ pageParam = 0 }) => {
      const options: LaunchesQueryOptions = {
        page: pageParam,
        limit,
        sort: { static_fire_date_utc: sortAsc ? 1 : -1 },
        select,
      };
      return getLaunches(options, search, filter);
    },
    {
      onError: () => {
        setToast({type: 'error', message: "Sorry, we couldn't fetch the launches'"})
      },
      getNextPageParam: (lastPage) => lastPage.nextPage,
    }
  );

  const changeSortingByDate = useCallback(() => {
    setSortAsc((state) => !state);
  }, []);

  const setLaunchFilter = useCallback((filter: LaunchFilters) => {
    setFilter(filter);
  }, []);

  const setSearchText = useCallback((text: string) => {
    setSearch(text);
  }, []);

  return {
    ...launchesQuery,
    searchText: search,
    setSearchText,
    changeSortingByDate,
    setLaunchFilter,
    activeFilter: filter,
  };
};
