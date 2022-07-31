import Layout from '../../components/layout/layout';
import { useStaticText } from '../../hooks/useStaticText';
import './projects.scss';
import Grid from '../../components/grid/grid';
import React, { useMemo, useState } from 'react';
import { ProjectGridItem } from '../../types';
import Button from '../../components/button/button';
import _ from 'lodash';
import { ReactComponent as SortAscIcon } from '../../assets/icons/sort-asc.svg';
import { ReactComponent as SortDesIcon } from '../../assets/icons/sort-des.svg';

type ProjectGridItemKeys = keyof ProjectGridItem;

const Projects = () => {
  const [sortTargetIndex, setSortTargetIndex] = useState<number | null>(null);
  const [sortModeIsAsc, setSortModeIsAsc] = useState<boolean>(true);
  const staticTextProjects = useStaticText().pages.projects;
  const styleWidthList = [4, 1, 2, 3];
  const [mockList, setMockList] = useState(() => {
    const itemLIst: ProjectGridItem[] = [
      {
        title: 'petLove',
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

  const onSortHandler = (index: number) => {
    // Потом сделать сортировку на бэке и получение данных
    const key = Object.keys(mockList[0])[index] as ProjectGridItemKeys;
    const result = _.orderBy(mockList, (obj) => obj[key]);

    if (sortTargetIndex === index) {
      setSortModeIsAsc((prevState) => !prevState);
    } else {
      setSortTargetIndex(index);
      setSortModeIsAsc(true);
    }

    setMockList(result);
  };

  return (
    <Layout>
      <div className="projectsWrapper">
        <div className="projectsContainer container">
          <div className="projectsHeader pageHeader">
            <div className="projectsTitle title">
              {staticTextProjects.title}
            </div>
            <div className="projectsHeaderButton">
              <Button onClick={() => console.log('button')} color={'blue'}>
                Создать проект
              </Button>
            </div>
          </div>
          <div className="projectGrid">
            <Grid
              itemList={mockList}
              styleWidthList={styleWidthList}
              renderHeaderList={() => {
                return (
                  <>
                    {staticTextProjects.gridHeaderList.map((item, index) => {
                      return (
                        <div
                          className={`gridHeaderItem gridItem grid-${styleWidthList[index]}`}
                          onClick={() => onSortHandler(index)}
                          key={index}
                        >
                          <div className="gridHeaderItemText">{item}</div>
                          {sortTargetIndex === index ? (
                            <div className="gridHeaderSortIcon">
                              {sortModeIsAsc ? (
                                <SortAscIcon />
                              ) : (
                                <SortDesIcon />
                              )}
                            </div>
                          ) : null}
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
