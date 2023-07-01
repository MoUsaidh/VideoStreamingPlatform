import csv
import json


class returnPopular:
    @staticmethod
    def popular():
        results = []
        count = 0

        with open("data/movies.csv", 'r', encoding='utf-8') as file:
            reader = csv.DictReader(file)

            for row in reader:
                if float(row["popularity"])>1000:
                    results.append(row)

        # Convert results to JSON
        json_results = json.dumps(results)
        return json_results

print(returnPopular.popular())