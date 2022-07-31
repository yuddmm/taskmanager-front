import Layout from '../../components/layout/layout';
import { useStaticText } from '../../hooks/useStaticText';
import './projects.scss';
import Grid from '../../components/grid/grid';
import React, { useCallback, useMemo, useState } from 'react';
import { ProjectGridItem } from '../../types';
import Button from '../../components/button/button';
import _ from 'lodash';
import { ReactComponent as SortAscIcon } from '../../assets/icons/sort-asc.svg';
import { ReactComponent as SortDesIcon } from '../../assets/icons/sort-des.svg';
import Modal from '../../components/modal/modal';
import { CreateProject } from './createProject';
import { useNavigate } from 'react-router-dom';

type ProjectGridItemKeys = keyof Omit<ProjectGridItem, 'id'>;

const Projects = () => {
  const [sortTargetIndex, setSortTargetIndex] = useState<number | null>(null);
  const [sortModeIsAsc, setSortModeIsAsc] = useState<boolean>(true);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const staticTextProjects = useStaticText().pages.projects;
  const navigate = useNavigate();
  const styleWidthList = [4, 1, 2, 3];
  const [mockList, setMockList] = useState(() => {
    const itemLIst: Omit<ProjectGridItem, 'id'>[] = [
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

  // const onSelectProject = useCallback((id: number) => {
  //   const code = mockList.find((item) => item.id === id);
  //   if (code) {
  //     navigate(`/${code}/`);
  //   }
  // }, []);

  return (
    <Layout>
      <div className="projectsWrapper">
        <div className="projectsContainer container">
          <div className="projectsHeader pageHeader">
            <div className="projectsTitle title">
              {staticTextProjects.title}
            </div>
            <div className="projectsHeaderButton">
              <Button
                onClick={() => setIsModalOpen(true)}
                color="blue"
                outlined
              >
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
      <Modal
        open={isModalOpen}
        title="Создать проект"
        onClose={() => setIsModalOpen(false)}
      >
        <CreateProject />
      </Modal>
    </Layout>
  );
};

export default Projects;
