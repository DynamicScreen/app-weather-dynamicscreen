import {defineComponent, h, toRef} from "vue"

export default defineComponent({
    props: {
        city: {type: String, default: "Nowhere"}
    },
    setup(props) {

        const city = toRef(props, "city")

        return () =>
            h("div", {
                class: "flex flex-col"
            }, [
                h("div", {
                    class: "text-6xl text-white font-bold"
                }, "weather."),
                h("div", {
                    class: "text-10xl text-white font-extrabold"
                }, city.value)
            ])
    }
})