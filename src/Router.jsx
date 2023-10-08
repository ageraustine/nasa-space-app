import React from "react";
import {Routes, Route, Navigate} from "react-router-dom";

import HomePage from "./pages/HomePage";
import GamePage from "./pages/GamePage";
import { WhatIsEmit } from "./component/WhatIsEmit";
import { WhatIsUsedFor } from "./component/WhatIsUsedFor";
import Achievement from "./component/Achievement";

const Routers = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={<Navigate to="/home" />}
      />
      <Route path="/home" element={<HomePage />} />
      <Route path="/game" element={<GamePage />} />
      <Route path="/whatisemit" element={<WhatIsEmit />} />
      <Route path="/whatisusedfor" element={<WhatIsUsedFor/>} />
      <Route path="/acheivement" element={<Achievement />} />
    </Routes>
  );
};

export default Routers;
