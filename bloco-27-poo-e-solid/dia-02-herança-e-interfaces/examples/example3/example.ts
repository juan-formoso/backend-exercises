interface Board {
  save(): void;
  // ...
}

class GenericBoard implements Board {
  // Finja que faz sentido as casas do tabuleiro serem um array de strings
  constructor(public houses: string[], protected database: Database) {}

  public save() {
    this.database.save(this.houses);
  }
}

class ChessBoard extends GenericBoard {
  constructor(
    public houses: string[],
    protected database: Database // Parâmetros específicos de um tabuleiro de xadrez
  ) {
    // Implementação específica de um tabuleiro de xadrez
  }
}

interface Database {
  save(content: any): void;
  // ...
}

class MySQLDatabase implements Database {
  private connection: MySQLConnection; // Uma conexão fictícia com o banco
  // ...
  save(content: any) {
    // Uma query fictícia para salvar o conteúdo no banco
    this.connection.query(`INSERT INTO table_name VALUES (${content})`);
  }
}

const db = new MySQLDatabase();
const board = new ChessBoard(["A1", "A2", "B1", "B2"], db);
board.save();
