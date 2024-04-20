// Default
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";

// Views
import {
  GetAllProductsPage,
  AddProductPage,
  HomePage,
  DeleteProductPage,
  UpdateProductPage,
  GetSingleProductPage,
} from "./views/pages";

// Main funtion stars here
const App = () => {
  // Main query client to handle react-query
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
        retry: false,
        staleTime: 2000,
      },
    },
  });

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />}>
            <Route path="/get-all-products" element={<GetAllProductsPage />} />
            <Route
              path="/get-single-product"
              element={<GetSingleProductPage />}
            />
            <Route path="/add-product" element={<AddProductPage />} />
            <Route path="/delete-product" element={<DeleteProductPage />} />
            <Route path="/update-product" element={<UpdateProductPage />} />
            <Route path="*" element={<>Error! No such page found.</>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
};

export default App;
