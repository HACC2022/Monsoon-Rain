# Probably need to pip install psycopg2 and sqlalchemy
import sqlite3
import psycopg2
import pandas as pd
import numpy as np
from sqlalchemy import create_engine
from psycopg2.extensions import register_adapter, AsIs
psycopg2.extensions.register_adapter(np.int64, AsIs)

pd.set_option('display.max_columns', None)

# Enter password
postgres_password = ""
conn_string = f'postgresql://postgres:{postgres_password}@localhost:5432/lts'

conn = sqlite3.connect('legtrack.db')
df = pd.read_sql_query("SELECT * FROM measures", conn)
# print(df)
df2 = pd.read_pickle("data.pkl")
df2 = df2.rename(columns={"bill" : "code"})
df3 = pd.merge(df, df2, on="code", how="left")
# df3 = df3.convert_dtypes()
# print(df3)
# df3.rename(columns={})
# conn.commit()
# conn.close()

# print(df3.dtypes)
df3.astype('string').dtypes
print(df3.dtypes)

db = create_engine(conn_string)
conn2 = db.connect()

print("Database lts created successfully")

# df.to_sql("measures", con = conn2, if_exists="replace")

# cursor = conn2.cursor()

for i in df3.index:
# for i in range(len(df3)):
    sql_insert = ''' INSERT INTO bills (link, report_title, measure_title, 
    introduced_by, description, status, measure_type, committee_referral, all_versions,
    committee_reports, hearing, companion_bill, last_updated, measure_number, year, code) VALUES 
    (%s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s)'''
    values_insert = (df3['measureArchiveUrl'][i], df3['reportTitle'][i], df3['measureTitle'][i],
    df3['introducer'][i], df3['description'][i], df3['status'][i], df3['measureType'][i],
    df3['currentReferral'][i], df3['committee_reports'][i], df3['versions'][i], df3['hearing'][i], 
    df3['companion'][i], df3['lastUpdated'][i], df3['measureNumber'][i], df3['year'][i], df3['code'][i])
    conn2.execute(sql_insert, values_insert)


print("Database transferred to postgresql")

# conn2.commit()
conn2.close()

