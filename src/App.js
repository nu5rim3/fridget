import logo from './img/logo.svg';
import './App.scss';

import Spinner from './components/spinner';
import ListItem from './components/liteItem';

function App() {
  return (
    <div className="App">
      <div class="grid grid-cols-12 gap-4">
        <div class="col-start-2 col-span-10">
          <div className="Header">
            <div className="Header__image__div flex justify-center pt-10 mt-5">
              <img src={logo} alt="logo" className="Header__main--image h-1/3 w-36" />
            </div>

            <div className="Header__title font-extrabold text-4xl header text-center pt-12">Good morning, Johny!</div>
            <div className="Header__subtitle font-medium text-sm text-gray-400 text-center pt-3 pb-10">🌤 It's better to go shopping before this friday</div>
          </div>
          <form class="Card w-full bg-white border-gray-800 rounded shadow px-5 py-10">
            <div class="flex flex-wrap -mx-3 mb-6">
              <div class="Card__input__name w-full md:w-1/3 px-3 mb-6 md:mb-0">
                <label class="Card__input__label__name block tracking-wide text-gray-700 font-semibold mb-2 text-sm capitalize" for="grid-first-name">
                  🍉 Item Name
                </label>
                <input class="Card__input__name appearance-none block w-full bg-white text-gray-700 border border-gary-500 rounded py-3 px-4 mb-3 leading-tight focus:border-gary-900" id="grid-item-name" type="text" />
              </div>
              <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                <label class="Card__input__label__expo block tracking-wide text-gray-700 font-semibold mb-2 text-sm capitalize" for="grid-first-name">
                  ⏰ Expiry Date
                </label>
                <input class="Card__input__exp appearance-none block w-full bg-white text-gray-700 border border-gary-500 rounded py-3 px-4 mb-3 leading-tight focus:border-gray-900" id="grid-date" type="date" />
              </div>
              <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0 py-8">
                <button class="Card__button w-full bg-blue-900 hover:shadow-xl text-white font-bold py-2 px-12 rounded shadow">
                  ADD TO FRIDGE
                </button>
              </div>
              <p class="Card__infor text-gray-500 text-xs px-3">⚠️ We don't want more than one piece of the same food in our fridge.</p>
            </div>
          </form>

          <Spinner />

          <ListItem name="Banana" exp_date="2021-06-23" />
        </div>
      </div>
    </div>

  );
}

export default App;
