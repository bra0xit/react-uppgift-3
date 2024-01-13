const { expect, it } = require('@jest/globals');

global.fetch = jest.fn();

it('handles failure in weather API call', async () => {
  // Mock the fetch call to reject once with an error message
  global.fetch.mockRejectedValueOnce(new Error("API failure"));

  // Do API call and assert that it rejects with the error
  await expect(fetch('https://api.openweathermap.org/data/2.5/weather'))
    .rejects
    .toThrow("API failure");

  // Clear mock to ensure it's not affecting other tests
  global.fetch.mockClear();
});