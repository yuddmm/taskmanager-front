export const CreateProject = () => {
  return (
    <div className="createProjectWrapper">
      <div className="createProjectContainer container">
        <form className="createProjectForm">
          <div className="createProjectFormItem">
            <label className="formLabel">Название проекта</label>
            <input className="input" type="text" />
          </div>
          <div className="createProjectFormItem">
            <label className="formLabel">Описание проекта</label>
            <textarea className="textarea"></textarea>
          </div>
          <input type="submit" value="Создать проект" className="button blue" />
        </form>
      </div>
    </div>
  );
};
