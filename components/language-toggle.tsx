'use client'

import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
import { useTranslation } from "react-i18next";

const LanguageToggle = () => {

  const { i18n } = useTranslation();

  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
  };

    return <Select onValueChange={changeLanguage} value={i18n.language}>
    <SelectTrigger className="w-[100px]">
      <SelectValue placeholder="Select Language" />
    </SelectTrigger>
    <SelectContent>
      <SelectGroup>
        <SelectItem value="en">English</SelectItem>
        <SelectItem value="uz">Uzbek</SelectItem>
        <SelectItem value="ru">Russian</SelectItem>
      </SelectGroup>
    </SelectContent>
  </Select>
}

export default LanguageToggle