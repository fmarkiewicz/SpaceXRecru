import { render, screen } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "react-query";
import { MemoryRouter } from "react-router-dom";
import App from "./App";

const queryClient = new QueryClient();

test("renders Header", () => {
  render(
    <MemoryRouter>
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </MemoryRouter>
  );
  const headerElement = screen.getByTestId("header");
  expect(headerElement).toBeInTheDocument();
});
