import {defineComponent, h} from "vue"

export default defineComponent({

    setup() {
        return () =>
            h("div", {
                class: "flex flex-col"
            }, [
                h("div", {
                    class: "text-4xl text-white font-bold"
                }, "météo."),
                h("div", {
                    class: "text-8xl text-white font-bold"
                }, "Bordeaux")
            ])
    }
})