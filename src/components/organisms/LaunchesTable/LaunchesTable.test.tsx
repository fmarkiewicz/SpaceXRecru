import { fireEvent, render, screen } from "@testing-library/react";
import { launchesMock } from "../../../mocks";
import { LaunchesTable } from "./LaunchesTable";

describe("LaunchesTable Component", () => {
  const hasNextPage = false;
  const changeSorting = jest.fn();
  const setLaunchFilter = jest.fn();

  it("should render", () => {
    render(
      <LaunchesTable
        launches={launchesMock}
        hasNextPage={hasNextPage}
        changeSorting={changeSorting}
        setLaunchFilter={setLaunchFilter}
        activeFilter={""}
      />
    );

    expect(screen.getByText("Launch Date")).toBeTruthy();
  })


  it("should call sort function", () => {
    render(
      <LaunchesTable
        launches={launchesMock}
        hasNextPage={hasNextPage}
        changeSorting={changeSorting}
        setLaunchFilter={setLaunchFilter}
        activeFilter={""}
      />
    );

    const sortBtn = screen.getByText('Launch Date');
    fireEvent.click(sortBtn);
    expect(changeSorting).toBeCalled();
  })

  it("should call filter function", () => {
    render(
      <LaunchesTable
        launches={launchesMock}
        hasNextPage={hasNextPage}
        changeSorting={changeSorting}
        setLaunchFilter={setLaunchFilter}
        activeFilter={""}
      />
    );

    const successBtn = screen.getByText('Success');
    const failuresBtn = screen.getByText('Failures');
    const upcomingBtn = screen.getByText('Upcoming');
    fireEvent.click(successBtn);
    fireEvent.click(failuresBtn);
    fireEvent.click(upcomingBtn);
    expect(setLaunchFilter).toBeCalledTimes(3);
  })
});
