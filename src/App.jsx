import { useState } from "react";

import { Button } from "@mui/material";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h2>Something Awesome</h2>
      <Button variant="outlined" color="error">
        Text me
      </Button>
    </>
  );
}

export default App;
