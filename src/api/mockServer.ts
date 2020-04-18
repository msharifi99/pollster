export default function mockServer<T>(
  response: T,
  shouldReject: boolean = false
): Promise<T> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      shouldReject ? resolve(response) : reject(response);
    }, 1000);
  });
}
