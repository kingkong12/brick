'use client';
import { useState } from 'react';
import createCache, { EmotionCache } from '@emotion/cache';
import { useServerInsertedHTML } from 'next/navigation';
import { CacheProvider } from '@emotion/react';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from './theme';

interface OptionsTS {
  key: string;
}

interface ThemeRegistryProps {
  options: OptionsTS; // Replace with the actual type of options if known
  children: React.ReactNode;
}

export default function ThemeRegistry(props: ThemeRegistryProps): JSX.Element {
  const { options, children } = props;
  const [{ cache, flush }] = useState<{ cache: EmotionCache; flush: () => string[] }>(() => {
    const cache = createCache(options);
    (cache as any).compat = true; // Adjust the type as needed for compatibility
    const prevInsert = cache.insert;
    let inserted: string[] = [];
    cache.insert = (...args: any[]) => {
      const serialized = args[1];
      if (cache.inserted[serialized.name] === undefined) {
        inserted.push(serialized.name);
      }
      return prevInsert(...(args as Parameters<typeof prevInsert>));
    };
    const flush = () => {
      const prevInserted = inserted;
      inserted = [];
      return prevInserted;
    };
    return { cache, flush };
  });

  useServerInsertedHTML(() => {
    const names = flush();
    if (names.length === 0) {
      return null;
    }
    let styles = '';
    for (const name of names) {
      styles += cache.inserted[name];
    }
    return (
      <style
        key={cache.key}
        data-emotion={`${cache.key} ${names.join(' ')}`}
        dangerouslySetInnerHTML={{
          __html: styles,
        }}
      />
    );
  });

  return (
    <CacheProvider value={cache}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </CacheProvider>
  );
}
