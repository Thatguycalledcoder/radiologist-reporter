from app.database import init_db, close_db

# Database Dependency
async def get_db():
    # Initialize the database connection
    await init_db()
    try:
        yield  # Yield control to the requesting route
    finally:
        # Close the database connection when done
        await close_db()
