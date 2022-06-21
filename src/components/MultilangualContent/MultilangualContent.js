import {useContext} from "react";
import { LanguageContext } from "../../contexts/multilingualContext";
import { translations } from "../../contexts/translations";

export default function MultilingualContent({contentId}){
    const {language} = useContext(LanguageContext);
    return translations[language][contentId];
}


export const getTransationText = (language, contentId) => {
    return translations[language][contentId]
}