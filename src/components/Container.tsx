import { ReactNode } from "react";

interface PropsContainer {
  children: ReactNode
}

export default function Container({ children }: PropsContainer) {
  return (
    <main className="max-h-screen">
      <div className="my-7 mx-2 p-5 lg:mx-32 xl:mx-36 2xl:mx-96 rounded-lg text-emerald-400">
        {children}
      </div>
    </main>
  );
}
