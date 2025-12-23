import Image from "next/image";
import { Button } from "@/components/ui/button";
import { GithubIcon, PlayIcon } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col p-8 max-w-[1300px] mx-auto">
      <div className="w-full rounded-lg shadow-lg h-[300px] bg-[#004B82] flex flex-col items-center justify-center gap-2">
        <div className="text-white text-xl opacity-70">Universal Content Format</div>
        <div className="text-white text-4xl opacity-100">Let your content shine, everywhere</div>
        <div className="text-white text-lg opacity-90">UCF is a format for content, not layout. Just create the content, and it will adapt to any layout.</div>
        <div className="flex flex-row items-center gap-4 pt-4">
          <Button variant="outline" className="qu-text"><PlayIcon />Get Started</Button>
          <a href="https://github.com/quntem/ucf"><Button variant="outline" className="qu-text"><GithubIcon />GitHub</Button></a>
        </div>
      </div>
    </div>
  );
}
