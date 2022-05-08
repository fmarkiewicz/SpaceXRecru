import { Stack, TableCell, TableRow } from "@mui/material";
import { UseInfiniteScrollHookResult } from "react-infinite-scroll-hook";

export const TableLoader: React.FC<{
  infiniteRef?: UseInfiniteScrollHookResult;
}> = ({ infiniteRef }) => {
  if (!infiniteRef) {
    return null;
  }
  const [sentryRef] = infiniteRef;

  return (
    <TableRow ref={sentryRef}>
      <TableCell colSpan={5}>
        <Stack justifyContent="center" alignItems="center">
          Loading...
        </Stack>
      </TableCell>
    </TableRow>
  );
};
