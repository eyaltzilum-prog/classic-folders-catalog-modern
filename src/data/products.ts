export interface Product {
  id: string;
  name: string;
  code?: string | null;
  images: string[];
  gallery: string[];
  description: string;
}

export const PRODUCTS: Product[] = [
  {
    "id": "item-3",
    "name": "ישראל 01",
    "code": null,
    "images": ["https://page.frontcld.com/files/G3DPB8/ws27dvmjyl.jpg"],
    "gallery": [],
    "description": "ישראל 01"
  },
  {
    "id": "item-4",
    "name": "ישראל 02",
    "code": null,
    "images": ["https://page.frontcld.com/files/G3DPB8/lg3w2chdlh.jpg"],
    "gallery": [],
    "description": "ישראל 02"
  },
  {
    "id": "1235",
    "name": "תעודה 1235",
    "code": "1235",
    "images": ["https://page.frontcld.com/files/G3DPB8/pjawdekihk.jpg"],
    "gallery": [
      "https://lp.landing-page.mobi/uploads/users/1034462/16518306206274ef5c99e94.jpg",
      "https://lp.landing-page.mobi/uploads/users/1034462/16518306286274ef6449916.jpg"
    ],
    "description": "תעודה קוד: 1235"
  },
  {
    "id": "1236",
    "name": "תעודה 1236",
    "code": "1236",
    "images": ["https://page.frontcld.com/files/G3DPB8/rvzepsn9r6.png"],
    "gallery": [
      "https://page.frontcld.com/files/G3DPB8/qwqnqkuc81.jpg",
      "https://page.frontcld.com/files/G3DPB8/0rduoyeyy1.jpg"
    ],
    "description": "תעודה קוד: 1236"
  },
  {
    "id": "1237",
    "name": "תעודה 1237",
    "code": "1237",
    "images": ["https://page.frontcld.com/files/G3DPB8/zent65lhhq.png"],
    "gallery": [
      "https://page.frontcld.com/files/G3DPB8/fif1tha9fu.jpg",
      "https://page.frontcld.com/files/G3DPB8/m7qip8j91s.jpg",
      "https://page.frontcld.com/files/G3DPB8/3jgerz0m01.jpg"
    ],
    "description": "תעודה קוד: 1237 גיבורי על"
  },
  {
    "id": "1238",
    "name": "תעודה 1238",
    "code": "1238",
    "images": ["https://lp.landing-page.mobi/uploads/users/1034462/1652631032628125f8be051.jpg"],
    "gallery": [
      "https://lp.landing-page.mobi/uploads/users/1034462/16526311006281263c41895.jpg",
      "https://lp.landing-page.mobi/uploads/users/1034462/16526310956281263754388.jpg"
    ],
    "description": "תעודה קוד: 1238"
  }
];
