
import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

import translations from "../utils/translations.js";

const SettingsContext = createContext();

export function SettingsProvider({ children }) {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || "dark"
  );

  const [language, setLanguage] = useState(
    localStorage.getItem("language") || "en"
  );

  // Global Theme
  useEffect(() => {
    document.documentElement.setAttribute(
      "data-theme",
      theme
    );

    document.body.classList.remove(
      "dark-theme",
      "light-theme"
    );

    document.body.classList.add(`${theme}-theme`);

    localStorage.setItem("theme", theme);
  }, [theme]);

  // Global Language
  useEffect(() => {
    document.documentElement.lang = language;

    document.documentElement.dir =
      language === "ar" ? "rtl" : "ltr";

    localStorage.setItem("language", language);
  }, [language]);

  // Translation function
  const t = (section, key) => {
    return (
      translations[language]?.[section]?.[key] ||
      translations.en?.[section]?.[key] ||
      key
    );
  };

  return (
    <SettingsContext.Provider
      value={{
        theme,
        setTheme,
        language,
        setLanguage,
        t,
      }}
    >
      {children}
    </SettingsContext.Provider>
  );
}

export function useSettings() {
  return useContext(SettingsContext);
}

