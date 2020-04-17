import React from "react";
import classNames from "classnames";


class MovieTabs extends React.Component {

  shouldComponentUpdate(nexProps) {
    return this.props.sort_by !== nexProps.sort_by; //check if sort_by updated
  }

  render() {
    const { sort_by, updateSortBy } = this.props;

    const handleClick = value => () => {
        updateSortBy(value)
    }

    return (
      <div className="">
        <ul className="tabs nav nav-pills">
          <li className="nav-item">
            <div
              className={classNames('nav-link', {'active': sort_by === 'popularity.desc'})}
              onClick={handleClick("popularity.desc")}
            >
              Popularity
            </div>
          </li>
          <li className="nav-item">
            <div
              className={classNames('nav-link', {'active': sort_by === 'revenue.desc'})}
              onClick={handleClick("revenue.desc")}
            >
              Revenue
            </div>
          </li>
          <li className="nav-item">
            <div
              className={classNames('nav-link', {'active': sort_by === 'vote_average.desc'})}
              onClick={handleClick("vote_average.desc")}
            >
              Rating
            </div>
          </li>
        </ul>
      </div>
    );
  }
};

export default MovieTabs;
