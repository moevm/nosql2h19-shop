import React from "react";
import { Button } from "@material-ui/core";
import styled from "styled-components";

const Input = styled.input`
  width: 1px;
  height: 1px;
  opacity: 0;
  position: absolute;
  overflow: hidden;
  z-index: -1;
`;

export interface CsvImportInterface {
  onClick: (file: File) => void;
}

const CsvImport: React.FC<CsvImportInterface> = ({ onClick }) => {
  const handleClick = (event: React.FormEvent<HTMLInputElement>) => {
    const { files } = event.currentTarget;
    onClick(files![0]);
  };
  return (
    <>
      <Input
        type="file"
        accept=".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"
        onClick={(event: React.FormEvent<HTMLInputElement>) => {
          event.currentTarget.value = "";
        }}
        id="raised-button-file"
        onChange={handleClick}
      />
      <label htmlFor="raised-button-file" >
        <Button variant="contained" component="span" style={{ height: '100%'}}>
          Импорт
        </Button>
      </label>
    </>
  );
};

export default CsvImport;
