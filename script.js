const countText = document.getElementById("count");
const btnClick = document.getElementById("btn-click");
const newcount = document.querySelector(".new");
const btn = document.querySelector(".scnd-btn");

function clickone() {
	let res = 0;
	btnClick.addEventListener("click", () => {
		res++;
		countText.textContent = res;
		if (res > 19) {
			newcount.style.display = "flex";
			btnClick.disabled = true;

			btn.addEventListener("click", () => {
				let res2 = 0;
				res++;
				newcount.textContent = res;
				if (res > 100) {
					anothorBtn.style.display = "flex";
					scndBtn.disabled = true;
				}
			});
		} else {
			btnClick.disabled = false;
		}
	});
}
clickone();
