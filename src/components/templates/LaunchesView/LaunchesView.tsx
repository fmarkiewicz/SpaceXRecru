import { Container, Box, Input } from "@mui/material";
import { UseInfiniteScrollHookResult } from "react-infinite-scroll-hook";
import { LaunchFilters } from "../../../services";
import { Launch } from "../../../types";
import { PageInfo } from "../../molecules";
import { LaunchesTable } from "../../organisms";

type LaunchesViewProps = {
  isLoading: boolean;
  hasNextPage: boolean;
  infiniteRef: UseInfiniteScrollHookResult;
  searchText: string;
  setSearchText: (text: string) => void;
  changeSorting: () => void;
  setLaunchFilter: (filter: LaunchFilters) => void;
  activeFilter: LaunchFilters;
  launches?: Launch[];
};

export const LaunchesView: React.FC<LaunchesViewProps> = ({
  launches,
  isLoading,
  hasNextPage,
  infiniteRef,
  searchText,
  setSearchText,
  changeSorting,
  setLaunchFilter,
  activeFilter
}) => {
  return (
    <Box mt={3}>
      <Container maxWidth="sm">
        <PageInfo
          header="Launches"
          description="Here You can find all the launches from SpaceX, feel free to use searching, sorting and filtering features"
        />
        <Input placeholder="Search" onChange={(e) => setSearchText(e.target.value)} value={searchText}/>
      </Container>

      {isLoading && <Box mt={2}>Is Loading...</Box>}

      <Container maxWidth="md">
        {launches ? (
          <LaunchesTable
            launches={launches}
            hasNextPage={hasNextPage}
            infiniteRef={infiniteRef}
            setLaunchFilter={setLaunchFilter}
            activeFilter={activeFilter}
            changeSorting={changeSorting}
          />
        ) : null}
      </Container>
    </Box>
  );
};
