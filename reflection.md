# Chapter 2, Naming
Looking at the CardComponent there are some minor things that could be improved. An example would be the field imgSrc, which doesn't actually say anything about what type of image it's expected to contain and it could easily be confused with the imgSources field. In this case it represent the card image currently being displayed (frontside/backside). A better name would have been currentImgSrc etc.

![image](https://github.com/wachtelhund/dnd_app/assets/85429142/5fe27dbb-61a0-41cc-ac25-0a0b22bed404)

# Chapter 3, Functions
This chapter has really effected me in a positive way, especially the first rule of functions, keeping them small! During this course i've gone from writing functions of 30 and sometimes 40 lines of code, to keeping them below 20. This has changed my code for the better, both debugging wise and for the improved readability. Another thing I've taken with me from the chapter is keeping the same level of abstraction throughout functions!
An example of this can be seen in the constructor of MonsterCardComponent.

![image](https://github.com/wachtelhund/dnd_app/assets/85429142/086fc048-98e7-4dac-ac68-1706eb002050)

# Chapter 4, Comments
The chapter about comments has given me mixed feelings about comments, and I'm currently leaning more towards not actually using comments. The reason for this is that the second rule about comments says that if possible, you should explain yourself in code. This tells me that if a function or variable needs an inline comment, the code is probably not very good and needs to refactored. However I've chosen to use JSDocs for the public api in the module from lab 2, as suggested by Clean Code. Although this comment may seem unnecessary since typescript is being used, the module may be used by someone programming in vanilla Js who appreciates the comments.

![image](https://github.com/wachtelhund/dnd_app/assets/85429142/f011f70d-28dd-45a3-99e2-dd3e94ff12d8)

# Chapter 5, Formatting
To me, this chapter feels like it walks you through a lot of things that come naturally when programming. An example of vertical ordering in my code can be found in the CharacterCreator class in the module from lab 2. Here you will see a function called `generateRadomizedCharacter`. The function calls several other methods in the class, `getRandomSpells` and `getRandomFeatures` which are both placed below the caller. I've also to the best of my abilites enforced the authors old rule of not having to scroll sideways. He mentions it being an outdated rule of thumb but I'm generally programming with 3 or even 4 windows open horizontally, so for me this rule of thumb still holds true and produces horizontally neat lines.

![image](https://github.com/wachtelhund/dnd_app/assets/85429142/f3dceead-b95c-4f8e-9e32-f00d255fceb1)

# Chapter 6, Objects and Data Structures
This chapter was interesting because it went into terroitory which most of us (the students in this course) are not as familiar with, since we're all primarily javascript developers. Of course classes have been part of JavaScript for some time now, however it has not been forced in the same way as say in Java. In typescript, I've had to come to terms with this way of thinking for a little bit of time now and could definetly take lots of key values with me from the chapter. One thing that will follow me into the world of JavaScript aswell is the concept of Data Transfer Objects. It's a great way to make other developers, aswell as future me to really think about what data I send through my data flows. Here's an example of what I've used it for in my application.

![image](https://github.com/wachtelhund/dnd_app/assets/85429142/a8ed0c56-973e-4d7e-83e8-28c9b768fa84)
![image](https://github.com/wachtelhund/dnd_app/assets/85429142/0d9ea154-09dc-4f56-9a41-e20e62052611)

# Chapter 7, Error Handling

This chapter contains some very important notes and rules to create a smooth flow for handling errors throughout the application. Starting out, there wasn't really any error handling in my module, even though I was handling some very error prone code (api calls etc). After reading the chapter I've refactored my module code and followed the rules, User exceptions rather than return codes, don't return null and provide context with exceptions. The asyncrhonous code in the module now throws errors and conveys important information about what the code was doing as something went wrong with these errors.

![image](https://github.com/wachtelhund/dnd_app/assets/85429142/34abbf23-bc22-4ee3-83e9-78d8935e89e4)

![image](https://github.com/wachtelhund/dnd_app/assets/85429142/3563c0ea-a6d1-49dc-99fd-4d1d66017ecf)

# Chapter 8, Boundaries

The rules about Boundaries is something that is very relevant in this assignment, as even though I'm the one who developed the module being used in the application it can still be seen as third party software. One of the first sections of the chapter claims there is a natural tension between providers and consumers of interfaces. This is something I've had to struggle a bit with figuring out since my project was done using typescript and is handling somewhat large data objects. I can definately see some issues regarding change in both the api which the module uses, aswell as in my app which uses the module. Especially since I use a lot of types from the module in my app in different places.

![image](https://github.com/wachtelhund/dnd_app/assets/85429142/ba8a03b0-f847-44f5-a427-f9e0a9264ded)

![image](https://github.com/wachtelhund/dnd_app/assets/85429142/b4f917b8-8230-4bc9-b76f-5469f45d402c)

# Chapter 9, Unit Test

Unit Testing is something that I'm not yet knowledgeable about since I'm yet to start the course about unit testing. However reading the chapter about unit testing I'm entrigued by the idea of The Three Laws of TDD, specifically the part about writing you tests before producing any production code. I think this would allow you to think in a more abstract manner, sort of like a black box, before actually implementing the functionality. I want to do "this" and "this" is done I want to make sure I recieve "that". This would allow one to build up structure before actually worrying about the implementation, allowing you to focus on one problem at a time, structure, then implementation. Also the test seem like they also want to cohere to the rules from lots of other concepts from the book, as in the naming rule, "One word per concept" and the testing rule "Single Concept per Test".

# Chapter 10, Classes

This chapter is interesting as I'm currently studying a lot of design patterns. I think that I've followed the rule of keeping classes small quite well using generics and inheritance. By making the CardComponent an abstract generic class, I can create new card types with only a few lines of code. As seen in the CharacterCardComponent, which has the full functionality of a card, but is only 13 lines long.

![image](https://github.com/wachtelhund/dnd_app/assets/85429142/0dbe23f4-dcb4-4f95-b5c9-00299065783d)

# Chapter 11, Systems

In Angular, and probably a lot of other frameworks, dependency injection is a big deal, it is how data and instances is passed between components in Angular. An example of this can be seen in the CardComponent which doesn't fetch any data on it's own, but instead recieves it via injection from either a CharacterCard or a MonsterCard. This is done both for the imagesources and the data displayed on the card.

![image](https://github.com/wachtelhund/dnd_app/assets/85429142/e16b20c1-2000-491c-91ec-cc6384542152)






