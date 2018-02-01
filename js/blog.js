var blog = [

	{
		title : "Week One", 
        
		date : "Jan 2, 2018", 
        
        
		content : "For our first week at NSS, the first cohort of UX Design, started with a challenge. In two minutes or less, present a character from childhood you had once loved. We had some cute choices from our cohort: Winnie the Pooh was one, Peter Parker another, Charlie Brown; we (the aptly named Agile Snails) chose Angelica Pickles from the Nickelodeon show, the Rugrats.</br>With Angelica, of course, we had a clear memory of her prior conduct on the show. As a rather manipulative four year old, she loved to play with her four other companions in a day care run by her otherwise unemployed Uncle, and perpetually tired Grandfather. When not aware of her machinations, she’d torment her playmates. From this character we devised the following persona:</br>Personality/Demographics:</br>Upper middle class</br>3-4 yrs old</br>Showmanship, braggart, likes deranged looking dolls, hates diaper wearing babies</br>Penchant for cruelty and manipulation</br>Key Behaviors:</br>- Loves dollar and doll houses</br>- Sadistic, perhaps sociopathic</br>- loves attention</br>- Family centered, spoiled</br>Needs / Functions:</br>- likes to look pretty</br>- likes to bully</br>- intense compulsion to exact vengeance</br>Goals:</br></br>- tormenting Tommy Pickles and Chucky</br>- causing trouble for others</br></br>A notably dark persona to design for, but this was a first for us and we went wild. In addition to making a website out of nowhere, we also had to devise products. Some gems included “baby-tracker” (guess what that one does) or “DADDY!”, a parent notification site the emails, Facebook messages,  or Tweets at Angelica’s father to pay attention to his spoiled daughter. From this we decided the company had to be as equally menacing, but professional."
    
	},
    
	{
		title : "Week Two", 

		date : "Jan ##, 2018", 

		content : "Duis proident dolor consequat veniam labore. Aliqua id cupidatat pariatur sunt cillum reprehenderit amet consectetur est. Reprehenderit culpa ad consectetur incididunt anim et aliqua ad eiusmod fugiat Lorem eiusmod dolore laboris.Deserunt sint anim anim enim mollit culpa id reprehenderit non aliqua proident cillum deserunt esse. Est do sunt sint ea sunt amet nostrud ipsum eiusmod proident do ut sit sint. In est nostrud tempor dolore excepteur sit mollit id qui incididunt officia. Duis duis elit amet ullamco mollit non. Velit commodo aliqua voluptate duis ex ea velit aliquip. Enim fugiat consequat ut sunt excepteur pariatur cupidatat et adipisicing labore magna eiusmod non. Eiusmod mollit cupidatat aute dolor. Culpa velit anim do amet officia tempor consectetur eiusmod esse officia consectetur Lorem. Id consequat esse consectetur minim irure ad minim. Reprehenderit voluptate incididunt cillum pariatur ex voluptate id laboris mollit fugiat ut eiusmod amet incididunt. Nisi eu duis consectetur ea eiusmod."
	},


	{

		title : "Week Three",

		date : "Jan ##, 2018",

		content : "Ullamco laboris magna ut aute reprehenderit laborum nisi. Aliqua irure sint aliqua pariatur exercitation cupidatat ipsum aliqua. Pariatur aute non non commodo commodo ad. Amet reprehenderit eiusmod irure commodo est. Exercitation pariatur laborum deserunt eiusmod exercitation voluptate ut.Ut minim cupidatat quis consequat. Dolor non nostrud anim excepteur quis ullamco mollit ea eiusmod nulla deserunt aliqua deserunt proident. Nulla aute consequat nisi anim. Et ea voluptate et enim nostrud proident pariatur culpa id minim. Esse dolor fugiat duis minim duis commodo excepteur sit aliqua.Deserunt aliquip fugiat Lorem id dolor aliqua dolor aliquip. Ex incididunt aute consectetur dolor adipisicing ea enim aute labore dolore ad ad id. Laboris nulla duis laboris aliqua. Amet qui ex minim ullamco sunt incididunt in exercitation quis do quis officia. Eiusmod laborum ipsum velit ea culpa qui aliquip anim pariatur eiusmod Lorem pariatur exercitation. Nulla voluptate irure nostrud mollit."
	},

	{

		title : "Week Four",

		date : "Jan ##, 2018",

		content : "Ullamco laboris magna ut aute reprehenderit laborum nisi. Aliqua irure sint aliqua pariatur exercitation cupidatat ipsum aliqua. Pariatur aute non non commodo commodo ad. Amet reprehenderit eiusmod irure commodo est. Exercitation pariatur laborum deserunt eiusmod exercitation voluptate ut.Ut minim cupidatat quis consequat. Dolor non nostrud anim excepteur quis ullamco mollit ea eiusmod nulla deserunt aliqua deserunt proident. Nulla aute consequat nisi anim. Et ea voluptate et enim nostrud proident pariatur culpa id minim. Esse dolor fugiat duis minim duis commodo excepteur sit aliqua.Deserunt aliquip fugiat Lorem id dolor aliqua dolor aliquip. Ex incididunt aute consectetur dolor adipisicing ea enim aute labore dolore ad ad id. Laboris nulla duis laboris aliqua. Amet qui ex minim ullamco sunt incididunt in exercitation quis do quis officia. Eiusmod laborum ipsum velit ea culpa qui aliquip anim pariatur eiusmod Lorem pariatur exercitation. Nulla voluptate irure nostrud mollit."
	},
	{

		title: "Week Five",

		date: "Jan ##, 2018",

		content: "Ullamco laboris magna ut aute reprehenderit laborum nisi. Aliqua irure sint aliqua pariatur exercitation cupidatat ipsum aliqua. Pariatur aute non non commodo commodo ad. Amet reprehenderit eiusmod irure commodo est. Exercitation pariatur laborum deserunt eiusmod exercitation voluptate ut.Ut minim cupidatat quis consequat. Dolor non nostrud anim excepteur quis ullamco mollit ea eiusmod nulla deserunt aliqua deserunt proident. Nulla aute consequat nisi anim. Et ea voluptate et enim nostrud proident pariatur culpa id minim. Esse dolor fugiat duis minim duis commodo excepteur sit aliqua.Deserunt aliquip fugiat Lorem id dolor aliqua dolor aliquip. Ex incididunt aute consectetur dolor adipisicing ea enim aute labore dolore ad ad id. Laboris nulla duis laboris aliqua. Amet qui ex minim ullamco sunt incididunt in exercitation quis do quis officia. Eiusmod laborum ipsum velit ea culpa qui aliquip anim pariatur eiusmod Lorem pariatur exercitation. Nulla voluptate irure nostrud mollit."
	}

]; 

let element = document.getElementsByClassName("blog")[0]; // Gets position of insertion in "blog" article

for (var i = 0; i < blog.length; i++){ //Insert blog content here
	element.innerHTML += `<div class="blog-card">
    <div class="post-title">
    ${blog[i].title}
    </div>`;
	element.innerHTML += `<div class="post">
    ${blog[i].content}
    </div> 
    </div>`;
}





