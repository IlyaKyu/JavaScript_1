function calculateFormula(x, y, z) {
	var result = Math.log(Math.abs((y - Math.sqrt(Math.abs(x))) * (x - (y / (z + x / 4)))));
	return result;
  }