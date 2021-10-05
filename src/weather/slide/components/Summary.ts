import {defineComponent, h, toRef} from "vue"

export default defineComponent({
    props: {
        todaySummary: { type: Object, default:() => ({ "temperature": "XX °C", "summary": "Clear" })}
    },
    setup(props) {

        const todaySummary = toRef(props, "todaySummary")

        return () =>
            h("div", {
                class: "flex flex-col text-white text-8xl"
            }, [
                h("div", {
                    class: "font-bold"
                }, todaySummary.value.temperature),
                h("div", todaySummary.value.summary)
            ])
    }
})