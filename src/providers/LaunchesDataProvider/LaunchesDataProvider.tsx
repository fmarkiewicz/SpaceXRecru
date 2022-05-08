import { useCallback } from "react";
import useInfiniteScroll from "react-infinite-scroll-hook";
import { LaunchesView } from "../../components/templates";
import { useLaunchesQuery } from "../../hooks";

export const LaunchesDataProvider: React.FC = () => {
  const {
    data,
    fetchNextPage,
    hasNextPage,
    isLoading,
    isFetchingNextPage,
    searchText,
    setSearchText,
    changeSortingByDate,
    setLaunchFilter,
    activeFilter
  } = useLaunchesQuery();

  const launches = data?.pages.map((page) => page.docs);

  const fetchNext = useCallback(() => {
    if (hasNextPage) {
      fetchNextPage();
    }
  }, [fetchNextPage, hasNextPage]);

  const infiniteRef = useInfiniteScroll({
    loading: isLoading || isFetchingNextPage,
    hasNextPage: !!hasNextPage,
    onLoadMore: fetchNext,
  });

  return (
    <LaunchesView
      infiniteRef={infiniteRef}
      launches={launches?.flat()}
      isLoading={isLoading}
      hasNextPage={!!hasNextPage}
      searchText={searchText}
      setSearchText={setSearchText}
      changeSorting={changeSortingByDate}
      setLaunchFilter={setLaunchFilter}
      activeFilter={activeFilter}
    />
  );
};
