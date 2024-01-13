fetchMock = require('jest-fetch-mock');

fetchMock.enableMocks();

it('handles a 404 error when the weather data is not found', async () => {
    // Mocking a 404 HTTP error response
    fetch.mockResponseOnce('', { status: 404 });
  
    const response = await fetch('https://api.openweathermap.org/data/2.5/weather');
  
    expect(response.ok).toBe(false);
    expect(response.status).toBe(404);
  });