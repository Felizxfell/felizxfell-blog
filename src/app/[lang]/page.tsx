import { getDictionary } from "@/lib/dictionaries";
import { PropsHome } from "@/types/types";

import MyInfo from "@/components/MyInfo";
import Slider from "@/components/Slider";
import MySkills from "@/components/MySkills";
import MyProjects from "@/components/MyProjects";
import FormContact from "@/components/FormContact";

export default async function Home({ params }: PropsHome) {
  const { lang } = params;

  const dict = await getDictionary(lang);

  return (
    <article className="mt-5 grid grid-cols-2 max-md:grid-cols-1">
      <MyInfo dict={dict} />
      
      <div className="text-center my-14 col-span-2">
        <Slider />
      </div>

      <MySkills dict={dict} />

      <MyProjects dict={dict} />
      
      <FormContact />
    </article>
  );
}
