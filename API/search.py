import csv
import json
from fuzzywuzzy import fuzz


class Search:

    @staticmethod
    def result(query):
        results = []

        with open("movies.csv", 'r', encoding='utf-8') as file:
            reader = csv.DictReader(file)

            for row in reader:

                title = row['title']
                ratio = fuzz.ratio(title.lower(), query.lower())

                if ratio > 50:
                    results.append(row)

        # Convert results to JSON
        json_results = json.dumps(results, indent=4)
        print(json_results)
        return json_results
