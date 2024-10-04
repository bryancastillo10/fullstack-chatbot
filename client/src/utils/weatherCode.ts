import {Icon, 
        Sun, 
        Moon, 
        CloudSun, 
        CloudMoon, 
        CloudFog, 
        CloudRain,
        Snowflake,
    } from '@phosphor-icons/react';

export const weatherCode: Record<string,Icon> = {
    "01d": Sun,
    "01n": Moon,
    "02d": CloudSun,
    "02n": CloudMoon,
    "03d": CloudSun,
    "03n": CloudMoon,
    "04d": CloudFog,
    "04n": CloudFog,
    "09d": CloudRain,
    "09n": CloudRain,
    "10d": CloudRain,
    "10n": CloudRain,
    "13d": Snowflake,
    "13n": Snowflake
  };