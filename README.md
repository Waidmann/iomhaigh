# Iomhaigh API

First things first; Iomhaigh roughly translates to "profile" or "image". Yes, extremely cliche - packing whatever you want to create into google translate and searching for something that sounds decent.

This project serves two purposes:

- Freshening up my .NET and Angular skills
- Having a good looking website to present myself

## Backend

This git repository contains the backend for the project. It should be deployed to AWS along with the [frontend](https://github.com/Waidmann/iomhaigh-gui) and database.

A couple of things to note:

- I used the mediator pattern (Implemented using [MediatR](https://github.com/jbogard/MediatR)) for logging
- MySql is used as database and it is initialized through code

## GUI

This git repository contains the GUI for the project. It is written in angular 11 and uses bootstrap for UI structure and styling. It should be deployed to AWS along with the [backend](https://github.com/Waidmann/iomhaigh-api). There is not a lot more to say since the project is very basic.


## Result

You can view the deployed project [here](http://www.waidmann.dev/)! (soon™)
