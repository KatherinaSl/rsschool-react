import styles from './cardComponent.module.css';
import type { AstronomicalObject } from '../../../interfaces/interfaces';
import CheckboxComponent from '../checkbox/checkboxComponent';
import { Link } from '@/i18n/navigation';
import { useTranslations } from 'next-intl';

export default function CardComponent({
  searchTerm,
  card,
  pageNumber,
}: {
  searchTerm: string;
  card: AstronomicalObject;
  pageNumber: number;
}) {
  const t = useTranslations('CardComp');

  return (
    <div className={styles.card}>
      <CheckboxComponent card={card} />

      <Link
        href={`/cardDetails/${card.uid}?pageNumber=${pageNumber}&searchTerm=${searchTerm}`}
      >
        <div>
          <h4>{card.name}</h4>
          <p>
            <strong>{t('type')}</strong>
            {card.astronomicalObjectType}
          </p>
          {card.location && (
            <p>
              <strong>{t('location')}</strong> {card.location.name}
            </p>
          )}
        </div>
      </Link>
    </div>
  );
}
