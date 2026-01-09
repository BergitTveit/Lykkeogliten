# User Story 2.1.1: Set Up Azure Database

## Story
**As a** business owner
**I want** my blog posts and content stored in a secure cloud database
**So that** I have reliable and scalable data storage

## Acceptance Criteria
- [ ] Azure database service chosen (SQL vs. Cosmos DB)
- [ ] Database instance provisioned in Azure
- [ ] Database schema designed
- [ ] Test data inserted successfully
- [ ] Connection secured with proper authentication
- [ ] Backup strategy implemented

## Tasks

### 1. Choose Database Service
- [ ] Research Azure database options:
  - **Azure SQL Database** (relational, similar to MySQL)
  - **Azure Cosmos DB** (NoSQL, document-based)
- [ ] Decision factors:
  - Do you want to learn SQL? → Azure SQL Database
  - Want more flexibility with JSON? → Cosmos DB
  - Cost considerations (check free tier limits)
- [ ] Document your choice and reasoning

**Recommendation for learning:** Start with Azure SQL Database
- More familiar if you know MySQL/relational databases
- Better for structured blog data
- Free tier: 32 GB storage for 12 months

### 2. Learn Azure Database Fundamentals
- [ ] Complete learning module:
  - [Azure SQL Fundamentals](https://learn.microsoft.com/en-us/training/paths/azure-sql-fundamentals/)
  - Focus on: Creating databases, security, connecting from applications
- [ ] Understand concepts:
  - Connection strings
  - Firewall rules
  - Authentication methods

### 3. Design Database Schema
Create tables for your data:

```sql
-- Posts table
CREATE TABLE Posts (
    id INT PRIMARY KEY IDENTITY(1,1),
    title NVARCHAR(255) NOT NULL,
    content NVARCHAR(MAX),
    excerpt NVARCHAR(500),
    featured_image_url NVARCHAR(500),
    featured_image_alt NVARCHAR(255),
    created_at DATETIME DEFAULT GETDATE(),
    updated_at DATETIME DEFAULT GETDATE(),
    published BIT DEFAULT 1
);

-- Categories table
CREATE TABLE Categories (
    id INT PRIMARY KEY IDENTITY(1,1),
    name NVARCHAR(100) NOT NULL,
    slug NVARCHAR(100) NOT NULL
);

-- PostCategories junction table (many-to-many)
CREATE TABLE PostCategories (
    post_id INT,
    category_id INT,
    FOREIGN KEY (post_id) REFERENCES Posts(id),
    FOREIGN KEY (category_id) REFERENCES Categories(id),
    PRIMARY KEY (post_id, category_id)
);

-- Comments table
CREATE TABLE Comments (
    id INT PRIMARY KEY IDENTITY(1,1),
    post_id INT,
    author_name NVARCHAR(100),
    author_email NVARCHAR(255),
    content NVARCHAR(MAX),
    created_at DATETIME DEFAULT GETDATE(),
    approved BIT DEFAULT 0,
    FOREIGN KEY (post_id) REFERENCES Posts(id)
);

-- ContactSubmissions table
CREATE TABLE ContactSubmissions (
    id INT PRIMARY KEY IDENTITY(1,1),
    name NVARCHAR(100),
    email NVARCHAR(255),
    phone NVARCHAR(50),
    alteration_type NVARCHAR(100),
    message NVARCHAR(MAX),
    submitted_at DATETIME DEFAULT GETDATE()
);

-- Media table
CREATE TABLE Media (
    id INT PRIMARY KEY IDENTITY(1,1),
    title NVARCHAR(255),
    file_name NVARCHAR(255),
    blob_url NVARCHAR(500),
    alt_text NVARCHAR(255),
    uploaded_at DATETIME DEFAULT GETDATE()
);
```

- [ ] Review schema design
- [ ] Adjust based on your needs
- [ ] Save schema as `database-schema.sql` file

### 4. Provision Azure SQL Database

**Via Azure Portal:**
- [ ] Log into Azure Portal
- [ ] Go to "Create a resource" → "Databases" → "SQL Database"
- [ ] Configure:
  - Database name: `lykkeogliten-db`
  - Resource group: `lykkeogliten-rg` (created in 1.1.2)
  - Server: Create new
    - Server name: `lykkeogliten-server` (must be globally unique)
    - Location: West Europe
    - Authentication: SQL authentication
    - Admin login: `lykkeadmin`
    - Password: (strong password - save it securely!)
  - Compute + storage: Basic (5 DTUs, 2GB) for development
  - Backup: Keep defaults
- [ ] Click "Review + create" → "Create"
- [ ] Wait for deployment (5-10 minutes)

**Via Azure CLI (alternative):**
```bash
# Create SQL Server
az sql server create \
  --name lykkeogliten-server \
  --resource-group lykkeogliten-rg \
  --location westeurope \
  --admin-user lykkeadmin \
  --admin-password YOUR_SECURE_PASSWORD

# Create database
az sql db create \
  --resource-group lykkeogliten-rg \
  --server lykkeogliten-server \
  --name lykkeogliten-db \
  --service-objective Basic
```

### 5. Configure Security & Firewall
- [ ] In Azure Portal, go to your SQL Server
- [ ] Go to "Networking" (under Security)
- [ ] Add your current IP address:
  - Click "Add client IP"
  - This allows your computer to connect
- [ ] For Azure services:
  - Toggle "Allow Azure services and resources to access this server" to YES
  - This lets Azure Functions connect later
- [ ] Save changes

### 6. Connect to Database
- [ ] Get connection string:
  - Go to database → "Connection strings"
  - Copy the ADO.NET connection string
  - Replace `{your_password}` with your actual password
- [ ] Install SQL client tool:
  - **Azure Data Studio** (recommended): https://docs.microsoft.com/en-us/sql/azure-data-studio/download
  - Or SQL Server Management Studio (Windows only)
- [ ] Connect to database using connection string
- [ ] Verify connection works

### 7. Create Database Schema
- [ ] In Azure Data Studio, open a new query
- [ ] Copy your schema SQL from step 3
- [ ] Execute the queries
- [ ] Verify all tables created successfully
- [ ] Run: `SELECT * FROM INFORMATION_SCHEMA.TABLES`

### 8. Insert Test Data
- [ ] Create test data insert script:
```sql
-- Insert test categories
INSERT INTO Categories (name, slug) VALUES
('Alterations', 'alterations'),
('Bridal', 'bridal'),
('Tips & Tricks', 'tips-tricks');

-- Insert test post
INSERT INTO Posts (title, content, excerpt, featured_image_url) VALUES
('Welcome to Lykke og Liten',
 '<p>This is a test blog post about our alteration services.</p>',
 'This is a test blog post',
 'https://placeholder.com/600x400');

-- Link post to category
INSERT INTO PostCategories (post_id, category_id) VALUES (1, 1);
```
- [ ] Execute test data script
- [ ] Query tables to verify data: `SELECT * FROM Posts`

### 9. Set Up Backup Strategy
- [ ] In Azure Portal, go to your database
- [ ] Go to "Backup and Restore"
- [ ] Review automatic backup settings (enabled by default)
- [ ] Document backup retention period
- [ ] Note: Azure SQL automatically creates backups

### 10. Document Everything
- [ ] Save connection string securely (use .env file, NEVER commit to Git)
- [ ] Document database schema with explanations
- [ ] Create guide for connecting to database
- [ ] Note firewall rules and security settings

## Learning Resources
- [Azure SQL Database Tutorial](https://learn.microsoft.com/en-us/azure/azure-sql/database/single-database-create-quickstart)
- [SQL Basics (if needed)](https://www.w3schools.com/sql/)
- [Azure Data Studio Docs](https://docs.microsoft.com/en-us/sql/azure-data-studio/)
- [Database Design Best Practices](https://learn.microsoft.com/en-us/azure/azure-sql/database/design-first-database-tutorial)

## Important Notes
- **Security:** NEVER commit connection strings or passwords to Git
- **Costs:** Monitor your usage in Azure Portal → Cost Management
- **Free Tier:** 32 GB storage for 12 months, then minimal costs for Basic tier
- **Firewall:** You'll need to update firewall rules if your IP changes

## Definition of Done
- ✅ Azure SQL Database provisioned and accessible
- ✅ Database schema created with all tables
- ✅ Test data inserted and queryable
- ✅ Connection from local machine works
- ✅ Firewall rules configured correctly
- ✅ Backup strategy understood and documented
- ✅ Connection string saved securely
- ✅ Schema documentation created

---

**Epic:** EPIC 2.1 - Azure Database Setup
**Phase:** Phase 2 - Backend Migration to Azure
**Priority:** Critical
**Estimated Effort:** 4-6 hours (including learning)
