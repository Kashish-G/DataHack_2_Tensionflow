from flask import Flask, request, jsonify
from vaderSentiment.vaderSentiment import SentimentIntensityAnalyzer
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/analyze_feedback', methods=['POST'])
def analyze_feedback():
    try:
        # Create a SentimentIntensityAnalyzer object
        analyzer = SentimentIntensityAnalyzer()

        # Get user feedback from the request
        user_feedback = request.json['feedback']

        # Perform sentiment analysis
        sentiment_scores = analyzer.polarity_scores(user_feedback)

        # Determine the rating based on the compound score
        compound_score = sentiment_scores["compound"]

        if compound_score >= 0.05:  # Positive sentiment
            sentiment_rating = 5
        elif compound_score <= -0.05:  # Negative sentiment
            sentiment_rating = 1
        else:  # Neutral sentiment
            sentiment_rating = 3
        

        # User-provided rating (for example, on a scale of 1 to 5)
        user_rating = request.json['user_rating']
        

        # Calculate the average rating
        average_rating = (int(user_rating) + int(sentiment_rating) )/ 2
      
        result = {
            "sentiment_rating": sentiment_rating,
            "user_rating": user_rating,
            "average_rating": average_rating
        }
        return jsonify(result)
    except Exception as e:
        return jsonify({"error": str(e)})

if __name__ == '__main__':
    app.run(debug=True)
