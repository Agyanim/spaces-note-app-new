const userUlElement = document.querySelector("#user-list");
const noteUlElement = document.querySelector("#note-list");
const categoryUlElement = document.querySelector("#category-list");
const createUserBtnElement = document.querySelector(
	"#u-create-response-toggle-btn"
);
const createUserResponseContentElement = document.querySelector(
	"#u-create-response-content"
);

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
				id: "create-note",
				title: "Create note",
			},
			{
				id: "get-all-note",
				title: "Get all note",
			},
			{
				id: "get-note-UserId",
				title: "Get note by userId",
			},
			{
				id: "note-2",
				title: "Get note by id",
			},
		],
	},
	{
		id: "category",
		category: [
			{
				id: "create-category",
				title: "Create category",
			},
			{
				id: "get-all-category",
				title: "Get all category",
			},
			{
				id: "get-category-userId",
				title: "Get category by userId",
			},
			{
				id: "get-category-id",
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

createUserBtnElement.addEventListener("click", () => {
	createUserResponseContentElement.classList.toggle("show-output")
	if (createUserBtnElement.textContent.trim() ==="Show output") {
		createUserBtnElement.textContent = "Hide output";
	} 
	else if(createUserBtnElement.textContent.trim() == "Hide output") {
		createUserBtnElement.textContent = "Show output";
	}
});
