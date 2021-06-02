import {
  CREATE_CONTACT,
  GET_CONTACT,
  UPDATE_CONTACT,
  DELETE_CONTACT,
  SELECT_CONTACT,
  CLEAR_CONTACT,
  DELETE_SELECTED_CONTACT,
} from "../constant/types";

const initialState = {
  contacts: [
    {
      id: 1,
      name: "Teacher 1",
      username: "Bret",
      email: "teacher1@edu.sn",
      address: {
        street: "33 Margerette",
        suite: "Apt 67",
        city: "derkle",
        code: "65478",
      },
      phone: "4548794664",
      website: "derkleCity.com",
      company: {
        name: "Bakeli",
        domain: "tech",
      },
    },
    {
      id: 2,
      name: "Teacher 2",
      username: "Bret",
      email: "teacher2@edu.sn",
      address: {
        street: "33 Margerette",
        suite: "Apt 67",
        city: "derkle",
        code: "65478",
      },
      phone: "4548794664",
      website: "derkleCity.com",
      company: {
        name: "Bakeli",
        domain: "tech",
      },
    },
    {
      id: 3,
      name: "Teacher 3",
      username: "Bret",
      email: "teacher3@edu.sn",
      address: {
        street: "33 Margerette",
        suite: "Apt 67",
        city: "derkle",
        code: "65478",
      },
      phone: "4548794664",
      website: "derkleCity.com",
      company: {
        name: "Bakeli",
        domain: "tech",
      },
    },
    {
      id: 4,
      name: "Teacher 4",
      username: "Bret",
      email: "teacher4@edu.sn",
      address: {
        street: "33 Margerette",
        suite: "Apt 67",
        city: "derkle",
        code: "65478",
      },
      phone: "4548794664",
      website: "derkleCity.com",
      company: {
        name: "Bakeli",
        domain: "tech",
      },
    },
    {
      id: 5,
      name: "Teacher 5",
      username: "Bret",
      email: "teacher5@edu.sn",
      address: {
        street: "33 Margerette",
        suite: "Apt 67",
        city: "derkle",
        code: "65478",
      },
      phone: "4548794664",
      website: "derkleCity.com",
      company: {
        name: "Bakeli",
        domain: "tech",
      },
    },
  ],
  contact: null,
  selectedContacts: [],
};

export const contactReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_CONTACT:
      return {
        ...state,
        contacts: [action.payload, ...state.contacts],
      };
    case GET_CONTACT:
      let arr = state.contacts.filter(
        (contact) => contact.id === action.payload
      );
      arr = arr.values();
      for (let val of arr) {
        arr = val;
      }
      return {
        ...state,
        contact: arr,
      };
    case UPDATE_CONTACT:
      return {
        ...state,
        contacts: state.contacts.map((contact) =>
          contact.id === action.payload.id ? action.payload : contact
        ),
      };
    case DELETE_CONTACT:
      return {
        ...state,
        contacts: state.contacts.filter(
          (contact) => contact.id !== action.payload
        ),
      };
    case DELETE_SELECTED_CONTACT:
      return {
        ...state,
        contacts: [],
      };
    case SELECT_CONTACT:
      return {
        ...state,
        selectedContacts: action.payload,
      };
    case CLEAR_CONTACT:
      return {
        ...state,
        selectedContacts: [],
      };
    default:
      return state;
  }
};
