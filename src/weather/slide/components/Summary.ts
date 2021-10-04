import {defineComponent, h} from "vue"

export default defineComponent({

    setup(props) {
        return () =>
            h("div", {
                class: "flex flex-col text-white text-7xl"
            }, [
                h("div", {
                    class: "font-bold"
                }, "26 °C"),
                h("div", {
                    class: ""
                }, "Ciel Dégagé")
            ])
    }
})