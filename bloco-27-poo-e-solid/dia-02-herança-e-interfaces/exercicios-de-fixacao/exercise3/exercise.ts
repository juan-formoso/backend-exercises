interface Logger {
  log(message: string): void;
}

interface Database {
  Logger: Logger;
  save(key: string, value: string): void;
}

class ConsoleLogger implements Logger {
  log(message: string): void {
    console.log(message);
  }
}

class ConsoleLogger2 implements Logger {
  log(message: string): void {
    console.log("Logger 2 says: " + message);
  }
}

class ExampleDatabase implements Database {
  constructor(public logger: Logger = new ConsoleLogger()) {}
  save(key: string, value: string): void {
    this.logger.log(`Saving ${key} ${value} to the database.`);
  }
}

const logger1 = new ConsoleLogger();
const logger2 = new ConsoleLogger2();

// Crie três objetos da ExampleDatabase, cada um dos dois primeiros recebendo um dos Loggers, e o último não recebendo nenhum.
const db1 = new ExampleDatabase(logger1);
const db2 = new ExampleDatabase(logger2);
const db3 = new ExampleDatabase();

// Utilize todos eles para salvar um conteúdo fictício.
db1.save("key 1", "value 1");
db2.save("key 2", "value 2");
db3.save("key 3", "value 3");
