'use client'

import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

const LanguageToggle = () => {

  const { i18n } = useTranslation();

  // useEffect(() => {
  //   if (storedLang) {
  //     i18n.changeLanguage(storedLang);
  //     setLanguage(storedLang);
  //   }
  // }, []);

  const changeLanguage = (lang: string) => {
    // console.log(lang)
    i18n.changeLanguage(lang);
    // localStorage.setItem("language", lang);
    // setLanguage(lang);
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