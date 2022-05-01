type LaunchesQueryOptions = {
  select?: Object | string;
  sort?: Object | string;
  offset?: number;
  page?: number;
  limit?: number;
};

const getLaunches = async (options?: LaunchesQueryOptions) => {
  const response = await fetch(
    `${process.env.REACT_APP_API_HOST}launches/query`,
    {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: "POST",
      body: JSON.stringify({ options }),
    }
  );

  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};

export { getLaunches };
export type { LaunchesQueryOptions };
