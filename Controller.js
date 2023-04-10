class Controller {
    constructor() {
        this.inputContador = document.querySelector(".align-itens input");
        this.init();
    }

    init() {
        document.querySelector(".subtrair").addEventListener("click",() => {
            let contador = Number(this.inputContador.value);
            contador--;
            this.inputContador.value = "" + contador;
            this.disabledButtonCount();
            this.disabledButtonSubmit();
        })
        document.querySelector(".somar").addEventListener("click",() => {
            let contador = Number(this.inputContador.value);
            contador++;
            this.inputContador.value = "" + contador;
            this.disabledButtonCount();
            this.disabledButtonSubmit();
        })
        document.querySelector(".align-itens input").addEventListener("change", () => {
            this.disabledButtonCount();
        })
        document.addEventListener("change", () => {
            this.disabledButtonSubmit();
        })
        document.querySelector(".footer button").addEventListener("click", (e) => {
            e.preventDefault();
            document.querySelector(".footer p").style = "display: block"
        })
    }

    disabledButtonCount() {
        if(this.inputContador.value > 0) {
            document.querySelector(".subtrair").disabled = false;
            this.inputContador.style = "background: #FFFFFF; border: 1px #2F3676 solid;";
        } else {
            document.querySelector(".subtrair").disabled = true;
            this.inputContador.style = "background: #F59393; border: 1px  #F33232 solid;";
        }
    }
    disabledButtonSubmit() {
        let checkbox = document.querySelectorAll(".form-check input");
        let semaforo = false;
        checkbox.forEach(element => {
            if(element.checked) {
                semaforo = element.checked;
            }
        });
        if(this.inputContador.value > 0 && document.querySelector("textarea").value !== "" && semaforo){
            document.querySelector(".footer button").disabled = false;
        }
        else {
            document.querySelector(".footer button").disabled = true;
        }
    }
}