export function prepareHoursIterator(startingHour) {
  let hour = startingHour;

  return function() {
    let currentHour = hour;
    hour = (hour + 1) % 24; // Ensure the hour cycles back to 0 after 23
    return currentHour.toString().padStart(2, '0'); // Return as 2 digit string
  };
}
