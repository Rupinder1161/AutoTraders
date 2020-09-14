const categories = (
  state = {
    Make: "All",
    Model: {
      Suzuki: true,
      kia: true,
      Honda: true,
    },
    Price: 10000,
    Mileage: 20000,
    EngineSize: 4000,
    FuelType: "All",
    Transmision: "All",
    Suzuki: true,
    kia: true,
    Honda: true,
    bodyStyle:{
      Convertible : true,
      Coupe: false,
      Hatchback: false,
      Sedan:false,
      Station_Wagon:true,
      SUV:true,
      Ute:true
    }
  },
  action
) => {
  switch (action.type) {
    case "CHANGE_MAKE":
      return { ...state, Make: action.payload };
    case "CHANGE_MODEL":
      return { ...state, Model: action.payload };
    case "CHANGE_PRICE":
      return { ...state, Price: action.payload };
    case "CHANGE_MILEAGE":
      return { ...state, Mileage: action.payload };
    case "CHANGE_ENGINESIZE":
      return { ...state, EngineSize: action.payload };
    case "CHANGE_FUELTYPE":
      return { ...state, FuelType: action.payload };
    case "CHANGE_TRANSMISION":
      return { ...state, Transmision: action.payload };
     case "CHANGE_BODY":
      return { ...state, bodyStyle: action.payload };
    default:
      return state;
  }
};

export default categories;
