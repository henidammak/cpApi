import { ADD_JOUEUSE, DELETE_JOUEUSE } from "../Types/Index";

export const addJoueuse = (payload) => ({
  type: ADD_JOUEUSE,
  payload,
});
export const deleteJoueuse = (payload) => ({
  type: DELETE_JOUEUSE,
  payload,
});
