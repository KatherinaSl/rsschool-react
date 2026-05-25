import type { AstronomicalObject } from '../interfaces/interfaces';

const exportToCsv = (filename: string, rows: AstronomicalObject[]): void => {
  if (!rows || !rows.length) {
    return;
  }
  const separator: string = ',';

  const columHearders: string[] = Object.keys(rows[0]);
  const csvRows = rows
    .map((row) => {
      const location = row.location?.name ?? '';
      const url = `${window.location.origin}/cardDetails/${row.uid}`;
      return (
        row.uid + separator + row.name + separator + location + separator + url
      );
    })
    .join('\n');

  const csvContent = columHearders.join(separator) + '\n' + csvRows;

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
