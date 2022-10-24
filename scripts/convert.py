# Probably need to pip install psycopg2 and sqlalchemy
import sqlite3
import psycopg2
import pandas as pd
from sqlalchemy import create_engine

# Enter password
postgres_password = ""
conn_string = f'postgresql://postgres:{postgres_password}@localhost:5432/lts'

conn = sqlite3.connect('legtrack.db')
df = pd.read_sql_query("SELECT * FROM measures", conn)
# print(df)
conn.commit()
conn.close()

db = create_engine(conn_string)
conn2 = db.connect()

print("Database lts created successfully")

df.to_sql("measures", con = conn2, if_exists="replace")

print("Database transferred to postgresql")

# conn2.commit()
conn2.close()