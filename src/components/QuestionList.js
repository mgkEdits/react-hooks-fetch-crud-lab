import React from "react";
import QuestionItem from "./QuestionItem.js"

function QuestionList({ questions, onDelete, onUpdate }) {

  const quizQuestion = questions.map((question) => {
    return <QuestionItem key={question.id} question={question} 
    onDelete={() => onDelete(question.id)} 
    onUpdate={(newCorrectIndex) => onUpdate(question.id, newCorrectIndex)}/> 
  })
  
  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>{quizQuestion}</ul>
    </section>
  );
}

export default QuestionList;
