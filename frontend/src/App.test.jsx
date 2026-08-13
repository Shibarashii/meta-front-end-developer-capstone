import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { cleanup, render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import BookingPage from './BookingPage';
import { initializeTimes, updateTimes } from './utils/bookingTimes';

const defaultTimes = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];

beforeEach(() => {
  globalThis.fetchAPI = vi.fn(() => defaultTimes);
});

afterEach(() => {
  cleanup();
  vi.restoreAllMocks();
});

// ---------------------------------------------------------------------------
// Unit tests for initializeTimes / updateTimes (kept from original suite)
// ---------------------------------------------------------------------------

describe('initializeTimes', () => {
  it('returns a non-empty array of available times', () => {
    const times = initializeTimes();
    expect(times.length).toBeGreaterThan(0);
  });

  it("calls fetchAPI with today's date", () => {
    initializeTimes();
    expect(globalThis.fetchAPI).toHaveBeenCalledTimes(1);
    expect(globalThis.fetchAPI.mock.calls[0][0]).toBeInstanceOf(Date);
  });
});

describe('updateTimes', () => {
  it('returns updated times when a date is dispatched', () => {
    const state = [...defaultTimes];
    const selectedDate = new Date('2026-08-15T12:00:00');
    const updatedTimes = ['17:00', '19:00', '21:00'];

    globalThis.fetchAPI.mockReturnValue(updatedTimes);

    const result = updateTimes(state, {
      type: 'UPDATE_TIMES',
      date: selectedDate,
    });

    expect(result).toEqual(updatedTimes);
    expect(globalThis.fetchAPI).toHaveBeenCalledWith(selectedDate);
  });

  it('returns the same state for an unknown action type', () => {
    const state = [...defaultTimes];
    const result = updateTimes(state, { type: 'UNKNOWN_ACTION' });
    expect(result).toEqual(state);
  });
});

// ---------------------------------------------------------------------------
// Helper to render BookingPage with default props
// ---------------------------------------------------------------------------

const renderBookingPage = (props = {}) => {
  const defaultProps = {
    availableTimes: defaultTimes,
    dispatch: vi.fn(),
    submitForm: vi.fn(),
  };
  return render(<BookingPage {...defaultProps} {...props} />);
};

// ---------------------------------------------------------------------------
// Step 1 — HTML5 validation attributes on form inputs
// ---------------------------------------------------------------------------

describe('BookingForm – HTML5 validation attributes', () => {
  // --- Date input ---
  describe('date input', () => {
    it('has type="date"', () => {
      renderBookingPage();
      const dateInput = screen.getByLabelText('Choose date');
      expect(dateInput).toHaveAttribute('type', 'date');
    });

    it('has the required attribute', () => {
      renderBookingPage();
      const dateInput = screen.getByLabelText('Choose date');
      expect(dateInput).toBeRequired();
    });
  });

  // --- Time select ---
  describe('time select', () => {
    it('renders a <select> element', () => {
      renderBookingPage();
      const timeSelect = screen.getByLabelText('Choose time');
      expect(timeSelect.tagName).toBe('SELECT');
    });

    it('has the required attribute', () => {
      renderBookingPage();
      const timeSelect = screen.getByLabelText('Choose time');
      expect(timeSelect).toBeRequired();
    });

    it('renders all available time options', () => {
      renderBookingPage();
      const options = screen.getAllByRole('option');
      // Filter to just the time options (exclude occasion options)
      const timeOptions = options.filter((opt) =>
        defaultTimes.includes(opt.value),
      );
      expect(timeOptions).toHaveLength(defaultTimes.length);
    });
  });

  // --- Guests input ---
  describe('guests input', () => {
    it('has type="number"', () => {
      renderBookingPage();
      const guestsInput = screen.getByLabelText('Number of guests');
      expect(guestsInput).toHaveAttribute('type', 'number');
    });

    it('has min="1"', () => {
      renderBookingPage();
      const guestsInput = screen.getByLabelText('Number of guests');
      expect(guestsInput).toHaveAttribute('min', '1');
    });

    it('has max="10"', () => {
      renderBookingPage();
      const guestsInput = screen.getByLabelText('Number of guests');
      expect(guestsInput).toHaveAttribute('max', '10');
    });

    it('has the required attribute', () => {
      renderBookingPage();
      const guestsInput = screen.getByLabelText('Number of guests');
      expect(guestsInput).toBeRequired();
    });

    it('has placeholder="1"', () => {
      renderBookingPage();
      const guestsInput = screen.getByLabelText('Number of guests');
      expect(guestsInput).toHaveAttribute('placeholder', '1');
    });
  });

  // --- Occasion select ---
  describe('occasion select', () => {
    it('renders a <select> element', () => {
      renderBookingPage();
      const occasionSelect = screen.getByLabelText('Occasion');
      expect(occasionSelect.tagName).toBe('SELECT');
    });

    it('has the required attribute', () => {
      renderBookingPage();
      const occasionSelect = screen.getByLabelText('Occasion');
      expect(occasionSelect).toBeRequired();
    });

    it('contains "Birthday" and "Anniversary" options', () => {
      renderBookingPage();
      const occasionSelect = screen.getByLabelText('Occasion');
      const options = within(occasionSelect).getAllByRole('option');
      const values = options.map((opt) => opt.textContent);
      expect(values).toContain('Birthday');
      expect(values).toContain('Anniversary');
    });
  });

  // --- Submit button ---
  describe('submit button', () => {
    it('has type="submit"', () => {
      renderBookingPage();
      const submitBtn = screen.getByLabelText('On Click');
      expect(submitBtn).toHaveAttribute('type', 'submit');
    });
  });
});

// ---------------------------------------------------------------------------
// Step 2 — JavaScript validation (valid & invalid states)
// ---------------------------------------------------------------------------

