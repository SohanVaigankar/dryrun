import React from "react";
// components
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/app/components/atoms";
// utils & constants
import { LANGUAGES } from "@/lib/constants";

interface SelectProgrammingLanguageProps {
  onChange: (arg: any) => arg;
}

const SelectProgrammingLanguage = (props: SelectProgrammingLanguageProps) => {
  const { onChange } = props;
  return (
    <Select defaultValue={"javascript"} onValueChange={onChange}>
      <SelectTrigger className="w-[180px] focus-visible:ring-0 focus-visible:ring-offset-0">
        <SelectValue placeholder="Select Language" />
      </SelectTrigger>
      <SelectContent>
        {LANGUAGES.map((language, index) => (
          <SelectItem key={index} value={language.languageName.toLowerCase()}>
            <div className="flex items-center justify-start  gap-2 ">
              {<language.icon />}
              {language.languageName}
            </div>
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export default SelectProgrammingLanguage;
