import json
import pg8000

from config import (user, password, host, port)

connection = pg8000.connect(user=user,
                            password=password,
                            host=host,
                            port=int(port),
                            database="mymovielist")

cursor = connection.cursor()

# Print PostgreSQL version
cursor.execute("SELECT version();")
record = cursor.fetchone()
print("You are connected to - ", record, "\n")

def lambda_handler(event, context):
    statusCode = 200
    
    if event["queryStringParameters"] != None:
        search = event["queryStringParameters"]["search"]
    else:
        search = None
    
    try:
        if search != None:
            cursor.execute(f"""
                SELECT
                    title,
                    year,
                    director,
                    origin,
                    genre,
                    crew,
                    wiki_page
                FROM no_plots
                WHERE SIMILARITY(title, '{search}') > 0.25
                ORDER BY WORD_SIMILARITY(title, '{search}') DESC
                LIMIT 30
                ;	
                """)
        else:
            cursor.execute(f"""
                SELECT
                    title,
                    year,
                    director,
                    origin,
                    genre,
                    crew,
                    wiki_page
                FROM no_plots
                WHERE
                    random() < 0.01
                    AND origin = 'American'
                ORDER BY
                    "year" DESC
                LIMIT 30
                ;	
                """)
        results = cursor.fetchall()
        results = [{
            "title": result[0],
            "year": result[1],
            "director": result[2],
            "origin": result[3],
            "genre": result[4],
            "crew": result[5],
            "wiki_page": result[6],
        } for result in results]
    except Exception as e:
        results = f"SQL ERROR: {e}"
        statusCode = 500
    
    return {
        'statusCode': statusCode,
        'headers': {
            'Access-Control-Allow-Headers': 'Content-Type',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'OPTIONS,POST,GET'
        },
        'body': json.dumps(results)
    }