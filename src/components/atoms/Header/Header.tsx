import { AppBar, Box, Toolbar, Typography } from "@mui/material";

export const Header: React.FC = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} data-testid="header">
            Space X Launches
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
