# 1. What is Database?
A database is an organized collection of data that is stored, managed, and retrieved electronically. Databases are designed to make it easy to store, access, and manipulate data efficiently and securely. They are used in various applications from websites and mobile apps to enterprise systems and analytics platforms.

## Key Features of a Database:
1. **Data Organization**: Data is structured in tables, rows, columns, or other formats to allow for easy access and manipulation.
2. **Data Storage**: Databases store data persistently on a storage medium, such as a hard drive or cloud storage.
3. **Query Language**: Most databases use a query language like SQL (Structured Query Language) to interact with and retrieve data.
4. **Scalability**: Databases can handle small or massive amounts of data, depending on the requirements.
5. **Security**: Access control, authentication, and encryption ensure that data is secure.
6. **Concurrency**: Multiple users or systems can access and modify the database simultaneously without issues.

## Types of Databases:
1. **Relational Databases (RDBMS):**
   - Use structured tables with rows and columns.
   - Examples: MySQL, PostgreSQL, Oracle, Microsoft SQL Server.

2. **NoSQL Databases:**
   - Store data in a schema-less fashion. Extremely lean and fast way to store data.
   - Categories: Key-value stores, document databases, column-family stores, graph databases.
   - Examples: MongoDB, Cassandra, Redis.

3. **Cloud Databases:**
   - Hosted on cloud platforms for scalability and accessibility.
   - Examples: AWS RDS, Google Cloud Firestore, Azure SQL Database.

4. **In-Memory Databases:**
   - Store data in RAM for faster access.
   - Examples: Redis, Memcached.

5. **Graph Databases:**
   - Data is stored in the form of a graph. Specially useful in cases where relationships need to be stored (social networks).
   - Examples: Neo4j, Amazon Neptune.

6. **Time-Series Databases:**
   - Optimized for time-stamped data.
   - Examples: InfluxDB, TimescaleDB.

---

# 2. Why not NoSQL?
You might’ve used MongoDB. Its schema-less properties make it ideal for bootstrapping a project quickly. But as your app grows, this property makes it very easy for data to get corrupted.

---

# 4. What is Schemaless?
Different rows can have different schemas (keys/types).

## Problems:
- Can lead to inconsistent databases.
- Can cause runtime errors.
- Is too flexible for an app that needs strictness.

## Upsides:
- Can move very fast.
- Can change schema very easily.

> **Note**: You might think that Mongoose adds strictness to the codebase because we define a schema there. That strictness is present at the Node.js level, not at the DB level. You can still put erroneous data into the database that doesn’t follow that schema.

---

# 5. Why SQL?
SQL databases have a strict schema. They require you to:
1. Define your schema.
2. Put in data that follows that schema.
3. Update the schema as your app changes and perform migrations.

## Using an SQL Database:
1. Running the database.
2. Using a library that lets you connect and put data in it.
3. Creating a table and defining its schema.
4. Running queries on the database to interact with the data (Insert/Update/Delete).

---

# 6. Using a Library to Connect and Put Data in It
1. **psql**: A terminal-based front-end to PostgreSQL. It provides an interactive command-line interface to the PostgreSQL (or TimescaleDB) database. With psql, you can type in queries interactively, issue them to PostgreSQL, and see the query results.

2. **pg**: A Node.js library you can use in your backend app to store data in the Postgres DB (similar to Mongoose). We will be installing this eventually in our app.

---

# 7. What is a Table and Creating a Table in SQL?
In SQL, a table is a structured collection of data organized into rows and columns within a database. It is one of the fundamental components used to store, manage, and retrieve data in a relational database.

## Key Characteristics of Tables:
1. **Rows (Records):** Each row represents a single, unique entry in the table.  
   *Example:* A row in a `users` table may represent an individual user.

2. **Columns (Fields):** Each column defines a specific attribute or property of the data.  
   Columns have names and data types (e.g., INTEGER, VARCHAR, DATE).

3. **Data Types:** Each column has a specific data type that defines the kind of data it can store.  
   *Example:* A column `age` might have the INTEGER type, while `name` might have the VARCHAR type.

4. **Schema Association:** Tables are created within schemas, which logically group and organize them in the database.

5. **Primary Key:** A column or set of columns that uniquely identifies each row in the table.  
   *Example:* `id` column in a table is often used as the primary key.

6. **Relationships:** Tables can relate to other tables via foreign keys, enabling the representation of relationships between entities.

### Example of a Table:
| id | name           | email                 | age |
|----|----------------|-----------------------|-----|
| 1  | John Doe       | john.doe@example.com | 25  |
| 2  | Jane Smith     | jane.smith@example.com | 30 |
| 3  | Alice Johnson  | alice.j@example.com  | 22  |

---

# 8. What is Schema in SQL?
A schema is a logical structure that organizes and groups database objects like tables, views, indexes, procedures, and other related entities. It serves as a container within a database, providing a way to manage and separate objects for organizational, security, and access purposes.

---

# 9. Interacting with the Database
There are 4 main operations you’d like to perform with a database:

1. **INSERT**
```sql
INSERT INTO users (username, email, password)
VALUES ('username_here', 'user@example.com', 'user_password');
```
*Note:* You don’t need to specify the `id` because it auto-increments.

2. **UPDATE**
```sql
UPDATE users
SET password = 'new_password'
WHERE email = 'user@example.com';
```

3. **DELETE**
```sql
DELETE FROM users
WHERE id = 1;
```

4. **SELECT**
```sql
SELECT * FROM users
WHERE id = 1;
