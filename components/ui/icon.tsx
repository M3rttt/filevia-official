import {
  FileArchive,
  FileImage,
  FileOutput,
  FilePlus2,
  FileText,
  Scissors,
  ShieldCheck,
  Smartphone,
  Sparkles,
  WifiOff,
  Zap
} from "lucide-react";

import type { AdvantageIconName, ComparisonIconName, ToolIconName } from "@/lib/site-data";

type IconProps = {
  name: ToolIconName | AdvantageIconName | ComparisonIconName;
  className?: string;
};

export function Icon({ name, className }: IconProps) {
  const icons = {
    merge: FilePlus2,
    split: Scissors,
    compress: FileArchive,
    pdfToWord: FileText,
    wordToPdf: FileOutput,
    imageToPdf: FileImage,
    privacy: ShieldCheck,
    offline: WifiOff,
    speed: Zap,
    android: Smartphone,
    shield: ShieldCheck,
    wifi: WifiOff,
    spark: Sparkles
  };

  const LucideIcon = icons[name];

  return <LucideIcon className={className} />;
}
