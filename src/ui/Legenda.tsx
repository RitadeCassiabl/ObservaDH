/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import { Titillium_Web } from "next/font/google";
import { SaibaMais } from "./cards/SaibaMais";
import {
  LineText,
  TextContent,
  TextSmallTitillium,
  TextStrongOswald,
  TextSpace
} from "./TextoDiferente";

const titillium_web = Titillium_Web({
  weight: ["400", "700"],
  subsets: ["latin"]
});

const legenda: React.FC = () => {
  return (
    <div className="w-[21.5rem] flex flex-col gap-6">
      <TextContent className="text-6xl">
        <LineText>
          <TextStrongOswald>
            {"Número"}
          </TextStrongOswald>
          <TextSpace />
          <TextSmallTitillium>
            {"de"}
          </TextSmallTitillium>
        </LineText>
        <LineText className="text-[#93F996]">
          <TextSmallTitillium>
            {"PL's"}
          </TextSmallTitillium>
          <TextSpace />
          <TextStrongOswald>
            {"por ano"}
          </TextStrongOswald>
        </LineText>
      </TextContent>
      <p className={`${titillium_web} text-white text-xl`}>
        {
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos voluptate eaque vel sunt, magnam rem minima odio vitae? Est non iste maxime dicta illo provident deleniti impedit distinctio nemo odit."
        }
      </p>
      <SaibaMais />
    </div>
  );
};

export default legenda;
