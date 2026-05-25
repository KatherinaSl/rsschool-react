import type { AstronomicalObject } from '../interfaces/interfaces';

const exportToCsv = (filename: string, rows: AstronomicalObject[]): void => {
  if (!rows || rows.length === 0) {
    return;
  }
  const separator: string = ',';

  const columHearders: string[] = Object.keys(rows[0]);
  const csvRows = rows
    .map((row) => {
      const url = `${window.location.origin}/cardDetails/${row.uid}`;
      const values = [
        row.uid,
        row.name,
        row.astronomicalObjectType,
        row.location?.name ?? '',
        url,
      ];
      return values.join(separator);
    })
    .join('\n');

  const csvContent =
    columHearders.join(separator) + separator + 'url' + '\n' + csvRows;

  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);

  const link = document.createElement('a');
  if (link.download !== undefined) {
    link.setAttribute('href', url);
    link.setAttribute('download', filename);
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  URL.revokeObjectURL(url);
};

export default exportToCsv;
