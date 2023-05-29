interface repositoriesState {
  loading: boolean;
  error: string | null;
  data: string[]
}
const reducer = (state: repositoriesState, action: any) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default reducer;
