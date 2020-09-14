export const intialRequest = (data) => {
  return {
    type: "ADD_TO_CART",
    payload: data,
  };
};


export const changemake = (data) => {
  return {
    type: "CHANGE_MAKE",
    payload: data,
  };
};
export const changemodel = (data) => {
  return {
    type: "CHANGE_MODEL",
    payload: data,
  };
};
export const changeprice = (data) => {
  return {
    type: "CHANGE_PRICE",
    payload: data,
  };
};
export const changemileage = (data) => {
  return {
    type: "CHANGE_MILEAGE",
    payload: data,
  };
};
export const changeenginesize = (data) => {
  return {
    type: "CHANGE_ENGINESIZE",
    payload: data,
  };
};
export const changefueltype = (data) => {
  return {
    type: "CHANGE_FUELTYPE",
    payload: data,
  };
};
export const changetransmision = (data) => {
  return {
    type: "CHANGE_TRANSMISION",
    payload: data,
  };
};
export const changebody = (data) => {
  return {
    type: "CHANGE_BODY",
    payload: data,
  };
};
