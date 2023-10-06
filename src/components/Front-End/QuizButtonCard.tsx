"use client"
import { FC } from 'react'


import React from "react";
import { Card, CardBody, CardHeader } from "@nextui-org/react";

import { Button , ButtonGroup} from '@nextui-org/react';




interface QuizButtonCardProps {
    Question: { 
        question: string;
        options: string[];
        answer: string;
	}, 
	UpdateScore : (score: number) => void
	, 
	UpdateQuestion : () => void
}

const QuizButtonCard: FC<QuizButtonCardProps> = ({ Question, UpdateScore, UpdateQuestion }) => {
	const [flag, setFlag] = React.useState(false);
  return (
		<Card >
			<CardHeader>
				<h1 className='text-3xl font-serif'>{Question.question}</h1>
			</CardHeader>
			<CardBody>
				<ButtonGroup>
					{Question.options.map((option, key) => (
						<Button
							key={key}
							color={flag ? (option===Question.answer?"success":"danger" ): "secondary"}
							size="lg"
							variant="flat"
						
							onClick={() => {
								if (!flag) {
									if (option === Question.answer) {
										UpdateScore(1)
										setFlag(true);
								}
								else {
										UpdateScore(0)
										setFlag(true);
								}

								
}
							}
						}
						
						
						>
							{option}
						</Button>
					))}
			  </ButtonGroup>
			  
			  <div>
				  <Button onClick={() => {
					  setFlag(false);
					  UpdateQuestion();
				  }}>Next</Button>
			  </div>
		  </CardBody>
		  
		</Card>
	);
}

export default QuizButtonCard