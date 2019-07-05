export function responseError(error: any) {
  const { status, statusText } = error.response;
  console.log(`Error! HTTP Status: ${status} ${statusText}`);
}
