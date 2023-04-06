import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: true,
  },
  reducers: {
    language: (state) => {
      state.value = !state.value
    },
  },
})

export const { language } = counterSlice.actions

export default counterSlice.reducer
