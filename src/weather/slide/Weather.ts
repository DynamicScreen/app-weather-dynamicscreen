import {
    BaseContext,
    AssetDownload,
    IAssetsStorageAbility,
    IGuardsManager,
    ISlideContext,
    IPublicSlide,
    SlideModule
} from "dynamicscreen-sdk-js";

import {onMounted, VNode} from 'vue';
import i18next from "i18next";
import City from "./components/City";
import Summary from "./components/Summary";
import Forecast from "./components/Forecast";

const en = require("../../../languages/en.json");
const fr = require("../../../languages/fr.json");

export default class SimpleMessageSlideModule extends SlideModule {
    constructor(context: ISlideContext) {
        super(context);
    }

    trans(key: string) {
        return i18next.t(key);
    };

    async onReady() {
        return true;
    };

    onMounted() {
        console.log('onMounted')
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
    }

    initI18n() {
        i18next.init({
            fallbackLng: 'en',
            lng: 'fr',
            resources: {
                en: { translation: en },
                fr: { translation: fr },
            },
            debug: true,
        }, (err, t) => {
            if (err) return console.log('something went wrong loading translations', err);
        });
    };

    // @ts-ignore
    setup(props, ctx) {
        const { h, reactive, ref, Transition } = ctx;

        const slide = reactive(props.slide) as IPublicSlide;
        this.context = reactive(props.slide.context);

        const city = ref(slide.data.city);
        const todaySummary = ref(slide.data.today_summary)
        const forecast = ref(slide.data.forecast)

        this.context.onPrepare(async () => {

        });

        this.context.onReplay(async () => {
        });

        this.context.onPlay(async () => {

        });

        // this.context.onPause(async () => {
        //   console.log('Message: onPause')
        // });

        this.context.onEnded(async () => {
        });

        return () =>
            h("div", {
                class: "flex w-full h-full bg-gradient-to-br from-blue-500 to-sky-300 overflow-y-hidden"
            }, [
                h("div", {
                    class: "w-full h-full flex flex-row portrait:flex-col items-center justify-around"
                }, [
                    h("div", {
                        class: "block-left h-full flex flex-col justify-around w-1/3 portrait:w-full"
                    }, [
                        h(City, {
                            city: city.value
                        }),
                        h(Summary, {
                            todaySummary: todaySummary.value
                        })
                    ]),
                    h("div", {
                        class: "block-right h-full w-1/3 portrait:w-full flex flex-col justify-evenly items-center"
                    }, forecast.value.map((dayForecast) => {
                        return h(Forecast, {
                            forecast: dayForecast
                        })
                    }))
                ])
            ])
    }
}