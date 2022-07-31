import Layout from '../../components/layout/layout';
import { useStaticText } from '../../hooks/useStaticText';
import './projects.scss';
import Grid from '../../components/grid/grid';
import React, { useMemo, useState } from 'react';
import { ProjectGridItem } from '../../types';
import Button from '../../components/button/button';

type ProjectGridItemKeys = keyof ProjectGridItem;

const Projects = () => {
  const staticTextProjects = useStaticText().pages.projects;
  const styleWidthList = [4, 1, 2, 3];
  const [mockList, setMockList] = useState(() => {
    const itemLIst: ProjectGridItem[] = [
      {
        title: 'PetLove',
        code: 'PET',
        manager: 'Юсупов Дмитрий Эдуардович',
        url: 'Отсутствует',
      },
      {
        title: 'meetgo',
        code: 'MDA',
        manager: 'Юсупов Дмитрий Эдуардович',
        url: 'Отсутствует',
      },
      {
        title: 'partygo',
        code: 'PDA',
        manager: 'Юсупов Дмитрий Эдуардович',
        url: 'Отсутствует',
      },
    ];
    return itemLIst;
  });

  // const onSortHandler = (index: number) => {
  //   const key = Object.keys(mockList)[index] as ProjectGridItemKeys;
  //
  //   setMockList((prevState) => {
  //     const newState = prevState.sort((a, b) => a[key].localeCompare(b[key]));
  //
  //     return newState;
  //   });
  // };

  return (
    <Layout>
      <div className="projectsWrapper">
        <div className="projectsContainer container">
          <div className="projectsTitle title">{staticTextProjects.title}</div>
          <div className="projectGrid">
            <Grid
              headerTitleList={staticTextProjects.gridHeaderList}
              itemList={mockList}
              styleWidthList={styleWidthList}
              renderHeaderList={() => {
                return (
                  <>
                    {staticTextProjects.gridHeaderList.map((item, index) => {
                      return (
                        <div
                          className={`gridHeaderItem gridItem grid-${styleWidthList[index]}`}
                          key={index}
                        >
                          {item}
                        </div>
                      );
                    })}
                  </>
                );
              }}
              renderError={() => {
                return (
                  <div className="projectsGridErrorWrapper">
                    <div className="projectsGridErrorMessage">
                      {staticTextProjects.gridErrorText}
                      <Button
                        onClick={() => console.log('open modal')}
                        color={'blue'}
                      >
                        Создать проект
                      </Button>
                    </div>
                  </div>
                );
              }}
            />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Projects;
