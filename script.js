const countText = document.getElementById("count");
const btnClick = document.getElementById("btn-click");
const newcount = document.querySelector(".new");
const numberadd2 = document.querySelector(".numeradd");
const btntwo = document.querySelector(".scnd-btn");
const compteur = document.getElementById("compteur");
const money = document.getElementById("money");
let moneyAdd = 0;
let res = 0;
let res2 = 0;
function clickone() {
	res++;
	moneyAdd += 0.3;
	compteur.textContent = res + "/ 20";
	countText.textContent = res;
	money.textContent = "$" + moneyAdd.toFixed(1);
	if (res > 19) {
		res += 1;
		compteur.textContent = res + "/ 100";
		moneyAdd += 0.9;
		if (res > 99) {
			res += 3;
			moneyAdd += 1.3;
			compteur.textContent = res + "/ 500";
		}
		if (res > 449) {
			res += 16;
			moneyAdd += 1.6;
			compteur.textContent = res + "/ 5000";
		}
	}
}

function autoclicker() {}
btnClick.addEventListener("click", () => {
	clickone();
});
