/* Descrizione:
Rifare l'esercizio dello slider come fatto assieme in classe.
Bonus:
Applicare l'autoplay allo slider: ogni 3 secondi, cambia immagine automaticamente. */

const app = new Vue({
    el: "#app",
    data: {
        images: [
            "./images/image1.jpg",
            "./images/image2.jpg",
            "./images/image3.jpg",
            "./images/image4.jpg",
        ], 
        imageIndex: 0,
    },
    methods: {
        isActive(index) {
            if (this.imageIndex === index) {
                return "active"
            }
            else {
                return ""
            }
        },
        increaseIndex() {
            if (this.imageIndex === this.images.length -1) {
                this.imageIndex = 0
            }else {
                this.imageIndex++
            }
        },
        decreaseIndex(){
            if (this.imageIndex === 0) {
                this.imageIndex = this.images.length -1
            } else{
                this.imageIndex--
            }
        },
        setCurrentIndex(newIndex){
            this.imageIndex = newIndex
        }
    }
});
