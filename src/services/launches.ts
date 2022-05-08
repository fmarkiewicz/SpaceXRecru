type LaunchesQueryOptions = {
  select?: Object | string;
  sort?: Object | string;
  offset?: number;
  page?: number;
  limit?: number;
};

export type LaunchFilters = '' | 'upcoming' | 'success' | 'failed';

type RequestParams = {
  options: LaunchesQueryOptions;
  query: {};
};

const getLaunches = async (
  options: LaunchesQueryOptions,
  textQuery?: string,
  filter?: LaunchFilters,
) => {
  const reqParams: RequestParams = {
    options,
    query: {
      ...(textQuery && { $text: { $search: textQuery } }),
      ...(filter === 'upcoming' && { upcoming: true }),
      ...(filter === 'success' && { success: true }),
      ...(filter === 'failed' && { 'failures': { $exists: true, $not: {$size: 0} }  }),
    },
  };

  const response = await fetch(
    `${process.env.REACT_APP_API_HOST}launches/query`,
    {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(reqParams),
    }
  );

  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};

export { getLaunches };
export type { LaunchesQueryOptions };
