// require("./bootstrap");

import React from "react";
import { createRoot } from "react-dom/client";
import Articles from "./components/Articles";

const container = document.getElementById("app");
const root = createRoot(container);
root.render(<Articles />);
