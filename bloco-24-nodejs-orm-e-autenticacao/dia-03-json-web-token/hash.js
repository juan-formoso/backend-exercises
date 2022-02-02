import { hmac } from "bibliotecaDeHmac";

const base64 = (string) => {
  return Buffer.from(string).toString("base64");
};

const header = JSON.stringify({
  alg: "HS256",
  type: "JWT",
});

const payload = JSON.stringify({
  sub: "123467890",
  name: "John Doe",
  admin: true,
});

const secret = "MyPassword123";
const assinatura = hmac(`${base64(header)}.${base64(payload)}`, secret);
const token = `${base64(header)}.${base64(payload)}.${base64(assinatura)}`;

// Exemplo de envio de um JWT via header em uma requisição HTTP
/* 
GET /foo/bar HTTP/1.1
Host: www.exemplo.com
Authorization: Bearer (Header em base64).(Payload em base64).(Assinatura em base64)
*/
