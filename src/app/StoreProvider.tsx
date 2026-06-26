'use client';

import { useState } from 'react';
import { Provider } from 'react-redux';
import { AppStore, store } from '../lib/store';

export default function StoreProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [appStore] = useState<AppStore>(() => store());

  return <Provider store={appStore}>{children}</Provider>;
}
