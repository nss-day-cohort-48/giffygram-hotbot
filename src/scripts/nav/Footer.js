import { getUsers } from "../data/provider.js";

export const Footer = () => {
  const users = getUsers();
  return `<footer class="footer">
  
  <h1>
  MONTH
  </h1>
  <select>
  <option>
  Jan
  </option>
  <option>
  Feb
  </option>
  </select> 
  

 <h2>
 Day
 <select>
  <option>
  Fri
  </option>
  </select> 
 </h2>

 <h3>
Year
 <select>
  <option>
  2021
  <select>
  </option>
  </select> 
 </h3>
 
 <h3>
Posts by user
 </h3>
  <select>
  <option>
  Choose user
  </option>
  ${users.map((user) => {
    return `
 <option>
 ${user.fullName}
 </option>
 `;
  })}
  </select>

  
  
  
  
  `;
};
