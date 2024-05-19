const getRandom = (a,b) => Math.floor(Math.random() * (b-a+1) + a);
const getData = async () => {
    var rawdata1 = await fetch("https://type.fit/api/quotes");
    var rawdata2 = await fetch("https://api.quotable.io/quotes");
    var data1 = await rawdata1.json();
    var data2 = await rawdata2.json();
    data2=data2.results;
  
    var text = document.getElementsByClassName("text");
    var auth = document.getElementsByClassName("auth");
    var box =  document.getElementsByClassName("box");

    for (let i=0; i<box.length; i++) {
        let z = getRandom(1,2);
        if (z==1) {
            let x = getRandom(0,15);
            text[i].textContent = `${i+1}: ` + data1[x].text;
            let y = data1[x].author.replace(", type.fit","").replace("type.fit","Unknown");
            auth[i].textContent = "-"+y;
            box[i].title = "API Number: 1";
        } else {
            let x = getRandom(0,20);
            text[i].textContent = `${i+1}: ` + data2[x].content;
            let y = data2[x].author;
            auth[i].textContent = "-"+y;
            box[i].title = "API Number: 2";
        }
    }
};

getData();
