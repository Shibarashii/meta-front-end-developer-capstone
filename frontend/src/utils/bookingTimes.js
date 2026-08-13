const defaultTimes = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];

export const initializeTimes = () => {
  const today = new Date();

  if (typeof globalThis.fetchAPI === 'function') {
    return globalThis.fetchAPI(today);
  }

  return defaultTimes;
};

export const updateTimes = (state, action) => {
  switch (action.type) {
    case 'UPDATE_TIMES': {
      if (typeof globalThis.fetchAPI !== 'function') {
        return state;
      }

      const selectedDate =
        action.date instanceof Date ? action.date : new Date(action.date);

      if (Number.isNaN(selectedDate.getTime())) {
        return state;
      }

      return globalThis.fetchAPI(selectedDate);
    }
    default:
      return state;
  }
};
