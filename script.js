const countText = document.getElementById("count");
const btnClick = document.getElementById("btn-click");
const newcount = document.querySelector(".new");
const numberadd2 = document.querySelector(".numeradd");
const btntwo = document.querySelector(".scnd-btn");
const compteur = document.getElementById("compteur");
let res = 0;
let res2 = 0;
function clickone() {
	res++;
	compteur.textContent = res + "20";
	countText.textContent = res;
	if (res > 19) {
		res += 1;
		compteur.textContent = res + "100";
		if (res > 99) {
			res += 3;
			compteur.textContent = res + "500";
		}
	} else return;
}

btnClick.addEventListener("click", () => {
	clickone();
});
