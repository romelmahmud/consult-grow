import { RouterProvider } from "react-router-dom";
import { routes } from "./routes/Routes/routes";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <RouterProvider router={routes}></RouterProvider>
      <Toaster />
    </>
  );
}

export default App;
