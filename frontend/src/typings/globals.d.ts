declare interface Window {
  __REDUX_DEVTOOLS_EXTENSION__: any;
  __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: any;
}

interface IAsyncResponse<TPayload, TError = Error> {
  loading: boolean;
  error?: TError;
  payload?: TPayload;
}
