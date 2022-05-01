import { LaunchesView } from "../../components/templates";
import { useLaunchesQuery } from "../../hooks"

export const LaunchesDataProvider: React.FC = () => {
  const {data}  = useLaunchesQuery();

  return <LaunchesView />
}