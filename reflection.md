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



