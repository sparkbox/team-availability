export const loadingStates = {
  EMPTY: 'empty',
  LOADING: 'loading',
  LOADED: 'loaded',
  ERROR: 'error',
};

export default function LoadingStatus({ loadingStatus }) {
  return (
    <>
      {loadingStatus === loadingStates.EMPTY && null }
      {loadingStatus === loadingStates.LOADING && <p>Loading...</p>}
      {loadingStatus === loadingStates.LOADED && null }
      {loadingStatus === loadingStates.ERROR && <p>Error!</p>}
    </>
  );
}
