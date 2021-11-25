import {
    BaseContext,
    AssetDownload,
    IAssetsStorageAbility,
    IGuardsManager,
    ISlideContext,
    IPublicSlide,
    SlideModule,
    SlideUpdateFunctions
} from "dynamicscreen-sdk-js";

const en = require("../languages/en.json");
const fr = require("../languages/fr.json");

export default class WeatherOptionsModule extends SlideModule {
    constructor(context: ISlideContext) {
        super(context);
    }

    async onReady() {
        return true;
    };

    onMounted() {
        console.log('onMounted weather OPTIONS')
    }

    //@ts-ignore
    onErrorTracked(err: Error, instance: Component, info: string) {
    }

    //@ts-ignore
    onRenderTriggered(e) {
    }

    //@ts-ignore
    onRenderTracked(e) {
    }

    onUpdated() {
        console.log('on updated')
    }

    // @ts-ignore
    setup(props, ctx, update: SlideUpdateFunctions, OptionsContext) {
        const { h, reactive, ref } = ctx;

        const { Field, TextInput, ColorPicker } = OptionsContext.components

        console.log('in setup before return h')
        return () =>
            h("div", {}, [])
    }
}
