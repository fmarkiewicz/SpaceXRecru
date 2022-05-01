import { Box, Container, Typography } from "@mui/material";

type PageInfoProps = {
  header: string;
  description: string;
};

export const PageInfo: React.FC<PageInfoProps> = ({ header, description }) => {
  return (
    <Box pt={4} pb={3}>
      <Container>
        <Typography variant="h2" mb={2}>
          {header}
        </Typography>
        <Typography variant="h5">{description}</Typography>
      </Container>
    </Box>
  );
};
