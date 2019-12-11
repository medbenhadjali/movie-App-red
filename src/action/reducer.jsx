import { ADD, DESC, EDIT, DEL,RECH } from "./actiontype";
import uuid from 'uuid';

const initialState = {
  listfilm: [
    {
      src:
        "https://is5-ssl.mzstatic.com/image/thumb/Video113/v4/4d/02/a2/4d02a2fe-7195-0c58-42c2-e33e9bb34b1d/DIS_AV_ENDGAME_FINAL_FRP_FR_ARTWORK_EN_2000x3000_1OWPBJ00000FNA.lsr/268x0w.jpg",
      titre: "Avenger",
      date: 2010,
      rate: 5,
      trailer:"https://www.youtube.com/watch?v=TcMBFSGVi1c",
      id:uuid()
      
    },
    // {
    //   src:"http://fr.web.img4.acsta.net/medias/nmedia/18/36/31/71/18479867.jpg",
    //   date :2005,
    //   rate :2,
    //   trailer:"https://www.youtube.com/watch?v=k_13fFIrhPk",
    // id:uuid()
    // }
  ]
};
function moviereducer(state = initialState, action) {
  console.log('state Global', state)
  switch (action.type) {
    case ADD:
      return {
        ...state,
        listfilm: [...state.listfilm, action.payload]
      };

    case DESC:
      return {};

    case EDIT:
  
      return {
        ...state,
        listfilm: state.listfilm.map((el, key) =>
          key === action.id ? action.payload : el 
        )
      };

    case DEL:
      return { ... state , listfilm: state.listfilm.filter((el ,key)=> key !== action.payload ? el:null )};

      case RECH :
      return {};
      
    default:
      return state;
  }
}

export default moviereducer;
