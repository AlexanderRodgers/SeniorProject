export const returnError = (status: number, message: string): RequestHandlerOutput => {
  return {
      status,
      body: {
          message
      }
  };
};

// export const post: RequestHandler = async (event) => {
//   const body = (await event.request.json()) as Body;
//   if (!body.email || !body.password || !body.username) return returnError(400, 'Invalid request');
//   if (!validateEmail(body.email) || body.username.length < 4 || body.password.length < 6)
//       return returnError(400, 'Bad request');
// }