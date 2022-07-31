import './grid.scss';

interface IProps {
  headerTitleList: string[];
  renderHeaderList(): JSX.Element;
  styleWidthList: number[];
  itemList?: object[];
  renderError(): JSX.Element;
}

const Grid = (props: IProps) => {
  return (
    <div className="gridWrapper">
      <div className="gridHeader gridRow">{props.renderHeaderList()}</div>
      <div className="gridList">
        {props.itemList
          ? props.itemList.map((item, index) => {
              const values = Object.values(item);

              return (
                <div className="gridListRow gridRow" key={index}>
                  {values.map((value, valueIndex) => {
                    return (
                      <div
                        className={`gridListItem grid-${props.styleWidthList[valueIndex]} gridItem`}
                        key={valueIndex}
                      >
                        {value}
                      </div>
                    );
                  })}
                </div>
              );
            })
          : props.renderError()}
      </div>
    </div>
  );
};

export default Grid;
