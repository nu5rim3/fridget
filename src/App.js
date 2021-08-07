import logo from './img/logo.svg';
import './App.scss';

import Spinner from './components/spinner';
import ListItem from './components/liteItem';

function App() {
  return (
    <div className="App">
      <div class="grid grid-cols-12 gap-4">
        <div class="col-start-2 col-span-10">
          <div className="flex justify-center pt-10 mt-5">
            <img src={logo} alt="logo" className="h-1/3 w-36" />
          </div>

          <div className="font-extrabold text-4xl header text-center pt-12">Good morning, Johny!</div>
          <div className="font-medium text-sm text-gray-400 text-center pt-3 pb-10">🌤 It's better to go shopping before this friday</div>

          <form class="w-full bg-white border-gray-800 rounded shadow px-5 py-10">
            <div class="flex flex-wrap -mx-3 mb-6">
              <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                  <div className="font-semibold text-sm capitalize">🍉 Item Name</div>
                </label>
                <input class="appearance-none block w-full bg-white text-gray-700 border border-gary-500 rounded py-3 px-4 mb-3 leading-tight focus:border-gary-900" id="grid-item-name" type="text" />
              </div>
              <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                  <div className="font-semibold text-sm capitalize">⏰ Expiry Date</div>
                </label>
                <input class="appearance-none block w-full bg-white text-gray-700 border border-gary-500 rounded py-3 px-4 mb-3 leading-tight focus:border-gray-900" id="grid-date" type="date" />
              </div>
              <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0 py-8">
                <button class="w-full bg-blue-900 hover:shadow-xl text-white font-bold py-2 px-12 rounded shadow">
                  ADD TO FRIDGE
                </button>
              </div>
              <p class="text-gray-500 text-xs px-3">⚠️ We don't want more than one piece of the same food in our fridge.</p>
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
