import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from 'redux-persist';
import storage  from 'redux-persist/lib/storage';
import categories from "./categories/categoriesSlice";
import products from "./products/productsSlice";
import cart from "./Cart/cartSlice";



const cartPersistConfig  = {
  key: 'cart',
  storage,
  whitelist: ['items']
};



const rootReducer = combineReducers({
  categories,
  products,
  cart: persistReducer(cartPersistConfig, cart )
})


export const store = configureStore({
  reducer: rootReducer
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export const persistor = persistStore(store);
export default {store, persistor};

