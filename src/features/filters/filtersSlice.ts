import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type FiltersState = {
  name: string;
  username: string;
  email: string;
  phone: string;
}

const initialState: FiltersState = {
  name: '',
  username: '',
  email: '',
  phone: '',
}

const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setFilter: (state, action: PayloadAction<{ field: keyof FiltersState, value: string }>) => {
      state[action.payload.field] = action.payload.value;
    }
  }
});

export const { setFilter } = filtersSlice.actions;
export default filtersSlice.reducer;