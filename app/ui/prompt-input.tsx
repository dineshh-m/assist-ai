import { PaperAirplaneIcon } from "@heroicons/react/24/outline";

export default function PromptInput({
  prompt,
  handleChange,
  handleClick,
  isGenerating,
  handleKeyPress
}: {
  prompt: string;
  isGenerating: boolean
  handleChange: React.ChangeEventHandler<HTMLInputElement>;
  handleClick: React.MouseEventHandler<HTMLButtonElement>;
  handleKeyPress: React.KeyboardEventHandler
}) {
  return (
    <div className="flex justify-center">
      <div className="fixed bottom-6">
        <div className="flex items-center w-[40rem] h-[3rem] pl-3 rounded-full bg-gray-100 shadow-md">
          <input
            type="text"
            placeholder="Type Something..."
            value={prompt}
            onChange={handleChange}
            onKeyPress={handleKeyPress}
            className="w-full h-full bg-transparent focus:outline-none caret-gray-500"
          />
          <button
            id="send-btn"
            className="p-2 m-1 rounded-full bg-black text-white hover:bg-gray-500 transition-colors ease-linear duration-75 shadow-md disabled:bg-gray-500"
            onClick={handleClick}
            disabled={isGenerating}
          >
            <PaperAirplaneIcon className="w-6" />
          </button>
        </div>
      </div>
    </div>
  );
}
