import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';
import storage  from 'redux-persist/lib/storage';
import categories from "./categories/categoriesSlice";
import products from "./products/productsSlice";
import cart from "./Cart/cartSlice";
import wishlist from "./wishlist/wishlistSlice";



const cartPersistConfig  = {
  key: 'cart',
  storage,
  whitelist: ['items']
};

const wishlistPersistConfig  = {
  key: 'wishlist',
  storage,
  whitelist: ['itemsId']
};



const rootReducer = combineReducers({
  categories,
  products,
  cart: persistReducer(cartPersistConfig, cart ),
  wishlist : persistReducer(wishlistPersistConfig, wishlist ),
})


export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware => 
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
      },
    }),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export const persistor = persistStore(store);
export default {store, persistor};

