"use client";

import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { useLanguage } from "@/context/LanguageContext";

export const Grid = () => {
  const { data } = useLanguage();

  return (
    <section id="about">
      <BentoGrid>
        {data.gridItems.map((gridItem: any) => (
          <BentoGridItem key={gridItem.id} {...gridItem} />
        ))}
      </BentoGrid>
    </section>
  );
};
