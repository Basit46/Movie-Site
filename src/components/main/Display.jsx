import React from "react";
import Input from "../mini/Input";
import Row from "../mini/Row";
import SearchedResutRow from "../mini/SearchedResutRow";

const Display = () => {
  //SearchedRow contains result of the search and it changes based on result.
  //Row is the initail fetched row and it doesnt change
  return (
    <div className="mb-[20px]">
      <Input />
      <SearchedResutRow />
      <Row rowTitle="Batman Movies" search="batman" />
    </div>
  );
};

export default Display;
