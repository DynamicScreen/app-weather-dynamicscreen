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

    public function needed_accounts()
    {
        return $this->module->getOption('privileges.needs_account', false);
    }
}
