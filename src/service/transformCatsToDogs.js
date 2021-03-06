const replaceCatToDog = (obj) => {
  const oldFact = obj.text;
  const factArr = oldFact.split(/([^a-zA-Z])/);
  return factArr.map((word) => {
    if ( word === "cat" || word === "lion" || word === "cheetah" || word === "housecat" || word === "gato") {
      return (word = "dog");
    } else if (word === "Cat" || word === "Lion" || word === "Cheetah") {
      return (word = "Dog");
    } else if (word === "cats" || word === "housecats" || word === "cats—" || word === "lions") {
      return (word = "dogs");
    } else if (word === "Cats") {
      return (word = "Dogs");
    } else if (word === "kitten") {
      return (word = "puppy");
    } else if (word === "Kitten") {
      return (word = "Puppy");
    } else if (word === "kittens") {
      return (word = "puppies");
    } else if (word === "dog") {
      return (word = "cat");
    } else if (word === "dogs") {
      return (word = "cats");
    } else {
      return word;
    }
  });
};

export const arrToStringandObj = (obj) => {
  const modifiedFactArr = replaceCatToDog(obj);
  const modifiedFact = modifiedFactArr.join("");
  return { ...obj, modifiedFact: modifiedFact };
};

export const replaceArr = (arr) => {
  return arr.map((obj) => {
    return arrToStringandObj(obj);
  });
};