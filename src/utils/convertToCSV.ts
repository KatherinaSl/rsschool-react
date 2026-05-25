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

  const link = document.createElement('a');
  if (link.download !== undefined) {
    const url = URL.createObjectURL(blob);
    link.setAttribute('href', url);
    link.setAttribute('download', filename);
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
};

export default exportToCsv;
