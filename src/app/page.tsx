"use client";
import { Button } from "@nextui-org/react";
import QuizButtonCard from "@/components/Front-End/QuizButtonCard";
import Image from "next/image";
import { useState, useEffect } from "react";
import quizQuestions from "@/utils/Questions";

export default function Home() {
	const [score, setScore] = useState<number>(0);
	const [currentQuestion, setCurrentQuestion] = useState<number>(0);

	return (
		<div>
			<h1 className="text-3xl font-mono"> vedant Quiz</h1>
			<h1 className="text-3xl">Score: {score}</h1>

			<QuizButtonCard
        Question={quizQuestions[currentQuestion]}
        UpdateScore={(score: number) => {
          setScore((originalScore) => originalScore + score);
        }}
        UpdateQuestion={() => {
          if(currentQuestion < quizQuestions.length - 1) {
            setCurrentQuestion((originalQuestion) => originalQuestion + 1);
          } else {
            setCurrentQuestion(0);
            setScore(0);
          }
        }}
      />
      
		</div>
	);
}
