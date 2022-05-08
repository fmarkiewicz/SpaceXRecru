import {
  Collapse,
  IconButton,
  Stack,
  TableCell,
  TableRow,
  Typography,
} from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { Fragment, useMemo, useState } from "react";
import { Launch } from "../../../types";

type ExpandableRowProps = {
  launch: Launch;
};

export const ExpandableRow: React.FC<ExpandableRowProps> = ({ launch }) => {
  const [open, setOpen] = useState(false);
  const imgLink = launch.links?.patch?.small;
  const launchDate = useMemo(() => {
    if (launch.static_fire_date_utc) {
      const date = new Date(launch.static_fire_date_utc)
      return date.toLocaleDateString();
    }
    return 'No info';
  }, [launch.static_fire_date_utc])

  return (
    <Fragment>
      <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
            data-testid="expand-icon"
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {launch.name}
        </TableCell>
        <TableCell align="right">{launch.success && "Yes"}</TableCell>
        <TableCell align="right">{launch.failures.length}</TableCell>
        <TableCell align="right">{launch.upcoming ? "Yes" : "No"}</TableCell>
        <TableCell align="right">{launchDate}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Stack
              direction="row"
              alignItems="center"
              paddingTop={1}
              paddingBottom={1}
              spacing={2}
            >
              {imgLink && (
                <img src={imgLink} alt={`Patch of a ${launch.name}`} />
              )}
              <Typography variant="body1" gutterBottom component="div">
                {launch.details}
              </Typography>
            </Stack>
          </Collapse>
        </TableCell>
      </TableRow>
    </Fragment>
  );
};
