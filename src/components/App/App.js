import React, { Component } from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';

const Search = ({ value, onChange, onSubmit, children }) => {
  return (
    <form onSubmit={onSubmit}>
      <input 
        type="text"
        value={value}
        onChange={onChange}
      />
      <button type="submit">
        {children}
      </button>
    </form>
  );
}

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

const Button = ({ onClick, className = '', children }) => {
  return(
    <button
      onClick={onClick}
      className={className}
      type="button"
    >
      {children}
    </button>
  );
}

