"use client";

import { useEffect } from "react";

type HtmlLangProps = {
  locale: string;
};

export const HtmlLang = ({ locale }: HtmlLangProps) => {
  useEffect(() => {
    document.documentElement.lang = locale === "pl" ? "pl" : "en";
  }, [locale]);

  return null;
};
