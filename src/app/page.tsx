import { createEmotionCache } from '@/utils/create-emotion-cache';
import styles from './page.module.css';
import { CacheProvider } from '@emotion/react';

const label = { inputProps: { 'aria-label': 'Switch demo' } };

export default function Home() {
  return <CacheProvider value={createEmotionCache()}></CacheProvider>;
}
