import { Container, Box } from "@mui/material";
import { PageInfo } from "../../molecules";

export const LaunchesView: React.FC = () => {
  return (
    <Box mt={3}>
      <Container maxWidth="sm">
        <PageInfo
          header="Launches"
          description="Here You can find all the launches from SpaceX, feel free to use searching and sorting features"
        />
      </Container>
    </Box>
  );
};
