import React, { useContext, useEffect } from 'react'
import '../css/mystyles/searchbar.css';
import { Link } from 'react-router-dom';
import { AppContext } from '../contexts';

const SearchBar = () => {

  const { searchBar, setSearchBar, handleSearchBar } = useContext(AppContext);

  useEffect(() => {
    fetchData();
  }, [searchBar]);
  
  const fetchData = async () => {
    await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${searchBar}`)
    .then(res => res.json())
    .then(res => {
      console.log(res)
      setSearchBar(res);
    })
    .catch(err => console.log(err));
  }

  return (
    <div class="mb-3">
      <div class="relative mb-4 flex w-full flex-wrap items-stretch">
        <Link to="/tasks" class='btn text-white h-10 w-10 hover:bg-gray-800'>Back</Link>
        <input
          type="search"
          class="relative m-0 block w-[1px] min-w-0 flex-auto rounded border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary"
          placeholder="Search"
          aria-label="Search"
          aria-describedby="button-addon2" 
          onChange={(e) => handleSearchBar(e)}
        />

        {/* <!--Search icon--> */}
        {/* <button
          class="input-group-text flex items-center whitespace-nowrap rounded px-3 py-1.5 text-center text-base font-normal text-neutral-700 dark:text-neutral-200 hover:bg-gray-800"
          id="basic-addon2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            class="h-5 w-5">
            <path
              fill-rule="evenodd"
              d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
              clip-rule="evenodd" />
          </svg>
        </button> */}
      </div>
    </div>
  )
}

export default SearchBar