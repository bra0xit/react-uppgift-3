global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve({ data: 'Mocked data' }),
  }),
);

beforeEach(() => {
  fetch.mockClear();
});

it('fetches data successfully from an API', async () => {
  const data = await fetch('https://api.openweathermap.org/data/2.5/weather');

   // You need to await the execution of the json method to get the resolved value
   const response = await data.json();
  
   // Now, logging data will show the mocked data
   console.log(response);

  expect(data.json()).resolves.toEqual({ data: 'Mocked data' });
  expect(fetch).toHaveBeenCalledTimes(1);
  expect(fetch).toHaveBeenCalledWith('https://api.openweathermap.org/data/2.5/weather');
});