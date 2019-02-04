var poemData = [];
var keyword = "";

$(()=>{
	$(".start").click(()=>{
		$(".cover").removeClass("cover-hide").addClass("cover-spread");
		setTimeout(()=>{
			$(".start").hide();
			$("#game").show();
			
			// 加载诗词JSON库
			let JSONRead = [];
			let progress = $("#progress");
			JSONRead.push(new Promise((resolve, reject)=>{
				$.getJSON(`./poetry/keyword.json`, (data)=>{
					if(typeof data !== "undefined"){
						keyword = data[Math.floor(Math.random() * data.length)];
						$("#kw").text(keyword);
						console.log(`./poetry/keyword.json loaded`);
						progress.val(progress.val()+1);
						resolve(`./poetry/keyword.json`);
					} else {
						reject(`./poetry/keyword.json not found`);
					}
				});
			}));
			for(let i = 0;i <= 21000;i += 1000){
				JSONRead.push(new Promise((resolve, reject)=>{
					$.getJSON(`./poetry/ci.song.${i}.json`, (data)=>{
						if(typeof data !== "undefined"){
							poemData = poemData.concat(data);
							console.log(`./poetry/ci.song.${i}.json loaded`);
							progress.val(progress.val()+1);
							resolve(`./poetry/ci.song.${i}.json`);
						} else {
							reject(`./poetry/ci.song.${i}.json not found`);
						}
					});
				}));
			}

			for(let i = 0;i <= 254000;i += 1000){
				JSONRead.push(new Promise((resolve, reject)=>{
					$.getJSON(`./poetry/poet.song.${i}.json`, (data)=>{
						if(typeof data !== "undefined"){
							poemData = poemData.concat(data);
							console.log(`./poetry/poet.song.${i}.json loaded`);
							progress.val(progress.val()+1);
							resolve(`./poetry/poet.song.${i}.json`);
						} else {
							reject(`./poetry/poet.song.${i}.json not found`);
						}
					});
				}));
			}
			for(let i = 0;i <= 57000;i += 1000){
				JSONRead.push(new Promise((resolve, reject)=>{
					$.getJSON(`./poetry/poet.tang.${i}.json`, (data)=>{
						if(typeof data !== "undefined"){
							poemData = poemData.concat(data);
							console.log(`./poetry/poet.tang.${i}.json loaded`);
							progress.val(progress.val()+1);
							resolve(`./poetry/poet.tang.${i}.json`);
						} else {
							reject(`./poetry/poet.tang.${i}.json`);
						}
					});
				}));
			}
			Promise.all(JSONRead)
				.then((me)=>{
					console.log(poemData);
					$(".cover").removeClass("cover-spread").addClass("cover-fade");
					setTimeout(()=>$(".cover").hide(), 1000);

					// 输入检查以及时间控制
					let gaming = new Promise((resolve, reject)=>{
						let timer = 0;
						
						const setTimer = ()=>{
							$("#shiju").val("");
							let time = 30;
							timer = setInterval(()=>{
								// Time limit excceed
								if(time === 0){
									clearInterval(timer);
									reject("T");
								}
								$("#time").text(time);
								time--;
							}, 1000);
						}

						setTimer();

						$("#subm").click(()=>{
							let val = "";
							val = $("#shiju").val();
							if(!val.includes(keyword)){
								clearInterval(timer);
								reject("W");
							}
							console.log(val);
							for(let poem of poemData){
								for(let para of poem["paragraphs"]){
									if(para === val){

										// 重置计时器
										clearInterval(timer);

										
										console.log(true);
										$("#shiju").css("color", "#00cc00");
										$("#time").fadeOut(250);
										setTimeout(()=>{
											$("#shiju").css("color", "#000000");
											$("#time").fadeIn(250);
											setTimer();
										}, 1000);

										// 从词库中剔除已使用词句
										poem["paragraphs"].splice(poem["paragraphs"].indexOf(para), 1);
										return;
									}
								}
							}

							// 答案错误
							clearInterval(timer);
							reject("W");
						});
					});
					gaming.catch((re)=>{
						$("#subm").unbind("click");
						console.log(re);
						switch (re){
							case "W": 
							$("#shiju").css("color", "#cc0000");
							break;
							case "T":
							$("#time").css("color", "#cc0000");
						}

						setTimeout(()=>$(".cover").removeClass("cover-fade").addClass("cover-spread"), 3000);
						setTimeout(()=>window.location.reload(), 4000);
					});
				})
				.catch((me)=>{
					console.log(me);
					alert(
`无法成功加载数据。
错误原因：${me}
即将刷新此页面，若问题依旧存在请至https://github.com/LAWArthur/LAWArthur.github.io/issues 上报问题或查找类似情况。`
					);
					window.location.reload();
				});
		}, 1000);
	});
});