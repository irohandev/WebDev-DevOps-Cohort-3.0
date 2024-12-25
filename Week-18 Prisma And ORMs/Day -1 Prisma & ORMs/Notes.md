# What are ORMs?
Object-Relational Mappers (ORMs) are tools or libraries that help developers interact with relational databases using object-oriented programming. Instead of writing raw SQL queries, ORMs allow developers to manipulate database tables as if they were working with objects in their programming language.

### Key Features of ORMs:
- **Object Mapping**: Database tables are mapped to objects, and rows are represented as instances of those objects.
- **Abstraction**: CRUD (Create, Read, Update, Delete) operations can be performed without writing SQL.
- **Migration Management**: Many ORMs provide tools for managing database schema changes.
- **Query Building**: ORMs often include query builders for composing complex database queries in a programmatic way.

---

# Why ORMs?
- **Simpler Syntax**: Converts objects to SQL queries under the hood.
- **Abstraction**: Allows switching databases without changing the application logic. Unified API irrespective of the database.
- **Type Safety/Auto-Completion**: Ensures fewer runtime errors and improved developer experience.
- **Powerful Built-In Features**:
  - **Migrations**: Version control for database schemas.
  - **Validation**: Enforcing data integrity at the application level.
  - **Query Building**: Constructing complex queries programmatically.
  - **Eager/Lazy Loading**: Efficiently fetching related data.

---

# What is Prisma?
Prisma is a modern, open-source ORM (Object-Relational Mapper) designed to simplify database access for developers. It’s particularly popular in JavaScript and TypeScript ecosystems and is known for its developer-friendly syntax, type safety, and support for modern workflows.

### Key Features of Prisma:
1. **Type-Safe Database Queries**:
   - Generates TypeScript types based on your database schema, ensuring compile-time safety.
   - Example: Auto-completion and error-checking for database operations.

2. **Declarative Data Modeling**:
   - Uses a schema file (`schema.prisma`) where you define your database models, relationships, and configurations in a human-readable format.

   Example:
   ```prisma
   model User {
       id        Int      @id @default(autoincrement())
       name      String
       email     String   @unique
       posts     Post[]
   }

   model Post {
       id        Int      @id @default(autoincrement())
       title     String
       content   String
       authorId  Int
       author    User     @relation(fields: [authorId], references: [id])
   }
   ```

3. **Auto-Generated Queries**:
   - Automatically generates a query client for interacting with your database programmatically.

   Example:
   ```javascript
   const user = await prisma.user.create({
       data: { name: 'Alice', email: 'alice@example.com' },
   });
   ```

4. **Migrations Made Easy**:
   - Includes a migration system to version-control your database schema changes.

   Command:
   ```bash
   npx prisma migrate dev
   ```

### Components of Prisma:
- **Prisma Schema**: A declarative file (`schema.prisma`) where you define your database models, relationships, and configurations.
- **Prisma Client**: An auto-generated, type-safe database client for running queries in your application.
- **Prisma Migrate**: A migration tool for managing database schema changes over time.
- **Prisma Studio**: A GUI for inspecting and managing your database data.

---

## Installing Prisma in a Fresh Application

### Step 1: Create a New Project
1. Open your terminal and create a new project directory:
   ```bash
   mkdir my-prisma-app
   cd my-prisma-app
   ```
2. Initialize a new Node.js project:
   ```bash
   npm init -y
   ```

### Step 2: Install Prisma and Dependencies
1. Install Prisma CLI as a development dependency:
   ```bash
   npm install prisma --save-dev
   ```
2. Install the Prisma Client:
   ```bash
   npm install @prisma/client
   ```

### Step 3: Initialize Prisma
1. Run the following command to initialize Prisma:
   ```bash
   npx prisma init
   ```
2. This creates two files:
   - `prisma/schema.prisma`: The main configuration file for Prisma.
   - `.env`: This file contains the database connection URL.

### Step 4: Set Up a Database
1. **Choose a Database**: Select a database (e.g., SQLite, PostgreSQL, MySQL, MongoDB).
2. **Update the `.env` File**: Replace the default database URL with your database connection string.

   For example, for SQLite:
   ```env
   DATABASE_URL="file:./dev.db"
   ```

   For PostgreSQL:
   ```env
   DATABASE_URL="postgresql://USER:PASSWORD@HOST:PORT/DATABASE"
   ```

### Step 5: Define Your Database Schema
1. Open the `prisma/schema.prisma` file.
2. Define your models. For example:
   ```prisma
   model User {
       id       Int      @id @default(autoincrement())
       username String   @unique
       password String
       age      Int
       city     String
   }
   ```

### Step 6: Generate Prisma Client
1. Run the following command to generate the Prisma Client:
   ```bash
   npx prisma generate
   ```

