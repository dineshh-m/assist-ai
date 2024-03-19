import { Message } from "@/app/lib/definitions";
import Skeleton from "react-loading-skeleton";
import ReactMarkdown from "react-markdown";
import Image from "next/image";
import 'react-loading-skeleton/dist/skeleton.css';

const images = {
  "model": "/robot.png",
  "user": "/user.png",
};

export default function ChatMessage({ message }: { message: Message }) {
  return (
    <div className="mx-[2rem] lg:mx-[10rem]">
      <div className="flex flex-col justify-start gap-1">
        <div className="font-bold flex gap-1 items-center">
          <Image
            width={20}
            height={20}
            src={images[message.content.role]}
            alt=""
          />
          <span className="first-letter:uppercase">{message.content.role}</span>
        </div>
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
