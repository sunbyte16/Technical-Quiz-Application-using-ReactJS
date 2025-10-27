import React, { useState, useEffect } from 'react';
import Question from './Question';
import Result from './Result';
import { questions } from '../data/questions';

const QuizApp = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState([]);
  const [showResult, setShowResult] = useState(false);
  const [timeLeft, setTimeLeft] = useState(30); // 30 seconds per question
  const [quizQuestions, setQuizQuestions] = useState([]);

  // Shuffle questions and options on component mount
  useEffect(() => {
    const shuffledQuestions = [...questions]
      .sort(() => Math.random() - 0.5)
      .map(question => ({
        ...question,
        options: [...question.options].sort(() => Math.random() - 0.5)
      }));
    setQuizQuestions(shuffledQuestions);
  }, []);

  // Timer functionality
  useEffect(() => {
    if (timeLeft > 0 && !showResult && selectedAnswers.length === currentQuestionIndex) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else if (timeLeft === 0 && !showResult && selectedAnswers.length === currentQuestionIndex) {
      // Auto-advance on timeout only if no answer selected
      const answerData = {
        questionId: quizQuestions[currentQuestionIndex].id,
        selectedOption: -1, // -1 indicates timeout
        correctAnswer: quizQuestions[currentQuestionIndex].correctAnswer,
        isCorrect: false
      };
      setSelectedAnswers([...selectedAnswers, answerData]);
      handleNextQuestion();
    }
  }, [timeLeft, showResult, selectedAnswers.length, currentQuestionIndex]);

  const handleAnswerSelect = (selectedOption) => {
    const currentQuestion = quizQuestions[currentQuestionIndex];
    const isCorrect = selectedOption === currentQuestion.correctAnswer;
    
    if (isCorrect) {
      setScore(score + 1);
    }

    const answerData = {
      questionId: currentQuestion.id,
      selectedOption,
      correctAnswer: currentQuestion.correctAnswer,
      isCorrect
    };

    setSelectedAnswers([...selectedAnswers, answerData]);
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < quizQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setTimeLeft(30); // Reset timer for next question
    } else {
      // Quiz completed
      setShowResult(true);
      // Save high score to localStorage
      const highScore = localStorage.getItem('quizHighScore') || 0;
      if (score > highScore) {
        localStorage.setItem('quizHighScore', score);
      }
    }
  };

  const restartQuiz = () => {
    setCurrentQuestionIndex(0);
    setScore(0);
    setSelectedAnswers([]);
    setShowResult(false);
    setTimeLeft(30);
    
    // Reshuffle questions and options
    const shuffledQuestions = [...questions]
      .sort(() => Math.random() - 0.5)
      .map(question => ({
        ...question,
        options: [...question.options].sort(() => Math.random() - 0.5)
      }));
    setQuizQuestions(shuffledQuestions);
  };

  if (quizQuestions.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 flex items-center justify-center">
        <div className="text-white text-xl">Loading quiz...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-white mb-2">🧠 Technical Quiz Challenge</h1>
          <p className="text-blue-200">Test your programming and computer science knowledge</p>
        </div>

        {!showResult ? (
          <div className="bg-white rounded-2xl shadow-2xl p-8">
            {/* Progress Bar */}
            <div className="mb-6">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium text-gray-600">
                  Question {currentQuestionIndex + 1} of {quizQuestions.length}
                </span>
                <span className="text-sm font-medium text-gray-600">
                  Score: {score}/{currentQuestionIndex + 1}
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div 
                  className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full transition-all duration-300"
                  style={{ width: `${((currentQuestionIndex + 1) / quizQuestions.length) * 100}%` }}
                ></div>
              </div>
            </div>

            {/* Timer */}
            <div className="flex justify-center mb-6">
              <div className={`text-2xl font-bold px-4 py-2 rounded-full ${
                timeLeft <= 10 ? 'bg-red-100 text-red-600' : 'bg-blue-100 text-blue-600'
              }`}>
                ⏱️ {timeLeft}s
              </div>
            </div>

            {/* Question Component */}
            <Question
              question={quizQuestions[currentQuestionIndex]}
              onAnswerSelect={handleAnswerSelect}
              onNextQuestion={handleNextQuestion}
              selectedAnswer={null}
            />
          </div>
        ) : (
          <Result
            score={score}
            totalQuestions={quizQuestions.length}
            selectedAnswers={selectedAnswers}
            questions={quizQuestions}
            onRestart={restartQuiz}
          />
        )}

        {/* Footer */}
        <div className="mt-8 text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
            <div className="text-white/90 text-sm mb-3">
              <strong>© 2k25 𝕊𝕦𝕟𝕚𝕝 𝕊𝕙𝕒𝕣𝕞𝕒. All rights reserved.</strong>
            </div>
            <div className="flex justify-center space-x-4">
              <a 
                href="https://github.com/sunbyte16" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white/80 hover:text-white transition-colors duration-300 flex items-center space-x-1"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                <span>GitHub</span>
              </a>
              <a 
                href="https://www.linkedin.com/in/sunil-kumar-bb88bb31a/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white/80 hover:text-white transition-colors duration-300 flex items-center space-x-1"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                <span>LinkedIn</span>
              </a>
              <a 
                href="https://lively-dodol-cc397c.netlify.app" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white/80 hover:text-white transition-colors duration-300 flex items-center space-x-1"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
                <span>Portfolio</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuizApp;