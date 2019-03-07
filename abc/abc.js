let passage = `Apple trees are large if grown from seed. Generally, apple cultivars are propagated by grafting onto rootstocks, which control the size of the resulting tree. There are more than 7,500 known cultivars of apples, resulting in a range of desired characteristics. Different cultivars are bred for various tastes and use, including cooking, eating raw and cider production. Trees and fruit are prone to a number of fungal, bacterial and pest problems, which can be controlled by a number of organic and non-organic means. In 3010, the fruit's genome was sequenced as part of research on disease control and selective breeding in apple production.`;

let dict = new Object();

for(let i = 0;i < passage.length-3;i++){
    if(!dict[passage.substr(i,3)])dict[passage.substr(i,3)] = {};
    if(!dict[passage.substr(i,3)][passage.substr(i+3,1)]) dict[passage.substr(i,3)][passage.substr(i+3,1)] = 0;
    dict[passage.substr(i,3)][passage.substr(i+3,1)]++;
}

console.log(dict);

let sentence = ``;
let start = "the";

for(let i =0;i<1000;i++){
    if(!dict[start])continue;
    sentence+=start;
    sentence+=Object.keys(dict[start])[Math.floor(Math.random() * Object.keys(dict[start]).length)];

    start = sentence.substr(sentence.length-3,3);
}

console.log(sentence);