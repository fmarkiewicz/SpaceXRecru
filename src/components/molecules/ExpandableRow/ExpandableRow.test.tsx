import { fireEvent, render, screen, waitForElementToBeRemoved } from "@testing-library/react";
import { launchesMock } from "../../../mocks";
import { ExpandableRow } from "./ExpandableRow";

describe("ExpandableRow Component", () => {
  it("should expand and hide", async () => {
    render(
      <table>
        <tbody>
          <ExpandableRow launch={launchesMock[0]} />
        </tbody>
      </table>
    );
    expect(screen.queryByText(launchesMock[0].details)).toBeFalsy();
    const icon = screen.getByTestId('expand-icon');
    fireEvent.click(icon);
    expect(screen.getByText(launchesMock[0].details)).toBeVisible();
    fireEvent.click(icon);
    await waitForElementToBeRemoved(() => screen.queryByText(launchesMock[0].details))
  });
});
