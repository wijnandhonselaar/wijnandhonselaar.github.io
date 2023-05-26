// import data from './reaction_gifs.json' assert { type: 'json' };

const data = [ 
    {
        "url": "https://c.tenor.com/9jCSpH-c1zwAAAAM/fuckit-nosacrifice.gif",
        "name": "Fuck it",
        "tags": "fuck-it"
    },
    {
        "url": "https://c.tenor.com/6QafNKfzQo4AAAAd/fuck-this-fuck-that.gif",
        "name": "fuck this, fuck that",
        "tags": "fuck-this-fuck-that"
    },
    {
        "url": "https://64.media.tumblr.com/0b37c97f0c332c0db719a2e6c253802b/9c02191918019e5b-62/s500x750/84e6d7b64c365a90b3c6b69265fa824257e662a8.gifv",
        "name": "Research",
        "tags": "research"
    },
    {
        "url": "http://i.imgur.com/RsnnQfA.gif",
        "name": "Adventure? No.",
        "tags": "no-adventure"
    },
    {
        "url": "https://c.tenor.com/l0KvlLaylzoAAAAC/",
        "name": "Mission Accomplished",
        "tags": "mission-accomplished"
    },
    {
        "url": "https://c.tenor.com/SPK9eO-kyWcAAAAC/star-wars-admiral-ackbar.gif",
        "name": "It's a trap",
        "tags": "star-wars,admiral-ackbar,trap"
    },
    {
        "url": "https://thumbs.gfycat.com/RemorsefulJointBlacklab-size_restricted.gif",
        "name": "BAM, take that",
        "tags": "take-that"
    },
    {
        "url": "https://c.tenor.com/WJg8K-uiZBIAAAAM/oh-yeah-dance.gif",
        "name": "Oh yeah, oneal",
        "tags": "oh-yeah,oneal"
    },
    {
        "url": "https://c.tenor.com/QLvl5X6I4CQAAAAC/oh-yeah.gif",
        "name": "Oh yeah, Ace Vent",
        "tags": "oh-yeah,ace,ventura"
    },
    {
        "url": "https://media4.giphy.com/media/tItIlCGySM0ieKKW6b/200.gif",
        "name": "Oh yeah",
        "tags": "oh-yeah,masculine-guy"
    },
    {
        "url": "https://c.tenor.com/gv9tLejGAiMAAAAM/austin-powers-mike-myers.gif",
        "name": "Oh yeah baby",
        "tags": "oh-yeah-baby,mike,myers,austin-powers"
    },
    {
        "url": "https://media0.giphy.com/media/3o7bu1iM5MSwG2y7NS/giphy.gif",
        "name": "Oh behave",
        "tags": "oh-behave,mike,myers,austin-powers"
    },
    {
        "url": "https://c.tenor.com/ImETzu9I3r8AAAAd/brooklyn-nine.gif",
        "name": "Go me, Captain Holt",
        "tags": "go-me,captain-holt,9-9,brooklyn-nine-nine"
    },
    {
        "url": "https://66.media.tumblr.com/3f60cff69a4faf3d6ad743f894f4533b/tumblr_no9qp2pLqp1tfbtrwo1_400.gif",
        "name": "Cant keep straight face",
        "tags": "straight-face,captain-holt,9-9,brooklyn-nine-nine"
    },
    {
        "url": "https://c.tenor.com/SaY2hiXnz_kAAAAM/im-the-captain-now-captain.gif",
        "name": "I'm the captain now",
        "tags": "captain"
    },
    {
        "url": "https://media0.giphy.com/media/Id1Ay5MD5IsF6Or51v/200w.gif?cid=82a1493b1ngiu08fygu9gd1snojcblmj5f4y05z57oqsddjg&rid=200w.gif&ct=g",
        "name": "Ron Burgundy, You win",
        "tags": "you-win,ron,burgundy,anchorman"
    },
    {
        "url": "https://c.tenor.com/wHHMKOCQTQwAAAAM/nope-dont-like-that.gif",
        "name": "Nope",
        "tags": "nope,office,michael,scott"
    },
    {
        "url": "https://c.tenor.com/zM15ZrNYp0QAAAAM/no-michael-scott.gif",
        "name": "God no",
        "tags": "god-no,no,office,michael,scott"
    },
    {
        "url": "https://c.tenor.com/mJLJcY_EA1IAAAAC/simpsons-homer.gif",
        "name": "Why you little",
        "tags": "simpsons,homer,why-you-little,angry"
    },
    {
        "url": "https://giphy.com/gifs/TzcHD4AkDogNwB6daq",
        "name": "Broken",
        "tags": "broken,changes,unsuccessful"
    },
    {
        "url": "https://media.giphy.com/media/HNxPO2R0TIQqExoBNJ/giphy.gif",
        "name": "Ops Coins",
        "tags": "dev-ops,monospace,coins,earned,reward"
    },
    {
        "url": "https://media2.giphy.com/media/rfRUILO7sx9Be/200w.gif?cid=82a1493b0jrkom1oaabuabern8e2drdv8bq2xvk8dmsdluqm&rid=200w.gif&ct=g",
        "name": "Professor Chaos",
        "tags": "professor-chaos,southpark,butters"
    },
    {
        "url": "https://c.tenor.com/aMBJWW6TV9sAAAAM/southpark-gone.gif",
        "name": "Aaaaand it's gone",
        "tags": "southpark,bank,gone"
    },
    {
        "url": "https://media0.giphy.com/media/i1Ncqbhk9GzZK/200.gif",
        "name": "No mercy, revenge!",
        "tags": "no-mercy,revenge,taken"
    },
    {
        "url": "https://i.pinimg.com/originals/52/d1/a7/52d1a725e40cc4d579cac17a5191955a.gif",
        "name": "Food!",
        "tags": "lord-of-the-rings,hobbits,lunch,dinner,breakfast,second-breakfast,elevensies"
    },
    {
        "url": "https://thumbs.gfycat.com/WaryDecentIbisbill-size_restricted.gif",
        "name": "We do not stop",
        "tags": "aragorn,lord-of-the-rings,hobbits,lunch,dinner,breakfast,second-breakfast,elevensies"
    },
    {
        "url": "https://media2.giphy.com/media/3oeSAz6FqXCKuNFX6o/giphy.gif",
        "name": "Good luck",
        "tags": "star-wars,han,solo,good-luck"
    },
    {
        "url": "https://c.tenor.com/d8fG2J6pkAUAAAAM/friends-chandler.gif",
        "name": "Good luck",
        "tags": "good-luck,friends,chandler"
    },
    {
        "url": "https://giffiles.alphacoders.com/801/80155.gif",
        "name": "Building new Release Version",
        "tags": "build,chaos,explosions,jack,sparrow,pirates"
    },
    {
        "url": "https://media.giphy.com/media/GgcusW5RLS9Nu/giphy.gif",
        "name": "Challenge Accepted",
        "tags": "barney,how-i-met-your-mother,challenge,accepted"
    },
    {
        "url": "https://media3.giphy.com/media/PnggNmuamz7kbgfUTL/giphy.gif",
        "name": "Ok boomer",
        "tags": "boomer,ok,office,michael,scott"
    },
    {
        "url": "https://i.kym-cdn.com/photos/images/original/001/473/877/421.gif",
        "name": "Some may die, it's a risk I'm willing to take",
        "tags": "some-may-die,risk-i-m-willing-to-take,shrek,lord,farquaad"
    },
    {
        "url": "https://c.tenor.com/4taYWFg1U6AAAAAM/sacrifice-shrek.gif",
        "name": "A sacrifice I'm willing to make",
        "tags": "sacrifice,willing-to-take,shrek,lord,farquaad"
    },
    {
        "url": "https://i.gifer.com/origin/f2/f21d50505a138bcf49ac70ef6bf5ee9b.gif",
        "name": "Captain Jack, thanks",
        "tags": "captain,jack,sparrow,pirates,thanks"
    },
    {
        "url": "https://c.tenor.com/phiPtqMESvkAAAAC/obama-mic-drop.gif",
        "name": "Mic Drop",
        "tags": "obama,mic-drop"
    },
    {
        "url": "https://c.tenor.com/WeFFDuZPbaIAAAAC/disappointment-disappointment-sigh.gif",
        "name": "Disappointing sigh",
        "tags": "disappointing,sigh"
    },
    {
        "url": "https://media4.giphy.com/media/3oAt21Fnr4i54uK8vK/200w.gif?cid=82a1493brkr12upfhkm3ruv4dl1yy0v1iyx3ym86m2zovonj&rid=200w.gif&ct=g",
        "name": "Disappointeeeddd!!!",
        "tags": "disappointed"
    },
    {
        "url": "https://media1.giphy.com/media/OsItQTbcxuIyQ/200w.gif?cid=82a1493b7ks3edgz9j0gqcf163woywmhxu4dxbi70jlmi41a&rid=200w.gif&ct=g",
        "name": "Lunch, taters",
        "tags": "lord-of-the-rings,hobbits,lunch,taters,potatoes,stew,mash"
    },
    {
        "url": "https://c.tenor.com/kNwZslnPna8AAAAC/michael-scott-steve-carell.gif",
        "name": "Cringe",
        "tags": "cringe,michael,scott,steve,carell"
    },
    {
        "url": "https://media0.giphy.com/media/TuZ8v66TzGeYJW23as/200.gif",
        "name": "Dwight getting ready",
        "tags": "office,dwight,getting-ready"
    },
    {
        "url": "https://media4.giphy.com/media/JPmmPuewYBh8qhpZno/200.gif?cid=95b27944e44ae2530f8c9c7771560c9746457b3a57373f3c&rid=200.gif&ct=g",
        "name": "You are good",
        "tags": "house,you-are-good,hugh,laurie"
    },
    {
        "url": "https://giphy.com/gifs/Nx85vtTY70T3W",
        "name": "Busy right now",
        "tags": "busy,spongebob"
    },
    {
        "url": "https://media4.giphy.com/media/cYgCX9axpoe2hPPTMt/giphy.gif",
        "name": "Shh!",
        "tags": "shh,quiet,silence"
    },
    {
        "url": "https://c.tenor.com/AeqIRGBWIzAAAAAC/please-eric-cartman.gif",
        "name": "Please be there",
        "tags": "please,eric,cartman,southpark"
    },
    {
        "url": "https://media4.giphy.com/media/3o6wNN1o3cWHdcueVa/giphy.gif",
        "name": "She's gonna blow",
        "tags": "gonna-blow,can-t-hold-it,spongebob"
    },
    {
        "url": "https://c.tenor.com/hnI-Ym8U41QAAAAC/breaking-my-balls-break-balls.gif",
        "name": "Breaking my balls",
        "tags": "cartman,eric,southpark,breaking-my-balls"
    },
    {
        "url": "https://media4.giphy.com/media/29Zaw6AadvjjZPqTUy/200.gif",
        "name": "We must work together",
        "tags": "biden,work-together,together"
    },
    {
        "url": "https://media3.giphy.com/media/3o84szW0PrWZyUv0mA/200.gif",
        "name": "The chosen one",
        "tags": "chosen-one,matrix,neo,morpheus"
    },
    {
        "url": "https://c.tenor.com/idMbLvxhzIEAAAAC/some-men-just-want-to-watch-the-world-burn-batman.gif",
        "name": "Some met just want to watch the world burn",
        "tags": "batman,some-men-just-want-to-watch-the-world-burn,burn,world"
    },
    {
        "url": "https://media0.giphy.com/media/KeEnqOWYF7tgE4uPyL/200w.gif?cid=82a1493byezt8xsfwc6x6px5742yljkrhdxy872r5s060jek&rid=200w.gif&ct=g",
        "name": "Lunchtime",
        "tags": "lunch,time,cartoon-network,tom-and-jerry"
    },
    {
        "url": "https://c.tenor.com/BfGFYekoftQAAAAC/spongebob-squarepants-spongebob.gif",
        "name": "Imagination",
        "tags": "spongebob,imagination"
    },
    {
        "url": "https://c.tenor.com/518P-3YD5ugAAAAM/light-weight.gif",
        "name": "Light weigth",
        "tags": "light-weight,ronnie,coleman"
    },
    {
        "url": "https://c.tenor.com/onnmKSXLCvkAAAAC/the-one-he-is-the-one.gif",
        "name": "He is the one",
        "tags": "he-is-the-one,matrix,neo,morpheus"
    },
    {
        "url": "https://media.giphy.com/media/eIm624c8nnNbiG0V3g/giphy.gif",
        "name": "Dodged a bullet there",
        "tags": "dodged,bullet,neo,matrix"
    },
    {
        "url": "https://media0.giphy.com/media/dbtDDSvWErdf2/200.gif",
        "name": "Minding my own business, fire",
        "tags": "fire,the-it-crowd"
    },
    {
        "url": "https://c.tenor.com/K54zAm2CQnIAAAAM/itcrowd.gif",
        "name": "Put it with the rest of the fire",
        "tags": "fire,the-it-crowd,with-the-rest-of-the-fire"
    },{
        "url": "https://media1.giphy.com/media/RywZsoVyGpHmE/200.gif",
        "name": "Gourmet shit",
        "tags": "gourmet-shit,pulp-fiction,samuel-l-jackson"
    },{
        "url": "https://media.giphy.com/media/LcfBYS8BKhCvK/giphy.gif",
        "name": "Hack time",
        "tags": "hack-time,"
    }];
  
