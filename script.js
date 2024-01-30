const textArea = document.querySelector("#textarea");
const tagsElement = document.querySelector("#tags");
textArea.focus();

textArea.addEventListener("keyup", (e) => {
  createTags(e.target.value);

  if (e.key === "Enter") {
    randomSelect();
  }
});
function createTags(input) {
  //cannot be an empty string also we are gonna trim white space
  const tags = input
    .split(",")
    .filter((tag) => tag.trim() !== "")
    .map((tag) => tag.trim());
  tagsElement.innerHTML = "";

  tags.forEach((tag) => {
    console.log(tag);
    const tagEl = document.createElement("span");
    console.log(tagEl);
    tagEl.classList.add("tag");
    tagEl.innerText = tag;
    tagsElement.appendChild(tagEl);
  });
}
function randomSelect() {
  const interval = setInterval(() => {
    const randomTag = pickRandomTag();
    highlightTag(randomTag);
    setTimeout(() => {
      unHighlightTag(randomTag);
    }, 100);
  }, 100);

  setTimeout(() => {
    clearInterval(interval);
    setTimeout(() => {
      const randomChoice = pickRandomTag();
      highlightTag(randomChoice);
    }, 100);
  }, 3000);
}
function pickRandomTag() {
  const tags = document.querySelectorAll(".tag");
  return tags[Math.floor(Math.random() * tags.length)];
}
function highlightTag(tag) {
  tag.classList.add("highlight");
}
function unHighlightTag(tag) {
  tag.classList.remove("highlight");
}
