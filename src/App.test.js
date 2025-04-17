import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App navigation", () => {
  test("navigates from homepage to booking page", async () => {
    render(
      <MemoryRouter initialEntries={["/"]}>
        <App />
      </MemoryRouter>
    );

    // Check homepage is showing something unique
    expect(screen.getByText(/welcome/i)).toBeInTheDocument();

    // Click on the booking link
    const bookingLink = screen.getByRole("link", { name: /booking/i });
    await userEvent.click(bookingLink);

    // Expect booking page content to show
    expect(await screen.findByRole("heading", { name: /book a table/i })).toBeInTheDocument();
  });
});
