var special = {};
special.lennypede = "╚═( ͡° ͜ʖ ͡°)═╝\n╚═(███)═╝\n╚═(███)═╝\n.╚═(███)═╝\n..╚═(███)═╝\n…╚═(███)═╝\n…╚═(███)═╝\n..╚═(███)═╝\n.╚═(███)═╝\n╚═(███)═╝\n.╚═(███)═╝\n..╚═(███)═╝\n…╚═(███)═╝\n…╚═(███)═╝\n…..╚(███)╝\n……╚(██)╝\n………(█)\n……….*";
special.doritos = "▼ ◄ ▲ ► ▼ ◄ ▲ ► ▼ ◄ ▲ ► ▼ ◄ ▲ ► ▼ ◄ ▲ ▼ ◄ ▲ ► ▼ ◄ ▲ ► ▼ ◄▼ ◄ ▲ ► ▼ ◄ ▲ ► ▼Sorry, I've dropped my bag of Doritos™ brand chips▲ ► ▼ ◄ ▲ ► ▼ ◄ ▲ ▼ ◄ ▲ ► ▼ ◄ ▲ ► ▼ ◄ ▲ ► ▼ ◄ ▲ ► ▼ ► ▼ ◄ ◄ ▲▲ ► ▼ ◄▼ ◄ ◄ ▼ ◄ ▲ ► ▼ ◄ ▲ ► ▼ ◄ ▲ ► ▼ ◄ ▲ ►";
special.illuminati = "▼ ◄ ▲ ► ▼ ◄ ▲ ► ▼ ◄ ▲ ► ▼ ◄ ▲ ► ▼ ◄ ▲ ▼ ◄ ▲ ► ▼ ◄ ▲ ► ▼ ◄▼ ◄ ▲ ► ▼ ◄ ▲ ► ▼Sorry, I've dropped my bag of Illuminati ▲ ► ▼ ◄ ▲ ► ▼ ◄ ▲ ▼ ◄ ▲ ► ▼ ◄ ▲ ► ▼ ◄ ▲ ► ▼ ◄ ▲ ► ▼ ► ▼ ◄ ◄ ▲▲ ► ▼ ◄▼ ◄ ◄ ▼ ◄ ▲ ► ▼ ◄ ▲ ► ▼ ◄ ▲ ► ▼ ◄ ▲ ►";
special.dongers = "ヽ༼ຈل͜ຈ༽ﾉ ༼ ºل͟º ༽ ୧༼ ͡◉ل͜ ͡◉༽୨ (ง ͠° ل͜ °)ง ヽ༼ຈل͜ຈ༽ﾉ ༼ ºل͟º ༽ ୧༼ ͡◉ل͜ ͡◉༽୨ (ง ͠° ل͜ °)ง ヽ༼ຈل͜ຈ༽ﾉ ༼ ºل͟º ༽ ୧༼ ͡◉ل͜ ͡◉༽୨ (ง ͠° ل͜ °)ง Sorry, I dropped my bag of Dongers. ヽ༼ຈل͜ຈ༽ﾉ ༼ ºل͟º ༽ ୧༼ ͡◉ل͜ ͡◉༽୨ (ง ͠° ل͜ °)ง ヽ༼ຈل͜ຈ༽ﾉ ༼ ºل͟º ༽ ୧༼ ͡◉ل͜ ͡◉༽୨ (ง ͠° ل͜ °)ง ヽ༼ຈل͜ຈ༽ﾉ ༼ ºل͟º ༽ ୧༼ ͡◉ل͜ ͡◉༽୨ (ง ͠° ل͜ °)ง";
special.putglasseson = "(•_•)\n( •_•)>⌐■-■\n(⌐■_■)";

chrome.runtime.onInstalled.addListener(function (details) {
	if (details.reason == "install") {
		chrome.tabs.create({url: chrome.extension.getURL("options/index.html") + "?r=installed"});
	} else if (details.reason == "update") {
		chrome.tabs.create({url: chrome.extension.getURL("options/index.html") + "?r=updated&pv=" + details.previousVersion});
	}
});

document.addEventListener('DOMContentLoaded', function() {
	done = document.getElementById("done");
	done.innerHTML = chrome.i18n.getMessage("info_start");
	var buttons = document.getElementsByTagName("button");
	var handler = function(e) {
		var b = e.target;
		var copyFrom = document.createElement('textarea');
		console.log(copyFrom);
		copyFrom.value = b.id != "" ? special[b.id] : b.innerText;
		document.body.appendChild(copyFrom);
		copyFrom.select();
		document.execCommand('copy', true);
		done.innerHTML = b.innerHTML + chrome.i18n.getMessage("info_copied");
		copyFrom.remove();
		done.style.color = "red";
		done.style.textAlign = "center";
	};
	for (var i = 0; i < buttons.length; i++) {
		buttons[i].addEventListener("click", handler);
	}
});