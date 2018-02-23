class Sorter {

    /**
     * Creates Instance of Class
     *
     * @returns {Sorter}
     */
  constructor() {
    this.elements = [];
		this.compareFunction = (a, b) => a - b;
    return this;
  }

  add(element) {
    this.elements.push(element);
  }

  at(index) {
    return this.elements[index];
  }

  get length() {
    return this.elements.length;
  }

  toArray() {
    return this.elements;
  }

  sort(indices) {
      indices.sort();
	  let arr = this.elements.filter((v, i) => indices.indexOf(i) != -1).sort(this.compareFunction);

	  this.elements.forEach((v, i, elem) => {
		  if (indices.indexOf(i) != -1) {
		    elem[i] = arr[indices.indexOf(i)];
	    }
	  });
  }

  setComparator(compareFunction) {
	  this.compareFunction = compareFunction;
  }
}

module.exports = Sorter;