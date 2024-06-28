import React, { useState } from 'react'

export function Dropdown(){
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
      setIsOpen(!isOpen);
    };
  



return  <div className="relative">

<form class="max-w-sm mx-auto">
  <select id="linkMart" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
    <option selected>Choose a Catagory</option>
    <option value="fr">Fruits</option>
    <option value="vg">Vegitables</option>
    <option value="sp">Spices</option>
  </select>
</form>

</div>
 



}