import React from 'react';

const getStatusColor = (status) => {
  switch (status) {
    case 'CORRECT':
      return 'bg-green-500';
    case 'INCORRECT':
      return 'bg-red-500';
    case 'PARTIALLY_CORRECT':
      return 'bg-yellow-500';
    default:
      return 'bg-gray-500';
  }
};

const QuestionBoard = ({ questions, submissions }) => {
  const categories = Array.from(new Set(questions.map(q => q.category)));

  const getSubmissionStatus = (questionId) => {
    const submission = submissions.find(sub => sub.questionId === questionId);
    return submission ? submission.status : 'NONE';
  };

  return (
    <div className="p-4">
      {categories.map(category => (
        <div key={category} className="mb-6">
          <h2 className="text-xl font-bold mb-2">{category}</h2>
          <ul className="space-y-2">
            {questions
              .filter(question => question.category === category)
              .map(question => (
                <li key={question.id} className="flex items-center space-x-2 border p-2 rounded">
                  <div className={`w-4 h-4 rounded-full ${getStatusColor(getSubmissionStatus(question.id))}`}></div>
                  <span>{question.name}</span>
                </li>
              ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default QuestionBoard;
