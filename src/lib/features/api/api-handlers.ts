import {
  ApiResponse,
  FullAstronomicalObjectResponse,
} from '@/interfaces/interfaces';

const PAGE_SIZE = 6;
const BASE_URL = 'https://stapi.co/api/v2/rest/astronomicalObject';

export async function fetchAstronomicalObj(
  pageNumber: number
  //   searchTerm: string
): Promise<ApiResponse> {
  const url = `${BASE_URL}/search?pageNumber=${pageNumber}&pageSize=${PAGE_SIZE}`;
  const response = await fetch(url, {
    method: 'POST',
    // body: new URLSearchParams({ title: searchTerm }),
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
  });

  if (!response.ok) {
    throw new Error(`Server error. Status: ${response.status} error code`);
  }

  return response.json();
}

export async function fetchAstronomicalObjDetails(
  cardId: string
): Promise<FullAstronomicalObjectResponse> {
  const cardUrl = `${BASE_URL}?uid=${cardId}`;
  const cardResponse = await fetch(cardUrl);

  if (!cardResponse.ok) {
    throw new Error(`Server error. Status: ${cardResponse.status}`);
  }

  return cardResponse.json();
}
