import React from "react";
import Card from "../Card/Card";

export default function Results({ showData }) {
  return (
    <div className="sm:grid gap-2 sm:grid-cols-2 lg:grid-col-3 xl:grid-cols-4 2xl:grid-cols-5 max-w-6xl mx-auto py-4">
      {showData.map((items) => (
        <Card key={items.id} data={items}/>
        // <div className="" key={index}>
        //   {items.original_title}
        // </div>
      ))}
    </div>
  );
}
