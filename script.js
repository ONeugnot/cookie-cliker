const countText = document.getElementById("count");
const btnClick = document.getElementById("btn-click");
const newcount = document.querySelector(".new");
const numberadd2 = document.querySelector(".numeradd");
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
				res2++;
				numberadd2.textContent = res2;
				if (res2 > 100) {
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
