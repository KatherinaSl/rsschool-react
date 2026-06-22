import styles from './cardComponent.module.css';
import type { AstronomicalObject } from '../../../interfaces/interfaces';
import CheckboxComponent from '../checkbox/checkboxComponent';
import Link from 'next/link';

export default function CardComponent({
  searchTerm,
  card,
  pageNumber,
}: {
  searchTerm: string,
  card: AstronomicalObject;
  pageNumber: number;
}) {
  return (
    <div className={styles.card}>
      <CheckboxComponent card={card} />

      <Link href={`/cardDetails/${card.uid}?pageNumber=${pageNumber}&searchTerm=${searchTerm}`}>
        <div>
          <h4>{card.name}</h4>
          <p>
            <strong>Actronomical object type:</strong>{' '}
            {card.astronomicalObjectType}
          </p>
          {card.location && (
            <p>
              <strong>Location:</strong> {card.location.name}
            </p>
          )}
        </div>
      </Link>
    </div>
  );
}
