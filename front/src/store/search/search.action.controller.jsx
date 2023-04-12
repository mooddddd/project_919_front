import {
  SEARCH_LOADING,
  SEARCH_SUCCESS,
  SEARCH_FAILURE,
} from './search.reducer'

export const searchLoading = () => ({ type: SEARCH_LOADING })
export const searchSuccess = (keyword) => ({
  type: SEARCH_SUCCESS,
  payload: keyword,
})
export const searchFailure = (error) => ({
  type: SEARCH_FAILURE,
  payload: error,
})

export const searchStore = () => {}

// export const search = () => {}
