import exportToCsv from '../utils/convertToCSV';

beforeEach(() => {
  jest.spyOn(URL, 'createObjectURL').mockReturnValue('blob:http://localhost/');
  jest.spyOn(URL, 'revokeObjectURL').mockImplementation();
});

afterEach(() => {
  jest.restoreAllMocks();
});

test('should convert to csv file', async () => {
  const rows = [
    {
      uid: '435',
      name: 'Alpha',
      astronomicalObjectType: 'Star',
      location: { uid: '452', name: 'Andromeda' },
    },
  ];

  exportToCsv('test.csv', rows);

  expect(URL.createObjectURL).toHaveBeenCalledTimes(1);
  expect(URL.revokeObjectURL).toHaveBeenCalledTimes(1);

  const blob = (URL.createObjectURL as jest.Mock).mock.calls[0][0] as Blob;
  const csvText = await blob.text();

  expect(csvText).toContain('uid,name,astronomicalObjectType,location,url');
  expect(csvText).toContain('435,Alpha,Star,Andromeda');
  expect(csvText).toContain(`/cardDetails/435`);
});
