'use client';

import { useLocale, useTranslations } from 'next-intl';
import { usePathname, useRouter } from '@/i18n/navigation';
import styles from './localeSwitcher.module.css';

export default function LanguageSwitcher() {
  const t = useTranslations('Lang');
  const router = useRouter();
  const pathname = usePathname();
  const locale = useLocale();

  function changeLanguage(newLocale: string) {
    router.replace({ pathname }, { locale: newLocale });
  }

  return (
    <select
      className={styles.languageSelect}
      value={locale}
      onChange={(e) => changeLanguage(e.target.value)}
    >
      <option value="ru">{t('ru')}</option>
      <option value="en">{t('en')}</option>
    </select>
  );
}
