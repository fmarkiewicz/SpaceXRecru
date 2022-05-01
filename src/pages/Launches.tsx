import { Container, Box } from "@mui/material";
import { PageInfo } from "../components/molecules";
import { LaunchesDataProvider } from "../providers";

export const Launches: React.FC = () => {
  return (
    <LaunchesDataProvider />
  );
};
