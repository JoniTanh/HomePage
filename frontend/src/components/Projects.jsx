import AngularWeather from "./Projects/AngularWeather";
import AngulareCommerce from "./Projects/AngulareCommerce";
import FamilyTree from "./Projects/FamilyTree";
import ReactQuiz from "./Projects/ReactQuiz";
import ReacteCommerce from "./Projects/ReacteCommerce";
import VueMusic from "./Projects/VueMusic";

export default function () {
  return (
    <>
      <div className="text-gray-500 sourceCodePro">
        <div className="mx-auto my-36 px-24 md:px-20 lg:px-40">
          <div className="flex flex-col md:flex-row md:space-x-10">
            <div className="">
              <div className="text-2xl lg:text-5xl">Projects.</div>
              <div className="pt-8 max-w-3xl mb-20">
                Teksti tekstiä tekstiä. Teksti tekstiä tekstiä. Teksti tekstiä
                tekstiä. Teksti tekstiä tekstiä. Teksti tekstiä tekstiä. Teksti
                tekstiä tekstiä. Teksti tekstiä tekstiä. Teksti tekstiä tekstiä.
                Teksti tekstiä tekstiä. Teksti tekstiä tekstiä. Teksti tekstiä
                tekstiä. Teksti tekstiä tekstiä. Teksti tekstiä tekstiä. Teksti
                tekstiä tekstiä. Teksti tekstiä tekstiä. Teksti tekstiä tekstiä.
                Teksti tekstiä tekstiä. Teksti tekstiä tekstiä. Teksti tekstiä
                tekstiä. Teksti tekstiä tekstiä. Teksti tekstiä tekstiä. Teksti
                tekstiä tekstiä. Teksti tekstiä tekstiä. Teksti tekstiä tekstiä.
                Teksti tekstiä tekstiä.
              </div>
              <FamilyTree />
              <ReacteCommerce />
              <ReactQuiz />
              <AngulareCommerce />
              <AngularWeather />
              <VueMusic />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
