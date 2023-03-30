import { Suspense, useEffect, useState } from "react";
import { getRequests, postRequests } from "./apis/api";
import { ConfigProvider } from "antd";
import AllRoutes from "./routes/AllRoutes";
import "./App.css";

function App() {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "red",
        },
      }}
    >
      <Suspense fallback={<div>Loading...</div>}>
        <AllRoutes />
      </Suspense>
    </ConfigProvider>
  );
}

export default App;
