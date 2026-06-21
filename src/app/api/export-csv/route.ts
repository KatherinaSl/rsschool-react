import { NextRequest } from 'next/server';
import type { AstronomicalObject } from '@/interfaces/interfaces';

const BASE_URL = 'http://localhost:3000';

export async function POST(req: NextRequest) {
  const cards: AstronomicalObject[] = await req.json();

  if (!cards?.length) {
    return new Response('No data', {
      status: 400,
    });
  }

  const separator = ',';

  const headers = ['uid', 'name', 'astronomicalObjectType', 'location', 'url'];

  const rows = cards
    .map((card) => {
      const url = `${BASE_URL}/cardDetails/${card.uid}`;
      const values = [
        card.uid,
        card.name,
        card.astronomicalObjectType,
        card.location?.name ?? '',
        url,
      ];
      return values.join(separator);
    })
    .join('\n');

  const csv = `${headers.join(separator)}\n${rows}`;

  return new Response(csv, {
    headers: {
      'Content-Type': 'text/csv',
      'Content-Disposition': `attachment; filename="${cards.length}_items.csv"`,
    },
  });
}
