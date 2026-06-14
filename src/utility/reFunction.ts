export const clg = (data: any): any => console.log(data);

type THttpMethod = "GET" | "POST" | "PUT" | "DELETE";

export function checkIf(
  req: any,
  condUrl: string,
  whichMethod: THttpMethod,
): boolean {
  return req.url === condUrl && req.method === whichMethod;
}

export const giveResponse = (res: any, statusCode: number, contentType: string,message:object) => {
  res.writeHead(statusCode, { "content-type":contentType });
  res.end(JSON.stringify(message));
};
