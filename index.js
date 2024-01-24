async function typeSentence(sentence, eleRef, delay = 100) {
    const letters = sentence.split("");
    // console.log(letters)
    let i = 0;
    while (i < letters.length) {
        await waitForMs(delay);
        $(eleRef).append(letters[i]);
        i++;
    }
    return;
}

function waitForMs(ms){
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function deleteSentence(eleRef) {
    const sentence = $(eleRef).html();
    const letters = sentence.split("");
    let i = 0;
    while (letters.length > 0) {
        await waitForMs(100);
        letters.pop();
        $(eleRef).html(letters.join(''));
    }
    return;
}

$(document).ready(async function() {
    // await typeSentence("Darling, it's me!", "#sentence");
    // await waitForMs(2000);
    // deleteSentence("#sentence");
    await carousel(carouselText, '#feature-text')
});

const carouselText = ["landing pages", "everything", "apps", "articles", "presentations", ""];

async function carousel(carouselList, eleRef){
    var i = 0;
    while(true){
        await typeSentence(carouselList[i], eleRef);
        await waitForMs(1500);
        await deleteSentence(eleRef);
        await waitForMs(500);
        i++;
        if(i >= carouselList.length) {
            i = 0;
        }
    }
}

function sliding(no){
    links = ["src/sliding-1.jpg", "src/sliding-2.jpg", "src/sliding-3.jpg", "src/sliding-4.jpg", "src/sliding-5.jpg"];
    text = ["status.absurd.design", "ajames.dev", "neuralnewsroom.com", "reallygoodquestions.co", "mlycken.se"];
    $("#sliding_img").attr("src", links[no - 1]);
    $("#sliding_text").text(text[no - 1]);
    
    for(i = 1; i <= 5; i++){
        if(i == no){
            $(`#sliding_${no}`).addClass("bg-gray-900 w-[10px] h-[10px] mt-2")
        }
        else{
            $(`#sliding_${i}`).removeClass("bg-gray-900 w-[10px] h-[10px] mt-2")
        }
    }
}

let current = 0
places = [0, 702, 1390, 1734]

function moveLeft(){
    --current;
    // console.log(current)
    if(current == 0){
        btn = document.getElementById("left_btn").disabled = true;
    }
    else if(current == 2){
        btn = document.getElementById("right_btn").disabled = false;
    }
    document.getElementById("box").scrollLeft = places[current]
}

function moveRight(){
    ++current;
    // console.log(current)
    if(current == 3){
        btn = document.getElementById("right_btn").disabled = true;
    }
    else if(current == 1){
        btn = document.getElementById("left_btn").disabled = false;
    }
    document.getElementById("box").scrollLeft = places[current]
}

chapters = document.getElementById("chapters");
chapter_title = ["chapter 7", "chapter 6", "chapter 5", "chapter 4", "chapter 3", "chapter 2", "chapter 1", "chapter Y", "chapter X", "intro"];
chapter_body = ["work in progress...<br />the happy human is working on regular updates", "already done!<br />the happy human is working on the new chapter", "already done!<br />the happy human is working on the new chapter", "already done!<br />the happy human is working on the new chapter", "already done!<br />the happy human is working on the new chapter", "already done!<br />the happy human is working on the new chapter", "already done!<br />the happy human is working on the new chapter", "30 exquisite hand-drawn<br />graphic elements to spice up your projects", "30 out-of-this-world<br /> micro-illustrations exclusive to project members"];

for(let i = 0; i < chapter_title.length; i++){
    chapters.innerHTML += `<li
    class="max-w-[350px] h-[575px] border m-4 hover:shadow-2xl hover:duration-500 duration-500 rounded-md shadow-md"
  >
    <div class="menu-box">
      <div class="img">
        <img src="src/menu-${i + 1}.jpg" alt="art-1" class="w-[350px]" />
      </div>
      <div class="content h-auto text-center p-10">
        <h3 class="title text-xl text-black mb-3">${chapter_title[i]}</h3>
        <p class="body text-base text-gray-400 mb-7">
          ${chapter_body[i]}
        </p>
        <button
          class="btn pt-3 pb-3 pl-6 pr-6 rounded-md bg-black text-white relative hover:bottom-1 hover:shadow-2xl hover:duration-1000 duration-1000"
        >
          Preview
        </button>
      </div>
    </div>
  </li>`
}

partners = document.getElementById("partners")
for(let i = 0; i < 12; i++){
    partners.innerHTML += `<li>
    <div
      class="w-36 h-14 flex justify-center items-center pl-6 pr-6"
    >
      <div class="m-auto">
        <img
          src="src/comp-${i + 1}.png"
          alt="company-1"
          class="m-auto"
        />
      </div>
    </div>
  </li>`
}

reviewersName = ["Sara Soueidan", "Andrew Tsao", "Jane Manthorpe", "Vaibhav Khulbe", "Nikka Estefani", "Roberta Potter", "Vasil", "Željko Jake Prša"]
reviewersBody = ["absurd.design surrealist illustrations are anything but absurd! I love them! Art that is right up my alley",
            "Ah, I’ve been such a fan of the absurd illustration series! They're so unique and have so much character to them.",
            "I just love the designs and will be using them in my articles, website and teaching classes.",
            "I used these wonderfully absurd illustrations and they are truly one of a kind! Haven't seen anything like these before. So unique yet so much fun. Thank you for making this.",
            "This illustrations library is like a ‘little museum’ of artworks any user would love to use in their projects. They’re fresh, classy, and extraordinary subjects. Give your audiences an illustration to ponder upon or food for thought once in a while.",
            "That's some real art! The designs are unique and absurd, making them stand out from typical illustrations. I'm already brimming with ideas on how to use them! Thank you for allowing us to access this art - it'll be a great addition to my website, articles, and teaching materials.",
            "I've always liked the absurd illustration series! They're one-of-a-kind and full of personality. I loved utilizing these fantastically hilarious images, which are absolutely unique! I've never seen anything like this before. Such a one-of-a-kind experience that is also a lot of fun. Thank you for putting this together.",
            "Each individual can interpret them in their own way. That makes it so re-usable on so many levels and sites. Already implemented on our site and provided a nice credit in the footer. What can I say, I became a fan instantly.",
            ""]
reviewersPlatform = ["twitter", "twitter", "linkedin", "twitter", "linkedin", "", "", "p"]
box = document.getElementById("box")

for(let i = 1; i <= reviewersName.length; i++){
    box.innerHTML += `<div class="w-[25rem] p-2 m-5">
    <div class="flex text-[18px] font-bold align-middle">
      <img
        src="src/scrolling-1.png"
        alt="person-${i}"
        class="w-12 rounded-full border"
      />
      <h2 class="flex items-center ml-2 tracking-tight">
        ${reviewersName[i - 1]}
      </h2>
    </div>
    <div class="w-[18.2rem] mt-5">
      <p class="text-xl leading-relaxed">
        ${reviewersBody[i - 1]}
      </p>
    </div>
    <div class="mt-6">
      <img
        src="src/${reviewersPlatform[i - 1]}.png"
        alt="${reviewersPlatform[i - 1]}-logo"
        class="w-6 invert-[0.5]"
      />
    </div>
  </div>`
}