import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { User } from "../../types";


type UsersDataState = {
  usersData: User[];
  loading: boolean;
  error: string | null;
}

const initialState: UsersDataState = {
  usersData: [],
  loading: false,
  error: null,
}

export const fetchUsersData = createAsyncThunk<
  User[],
  void,
  { rejectValue: string }
>(
  'usersData/fetchUsersData',
  async (_, { rejectWithValue }) => {
    try{
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      if(!response.ok){
        throw new Error(`${response.status} error`);
      }
      return await response.json();
    }catch(error){
      return rejectWithValue(error instanceof Error? error.message : "An uknown error occured");
    }
    
  }
)

const usersDataSlice = createSlice({
  name: 'usersData',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsersData.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchUsersData.fulfilled, (state, action: PayloadAction<User[]>) => {
        state.loading = false;
        state.usersData = action.payload;
      })
      .addCase(fetchUsersData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "An uknown error occured";
      })
  },
})

export default usersDataSlice.reducer;