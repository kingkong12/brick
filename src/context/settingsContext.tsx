'use client';
// ** React Imports
import { createContext, useState, ReactNode } from 'react';

// ** MUI Imports
import { PaletteMode } from '@mui/material';

// ** ThemeConfig Import
//import themeConfig from

// ** Types Import
//import { ThemeColor, ContentWidth } from 'src/@core/layouts/types'
import themeConfig from '@/configs/themeConfig';
import { ContentWidth, ThemeColor } from '@/components/types';
import ThemeComponent from '@/theme/ThemeComponent';

export type Settings = {
  mode: PaletteMode;
  themeColor: ThemeColor;
  contentWidth: ContentWidth;
};

export type SettingsContextValue = {
  settings: Settings;
  saveSettings: (updatedSettings: Settings) => void;
};

const initialSettings: Settings = {
  themeColor: 'primary',
  mode: themeConfig.mode,
  contentWidth: themeConfig.contentWidth,
};

// ** Create Context
export const SettingsContext = createContext<SettingsContextValue>({
  saveSettings: () => null,
  settings: initialSettings,
});

export const SettingsProvider = ({ children }: { children: ReactNode }) => {
  // ** State
  const [settings, setSettings] = useState<Settings>({ ...initialSettings });

  const saveSettings = (updatedSettings: Settings) => {
    setSettings(updatedSettings);
  };

  // const Children2 = () => <ThemeComponent settings={settings}>{children}</ThemeComponent>;

  return (
    <SettingsContext.Provider value={{ settings, saveSettings }}>
      <SettingsContext.Consumer>
        {({ settings }) => {
          return <ThemeComponent settings={settings}>{children}</ThemeComponent>;
        }}
      </SettingsContext.Consumer>
    </SettingsContext.Provider>
  );
};
