import { textRu } from '../assets/staticText/text-ru';
import { textEN } from '../assets/staticText/text-en';
import { useEffect, useState } from 'react';
import { StaticText } from '../types';

export const useStaticText = () => {
  const [text, setText] = useState<StaticText>(
    navigator.language.includes('ru') ? textRu : textEN,
  );

  useEffect(() => {
    setText(navigator.language.includes('ru') ? textRu : textEN);
  }, []);

  return text;
};
