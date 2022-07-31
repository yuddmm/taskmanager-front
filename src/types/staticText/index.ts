export type StaticText = {
  logotypeTitle: string;
  navigationList: StaticTextNavigation[];
  authTitle: string;
  pages: StaticTextPages;
};

export type StaticTextNavigation = {
  title: string;
};

export type StaticTextPages = {
  projects: StaticTextProjectsPage;
};

export type StaticTextProjectsPage = {
  title: string;
  gridHeaderList: string[];
  gridErrorText: string;
};
