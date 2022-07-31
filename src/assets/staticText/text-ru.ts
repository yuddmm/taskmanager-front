import { StaticText } from '../../types';

export const textRu: StaticText = {
  logotypeTitle: 'СИСТЕМА ВЕДЕНИЯ РАЗРАБОТКИ «КВАРЦ»',
  authTitle: 'Авторизация',
  navigationList: [
    {
      title: 'Проекты',
    },
    {
      title: 'Задачи',
    },
  ],
  pages: {
    projects: {
      title: 'Мои проекты',
      gridHeaderList: [
        'Название проекта',
        'Код',
        'Руководитель проекта',
        'URL страница проекта',
      ],
      gridErrorText:
        'На данный момент у вас нет ни одного проекта. Вы можете создать первый проект.',
    },
  },
};
