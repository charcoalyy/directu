import scrape


reviews = scrape.scrape_reviews("cs640")
print(len(reviews))