import { Message } from "@/app/lib/definitions";
import Skeleton from "react-loading-skeleton";
import ReactMarkdown from "react-markdown";
import 'react-loading-skeleton/dist/skeleton.css';

export default function ChatMessage({ message }: { message: Message }) {
  return (
    <div className="mx-[2rem] lg:mx-[10rem]">
      <div className="flex flex-col justify-start gap-1">
        <div className="font-bold first-letter:uppercase">{message.content.role}</div>
        {message.content.role == "model" ? (
          message.content.parts[0].text !== "" ? (
            <ReactMarkdown>{message.content.parts[0].text}</ReactMarkdown>
          ) : (
              <div className="w-full h-full">
                <Skeleton count={3} />
              </div>
          )
        ) : (
          <p>{message.content.parts[0].text}</p>
        )}
      </div>
    </div>
  );
}
