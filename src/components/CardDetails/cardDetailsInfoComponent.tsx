import type { FullAstronomicalObjectInfo } from '../../interfaces/interfaces';

export default function CardDetailsInfo({
  details,
}: {
  details: FullAstronomicalObjectInfo;
}) {
  return (
    <div className="card-information">
      <p>
        <strong>Name:</strong> {details.name}
      </p>
      <p>
        <strong>Astronomical Object Type:</strong>{' '}
        {details.astronomicalObjectType}
      </p>
      {details.location ? (
        <>
          <h3>Information about location</h3>
          <p>
            <strong>Astronomical Object Type of Location:</strong>{' '}
            {details.location.astronomicalObjectType}
          </p>
          <p>
            <strong>Location name:</strong> {details.location.location.name}
          </p>
        </>
      ) : (
        <p>
          There is no additional information about this astronomical object
          location
        </p>
      )}
    </div>
  );
}
