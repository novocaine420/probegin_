import React, { useContext } from "react";
import PropTypes from "prop-types";
import { useTable } from "react-table";

import { DeviceContext } from "../../../context/products-context";

const Table = ({ columns, data }) => {
  const [, setDevice] = useContext(DeviceContext);
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow
  } = useTable({
    columns,
    data
  });

  return (
    <div>
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <th {...column.getHeaderProps()}>{column.render("Header")}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row, i) => {
            prepareRow(row);
            return (
              <tr
                {...row.getRowProps()}
                onClick={e => {
                  setDevice(row.values);
                }}
              >
                {row.cells.map(cell => {
                  return (
                    <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
      {rows.length === 0 && (
        <p
          className="no-content-message"
          style={{
            textAlign: "center",
            padding: 10,
            width: "100%",
            boxSizing: "border-box"
          }}
        >
          there are no such products
        </p>
      )}
    </div>
  );
};

Table.propTypes = {
  columns: PropTypes.arrayOf(PropTypes.object),
  data: PropTypes.arrayOf(PropTypes.object)
};

export default Table;
