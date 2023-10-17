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


