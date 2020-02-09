import React, { useState, useContext } from "react";
import styled from "styled-components";

import Table from "./components/Table";
import Input from "./components/Input/Input";

import "./SearchBlock.scss";
import { ProductsContext } from "../../context/products-context";

const columns = [
  {
    Header: "Code",
    accessor: "code"
  },
  {
    Header: "Description",
    accessor: "description"
  },
  {
    Header: "Diagonal",
    accessor: "diagonal"
  },
  {
    Header: "Width",
    accessor: "width"
  },
  {
    Header: "Height",
    accessor: "height"
  },
  {
    Header: "Weight",
    accessor: "weight"
  }
];

const Styles = styled.div`
  table {
    width: 100%;
    border-spacing: 0;
    th {
      font-weight: normal;
      border-left: 1px solid #6a97c9;
      border-top: 1px solid #6a97c9;
      }
    }
    th,
    tr:nth-child(even) {
      background-color: #dddddd;
    }
    th,
    td {
      cursor: pointer;
      margin: 0;
      padding: 0.3rem;
      border-bottom: 1px solid #6a97c9;
      border-left: 1px solid #6a97c9;
      text-align: center;
      :last-child {
        border-right: 1px solid #6a97c9;
      }
    }
  }
`;

const SearchBlock = () => {
  const [value, setValue] = useState("");
  const [products] = useContext(ProductsContext);

  const onInputChange = e => {
    setValue(e.target.value);
  };

  return (
    <div className="search-block">
      <Input onChange={onInputChange} />
      <Styles>
        <Table
          columns={columns}
          data={products.filter(device =>
            device.description.toLowerCase().includes(value.toLowerCase())
          )}
        />
      </Styles>
    </div>
  );
};

export default SearchBlock;
