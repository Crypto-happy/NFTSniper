import { useState } from "react";

/*====== icons =======*/
import { FaChevronRight, FaChevronDown } from "react-icons/fa";

const QuestionAnswer = ({ question, answer }) => {
  const [accordion, setAccordion] = useState(false);

  return (
    <div className="question-answer">
      <div
        className="question-answer__question"
        onClick={() => setAccordion(!accordion)}
      >
        {accordion ? <FaChevronDown /> : <FaChevronRight />}
        <div>{question}</div>
      </div>
      {accordion ? <div className="question-answer__answer">{answer}</div> : ""}
    </div>
  );
};

export default QuestionAnswer;
