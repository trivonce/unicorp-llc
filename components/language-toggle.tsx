import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"

const LanguageToggle = () => {
    return <Select value="en">
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