import { Dayjs } from "dayjs";
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

export const dateState = atom<Dayjs | null>({
  key: "dateState",
  default: null,
});

export const locationState = atom({
  key: "locationState",
  default: {
    address: "",
    detail: "",
    phone: "",
  },
});

export const transportationState = atom<{
  [key: string]: {
    name: string;
    icon: string;
    active: boolean;
    routes?: string[];
    route?: string;
  };
}>({
  key: "transportationState",
  default: {
    bus: {
      name: "버스",
      icon: "bus.png",
      routes: [],
      active: true,
    },
    subway: {
      name: "지하철",
      icon: "subway.png",
      routes: [],
      active: true,
    },
    car: {
      name: "자가용",
      icon: "car.png",
      route: ``,
      active: true,
    },
    tourBus: {
      name: "전세버스",
      icon: "bus.png",
      route: "",
      active: true,
    },
  },
});

export interface IAccountInfo {
  type: "groom" | "bride";
  bank: string;
  accountNumber: string;
  accountHolder: string;
}

export const accountInfoState = atom<{ message: string; list: IAccountInfo[] }>(
  {
    key: "accountInfoState",
    default: {
      message: "",
      list: [],
    },
  }
);

export const attendanceMessageState = atom({
  key: "attendanceMessageState",
  default: "",
});

export const finalPhotoState = atom<{
  image: string | ArrayBuffer | null;
  position: string;
  text: string;
  color: string;
}>({
  key: "finalPhotoState",
  default: {
    image: null,
    position: "50% 50%",
    text: "",
    color: "#ffffff",
  },
});

export const backgroundColorState = atom({
  key: "backgroundColorState",
  default: "#ffffff",
});

export const galleryListState = atom({
  key: "galleryListState",
  default: [] as string[],
});

export const dateHeartState = atom({
  key: "dateHeartState",
  default: {
    color: "#ffb6b6",
    opacity: "1",
  },
});
