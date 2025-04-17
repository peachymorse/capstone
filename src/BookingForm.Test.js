import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import BookingForm from "./BookingForm";

describe("BookingForm validation", () => {
  const mockDispatch = jest.fn();
  const mockSetFormData = jest.fn();

  beforeEach(() => {
    render(
      <BookingForm
        availableTimes={["18:00", "19:00"]}
        dispatch={mockDispatch}
        setFormData={mockSetFormData}
      />
    );
  });

  test("shows alert for invalid name", async () => {
    window.alert = jest.fn(); // mock alert

    await userEvent.type(screen.getByLabelText(/full name/i), ""); // invalid (too short)
    await userEvent.type(screen.getByLabelText(/email/i), "test@example.com");
    await userEvent.type(screen.getByLabelText(/date/i), "2025-10-10");
    await userEvent.selectOptions(screen.getByLabelText(/time/i), "18:00");
    await userEvent.type(screen.getByLabelText(/number of guests/i), "2");
    await userEvent.selectOptions(screen.getByLabelText(/occasion/i), "Birthday");

    await userEvent.click(screen.getByRole("button", { name: /submit reservation/i }));

    expect(window.alert).toHaveBeenCalledWith("Please enter a valid name.");
    expect(mockSetFormData).not.toHaveBeenCalled();
  });

  test("shows alert for invalid email", async () => {
    window.alert = jest.fn();

    await userEvent.type(screen.getByLabelText(/full name/i), "Edward");
    await userEvent.type(screen.getByLabelText(/email/i), "not-an-email");
    await userEvent.type(screen.getByLabelText(/date/i), "2025-10-10");
    await userEvent.selectOptions(screen.getByLabelText(/time/i), "18:00");
    await userEvent.type(screen.getByLabelText(/number of guests/i), "2");
    await userEvent.selectOptions(screen.getByLabelText(/occasion/i), "Anniversary");

    await userEvent.click(screen.getByRole("button", { name: /submit reservation/i }));

    expect(window.alert).toHaveBeenCalledWith("Please enter a valid email address.");
    expect(mockSetFormData).not.toHaveBeenCalled();
  });
});