### Step 7: Apply Migrations (Optional for SQLite)
1. If you're using a database that supports migrations (e.g., PostgreSQL), create a migration:
   ```bash
   npx prisma migrate dev --name init
   ```
2. This will:
   - Apply the schema to your database.
   - Create a `prisma/migrations` folder to track schema changes.

### Step 8: Use Prisma in Your Application
1. Create a file (e.g., `index.js`) and initialize the Prisma Client:
   ```javascript
   const { PrismaClient } = require('@prisma/client');
   const prisma = new PrismaClient();

   async function main() {
       // Example: Create a new user
       const user = await prisma.user.create({
           data: {
               username: 'Alice',
               password: 'securepassword',
               age: 25,
               city: 'New York',
           },
       });
       console.log('Created user:', user);
   }

   main()
       .catch((e) => {
           console.error(e);
           process.exit(1);
       })
       .finally(async () => {
           await prisma.$disconnect();
       });
   ```

2. Run your application:
   ```bash
   node index.js
   ```

---

### **Step 9: Add Additional Features**
- Extend your schema with more models and fields.
- Use `prisma.query` methods (`findMany`, `update`, `delete`, etc.) to interact with the database.

---

## **Folder Structure**
After installation and setup, your project folder should look like this:
```
my-prisma-app/
├── node_modules/
├── prisma/
│   ├── schema.prisma
│   ├── dev.db (if using SQLite)
├── .env
├── package.json
├── package-lock.json
└── index.js
```

---

This setup gives you a functional Prisma environment in a fresh application. You can now start building your application with Prisma as your ORM!

## 5. Selecting your database
Prisma lets you chose between a few databases (MySQL, Postgres, Mongo). You can update `prisma/schema.prisma` to setup what database you want to use.

## 6. Defining your data model
Prisma expects you to define the shape of your data in the `schema.prisma` file.

## 7. Generate Migration
You have created a single schema file. You haven’t yet run the CREATE TABLE commands. To run those and create migration files, run `npx prisma migrate dev`. Your DB should now have the updated schema.

## 8. What is Prisma Client?
Prisma Client is a type-safe and auto-generated database client provided by Prisma. It allows you to interact with your database programmatically through a clean and intuitive API, without writing raw SQL queries. It's tailored for modern JavaScript and TypeScript applications.

### Key Features of Prisma Client

#### Type Safety:
- Automatically generates TypeScript types based on your `schema.prisma` file.
- Provides compile-time checks, reducing runtime errors.
- Includes autocompletion for queries and data operations in your IDE.

#### Query API:
- Supports CRUD operations (Create, Read, Update, Delete).
- Handles database relations with nested queries and joins.

Example Code:
```javascript
const user = await prisma.user.findUnique({
  where: { email: 'alice@example.com' },
});
```

#### Supports Multiple Databases:
- Works with relational databases like PostgreSQL, MySQL, SQLite, MongoDB, and SQL Server.

#### Eager and Lazy Loading:
- Easily fetch related data using relations.

Example Code:
```javascript
const posts = await prisma.user.findUnique({
  where: { id: 1 },
  include: { posts: true },
});
```

#### Generated Client:
After defining your models in the Prisma schema file, Prisma generates the client using the command:

Example Code:
```bash
npx prisma generate
```

#### Asynchronous Queries:
Prisma Client uses `async/await` for performing database operations, making it easy to work with modern JavaScript and TypeScript async patterns.

### How to use Prisma Client
```javascript
import { PrismaClient } from "@prisma/client";

const client = new PrismaClient();

async function createUser() {
  await client.user.createMany({
    data: [
      {
        username: "Alice",
        password: "1234",
        age: 20,
        city: "New York"
      },
      {
        username: "Bob",
        password: "12345",
        age: 25,
        city: "San Francisco"
      }
    ]
  });
}
createUser();

async function deleteUser() {
  await client.user.delete({
    where: {
      id: 1
    }
  });
}
deleteUser();

async function updateUser() {
  await client.user.update({
    where: {
      id: 1
    },
    data: {
      username: "GKSingh",
    }
  });
}
updateUser();

async function readUser() {
  const user = await client.user.findFirst({
    where: {
      id: 7
    },
    include: {
      todos: true
    }
  });
  console.log(user);
}
readUser();
```

## 9. Generating the Prisma Client
Once you’ve created the `prisma/schema.prisma`, you can generate these clients that you can use in your Node.js Application.

Command to run:
```bash
npx prisma generate
```

## 10. Creating your first Application

### Installing Prisma in a Fresh App

Follow these steps to install and set up Prisma in a new project:

---

### 1. Initialize Your Project

