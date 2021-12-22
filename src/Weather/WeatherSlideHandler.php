<?php

namespace DynamicScreen\Weather\Weather;

use Carbon\Carbon;
use DynamicScreen\SdkPhp\Handlers\SlideHandler;
use DynamicScreen\SdkPhp\Interfaces\ISlide;

class WeatherSlideHandler extends SlideHandler
{

    public function fetch(ISlide $slide): void
    {
        // TODO with authprovider
    }
}
