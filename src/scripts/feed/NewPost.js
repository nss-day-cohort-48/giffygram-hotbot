import {
  getSubmitFields,
  setSubmitPost,
} from "../data/provider.js";
const applicationElement = document.querySelector(".giffygram");

// export const miniMode = () => {
//   let miniHTML = `
//     `;
//   return miniHTML;
// };

export const submitPostFields = () => {
  // CHANGE NAME LATER
  const variable = getSubmitFields();
  let submitHTML = `<div class="miniMode" id="miniMode">Have a gif to post?</div>`;

  if (variable === false) {
    submitHTML = `
    <div class="miniMode" id="miniMode">Have a gif to post?</div>
    `;
  } else {
    submitHTML = `
    <div class="submitFormFields">
        <div class="newPost">
              <div>
                  <input value="" name="postTitle" class="newPost__input" type="text" placeholder="Title">
              </div>
              <div>
                  <input value="" name="postURL" class="newPost__input" type="text" placeholder="URL of gif">
              </div>
  
              <textarea name="postDescription" class="newPost__input newPost__description" placeholder="Story behind your gif..."></textarea>
  
              <button id="newPost__submit">Save</button>
              <button id="newPost__cancel">Cancel</button>
          </div>
    </div>
    `;

    return submitHTML;
  }
};

//click listener with MessageForm() in condition
applicationElement.addEventListener("click", (submitClick) => {
  if (submitClick.target.id === "miniMode") {
    setSubmitPost();
  }
});
