import React, { useState, useEffect } from 'react';

const Question = ({ question, onAnswerSelect, selectedAnswer, onNextQuestion }) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [showFeedback, setShowFeedback] = useState(false);

  // Reset state when question changes
  useEffect(() => {
    setSelectedOption(null);
    setShowFeedback(false);
  }, [question.id]);

  const handleOptionClick = (optionIndex) => {
    if (selectedOption !== null) return; // Prevent multiple selections
    
    setSelectedOption(optionIndex);
    setShowFeedback(true);
    onAnswerSelect(optionIndex);
  };

  const handleNextQuestion = () => {
    onNextQuestion();
  };

  const getOptionClass = (optionIndex) => {
    let baseClass = "w-full p-4 text-left rounded-xl border-2 transition-all duration-300 transform hover:scale-105 cursor-pointer ";
    
    if (selectedOption === null) {
      return baseClass + "border-gray-200 hover:border-blue-300 hover:bg-blue-50 bg-white";
    }
    
    if (showFeedback) {
      if (optionIndex === question.correctAnswer) {
        return baseClass + "border-green-500 bg-green-100 text-green-800";
      } else if (optionIndex === selectedOption) {
        return baseClass + "border-red-500 bg-red-100 text-red-800";
      } else {
        return baseClass + "border-gray-200 bg-gray-50 text-gray-500";
      }
    }
    
    return baseClass + "border-gray-200 bg-white";
  };

  const getOptionIcon = (optionIndex) => {
    if (!showFeedback) return null;
    
    if (optionIndex === question.correctAnswer) {
      return <span className="text-green-600 font-bold">✓</span>;
    } else if (optionIndex === selectedOption && optionIndex !== question.correctAnswer) {
      return <span className="text-red-600 font-bold">✗</span>;
    }
    return null;
  };

  return (
    <div className="space-y-6">
      {/* Category Badge */}
      <div className="flex justify-center">
        <span className="inline-block bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-medium">
          {question.category}
        </span>
      </div>

      {/* Question */}
      <div className="text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 leading-relaxed">
          {question.question}
        </h2>
      </div>

      {/* Options */}
      <div className="grid gap-4">
        {question.options.map((option, index) => (
          <button
            key={index}
            onClick={() => handleOptionClick(index)}
            className={getOptionClass(index)}
            disabled={selectedOption !== null}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <span className="flex-shrink-0 w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center text-sm font-medium text-gray-600">
                  {String.fromCharCode(65 + index)}
                </span>
                <span className="text-lg">{option}</span>
              </div>
              {getOptionIcon(index)}
            </div>
          </button>
        ))}
      </div>

      {/* Feedback Message */}
      {showFeedback && (
        <div className="text-center mt-6 space-y-4">
          <div className={`inline-block px-6 py-3 rounded-full text-lg font-medium ${
            selectedOption === question.correctAnswer 
              ? 'bg-green-100 text-green-800' 
              : 'bg-red-100 text-red-800'
          }`}>
            {selectedOption === question.correctAnswer 
              ? '🎉 Correct! Well done!' 
              : '❌ Incorrect. The correct answer is highlighted above.'}
          </div>
          
          {/* Next Question Button */}
          <div>
            <button
              onClick={handleNextQuestion}
              className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold rounded-xl hover:from-blue-600 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg"
            >
              Next Question →
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Question;