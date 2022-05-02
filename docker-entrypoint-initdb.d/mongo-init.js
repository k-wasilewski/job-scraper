db.createUser(
    {
        user: "sa",
        pwd: "password",
        roles: [
            {
                role: "readWrite",
                db: "scraping_db"
            }
        ]
    }
);

db.createCollection('pages');
db.createCollection('jobs');
db.createCollection('users');