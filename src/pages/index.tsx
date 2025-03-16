import Image from "next/image";
import Header from "../components/Header";
import BlurredBackground from "../components/BlurredBackground";

export default function Home() {
  const githubLink = "https://github.com/limahugovt";
  return (
    <div className="w-full h-screen sm:p-[70px] p-4">
      <div className="bg-slate-900 w-full h-full rounded-lg border border-slate-700">
        <Header />
        <section className="w-full h-[calc(100%-56px)] flex justify-center items-center gap-[143px]">
          <div className="w-[541px] gap-[75px] flex flex-col">
            <div>
              <p className="text-lg/7 text-slate-400 ">Olá a todos. Eu sou</p>
              <div>
                <h1 className="text-6xl/[66px] text-slate-50">Victor Hugo</h1>
                <h2 className="text-3xl/10 text-indigo-500">
                  {">"} Desenvolvedor Front-end
                </h2>
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <p className="text-slate-400 text-lg/6">
                {"//"} complete o jogo para continuar
              </p>
              <p className="text-slate-400 text-lg/6">
                {"//"} encontre meu perfil no Github:
              </p>
              <p className="text-indigo-500 text-lg/6">
                const <span className="text-teal-400">githubLink</span>{" "}
                <span className="text-slate-50">=</span>{" "}
                <a href={githubLink} target="_blank" className="text-rose-300">
                  “https://github.com/limahugovt”
                </a>
              </p>
            </div>
          </div>
          <div className="z-10  ">
            <Image src="code-snippet 2.svg" alt="" width={560} height={182} />
          </div>
        </section>
        <BlurredBackground
          width="454px"
          height="492px"
          background="#00D5BE"
          top="169px"
          left="860px"
        />
        <BlurredBackground
          width="454px"
          height="492px"
          background="#615FFF"
          bottom="169px"
          right="244px"
        />
      </div>
    </div>
  );
}
