import { ILocale, languageType } from '@dsv-website/typings/ILocale';

export function generatorLocaleByLanguage(
  locale: ILocale[],
  language: languageType,
) {
  const temp: {
    [key: string]: string;
  } = {};
  locale.forEach((item) => {
    temp[item.key] = item[language];
  });

  return temp;
}
