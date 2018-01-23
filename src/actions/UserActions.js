import firebase from 'firebase';
import {
  USER_FETCH_SUCCESS,
  PRODUCT_FETCH_SUCCESS
} from './types';

export const userFetch = () => {
  const { currentUser } = firebase.auth();

  return (dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}`)
      .on('value', snapshot => {
        console.log('snapshot: ', snapshot);
        dispatch({ type: USER_FETCH_SUCCESS, payload: snapshot.val() });
      });
  };
};

export const productFetch = () => {
  const { currentUser } = firebase.auth();

  return (dispatch) => {
  firebase.database().ref(`/users/${currentUser.uid}/Products`)
    .on('value', snapshot => {
      snapshot.forEach(productSnapshot => {
        const productKey = productSnapshot.key;
        const productName = productSnapshot.child('ProductName');
        console.log(productKey);
        console.log(productName.val());
        console.log(productSnapshot.val());
        dispatch({ type: PRODUCT_FETCH_SUCCESS, payload: productSnapshot.val() });
      });
    });
  };
};
