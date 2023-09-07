import React, { useContext } from 'react';
import { AppContext } from '../contexts';

const Card = () => {

  const { searchBar } = useContext(AppContext);

  return (
    
    <div class="w-full max-w-md p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700 mx-auto my-10">
        <div class="flex items-center justify-between mb-4">
            <h5 class="text-xl font-bold leading-none text-gray-900 dark:text-white">Firsts Results</h5>
            <a href="#" class="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500">
                View all
            </a>
      </div>
      <div class="flow-root">
            <ul role="list" class="divide-y divide-gray-200 dark:divide-gray-700">
                <li class="py-3 sm:py-4">
                    <div class="flex items-center space-x-4">
                        <div class="flex-1 min-w-0">
                            <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                                Through
                            </p>
                            <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                                Used to describe when we need to say...
                            </p>
                        </div>
                        <a href='#' class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white hover:underline hover:text-blue-300">
                            See more
                        </a>
                    </div>
                </li>
            </ul>
      </div>
    </div>

  )
}

export default Card;