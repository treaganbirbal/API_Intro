let APIResponse = {
  "status": "success",
  "message": {
    "affenpinscher": [

    ],
    "african": [

    ],
    "airedale": [

    ],
    "akita": [

    ],
    "appenzeller": [

    ],
    "basenji": [

    ],
    "beagle": [

    ],
    "bluetick": [

    ],
    "borzoi": [

    ],
    "bouvier": [

    ],
    "boxer": [

    ],
    "brabancon": [

    ],
    "briard": [

    ],
    "bulldog": [
      "boston",
      "french"
    ],
    "bullterrier": [
      "staffordshire"
    ],
    "cairn": [

    ],
    "cattledog": [
      "australian"
    ],
    "chihuahua": [

    ],
    "chow": [

    ],
    "clumber": [

    ],
    "cockapoo": [

    ],
    "collie": [
      "border"
    ],
    "coonhound": [

    ],
    "corgi": [
      "cardigan"
    ],
    "cotondetulear": [

    ],
    "dachshund": [

    ],
    "dalmatian": [

    ],
    "dane": [
      "great"
    ],
    "deerhound": [
      "scottish"
    ],
    "dhole": [

    ],
    "dingo": [

    ],
    "doberman": [

    ],
    "elkhound": [
      "norwegian"
    ],
    "entlebucher": [

    ],
    "eskimo": [

    ],
    "frise": [
      "bichon"
    ],
    "germanshepherd": [

    ],
    "greyhound": [
      "italian"
    ],
    "groenendael": [

    ],
    "hound": [
      "afghan",
      "basset",
      "blood",
      "english",
      "ibizan",
      "walker"
    ],
    "husky": [

    ],
    "keeshond": [

    ],
    "kelpie": [

    ],
    "komondor": [

    ],
    "kuvasz": [

    ],
    "labrador": [

    ],
    "leonberg": [

    ],
    "lhasa": [

    ],
    "malamute": [

    ],
    "malinois": [

    ],
    "maltese": [

    ],
    "mastiff": [
      "bull",
      "tibetan"
    ],
    "mexicanhairless": [

    ],
    "mix": [

    ],
    "mountain": [
      "bernese",
      "swiss"
    ],
    "newfoundland": [

    ],
    "otterhound": [

    ],
    "papillon": [

    ],
    "pekinese": [

    ],
    "pembroke": [

    ],
    "pinscher": [
      "miniature"
    ],
    "pointer": [
      "german",
      "germanlonghair"
    ],
    "pomeranian": [

    ],
    "poodle": [
      "miniature",
      "standard",
      "toy"
    ],
    "pug": [

    ],
    "puggle": [

    ],
    "pyrenees": [

    ],
    "redbone": [

    ],
    "retriever": [
      "chesapeake",
      "curly",
      "flatcoated",
      "golden"
    ],
    "ridgeback": [
      "rhodesian"
    ],
    "rottweiler": [

    ],
    "saluki": [

    ],
    "samoyed": [

    ],
    "schipperke": [

    ],
    "schnauzer": [
      "giant",
      "miniature"
    ],
    "setter": [
      "english",
      "gordon",
      "irish"
    ],
    "sheepdog": [
      "english",
      "shetland"
    ],
    "shiba": [

    ],
    "shihtzu": [

    ],
    "spaniel": [
      "blenheim",
      "brittany",
      "cocker",
      "irish",
      "japanese",
      "sussex",
      "welsh"
    ],
    "springer": [
      "english"
    ],
    "stbernard": [

    ],
    "terrier": [
      "american",
      "australian",
      "bedlington",
      "border",
      "dandie",
      "fox",
      "irish",
      "kerryblue",
      "lakeland",
      "norfolk",
      "norwich",
      "patterdale",
      "russell",
      "scottish",
      "sealyham",
      "silky",
      "tibetan",
      "toy",
      "westhighland",
      "wheaten",
      "yorkshire"
    ],
    "vizsla": [

    ],
    "weimaraner": [

    ],
    "whippet": [

    ],
    "wolfhound": [
      "irish"
    ]
  }
}

let breedList = []


let breed = APIResponse.message;
 Object.keys(breed).forEach(dog => {
  if (breed[dog].length) {
    breed[dog].forEach(type => {
      breedList.push(
        type.charAt(0).toUpperCase() +
          type.slice(1) +
          " " +
          (dog.charAt(0).toUpperCase() + dog.slice(1))
      );
    });
  } else {
    breedList.push(dog.charAt(0).toUpperCase() + dog.slice(1));
  }
  return breedList;
})

document.addEventListener("DOMContentLoaded", () => {
let btn = document.querySelector(".button")
let dogName = document.createElement("p")

btn.addEventListener("click", ()=> {

btn.addEventListener("click", () => {
  btn.innerHTML = "Another ONE!"
  let randNum = Math.floor(Math.random() * breedList.length);
  dogName.innerText = breedList[randNum];
  document.body.appendChild(dogName);
    })

  })

})
