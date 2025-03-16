import {
  RiArrowRightSLine,
  RiFolder3Fill,
  RiMarkdownFill,
} from "@remixicon/react";
import { useState } from "react";

interface FolderProps {
  name: string;
  files: string[];
  classNameFolder: string;
}

export default function Folder({ name, files, classNameFolder }: FolderProps) {
  const [isFolderOpened, setIsFolderOpened] = useState(false);

  return (
    <div className="flex flex-col gap-2">
      <div
        className="flex items-center gap-3 h-6 cursor-pointer"
        onClick={() => setIsFolderOpened(!isFolderOpened)}
      >
        <RiArrowRightSLine
          className={`${
            isFolderOpened ? "rotate-90 text-slate-50" : "text-slate-500"
          } transition-transform duration-200`}
          size={16}
        />
        <div className="flex items-center gap-3 cursor-pointer">
          <RiFolder3Fill className={classNameFolder} size={16} />
          <p
            className={`${isFolderOpened ? "text-slate-50" : "text-slate-400"}`}
          >
            {name}
          </p>
        </div>
      </div>
      {isFolderOpened && files && (
        <div className="pl-7 flex flex-col gap-2">
          {files.map((file, index) => (
            <div
              key={index}
              className="flex items-center gap-3 h-6 cursor-pointer"
            >
              <RiMarkdownFill className="text-slate-500" size={16} />
              <p className="text-slate-400">{file}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
