# 1. What is Relationship in SQL?
In SQL, a relationship refers to the logical connection between tables in a relational database. These connections are established through keys (primary keys and foreign keys) and are used to maintain data consistency and integrity. Relationships define how data in one table is related to data in another, or they let you store data in different tables and relate them to each other.

## Types of Relationships in SQL

### One-to-One (1:1)
- **Definition**: Each row in Table A is related to exactly one row in Table B and vice versa.
- **Example**: A `Users` table and a `UserProfiles` table, where each user has exactly one profile.
- **Implementation**: Use a foreign key in one table that references the primary key of the other table.

### One-to-Many (1:N)
- **Definition**: A single row in Table A is related to multiple rows in Table B.
- **Example**: A `Customers` table and an `Orders` table, where a customer can place multiple orders.
- **Implementation**: Table B includes a foreign key that references the primary key in Table A.

### Many-to-Many (M:N)
- **Definition**: Rows in Table A can relate to multiple rows in Table B, and vice versa.
- **Example**: A `Students` table and a `Courses` table, where a student can enroll in multiple courses, and a course can have multiple students.
- **Implementation**: Use a junction table (e.g., `StudentCourses`) to link the primary keys of both tables.

### Self-Referential Relationship
- **Definition**: A table is related to itself.
- **Example**: An `Employees` table where each employee has a manager, who is also an employee.
- **Implementation**: Use a foreign key in the same table that references its primary key.

## Key Concepts in Relationships
- **Primary Key**: A unique identifier for rows in a table.
- **Foreign Key**: A column or set of columns in a table that references the primary key in another table.
- **Referential Integrity**: Ensures that foreign key values in a table correspond to valid primary key values in the related table.
- **Join Operations**: Relationships are often used in SQL queries to join tables and retrieve related data.

### Example Code
Defining the relationship between `Users` and `Addresses` tables:

```sql
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(50) UNIQUE NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE addresses (
    id SERIAL PRIMARY KEY,
    user_id INTEGER NOT NULL,
    city VARCHAR(100) NOT NULL,
    country VARCHAR(100) NOT NULL,
    street VARCHAR(255) NOT NULL,
    pincode VARCHAR(20),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);
```

Inserting an address for a user:

```sql
INSERT INTO addresses (user_id, city, country, street, pincode)
VALUES (1, 'New York', 'USA', '123 Broadway St', '10001');
```

Querying the address of a user:

```sql
SELECT city, country, street, pincode
FROM addresses
WHERE user_id = 1;
```
---
# 2. What is Primary Key?
A primary key is a unique identifier for a record in a database table. It ensures that each row in the table is unique and can be referenced unambiguously.

## Characteristics of a Primary Key
1. **Uniqueness**: The value must be unique for each row in the table.
2. **Non-nullable**: Cannot contain `NULL` values.
3. **Immutable**: Should not change after it is set.
4. **Single-column or Composite**:
   - A primary key can consist of a single column (single-column primary key).
   - Alternatively, it can span multiple columns (composite primary key).

### Example Code

```sql
CREATE TABLE users (
    id SERIAL PRIMARY KEY, -- 'id' is the primary key
    username VARCHAR(100),
    email VARCHAR(100)
);
```
---
# 3. What is Foreign Key?
A foreign key is a column or a set of columns in one table that establishes a link (relationship) between the data in two tables. It references the primary key of another table (or sometimes the same table in the case of self-referential relationships).

## Characteristics of a Foreign Key
- **Relational Link**: Connects two tables.
- **Referential Integrity**: Ensures values in the foreign key column exist in the referenced table's primary key column.
- **Multiple References**: A table can have multiple foreign keys.
- **Nullability**: Can contain `NULL` values unless constrained otherwise.
---
# 4. What is Transactions?
A transaction in a database is a sequence of one or more SQL operations (queries) that are executed as a single unit of work. A transaction ensures that either all operations succeed (committed) or none are applied (rolled back).

## Key Properties of Transactions (ACID)
1. **Atomicity**: All operations succeed or none are applied.
2. **Consistency**: Ensures the database transitions from one valid state to another.
3. **Isolation**: Transactions are executed independently.
4. **Durability**: Once committed, changes are permanent.

### Example Code

With transaction:

```sql
BEGIN; -- Start a transaction

-- Insert into users table
INSERT INTO users (username, email) VALUES ('John', 'john@example.com');

-- Insert into orders table
INSERT INTO orders (user_id, order_date) VALUES (1, '2024-12-20');

COMMIT; -- Commit the transaction
```

Rollback on failure:

```sql
ROLLBACK; -- Undo all changes if any operation fails
```
---
# 5. Why Transactions Solve the Problem
Transactions ensure that either all operations are applied successfully or none at all, preserving data consistency in case of failure (e.g., backend crash).
---
# 6. What is Joins?
Joins in SQL combine rows from two or more tables based on a related column. They allow you to retrieve related data stored across multiple tables.

## Types of Joins
- **Inner Join**: Returns rows with matches in both tables.
- **Left Join**: Returns all rows from the left table and matches from the right table; unmatched rows have `NULL` values.
- **Right Join**: Returns all rows from the right table and matches from the left table; unmatched rows have `NULL` values.
- **Full Outer Join**: Returns all rows from both tables; unmatched rows have `NULL` values.

### Example Code

Inner Join:

```sql
SELECT users.username, addresses.city
FROM users
INNER JOIN addresses ON users.id = addresses.user_id;
```

Left Join:

```sql
SELECT users.username, addresses.city
FROM users
LEFT JOIN addresses ON users.id = addresses.user_id;
```

Right Join:

```sql
SELECT users.username, addresses.city
FROM users
RIGHT JOIN addresses ON users.id = addresses.user_id;
```

Full Outer Join:

```sql
SELECT users.username, addresses.city
FROM users
FULL JOIN addresses ON users.id = addresses.user_id;
```
---
# 7. What is SQL Injection?
SQL Injection is a security vulnerability where attackers inject malicious SQL code into input fields, exploiting improper input handling.

## How It Works
Attackers manipulate SQL queries by injecting malicious inputs, altering query behavior and potentially accessing or modifying sensitive data.
