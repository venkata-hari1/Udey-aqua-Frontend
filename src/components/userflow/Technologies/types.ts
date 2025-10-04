// src/components/userflow/Technologies/types.ts
export interface TechnologyCard {
  title: string;
  smallDesc: string;
  largeDesc: string[];
  img?: string;
}

export interface TechnologyPageProps {
  headerTitle: string;
  headerSubtitle: string;
  headerImg: string;
  cards: TechnologyCard[];
}

export interface TechnologyHeaderProps {
  title: string;
  subtitle: string;
  img: string;
}

export interface TechnologyCardsSectionProps {
  headerTitle: string;
  headerSubtitle: string;
  headerImg: string;
  cards: TechnologyCard[];
}
