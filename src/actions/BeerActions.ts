import { createAsyncThunk } from "@reduxjs/toolkit";
import BeerServices from "../services/BeerServices";
import { SearchOptions} from "../models/Beer";

export const getBeers = createAsyncThunk(
    "beers/getBeers",
    async (params:SearchOptions, thunkAPI) => {
        try {
            const data =  await BeerServices.getBeers(params);
            return data;
        } catch (error:any) {
            const errorMessage =
                (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                error.message ||
                error.toString();
            thunkAPI.dispatch(errorMessage);
            return thunkAPI.rejectWithValue(errorMessage);
        }
    }
);

export const getBeerByBeerId = createAsyncThunk(
    "beers/getBeerByBeerId",
    async (id:string, thunkAPI) => {
        try {
            const data =  await BeerServices.getBeerByBeerId(id);
            return data;
        } catch (error:any) {
            const errorMessage =
                (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                error.message ||
                error.toString();
            thunkAPI.dispatch(errorMessage);
            return thunkAPI.rejectWithValue(errorMessage);
        }
    }
);
