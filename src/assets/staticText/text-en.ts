import { StaticText } from '../../types';

export const textEN: StaticText = {
  logotypeTitle: 'SMDP Quartz',
  authTitle: 'Authorize',
  navigationList: [
    {
      title: 'Projects',
    },
    {
      title: 'Tasks',
    },
  ],
  pages: {
    projects: {
      title: 'My projects',
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
