import {
    ISlideOptionsContext,
    VueInstance,
    SlideOptionsModule,
} from "dynamicscreen-sdk-js";

export default class WeatherOptionsModule extends SlideOptionsModule {
    async onReady() {
        return true;
    };

    setup(props: Record<string, any>, vue: VueInstance, context: ISlideOptionsContext) {
      const { h, reactive, ref } = vue;

        const { Field, TextInput, ColorPicker } = this.context.components

        return () =>
            h("div", {}, [])
    }
}
