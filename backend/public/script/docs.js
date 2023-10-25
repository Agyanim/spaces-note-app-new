const userUlElement = document.querySelector("#user");
const noteUlElement = document.querySelector("#note");

const sideMenu = [
	{
		id: "user",
		user: [
			{
				id: "user-1",
				title: "Create user",
			},
			{
				id: "user-2",
				title: "Get all user",
			},
			{
				id: "user-3",
				title: " Get user by id",
			},
		],
	},
	{
		id: "note",
		note: [
			{
				id: "note-1",
				title: "Create note",
			},
			{
				id: "note-2",
				title: "Get all note",
			},
			{
				id: "note-2",
				title: "Get note by userId",
			},
			{
				id: "note-2",
				title: "Get note by id",
			},
		],
	},
];

const userMenuList = sideMenu.map((userList) => userList.user);
const noteMenuList = sideMenu.map((noteList) => noteList.note);

// function to generate the side menu list
function generateListMenu(menu) {
	const endPointMenu = menu.map((menu) => menu);
	let Endpoint = "";
	endPointMenu?.map((menu) => {
		const result = menu?.map((menu) => menu);
		result?.forEach((menuList) => {
			Endpoint += `<li class="end-point-list" id="${menuList.id}"><a href="#4">${menuList.title}</a></li>`;
		});
	});
	return Endpoint;
}

userUlElement.innerHTML = `${generateListMenu(userMenuList)}`;
noteUlElement.innerHTML = `${generateListMenu(noteMenuList)}`;


