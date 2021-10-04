import {h, toRef, toRefs, defineComponent} from "vue";

export default defineComponent({
    props: {
        day: {type: String, required: true}
    },
    setup(props) {

        const dayOfWeek = toRefs(props).day;

        return () =>
            h("div", {
                class: "flex bg-black opacity-50 m-10"
            }, [
                h("div", {
                    class: "text-white text-xl"
                }, ""),
                h("div")
            ])
    }
});