import { configureStore } from "@reduxjs/toolkit";
import { productApi } from "./features/products/productApi";
import { navApi } from "./features/navItem/navApi";

export const makeStore = () => {
  return configureStore({
    reducer: {
      [productApi.reducerPath]: productApi.reducer,
      [navApi.reducerPath]: navApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat([productApi.middleware, navApi.middleware]),
  });
};

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
