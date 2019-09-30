import React, { useState, useEffect } from 'react';
import axios from 'axios';

const useFetch = url => {
  const [data, updateData] = useState();

  useEffect(() => {
    fetch(url)
      .then(res => {
        return res.json();
      })
      .then(json => {
        updateData(json);
      });
  }, [url]);

  return data;
};

const Row = ({ children }) => <tr>{children}</tr>;
const THead = ({ children }) => <thead>{children}</thead>;
const TBody = ({ children }) => <tbody>{children}</tbody>;
const ThCell = ({ children }) => <th>{children}</th>;
const TdCell = ({ children }) => <td>{children}</td>;

const Table = () => {
  const data = useFetch(
    "https://next.json-generator.com/api/json/get/EyrH-h5wv"
  );
  
  const getTableStructure = () => {
    const rows = [];
    const cellPerRow = data.columns.length;
    const headsRow = (
      <Row>
        {data.columns.map(head => (
          <ThCell key={head}>{head}</ThCell>
        ))}
      </Row>
    );
    rows.push(headsRow);
    let tempCells = [];
    data.cell.forEach((cell, index) => {
      tempCells.push(<TdCell key={cell.id}>{cell.text}</TdCell>);
      if (!((index + 1) % cellPerRow)) {
        rows.push(<Row>{tempCells}</Row>);
        tempCells = [];
      }
      if (index === data.cell.length - 1) {
        rows.push(<Row>{tempCells}</Row>);
      }
    });

    return rows;
  };
  
  return (
    <table>
      {data ? getTableStructure() : null}
    </table>
  );
}

export default Table;