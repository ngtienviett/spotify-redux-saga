import { createSlice } from "@reduxjs/toolkit";

interface InitialState {
  topTrack: any;
  isLoading: boolean;
}

const initialState: InitialState = {
  topTrack: [],
  isLoading: false,
};

export const artistSlice = createSlice({
  name: "track",
  initialState,
  reducers: {
    resetTopTrack: (state) => {
      state.topTrack = [];
    },
    getTopTrack: (state) => {
      state.isLoading = true;
    },

    topTrackFromSaga: (state,action) => {
      state.isLoading = false;
      state.topTrack = action.payload.tracks;
    }

  },
});

export const { resetTopTrack, getTopTrack, topTrackFromSaga } = artistSlice.actions;
export default artistSlice.reducer;
