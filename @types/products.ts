export interface Product {
 _id: string;
 title: string;
 mainImage: {
  asset: {
    url: string;
  }
 } 
 slug: {
   current: string;
 }
 defaultProductVariant: {
   price: number;
 }
 blurb: {
   en: string;
 }
 body: {
   enRaw: string;
 }
 tags: string[];
}
