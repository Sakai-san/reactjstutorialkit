// @flow
export const populatePictures: Function = (
  pictures: Array<Object>,
): Object => ({
  type: 'INITIALIZATION',
  payload: pictures,
});

export const removePicture: Function = (id: number): Object => ({
  type: 'REMOVE_PICTURE',
  payload: id,
});

export const addPicture: Function = (picture: Object): Object => ({
  type: 'ADD_PICTURE',
  payload: picture,
});
