"use client";
import { TextGenerateEffect } from "../ui/text-generate-effect";

interface TextGenerateEffectDemoProps {
  words: string;
}

export function TextGenerateEffectDemo({ words }: TextGenerateEffectDemoProps) {
  return <TextGenerateEffect words={words} />;
}