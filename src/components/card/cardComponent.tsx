import type { SubmittedFormData } from '../../interfaces/interface';
import './cardComponent.css';

export default function CardComponent({ data }: { data: SubmittedFormData }) {
  return (
    <div className="card">
      <div className="card__header">
        <div>
          <h3>{data.name}</h3>
          <span>{data.email}</span>
        </div>
      </div>

      <div className="card__body">
        <div className="info-row">
          <span>Age</span>
          <strong>{data.age}</strong>
        </div>

        <div className="info-row">
          <span>Gender</span>
          <strong>{data.gender}</strong>
        </div>
      </div>
    </div>
  );
}
