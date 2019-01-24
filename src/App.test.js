import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import usersList from './App';

it('renders without crashing', () => {
  shallow(<App />);
});
/*
https://typeofweb.com/2018/02/13/testowanie-react-js-enzyme-props-state-interakcje/
Po kolei: Renderuje się aplikacja. 
Następnie upewniam się, że lista kontaktów jest taka, jak mi się wydaje, że jest (to krok w sumie zbędny).
Następnie symuluję zdarzenie input i ponownie sprawdzam listę kontaktów — teraz jest już inna.
*/
it('filters names on input', () => {
    const app = shallow(<App />);
    expect(app.find('UsersList').prop('users')).toEqual(['Michal', 'Kasia', 'Jacek', 'Marta', 'Tomek', 'Ania']);
  
    app.find('input').simulate('input', {currentTarget: {value: 'M'}})
    expect(app.find('UsersList').prop('users')).toEqual(['Michal', 'Marta', 'Tomek']);
  });

it('filters names on input', () => {
    const app = shallow(<App />);
    expect(app.find('UsersList').prop('users')).toEqual(['Michal', 'Kasia', 'Jacek', 'Marta', 'Tomek', 'Ania']);
  
    app.find('input').simulate('input', {currentTarget: {value: ''}})
    expect(app.find('UsersList').prop('users')).toEqual(['Michal', 'Kasia', 'Jacek', 'Marta', 'Tomek', 'Ania']);
  });

  it('filters names on input', () => {
    const app = shallow(<App />);
    expect(app.find('UsersList').prop('users')).toEqual(['Michal', 'Kasia', 'Jacek', 'Marta', 'Tomek', 'Ania']);
  
    app.find('input').simulate('input', {currentTarget: {value: 'K'}})
    expect(app.find('UsersList').prop('users')).toEqual(['Kasia', 'Jacek','Tomek']);
  });