import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: true,
    width: 0,
  },
  reducers: {
    changeWidth: (state, action) => {
      state.width = action.payload
    },
    language: (state) => {
      state.value = !state.value
    },
  },
})

export const { language } = counterSlice.actions

export default counterSlice.reducer
