"use client";

import { fetchInterviewFeedback } from "@/server-actions/interview/interview.actions";
import { useEffect } from "react";

export default function InterviewFeedback({ interview }: { interview: any }) {
  let interviewS = interview;
  useEffect(() => {
    if (interviewS?.status !== "IN_PROGRESS") {
      return;
    }
    // each 1 seconds fetch the feedback
    // if its still IN_PROGRESS (feedback.status)
    // otherwise display it
    const interval = setInterval(async () => {
      interviewS = await fetchInterviewFeedback(interview.id);
      if (interviewS?.status === "IN_PROGRESS") {
        return;
      }
      clearInterval(interval);
    }, 1000);
  });

  if (!interviewS) {
    return "loading...";
  }

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white border border-gray-300 rounded-lg">
      <div className="flex items-start space-x-4">
        {/* <Avatar>
              <AvatarImage alt="@shadcn" src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar> */}
        // make it prettier?
        {JSON.stringify(interviewS)}
        <div>
          <h2 className="text-xl font-semibold">AI hiring manager feedback</h2>
          <p className="mt-1 text-gray-700">
            Feedback for the candidate's job interview:
          </p>
        </div>
      </div>
      <div className="mt-4">
        <h3 className="text-lg font-semibold">Strengths:</h3>
        <ul className="list-disc pl-5 space-y-1 text-gray-700">
          <li>
            Candidate has relevant experience in software engineering and
            working on innovative projects
          </li>
          <li>
            Demonstrates a proactive approach to learning and seeking feedback
          </li>
          <li>
            Asks thoughtful questions about company culture and the ideal
            candidate for the position
          </li>
        </ul>
      </div>
      <div className="mt-4">
        <h3 className="text-lg font-semibold">Weaknesses:</h3>
        <ul className="list-disc pl-5 space-y-1 text-gray-700">
          <li>
            Occasionally jumps between different topics and experiences, leading
            to a lack of clarity in responses
          </li>
          <li>
            Could work on providing more specific and concise answers to
            interview questions
          </li>
          <li>
            Salary expectation could be more research-based and tailored to the
            company and role
          </li>
        </ul>
      </div>
      <div className="mt-4">
        <h3 className="text-lg font-semibold">Improvement suggestions:</h3>
        <ul className="list-disc pl-5 space-y-1 text-gray-700">
          <li>
            Practice structuring responses to provide clear and concise
            information
          </li>
          <li>
            Research and align salary expectations with the industry standards
            and the specific company
          </li>
          <li>
            Continue asking relevant and insightful questions, while also
            actively listening and engaging in conversation with the interviewer
          </li>
        </ul>
      </div>
    </div>
  );
}