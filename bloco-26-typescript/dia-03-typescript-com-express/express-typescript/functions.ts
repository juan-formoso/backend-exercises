import fs from "fs/promises";
import Book from "./interfaces/Book";

const read = async (): Promise<Book[]> => {
  const data = await fs.readFile("./books.json", "utf-8");
  const books: Book[] = JSON.parse(data);
  return books;
};

export { read };
