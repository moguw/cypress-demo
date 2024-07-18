export function getUniqueName(name: string) {
  let radom = new Date().getTime().toString();
  return name + ' ' + radom;
}

export function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
