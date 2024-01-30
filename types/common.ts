export type TProductCard = {
  name: string;
  specs: string[];
  price: number;
  dealPrice?: number;
  imgUrl: string;
  url: string;
  staticWidth?: boolean;
};

export type TDealCard = TProductCard & {
  dealDate: Date;
  dealPrice: number;
};

export type TSlide = {
  imgUrl: string;
  url: string;
  alt: string;
  msg?: {
    title: string;
    desc?: string;
    buttonText?: string;
  };
};

export type TBlogCard = {
  title: string;
  imgUrl: string;
  url: string;
  shortText: string;
};

type TSubCategory = {
  name: string;
  url: string;
  subCategories?: {
    name: string;
    url: string;
  }[];
};

export type TCategory = {
  name: string;
  iconUrl: string;
  iconSize: [number, number];
  url: string;
  subCategories?: TSubCategory[];
};
