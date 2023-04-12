const initState = {
  isLoading: false,
  keyword: null,
  error: null,
}

export const SEARCH_LOADING = 'SEARCH_LOADING'
export const SEARCH_SUCCESS = 'SEARCH_SUCCESS'
export const SEARCH_FAILURE = 'SEARCH_FAILURE'

export const searchReducer = (state = initState, action) => {
  switch (action.type) {
    case SEARCH_LOADING:
      return { ...state, isLoading: true }

    case SEARCH_SUCCESS:
      return { keyword: action.payload, isLoading: false }

    case SEARCH_FAILURE:
      return { ...state, isLoading: false, error: action.payload }

    default:
      return state
  }
}