function search() {
    const searchTerm = document.getElementById("searchInput").value.toLowerCase();
    const results = [];

    for (let i = 0; i < data.length; i++) {
        const item = data[i];

        // Convert object values to lowercase for case-insensitive search
        const values = Object.values(item).map(value => value.toString().toLowerCase());

        if (values.some(value => value.includes(searchTerm))) {
        results.push(item);
        }
    }

    displayResults(results);
}

function copyUrl(url) {
    navigator.clipboard.writeText(url)
}

function displayResults(results) {
    const resultsDiv = document.getElementById("results");
    resultsDiv.innerHTML = "";

    if (results.length === 0) {
        resultsDiv.textContent = "No results found.";
        return;
    }

    for (let i = 0; i < results.length; i++) {
        const item = results[i];
        const itemDiv = document.createElement("div");
        itemDiv.textContent = `Name: ${item.name}`;
        const imageEl = document.createElement('img');
        imageEl.setAttribute('src', item['url']);
        imageEl.setAttribute('onClick', "copyUrl('" + item.url+ "')");
        itemDiv.appendChild(imageEl);
        resultsDiv.appendChild(itemDiv);
    }
}
  
// let calculating_timeout = null;
// document.getElementById('search_input').onchange((event) => {
//     clearTimeout();
//     calculating_timeout = setTimeout(search, 200);
// })

// function search(input) {
//     let results = [];
//     data.forEach(gif => {
//         let matches = [];
//         matches.push(gif.tags.match(input));
//         matches.push(gif.name.match(input));
//         matches.push(gif.url.match(input));
//         console.log(matches);
//     });
//     console.log(results);
// }

// function clearTimeout() {
//     calculating_timeout = null;
// }
// const string = "This is a sample string containing some text.";
// const pattern = /sample/; // Regex pattern to match the word "sample"

// const match = string.match(pattern); // Returns an array of matches

// if (match) {
//   console.log("Match found:", match[0]); // Access the matched text
// } else {
//   console.log("No match found.");
// }