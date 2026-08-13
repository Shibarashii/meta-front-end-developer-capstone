import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { initializeTimes, updateTimes } from './utils/bookingTimes';

const defaultTimes = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];

beforeEach(() => {
  globalThis.fetchAPI = vi.fn(() => defaultTimes);
});

afterEach(() => {
  vi.restoreAllMocks();
});

describe('initializeTimes', () => {
  it('returns a non-empty array of available times', () => {
    const times = initializeTimes();
    expect(times.length).toBeGreaterThan(0);
  });

  it('calls fetchAPI with today\'s date', () => {
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
