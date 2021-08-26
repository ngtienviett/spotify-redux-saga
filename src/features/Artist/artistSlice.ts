import { createSlice } from "@reduxjs/toolkit";
interface InitialState {
  artistList: ArtistList;
  isLoading: boolean;
}

const initialState: InitialState = {
  artistList: {
    href: "",
    items: [],
    limit: 20,
    next: null,
    offset: 1,
    preivous:  null,
    total: 0,
  },
  isLoading: false,
};


export const artistSlice = createSlice({
  name: "artist",
  initialState,
  reducers: {
    getArtistList: (state) => {
      state.isLoading = true;
    },

    artistListFromSaga: (state, action) => {
      state.isLoading = false;
      state.artistList = action.payload.artists;
    }
  },
});

export const { getArtistList, artistListFromSaga } = artistSlice.actions;
export default artistSlice.reducer;
