import React from "react";
// import logo from './img/logo.png';
import './App.scss';
import Spinner from './components/spinner';
import ListItem from './components/ListItem';
import { useState, useEffect } from 'react';
import axios from 'axios';

function App() {

  const URL = 'https://thefridge-api.karapincha.io/fridge';

  const [id, setId] = useState('');
  const [title, setTitle] = useState('');
  const [expiry, setExpiry] = useState('');
  const [update, setUpdate] = useState(false)

  const [list, setList] = useState([])

  function clearForm() {
    setTitle('')
    setExpiry('')
  }

  function onSubmit(e) {
    e.preventDefault();
    console.log(title, expiry)

    // eslint-disable-next-line no-lone-blocks
    { update ? confirmUpdate(title, expiry, id) : addListItem(title, expiry) }

    clearForm()
  }

  const getList = async () => {
    const response = await axios.get(URL);
    return response.data;
  };

  const addListItem = async (title, expiry) => {
    const request = {
      "title": title,
      "expiry": expiry
    };

    console.log("request - ", request)
    var isValid = list.filter((item) => {
      // eslint-disable-next-line no-unused-expressions
      return item.title === title
    })

    if (isValid.length <= 0) {
      const response = await axios.post(URL, request);
      // console.log(response);
      setList([...list, response.data]);
    } else {
      window.alert(title + ' is already in your fridge')
    }

    clearForm()
  };

  const updateListItem = async (item) => {

    setUpdate(true)
    setId(item._id)
    setTitle(item.title)
    setExpiry(item.expiry)
  };

  const confirmUpdate = async (title, expiry, id) => {

    const request = {
      "title": title,
      "expiry": expiry
    };

    const response = await axios.put(URL + `/${id}`, request);
    const { _id } = response.data;
    // console.log(_id)
    setList(
      list.map((item) => {
        return item._id === _id ? { ...response.data } : item;
      })
    );
    setUpdate(false)

    clearForm()
  }

  const removeListItem = async (id) => {
    // console.log(id)
    await axios.delete(URL + `/${id}`);
    const newList = list.filter((item) => {
      return item._id !== id;
    });

    setList(newList);

    clearForm()
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
      <div className="Header">
        <div className="Header__title font-extrabold text-4xl text-center">Good morning, Johny!</div>
        <div className="Header__subtitle font-medium text-sm text-center">🌤 It's better to go shopping before this friday</div>
      </div>
      <div className="grid grid-cols-12 gap-4">
        <div className="col-start-3 col-span-8">

          <form className="Card w-full bg-white" onSubmit={onSubmit}>
            <div className="flex flex-wrap justify-center">
              <div className="Card__item w-full md:w-1/3">
                <label className="Card__item__input__label Card__item__input__label--name block tracking-wide font-semibold text-sm capitalize" htmlFor="grid-item-title">
                  🍉 Item Name
                </label>
                <input className="Card__item__input Card__item__input--name appearance-none block w-full leading-tight focus:border-gray-900" id="grid-item-title" type="text" value={title} onChange={e => setTitle(e.target.value)} />
              </div>
              <div className="Card__item w-full md:w-1/3">
                <label className="Card__item__input__label Card__item__input__label--exp block tracking-wide  font-semibold text-sm capitalize" htmlFor="grid-exp-date">
                  ⏰ Expiry Date
                </label>
                <input className="Card__item__input Card__item__input--exp appearance-none block w-full leading-tight focus:border-gray-900" id="grid-exp-date" type="date" value={expiry} onChange={e => setExpiry(e.target.value)} />
              </div>
              <div className="flex flex-wrap content-end justify-end">
                {update ?
                  <div className="flex">
                    <button className="Card__button Card__button--secondary hover:shadow-xl text-white font-bold text-sm" type="submit" >
                      UPDATE
                    </button>
                    <button className="Card__button Card__button__cancel hover:shadow-xl bg-red-700 justify-center" onClick={() => {
                      setUpdate(false)
                      clearForm()
                    }} >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>
                  :
                  <button className="Card__button Card__button--primary hover:shadow-xl text-white font-bold text-sm" type="submit" >
                    ADD TO FRIDGE
                  </button>
                }
              </div>
            </div>
            <div className="flex justify-start">
              <div className="Card__infor capitalize text-xs">⚠️ We don't want more than one piece of the same food in our fridge.</div>
            </div>
          </form>

          {!list.length ? <Spinner /> : <ListItem data={list} getId={removeListItem} updateListItem={updateListItem} />}

        </div>
      </div>
    </div>

  );
}

export default App;
