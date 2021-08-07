import React from "react";
import logo from './img/logo.svg';
import './App.scss';
import Spinner from './components/spinner';
import ListItem from './components/ListItem';
import { useState, useEffect } from 'react';
import axios from 'axios';

function App() {

  const URL = 'https://thefridge-api.karapincha.io/fridge';

  const [title, setTitle] = useState('');
  const [expiry, setExpiry] = useState('');

  const [list, setList] = useState([])

  function onSubmit(e) {
    e.preventDefault();
    console.log(title, expiry)
  }

  const getList = async () => {
    const response = await axios.get(URL);
    return response.data;
  };

  // const addListItem = async (item) => {

  // };

  // const updateListItem = async (item) => {

  // };

  const removeListItem = async (id) => {
    console.log(id)
  };

  useEffect(() => {
    const getAllItems = async () => {
      const items = await getList();
      if (items) setList(items);
    };

    getAllItems();
  }, []);

  return (
    <div className="App">
      <div className="grid grid-cols-12 gap-4">
        <div className="col-start-2 col-span-10">
          <div className="Header">
            <div className="Header__image__div flex justify-center pt-10 mt-5">
              <img src={logo} alt="logo" className="Header__main--image h-1/3 w-36" />
            </div>

            <div className="Header__title font-extrabold text-4xl header text-center pt-12">Good morning, Johny!</div>
            <div className="Header__subtitle font-medium text-sm text-gray-400 text-center pt-3 pb-10">🌤 It's better to go shopping before this friday</div>
          </div>
          <form className="Card w-full bg-white border-gray-800 rounded shadow px-5 py-10" onSubmit={onSubmit}>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="Card__input__name w-full md:w-1/3 px-3 mb-6 md:mb-0">
                <label className="Card__input__label__name block tracking-wide text-gray-700 font-semibold mb-2 text-sm capitalize" htmlFor="grid-item-title">
                  🍉 Item Name
                </label>
                <input className="Card__input__name appearance-none block w-full bg-white text-gray-700 border border-gary-500 rounded py-3 px-4 mb-3 leading-tight focus:border-gary-900" id="grid-item-title" type="text" value={title} onChange={e => setTitle(e.target.value)} />
              </div>
              <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                <label className="Card__input__label__expo block tracking-wide text-gray-700 font-semibold mb-2 text-sm capitalize" htmlFor="grid-exp-date">
                  ⏰ Expiry Date
                </label>
                <input className="Card__input__exp appearance-none block w-full bg-white text-gray-700 border border-gary-500 rounded py-3 px-4 mb-3 leading-tight focus:border-gray-900" id="grid-exp-date" type="date" value={expiry} onChange={e => setExpiry(e.target.value)} />
              </div>
              <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0 py-8">
                <button className="Card__button w-full bg-blue-900 hover:shadow-xl text-white font-bold py-2 px-12 rounded shadow" type="submit" >
                  ADD TO FRIDGE
                </button>
              </div>
              <p className="Card__infor text-gray-500 text-xs px-3">⚠️ We don't want more than one piece of the same food in our fridge.</p>
            </div>
          </form>

          {!list.length ? <Spinner /> : <ListItem data={list} getId={removeListItem} />}

        </div>
      </div>
    </div>

  );
}

export default App;
