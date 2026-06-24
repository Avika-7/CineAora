import MainLayout from "./layouts/MainLayout";
import AppRoutes from "./routes/AppRoutes";

function App() {
  return (
    <MainLayout>
      <AppRoutes />
    </MainLayout>
  );
}


// import AppRoutes from "./routes/AppRoutes";
// import Navbar from "./components/common/Navbar";

// function App() {
//   return (
//     <>
//       <Navbar />

//       <AppRoutes />
//     </>
//   );
// }

export default App;