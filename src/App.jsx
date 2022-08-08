import "./App.css";
import React from "react";
import Header from "./Header";
import Component from "./Component";
import data from "./data";

function App() {
  const travelData = data.map((item) => {
    return (
      <Component
        image={item.imageUrl}
        title={item.title}
        location={item.location}
        googleMapsUrl={item.googleMapsUrl}
        startDate={item.startDate}
        endDate={item.endDate}
        description={item.description}
      />
    );
  });
  return (
    <>
      <Header />
      {travelData}
    </>
  );
}

export default App;
