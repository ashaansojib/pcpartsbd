import { configureStore } from "@reduxjs/toolkit";
import { ProductApi } from "./features/products/productApi";
import { navApi } from "./features/navItem/navApi";
import { AddCartApi } from "./features/addItems/AddCartApi";

export const makeStore = () => {
  return configureStore({
    reducer: {
      [ProductApi.reducerPath]: ProductApi.reducer,
      [navApi.reducerPath]: navApi.reducer,
      [AddCartApi.reducerPath]: AddCartApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat([
        ProductApi.middleware,
        navApi.middleware,
        AddCartApi.middleware,
      ]),
  });
};

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