```bash
mkdir my-app
cd my-app
npm init -y
```

This creates a new directory for your app and initializes it with a `package.json` file.

---

### 2. Install TypeScript and Express

Install TypeScript and related dependencies:

```bash
npm install --save-dev typescript ts-node @types/node
```

Initialize a TypeScript configuration file:

```bash
tsc --init
```

Install Express and its TypeScript types:

```bash
npm install express
npm install --save-dev @types/express
```

---

### 3. Install Prisma CLI

Install Prisma as a development dependency:

```bash
npm install prisma --save-dev
```

---

### 4. Initialize Prisma

Run the following command to create the Prisma setup:

```bash
npx prisma init
```

This will:
- Create a `prisma/` folder.
- Add a `schema.prisma` file inside the `prisma/` folder.
- Add a `.env` file for database credentials.

---

### 5. Set Up Your Database

Update the `DATABASE_URL` in the `.env` file with your database connection string. For example:

```env
DATABASE_URL="postgresql://user:password@localhost:5432/mydb"
```

Replace `user`, `password`, `localhost`, `5432`, and `mydb` with your actual database credentials.

---

### 6. Install Prisma Client

Prisma Client is the library you'll use to interact with your database in code. Install it using:

```bash
npm install @prisma/client
```

---

### 7. Define Your Data Models

Edit the `prisma/schema.prisma` file to define your database models. For example:

```prisma
model User {
  id        Int      @id @default(autoincrement())
  name      String
  email     String   @unique
  createdAt DateTime @default(now())
}
```

---

### 8. Run Migrations

Use Prisma Migrate to apply your schema changes to the database:

```bash
npx prisma migrate dev --name init
```

This creates a migration file and applies it to your database.

---

### 9. Generate Prisma Client

Prisma Client is automatically generated during `npx prisma migrate dev`. You can also manually generate it:

```bash
npx prisma generate
```

---

### 10. Use Prisma in Your Code

Import and use Prisma Client in your application:

```typescript
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  const user = await prisma.user.create({
    data: {
      name: 'Alice',
      email: 'alice@example.com',
    },
  });
  console.log(user);
}

main()
  .catch(e => console.error(e))
  .finally(async () => await prisma.$disconnect());
```

---

Your Prisma setup is now complete! You can start building your application using the Prisma Client to interact with your database.

## 11. What is Relationship in Prisma?
In Prisma, relationships define how different models in your database are connected. These relationships are often used to represent associations like one-to-one, one-to-many, and many-to-many. Prisma provides an intuitive way to define and work with these relationships in the `schema.prisma` file, which is then mapped to your database schema. The relationships can be one-to-one, one-to-many, or many-to-many.

1. Define the schema in `prisma/schema.prisma`:
   ```prisma
   model User {
       id       Int      @id @default(autoincrement())
       username String   @unique
       posts    Post[]
   }

   model Post {
       id       Int      @id @default(autoincrement())
       title    String
       content  String
       authorId Int
       author   User     @relation(fields: [authorId], references: [id])
   }
   ```

2. Generate the Prisma Client:
   ```bash
   npx prisma generate
   ```

3. Example usage in your application:
   ```javascript
   const { PrismaClient } = require('@prisma/client');
   const prisma = new PrismaClient();

   async function main() {
       // Create a new user and a post
       const user = await prisma.user.create({
           data: {
               username: 'Alice',
               posts: {
                   create: {
                       title: 'My First Post',
                       content: 'This is the content of the post.',
                   },
               },
           },
       });

       console.log('User with post:', user);

       // Fetch posts for a user
       const posts = await prisma.post.findMany({
           where: { authorId: user.id },
       });
       console.log('Posts:', posts);
   }

   main()
       .catch((e) => {
           console.error(e);
           process.exit(1);
       })
       .finally(async () => {
           await prisma.$disconnect();
       });
   ```

---

## 12. A Simple Express Server Using Prisma:-

A simple Express server that uses Prisma to interact with a database and perform CRUD operations:

### Example Code
```javascript
import { PrismaClient } from "@prisma/client";
import express from "express";

const client = new PrismaClient();
const app = express();
app.use(express.json());

app.get("/users", async (req, res) => {
    const users = await client.user.findMany();
    res.json(users);
});

app.get("/todos/:id", async (req, res) => {
    const id = req.params.id;
    const users = await client.user.findFirst({
        where: {
            id: parseInt(id)
        },
        select: {
            todos: true,
            username: true,
            password: true
        }
    });
    res.json(users);
});

async function readUser() {
    const user = await client.user.findFirst({
        where: {
            id: 7
        },
        include: {
            todos: true
        }
    });
    console.log(user);
}
readUser();

app.listen(3000);
```