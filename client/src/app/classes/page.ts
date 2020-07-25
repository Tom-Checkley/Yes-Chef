import { Section } from './section';

export class Page {
  banner: {
    title: string,
    background: {
      imgUrl: string,
      altText?: string
    },
    cssVariant?: string
  };
  sections?: Section[];
}
