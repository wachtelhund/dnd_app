# DndApp

## Introduction
This application can be used as a way to generate random encounters of monsters from the Dungeons and Dragons universe.
It has dependencies on the npm package [dnd_api_helper](https://github.com/wachtelhund/dnd_api_helper) which in turn has a dependency on [this dnd api](http://www.dnd5eapi.co/).
At the moment the dnd API is missing alot of the images for different types of monsters and these images have been replaced with a placeholder image.

### Installation
The application is not yet deployed and therefore it needs to be installed locally using the following steps.
* Clone the repo to your local machine
* Run npm install
* Run ng serve
This will launch the application on localhost:4200

### Usage
![image](https://github.com/wachtelhund/dnd_app/assets/85429142/786af7b4-33cb-463d-b125-9421944870e8)
Use these forms to generate cards with monsters or to generate a character with set number of features and spells.
* Maximum amount of monsters: 5
* Maximum challenge rating: 25
* Maximum amount of spells: 4
* Maximum amount of features: 4

Press the generate button to generate cards:

![image](https://github.com/wachtelhund/dnd_app/assets/85429142/d3143f8b-2379-40fb-bef4-da99b86335dc)

Press the card to flip them, then hover over the monster name or class name to display details about the card.

![image](https://github.com/wachtelhund/dnd_app/assets/85429142/78896833-13a1-45ec-af26-4ef4daa7c50f)

### For developers
The application is developed using angular 16 in however it currently doesn't use the new signals, instead it uses Subjects and subscribtions from Rxjs.
Feel free to refactor using the new signal syntax. The focus of this application is not visuals but instead scalable solutions which allows for growth over time.
If you believe that the data supplied by the [dnd_api_helper](https://github.com/wachtelhund/dnd_api_helper) module is lacking, please refer to the [dnd_api_helper github](https://github.com/wachtelhund/dnd_api_helper).

Follow the the [installation steps](https://github.com/wachtelhund/dnd_app/edit/main/README.md#installation).




