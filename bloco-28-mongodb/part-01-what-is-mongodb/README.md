# What is MongoDB?

MongoDB is a **document-oriented, no sequel (NoSQL)** database.

- **Document based**: represents hierarchical relationship using a single record.

- **Schema Free**: Lesser data migrations.

## Why MongoDB?

1. Flexibility:
   MongoDB notion of documents that can contain sub documents nested in complex hierarchies is really expressive and flexible.

2. Flexible Query Model:
   A user can selectively index some part of a document or query based on attribute values, regular expressions or ranges.

3. Native Aggregation:
   Allows us to extract and transform data from mongodb and either load them in a new format or export it from mongodb to other data sources, it makes it extremely compatible.

4. Schema-less model:
   Applications get the power and responsability to interpret different properties in different ways.

## Characteristics

1. General Purpose Database:
   MongoDB can serve heterogeneous loads and multiple purposes within an application.

2. Flexible schema design:
   Document oriented approaches with non-defined attributes that can be modified on the fly is a key contrast between mongodb and any other relational database.

3. Scalability and Load balancing:
   It's built to scale both vertically but more importantly horizontally. Using sharding and architect can share load between different instances and achieve both read and write scalability. When it comes to "Load Balancing" it happens automatically and transparently to the user by the shard balancer.

4. Aggregation framework:
   MongoDB offers an extract transform and load framework that eliminates the need for complex data pipelines.

5. Native replication:
   Now data will get replicated across a replica set without a complicated setup.

6. Security features:
   Both authentication and authorization are taken into account in mongodb.

7. JSON:
   JSON is widely used across the web for front-end end API communication and as such is easier when the database is also compatible with the same protocol.

8. MapReduce:
   MapReduce is an excellent tool to build data pipelons and mongodb uses mapreduce readily.
