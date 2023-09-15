import { ExchangeData } from "@/interfaces/socket.interface";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface InitialStateI {
  exchanges: ExchangeData[]
}

const initialState: InitialStateI = { 
  exchanges: []
}

export const exchangeSlice = createSlice({
  initialState,
  name: "exchange",
  reducers: {
    addExchange: (state: InitialStateI, action: PayloadAction<ExchangeData[]>) => {
      state.exchanges = [...action.payload, ...state.exchanges]
    }
  }
})

export const { addExchange } = exchangeSlice.actions
export default exchangeSlice.reducer
