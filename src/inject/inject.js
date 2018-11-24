chrome.extension.sendMessage({}, function(response) {
	var readyStateCheckInterval = setInterval(function() {
		if (document.readyState === "complete" && document.querySelector('#podcastDownload').getAttribute("style")) {
			clearInterval(readyStateCheckInterval);

			function isDownloadable(element){
				return !element.getAttribute("style").includes("hidden");
			}

			// todo add gh link here to log issues
			console.log("[+] hello there :-) ");
			console.log("[+] log issues @ https://github.com/jiachen247/NUSCastDownloader");

			/*
				JQuery Impl
				$("#podcastDownload").attr({
					style: "display: inline-block;",
					target: "_blank",
					href: $("meta[name='twitter:player:stream']").attr("content")
				});
			*/
			
			const e = document.querySelector('#podcastDownload');

			if(!isDownloadable(e)){
				e.setAttribute("style", "display: inline-block;");
				e.setAttribute('target', '_blank');
				e.setAttribute('href', document.querySelector("meta[name='twitter:player:stream']").getAttribute("content"));
			}
		}
	}, 10);
});