import { proxy } from "valtio";

type ValtioStateType = {
  bookmarks: { [key: string]: boolean };
};

export const state = proxy<ValtioStateType>({
  bookmarks: {},
});
