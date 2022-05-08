import {
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { UseInfiniteScrollHookResult } from "react-infinite-scroll-hook";
import { LaunchFilters } from "../../../services";
import { Launch } from "../../../types";
import { ExpandableRow, TableLoader } from "../../molecules";

type LaunchesTableProps = {
  launches: Launch[];
  hasNextPage: boolean;
  infiniteRef?: UseInfiniteScrollHookResult;
  changeSorting: () => void;
  setLaunchFilter: (filter: LaunchFilters) => void;
  activeFilter: LaunchFilters;
};

export const LaunchesTable: React.FC<LaunchesTableProps> = ({
  launches,
  infiniteRef,
  hasNextPage,
  changeSorting,
  setLaunchFilter,
  activeFilter,
}) => {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>Name</TableCell>
            <TableCell align="right" onClick={() => setLaunchFilter("success")}>
              <Button>
                {activeFilter === "success" && <span>*</span>}Success
              </Button>
            </TableCell>
            <TableCell align="right" onClick={() => setLaunchFilter("failed")}>
              <Button>
                {activeFilter === "failed" && <span>*</span>}Failures
              </Button>
            </TableCell>
            <TableCell
              align="right"
              onClick={() => setLaunchFilter("upcoming")}
            >
              <Button>
                {activeFilter === "upcoming" && <span>*</span>}Upcoming
              </Button>
            </TableCell>
            <TableCell align="right" onClick={changeSorting}>
              <Button>Launch Date</Button>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {launches.map((launch) => (
            <ExpandableRow key={launch.id} launch={launch} />
          ))}

          {hasNextPage && <TableLoader infiniteRef={infiniteRef} />}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
