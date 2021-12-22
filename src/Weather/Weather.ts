import {
    ISlideContext,
    IPublicSlide,
    VueInstance,
    SlideModule
} from "dynamicscreen-sdk-js";

import City from "../Components/City";
import Summary from "../Components/Summary";
import Forecast from "../Components/Forecast";

export default class WeatherSlideModule extends SlideModule {
    async onReady() {
        return true;
    };

  setup(props: Record<string, any>, vue: VueInstance, context: ISlideContext) {
        const { h, reactive, ref } = vue;

        const slide = reactive(this.context.slide) as IPublicSlide;

        const city = ref(slide.data.city);
        const todaySummary = ref(slide.data.today_summary)
        const forecast = ref(slide.data.forecast)

        return () =>
            h("div", {
                class: "flex w-full h-full bg-gradient-to-br from-blue-500 to-sky-300 overflow-y-hidden"
            }, [
                h("div", {
                    class: "w-full h-full flex flex-row portrait:flex-col items-center justify-around"
                }, [
                    h("div", {
                        class: "block-left h-full flex flex-col justify-around portrait:items-center w-1/3 portrait:w-full"
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