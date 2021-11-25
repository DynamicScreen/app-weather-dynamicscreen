import {defineComponent, h, toRef} from "vue"

export default defineComponent({
    props: {
        todaySummary: { type: Object, default:() => ({ "temperature": "XX °C", "summary": "Clear" })}
    },
    setup(props) {

        const todaySummary = toRef(props, "todaySummary")

        return () =>
            h("div", {
                class: "flex flex-row text-white items-center text-8xl"
            }, [
                h("i", {
                    class: "text-10xl mr-10 " + todaySummary.value.icon
                }),
                h("div", {
                    class: "flex flex-col"
                }, [
                    h("div", {
                        class: "font-extrabold"
                    }, todaySummary.value.temperature),
                    h("div", todaySummary.value.summary)
                ]),

            ])
    }
})