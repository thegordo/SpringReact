import React from "react";

function Heading() {
  return <h1>This is the page heading for this app</h1>;
}

export default  function App() {
  return <>
    <Heading />
    <p>First bit of a page</p>
    <p>This should be the footer I guess!</p>
  </>
}