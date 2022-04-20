# What is NoSQL

**NoSQL (Not SQL) is a mon-relational database**

> NoSQL doesn't use tables with rows or columns
> It stores relationship data in documents

**Types of NoSQL Databases**

- Document Database (MongoDB)
- Key-value Database
- Wide-column Database
- Graph Database

## Topics

1. Create Database
2. Drop Database
3. Create Collection
4. Drop collection
5. Data types
6. Insert Document to Collection
7. Query Document
8. Update Document
9. Delete Document
10. Indexing
11. Aggregation
12. Replication
13. Sharding
14. Deployment

### Create Database

`use databaseName;`

**If you want to know in which database in are, type:**
`db;`

**To see your databases**
`show dbs;`

### Create collection

> Table = Collection
> DB = DB
> Row = Document

**OBS: This is a more appropriated way of doing this**
`db.createCollection('collectionName');`

**If you want to also insert a record while creating the collection use this script instead:**
`db.collectionName.insert({propertyName:'value'});`

**To see your collections**
`show collections;`

**Find records**
`db.collectionName.find();`

### Create collection and modify property

`db.createCollection("collectionName", { capped: true, size: 5242880, max: 5 });`

> Max = Num of documents
> Size = Not more than 5MB
> Capped = Enable Caps

### Insert Records

`db.collectionName.insert({ record1: "value", record2: "value", ..., recordN: "value" });`

**You can also add "sub records" like this:**
`db.collectionName.insert({ record1: "value", record2: "value", ..., recordN:{ subRecord1: "value" } });`

**OBS: there is no primary key here, every record is completely dependent from the collection.**
