import React from 'react';
import Button from '../Button';
import PropTypes from 'prop-types';

const Table = ({ list, onDismiss }) => {
  const largeColumnStyle = {
    width: '40%',
  };

  const midColumnStyle = {
    width: '30%',
  };

  const smallColumnStyle = {
    width: '10%',
  };

  return(
    <div className="table">
      {list.map(item => 
        <div key={item.objectID} className="table-row">
          <span style={largeColumnStyle}>
            <a href={item.url}>{item.title}</a>
          </span>
          <span style={midColumnStyle}>{item.author}</span>
          <span style={smallColumnStyle}>{item.num_comments}</span>
          <span style={smallColumnStyle}>{item.points}</span>
          <span style={smallColumnStyle}>
            <Button
              onClick={() => onDismiss(item.objectID)}
              className="button-inline"
            >
              Dismiss
            </Button>
          </span>
        </div>
      )}
    </div>
  );
}

Table.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.shape({
    objectID: PropTypes.string.isRequired,
    author: PropTypes.string,
    url: PropTypes.string,
    num_comments: PropTypes.number,
      points: PropTypes.number,
    })
  ).isRequired,
  onDismiss: PropTypes.func.isRequired,
};

export default Table;

