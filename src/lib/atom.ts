import { atom } from "recoil";

export const nameState = atom({
  key: "nameState",
  default: {
    groom: "",
    bride: "",
  },
});

export const clippedImageState = atom<{
  image: string | ArrayBuffer | null;
  position: string;
}>({
  key: "clippedImageState",
  default: {
    image: null,
    position: "50% 50%",
  },
});

export const infoState = atom({
  key: "infoState",
  default: {
    time: "",
    location: "",
  },
});

export const firstDescriptionState = atom({
  key: "firstDescriptionState",
  default: "",
});

export const mainPhotoState = atom<{
  image: string | ArrayBuffer | null;
  position: string;
}>({
  key: "mainPhotoState",
  default: {
    image: null,
    position: "50% 50%",
  },
});

export const secondDescriptionState = atom({
  key: "secondDescriptionState",
  default: "",
});

export const familyState = atom({
  key: "familyState",
  default: {
    groom: {
      father: {
        name: "",
        alive: true,
      },
      mother: {
        name: "",
        alive: true,
      },
      position: "",
    },
    bride: {
      father: {
        name: "",
        alive: true,
      },
      mother: {
        name: "",
        alive: true,
      },
      position: "",
    },
  },
});

export const twoPhotoState = atom<
  {
    image: string | ArrayBuffer | null;
    position: string;
  }[]
>({
  key: "twoPhotoState",
  default: [
    {
      image: null,
      position: "50% 50%",
    },
    {
      image: null,
      position: "50% 50%",
    },
  ],
});
