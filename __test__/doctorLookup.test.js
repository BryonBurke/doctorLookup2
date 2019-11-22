import { ApiFetch } from './../src/js/lyrics.js';

describe('ApiFetch', () => {

  let apiFetch;

  beforeEach(() => {
    apiFetch = new ApiFetch();
  });

  test('', async () => {
    const lyrics = await apiFetch.doctorLookupPromise();
    expect().toEqual("");
  });

});
