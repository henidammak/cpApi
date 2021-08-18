import { ADD_JOUEUSE, DELETE_JOUEUSE } from "../Types/Index";

const initialeState = {
  joueuses: [
    {
      id: Math.random(),
      src: "https://images.psg.media/media/186169/profile_21-22_voll.png?center=0.5,0.5&mode=crop&width=800&height=800&quality=80",
      num: 1,
      name: "Bret",
    },
    {
      id: Math.random(),
      src: "https://images.psg.media/media/186161/profile_21-22_fazer.png?center=0.5,0.5&mode=crop&width=800&height=800&quality=80",
      num: 4,
      name: "Antonette",
    },
    {
      id: Math.random(),
      src: "https://images.psg.media/media/186156/profile_21-22_simon.png?center=0.5,0.5&mode=crop&width=800&height=800&quality=80",
      num: 3,
      name: "Samantha",
    },
    {
      id: Math.random(),
      src: "https://images.psg.media/media/30613/profile_21-22_dudek.png?center=0.5,0.5&mode=crop&width=800&height=800&quality=80",
      num: 5,
      name: "Karianne",
    },
    {
      id: Math.random(),
      src: "https://images.psg.media/media/30607/profile_21-22_lawrence.png?center=0.5,0.5&mode=crop&width=800&height=800&quality=80",
      num: 7,
      name: "Kamren",
    },
    {
      id: Math.random(),
      src: "https://images.psg.media/media/207232/profile_21-22_le-guilly.png?anchor=center&mode=crop&width=800&height=800&quality=80",
      num: 6,
      name: "Leopoldo",
    },
    {
      id: Math.random(),
      src: "https://images.psg.media/media/181769/profile_luana.png?center=0.5,0.5&mode=crop&width=800&height=800&quality=80",
      num: 10,
      name: "Elwyn.Skiles",
    },
    {
      id: Math.random(),
      src: "https://images.psg.media/media/30616/profile_21-22_geyoro.png?center=0.5,0.5&mode=crop&width=800&height=800&quality=80",
      num: 8,
      name: "Maxime_Nienow",
    },
    {
      id: Math.random(),
      src: "https://images.psg.media/media/30608/profile_21-22_dabritz.png?center=0.5,0.5&mode=crop&width=800&height=800&quality=80",
      num: 19,
      name: "Delphine",
    },
    {
      id: Math.random(),
      src: "https://images.psg.media/media/30625/profile_khelifi.png?center=0.5,0.5&mode=crop&width=800&height=800&quality=80",
      num: 11,
      name: "Moriah.Stanton",
    },
  ],
};

const CardReducer = (state = initialeState, { type, payload }) => {
  switch (type) {
    case ADD_JOUEUSE:
      return { ...state, joueuses: [...state.joueuses, payload] };
    case DELETE_JOUEUSE:
      return {
        ...state,
        joueuses: state.joueuses.filter((el) => el.id !== payload),
      };

    default:
      return state;
  }
};
export default CardReducer;
