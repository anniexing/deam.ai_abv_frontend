import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Beer, SearchOptions } from "../models/Beer";
import { getBeerByBeerId, getBeers } from "../actions/BeerActions";

export interface BeerState {
  beers: Array<Beer>;
  beerDetail?: Beer | null;
  searchOptions?: SearchOptions | null;
  isLoading: boolean;
  error: string | null;
}

const initState: BeerState = {
  beers: [],
  beerDetail: null,
  searchOptions: null,
  isLoading: false,
  error: null,
};

const beerSlice = createSlice({
  name: "beers",
  initialState: initState,
  reducers: {},
  extraReducers: (builder) => {
    // get beers
    builder.addCase(
      getBeers.fulfilled, (state: BeerState, action: PayloadAction<Beer[]>) => {
          state.isLoading = false;
          state.beers = action.payload;
        }
    );
    builder.addCase(
      getBeers.pending,
        (state: BeerState) => {
          state.isLoading = false;
          state.error = null;
        }
    );

    builder.addCase(
      getBeers.rejected, (state: BeerState, action: PayloadAction<unknown>) => {
          state.isLoading = false;
          state.error = action.payload as string;
        }
    );

    // search beers by beer id

      builder.addCase(
          getBeerByBeerId.fulfilled, (state: BeerState, action: PayloadAction<Beer>) => {
              state.isLoading = false;
              state.beerDetail = action.payload;
          }
      );
      builder.addCase(
          getBeerByBeerId.pending,
          (state: BeerState) => {
              state.isLoading = false;
              state.error = null;
          }
      );

      builder.addCase(
          getBeerByBeerId.rejected, (state: BeerState, action: PayloadAction<unknown>) => {
              state.isLoading = false;
              state.error = action.payload as string;
          }
      );
  },
});

const { reducer } = beerSlice;
export default reducer;
