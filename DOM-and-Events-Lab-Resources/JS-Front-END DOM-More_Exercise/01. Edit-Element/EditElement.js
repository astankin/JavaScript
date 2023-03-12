function editElement(element, matchElement, replacer) {
  // while (element.textContent.includes(matchElement)){
  //   element.textContent = element.textContent.replace(matchElement, replacer)
  // }
  let pattern = new RegExp(matchElement, 'g');
  element.textContent = element.textContent.replace(pattern, replacer);
}