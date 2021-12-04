const listItems = document.querySelectorAll('li.item');

console.log(`Number of categories : ${listItems.length}`);

const ul = document.querySelectorAll('#categories > li');
ul.forEach(element => {

  console.log(
      `Category: ${element.firstElementChild.textContent}
 Elements: ${element.lastElementChild.children.length}`,
  );
});