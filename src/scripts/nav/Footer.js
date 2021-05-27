import { getUsers } from "../data/provider.js";

export const Footer = () => {
  const users = getUsers();
  return `<footer class="footer">
  
  <h1 class="footer__item">
  MONTH
  </h1>
  <select class="footer__item">
  <option>
  Jan
  </option>
  <option>
  Feb
  </option>
  </select> 
  

 <h2 class="footer__item">
 Day
 </h2>
 <select class="footer__item">
  <option>
  Fri
  </option>
  </select> 

 <h3 class="footer__item">
Year
 <select class="footer__item">
  <option>
  2021
  <select>
  </option>
  </select> 
 </h3>
 
 <h3 class="footer__item">
Posts by user
 </h3>
  <select class="footer__item">
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
