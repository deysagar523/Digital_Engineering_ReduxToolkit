import { configureStore } from "@reduxjs/toolkit";
import { PostData } from "./PostRedux";
import { UserData } from "./UserRedux";
export const store = configureStore({
  reducer: {
    postsArr: PostData.reducer,
    usersArr: UserData.reducer,
  },
});
