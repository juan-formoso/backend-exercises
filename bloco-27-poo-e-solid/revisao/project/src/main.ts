import { server } from "./app/app";
import "./app/devs"

const PORT = 3000;

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
}