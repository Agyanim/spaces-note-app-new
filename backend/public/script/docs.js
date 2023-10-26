const userUlElement = document.querySelector("#user-list");
const noteUlElement = document.querySelector("#note-list");
const categoryUlElement = document.querySelector("#category-list");

const sideMenu = [
	{
		id: "user",
		user: [
			{
				id: "u-create",
				title: "Create user",
			},
			{
				id: "u-all",
				title: "Get all user",
			},
			{
				id: "u-id",
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
	{
		id: "note",
		category: [
			{
				id: "category-1",
				title: "Create category",
			},
			{
				id: "category-2",
				title: "Get all category",
			},
			{
				id: "category-2",
				title: "Get category by userId",
			},
			{
				id: "category-2",
				title: "Get category by id",
			},
		],
	},
];

const userMenuList = sideMenu.map((userList) => userList.user);
const noteMenuList = sideMenu.map((noteList) => noteList.note);
const categoryMenuList = sideMenu.map((categoryList) => categoryList.category);

// function to generate the side menu list
function generateListMenu(menu) {
	const endPointMenu = menu.map((menu) => menu);
	let Endpoint = "";
	endPointMenu?.map((menu) => {
		const result = menu?.map((menu) => menu);
		result?.forEach((menuList) => {
			Endpoint += `<li class="end-point-list"><a href="#${menuList.id}">${menuList.title}</a></li>`;
		});
	});
	return Endpoint;
}

userUlElement.innerHTML = `${generateListMenu(userMenuList)}`;
noteUlElement.innerHTML = `${generateListMenu(noteMenuList)}`;
categoryUlElement.innerHTML = `${generateListMenu(categoryMenuList)}`;


