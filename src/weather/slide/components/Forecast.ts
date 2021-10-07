import {h, toRef, defineComponent} from "vue";

export default defineComponent({
    props: {
        forecast: { type: Object, default: () => ({ dayOfWeek: "Someday", temperature: "XX °C", summary: "clear", icon: "" })}
    },
    setup(props) {

        const forecast = toRef(props, "forecast");

        return () =>
            h("div", {
                class: "flex p-16 bg-black bg-opacity-10 flex-col rounded-extraXl text-white w-5/6 portrait:items-center portrait:w-2/3"
            }, [
                h("div", {
                    class: "text-4xl font-bold mb-5"
                }, forecast.value.dayOfWeek),
                h("div" , {
                    class: "flex flex-row items-center"
                }, [
                    h("i", {
                        class: "text-7xl mr-5 " + forecast.value.icon
                    }),
                    h("div", {
                        class: "flex flex-col text-4xl"
                    }, [
                        h("div", {
                            class: "font-bold"
                        }, forecast.value.temperature),
                        h("div", forecast.value.summary)
                    ])
                ])
            ])
    }
});