describe('BookingForm – JavaScript validation (isFormValid)', () => {
  // The submit button is disabled when isFormValid is false,
  // so we use the button's disabled state as a proxy to test validation.

  describe('invalid states – submit button should be disabled', () => {
    it('is disabled when all fields are empty (initial state)', () => {
      renderBookingPage();
      const submitBtn = screen.getByLabelText('On Click');
      expect(submitBtn).toBeDisabled();
    });

    it('is disabled when date is filled but guests is cleared', async () => {
      const user = userEvent.setup();
      renderBookingPage();

      const dateInput = screen.getByLabelText('Choose date');
      await user.clear(dateInput);
      await user.type(dateInput, '2026-08-20');

      // Clear guests to make form invalid
      const guestsInput = screen.getByLabelText('Number of guests');
      await user.clear(guestsInput);

      const submitBtn = screen.getByLabelText('On Click');
      expect(submitBtn).toBeDisabled();
    });

    it('is disabled when date and time are filled but guests is 0', async () => {
      const user = userEvent.setup();
      renderBookingPage();

      const dateInput = screen.getByLabelText('Choose date');
      await user.clear(dateInput);
      await user.type(dateInput, '2026-08-20');

      const timeSelect = screen.getByLabelText('Choose time');
      await user.selectOptions(timeSelect, '18:00');

      // Set guests to 0 (invalid)
      const guestsInput = screen.getByLabelText('Number of guests');
      await user.clear(guestsInput);
      await user.type(guestsInput, '0');

      const submitBtn = screen.getByLabelText('On Click');
      expect(submitBtn).toBeDisabled();
    });

    it('is disabled when guests exceeds maximum (11)', async () => {
      const user = userEvent.setup();
      renderBookingPage();

      const dateInput = screen.getByLabelText('Choose date');
      await user.clear(dateInput);
      await user.type(dateInput, '2026-08-20');

      const timeSelect = screen.getByLabelText('Choose time');
      await user.selectOptions(timeSelect, '18:00');

      const guestsInput = screen.getByLabelText('Number of guests');
      await user.clear(guestsInput);
      await user.type(guestsInput, '11');

      const submitBtn = screen.getByLabelText('On Click');
      expect(submitBtn).toBeDisabled();
    });
  });

  describe('valid state – submit button should be enabled', () => {
    it('is enabled when all fields are filled with valid values', async () => {
      const user = userEvent.setup();
      renderBookingPage();

      // Fill date
      const dateInput = screen.getByLabelText('Choose date');
      await user.clear(dateInput);
      await user.type(dateInput, '2026-08-20');

      // Select a time
      const timeSelect = screen.getByLabelText('Choose time');
      await user.selectOptions(timeSelect, '18:00');

      // Guests already defaults to 1 (valid)
      // Occasion already defaults to 'Birthday' (valid)

      const submitBtn = screen.getByLabelText('On Click');
      expect(submitBtn).toBeEnabled();
    });

    it('is enabled with maximum valid guests (10)', async () => {
      const user = userEvent.setup();
      renderBookingPage();

      const dateInput = screen.getByLabelText('Choose date');
      await user.clear(dateInput);
      await user.type(dateInput, '2026-08-20');

      const timeSelect = screen.getByLabelText('Choose time');
      await user.selectOptions(timeSelect, '19:00');

      const guestsInput = screen.getByLabelText('Number of guests');
      await user.clear(guestsInput);
      await user.type(guestsInput, '10');

      const submitBtn = screen.getByLabelText('On Click');
      expect(submitBtn).toBeEnabled();
    });

    it('is enabled with minimum valid guests (1)', async () => {
      const user = userEvent.setup();
      renderBookingPage();

      const dateInput = screen.getByLabelText('Choose date');
      await user.clear(dateInput);
      await user.type(dateInput, '2026-08-20');

      const timeSelect = screen.getByLabelText('Choose time');
      await user.selectOptions(timeSelect, '20:00');

      const guestsInput = screen.getByLabelText('Number of guests');
      await user.clear(guestsInput);
      await user.type(guestsInput, '1');

      const submitBtn = screen.getByLabelText('On Click');
      expect(submitBtn).toBeEnabled();
    });
  });

  describe('form submission', () => {
    it('calls submitForm with form data when submitted with valid inputs', async () => {
      const user = userEvent.setup();
      const mockSubmit = vi.fn();
      renderBookingPage({ submitForm: mockSubmit });

      const dateInput = screen.getByLabelText('Choose date');
      await user.clear(dateInput);
      await user.type(dateInput, '2026-08-20');

      const timeSelect = screen.getByLabelText('Choose time');
      await user.selectOptions(timeSelect, '18:00');

      const guestsInput = screen.getByLabelText('Number of guests');
      await user.clear(guestsInput);
      await user.type(guestsInput, '4');

      const occasionSelect = screen.getByLabelText('Occasion');
      await user.selectOptions(occasionSelect, 'Anniversary');

      const submitBtn = screen.getByLabelText('On Click');
      await user.click(submitBtn);

      expect(mockSubmit).toHaveBeenCalledTimes(1);
      expect(mockSubmit).toHaveBeenCalledWith({
        date: '2026-08-20',
        time: '18:00',
        numGuests: 4,
        occasion: 'Anniversary',
      });
    });

    it('does not call submitForm when the button is disabled', () => {
      const mockSubmit = vi.fn();
      renderBookingPage({ submitForm: mockSubmit });

      // Without filling fields, button is disabled and can't be clicked
      const submitBtn = screen.getByLabelText('On Click');
      expect(submitBtn).toBeDisabled();
      expect(mockSubmit).not.toHaveBeenCalled();
    });
  });
});
