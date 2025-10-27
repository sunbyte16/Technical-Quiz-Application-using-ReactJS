<<<<<<< HEAD
import React from 'react';

const Result = ({ score, totalQuestions, selectedAnswers, questions, onRestart }) => {
  const percentage = Math.round((score / totalQuestions) * 100);
  
  const getFeedbackMessage = () => {
    if (percentage >= 80) {
      return {
        message: "Excellent! 🏆",
        description: "Outstanding performance! You have excellent knowledge of programming concepts.",
        color: "text-green-600",
        bgColor: "bg-green-100",
        emoji: "🎉"
      };
    } else if (percentage >= 60) {
      return {
        message: "Good Job! 👍",
        description: "Well done! You have a solid understanding of the topics covered.",
        color: "text-blue-600",
        bgColor: "bg-blue-100",
        emoji: "😊"
      };
    } else {
      return {
        message: "Needs Improvement 📚",
        description: "Keep studying! Review the topics and try again to improve your score.",
        color: "text-orange-600",
        bgColor: "bg-orange-100",
        emoji: "💪"
      };
    }
  };

  const feedback = getFeedbackMessage();
  const highScore = localStorage.getItem('quizHighScore') || 0;

  // Group answers by category for detailed analysis
  const categoryStats = {};
  selectedAnswers.forEach((answer, index) => {
    const question = questions[index];
    if (!categoryStats[question.category]) {
      categoryStats[question.category] = { correct: 0, total: 0 };
    }
    categoryStats[question.category].total++;
    if (answer.isCorrect) {
      categoryStats[question.category].correct++;
    }
  });

  return (
    <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-4xl mx-auto">
      {/* Header */}
      <div className="text-center mb-8">
        <div className="text-6xl mb-4">{feedback.emoji}</div>
        <h2 className="text-4xl font-bold text-gray-800 mb-2">Quiz Complete!</h2>
        <div className={`inline-block px-6 py-3 rounded-full text-xl font-bold ${feedback.bgColor} ${feedback.color}`}>
          {feedback.message}
        </div>
      </div>

      {/* Score Display */}
      <div className="grid md:grid-cols-3 gap-6 mb-8">
        <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl">
          <div className="text-3xl font-bold text-blue-600 mb-2">{score}</div>
          <div className="text-gray-600">Correct Answers</div>
        </div>
        <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl">
          <div className="text-3xl font-bold text-purple-600 mb-2">{totalQuestions}</div>
          <div className="text-gray-600">Total Questions</div>
        </div>
        <div className="text-center p-6 bg-gradient-to-br from-green-50 to-green-100 rounded-xl">
          <div className="text-3xl font-bold text-green-600 mb-2">{percentage}%</div>
          <div className="text-gray-600">Success Rate</div>
        </div>
      </div>

      {/* High Score */}
      {score >= highScore && (
        <div className="text-center mb-6">
          <div className="inline-block bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full font-medium">
            🏆 New High Score! 🏆
          </div>
        </div>
      )}

      {/* Feedback Description */}
      <div className="text-center mb-8">
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          {feedback.description}
        </p>
      </div>

      {/* Category Breakdown */}
      <div className="mb-8">
        <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">Performance by Category</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {Object.entries(categoryStats).map(([category, stats]) => {
            const categoryPercentage = Math.round((stats.correct / stats.total) * 100);
            return (
              <div key={category} className="bg-gray-50 rounded-lg p-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-medium text-gray-800">{category}</span>
                  <span className="text-sm text-gray-600">{stats.correct}/{stats.total}</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className={`h-2 rounded-full ${
                      categoryPercentage >= 80 ? 'bg-green-500' :
                      categoryPercentage >= 60 ? 'bg-blue-500' : 'bg-orange-500'
                    }`}
                    style={{ width: `${categoryPercentage}%` }}
                  ></div>
                </div>
                <div className="text-right text-sm text-gray-600 mt-1">{categoryPercentage}%</div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Detailed Results */}
      <div className="mb-8">
        <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">Detailed Results</h3>
        <div className="max-h-96 overflow-y-auto space-y-3">
          {selectedAnswers.map((answer, index) => {
            const question = questions[index];
            return (
              <div key={index} className={`p-4 rounded-lg border-l-4 ${
                answer.isCorrect ? 'border-green-500 bg-green-50' : 'border-red-500 bg-red-50'
              }`}>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="font-medium text-gray-800 mb-1">
                      Q{index + 1}: {question.question}
                    </div>
                    <div className="text-sm text-gray-600">
                      Your answer: {answer.selectedOption === -1 ? 'Time Out - No Answer' : question.options[answer.selectedOption]}
                    </div>
                    {!answer.isCorrect && (
                      <div className="text-sm text-green-600 mt-1">
                        Correct answer: {question.options[answer.correctAnswer]}
                      </div>
                    )}
                  </div>
                  <div className={`ml-4 text-2xl ${answer.isCorrect ? 'text-green-500' : 'text-red-500'}`}>
                    {answer.isCorrect ? '✓' : '✗'}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <button
          onClick={onRestart}
          className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold rounded-xl hover:from-blue-600 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg"
        >
          🔄 Take Quiz Again
        </button>
        <button
          onClick={() => window.location.reload()}
          className="px-8 py-4 bg-gradient-to-r from-gray-500 to-gray-600 text-white font-bold rounded-xl hover:from-gray-600 hover:to-gray-700 transform hover:scale-105 transition-all duration-300 shadow-lg"
        >
          🏠 Start Over
        </button>
      </div>

      {/* High Score Display */}
      <div className="text-center mt-6 text-gray-500">
        <div className="text-sm">Your High Score: {highScore}/{totalQuestions}</div>
      </div>
    </div>
  );
};

=======
import React from 'react';

const Result = ({ score, totalQuestions, selectedAnswers, questions, onRestart }) => {
  const percentage = Math.round((score / totalQuestions) * 100);
  
  const getFeedbackMessage = () => {
    if (percentage >= 80) {
      return {
        message: "Excellent! 🏆",
        description: "Outstanding performance! You have excellent knowledge of programming concepts.",
        color: "text-green-600",
        bgColor: "bg-green-100",
        emoji: "🎉"
      };
    } else if (percentage >= 60) {
      return {
        message: "Good Job! 👍",
        description: "Well done! You have a solid understanding of the topics covered.",
        color: "text-blue-600",
        bgColor: "bg-blue-100",
        emoji: "😊"
      };
    } else {
      return {
        message: "Needs Improvement 📚",
        description: "Keep studying! Review the topics and try again to improve your score.",
        color: "text-orange-600",
        bgColor: "bg-orange-100",
        emoji: "💪"
      };
    }
  };

  const feedback = getFeedbackMessage();
  const highScore = localStorage.getItem('quizHighScore') || 0;

  // Group answers by category for detailed analysis
  const categoryStats = {};
  selectedAnswers.forEach((answer, index) => {
    const question = questions[index];
    if (!categoryStats[question.category]) {
      categoryStats[question.category] = { correct: 0, total: 0 };
    }
    categoryStats[question.category].total++;
    if (answer.isCorrect) {
      categoryStats[question.category].correct++;
    }
  });

  return (
    <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-4xl mx-auto">
      {/* Header */}
      <div className="text-center mb-8">
        <div className="text-6xl mb-4">{feedback.emoji}</div>
        <h2 className="text-4xl font-bold text-gray-800 mb-2">Quiz Complete!</h2>
        <div className={`inline-block px-6 py-3 rounded-full text-xl font-bold ${feedback.bgColor} ${feedback.color}`}>
          {feedback.message}
        </div>
      </div>

      {/* Score Display */}
      <div className="grid md:grid-cols-3 gap-6 mb-8">
        <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl">
          <div className="text-3xl font-bold text-blue-600 mb-2">{score}</div>
          <div className="text-gray-600">Correct Answers</div>
        </div>
        <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl">
          <div className="text-3xl font-bold text-purple-600 mb-2">{totalQuestions}</div>
          <div className="text-gray-600">Total Questions</div>
        </div>
        <div className="text-center p-6 bg-gradient-to-br from-green-50 to-green-100 rounded-xl">
          <div className="text-3xl font-bold text-green-600 mb-2">{percentage}%</div>
          <div className="text-gray-600">Success Rate</div>
        </div>
      </div>

      {/* High Score */}
      {score >= highScore && (
        <div className="text-center mb-6">
          <div className="inline-block bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full font-medium">
            🏆 New High Score! 🏆
          </div>
        </div>
      )}

      {/* Feedback Description */}
      <div className="text-center mb-8">
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          {feedback.description}
        </p>
      </div>

      {/* Category Breakdown */}
      <div className="mb-8">
        <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">Performance by Category</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {Object.entries(categoryStats).map(([category, stats]) => {
            const categoryPercentage = Math.round((stats.correct / stats.total) * 100);
            return (
              <div key={category} className="bg-gray-50 rounded-lg p-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-medium text-gray-800">{category}</span>
                  <span className="text-sm text-gray-600">{stats.correct}/{stats.total}</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className={`h-2 rounded-full ${
                      categoryPercentage >= 80 ? 'bg-green-500' :
                      categoryPercentage >= 60 ? 'bg-blue-500' : 'bg-orange-500'
                    }`}
                    style={{ width: `${categoryPercentage}%` }}
                  ></div>
                </div>
                <div className="text-right text-sm text-gray-600 mt-1">{categoryPercentage}%</div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Detailed Results */}
      <div className="mb-8">
        <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">Detailed Results</h3>
        <div className="max-h-96 overflow-y-auto space-y-3">
          {selectedAnswers.map((answer, index) => {
            const question = questions[index];
            return (
              <div key={index} className={`p-4 rounded-lg border-l-4 ${
                answer.isCorrect ? 'border-green-500 bg-green-50' : 'border-red-500 bg-red-50'
              }`}>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="font-medium text-gray-800 mb-1">
                      Q{index + 1}: {question.question}
                    </div>
                    <div className="text-sm text-gray-600">
                      Your answer: {answer.selectedOption === -1 ? 'Time Out - No Answer' : question.options[answer.selectedOption]}
                    </div>
                    {!answer.isCorrect && (
                      <div className="text-sm text-green-600 mt-1">
                        Correct answer: {question.options[answer.correctAnswer]}
                      </div>
                    )}
                  </div>
                  <div className={`ml-4 text-2xl ${answer.isCorrect ? 'text-green-500' : 'text-red-500'}`}>
                    {answer.isCorrect ? '✓' : '✗'}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <button
          onClick={onRestart}
          className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold rounded-xl hover:from-blue-600 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg"
        >
          🔄 Take Quiz Again
        </button>
        <button
          onClick={() => window.location.reload()}
          className="px-8 py-4 bg-gradient-to-r from-gray-500 to-gray-600 text-white font-bold rounded-xl hover:from-gray-600 hover:to-gray-700 transform hover:scale-105 transition-all duration-300 shadow-lg"
        >
          🏠 Start Over
        </button>
      </div>

      {/* High Score Display */}
      <div className="text-center mt-6 text-gray-500">
        <div className="text-sm">Your High Score: {highScore}/{totalQuestions}</div>
      </div>
    </div>
  );
};

>>>>>>> 8530a600825fa74e410d45c688340b878b507c24
export default Result;