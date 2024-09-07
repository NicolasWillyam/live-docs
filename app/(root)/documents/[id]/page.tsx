import { Editor } from "@/components/editor/Editor";
import Header from "@/components/header";
import React from "react";

const Page = () => {
  return (
    <div>
      <Header>
        <p>Header</p>
      </Header>
      <Editor />
    </div>
  );
};

export default Page;
