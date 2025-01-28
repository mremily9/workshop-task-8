# FA205_Workshop_8

Website link: https://mremily9.github.io/workshop-task-8/


# Overview
- Looked into learning how to implement an API wihtin our p5.js project
- Learning how to obtain data from a json file from the API
- experiment with showcasing data from the API in a p5.js sketch

  
# Notes

![image](https://github.com/user-attachments/assets/175db260-4641-459f-b98d-6817785f719a)

![image](https://github.com/user-attachments/assets/a2d02822-df3e-47a5-82b4-2d1cead26353)


![image](https://github.com/user-attachments/assets/5eaa7585-9f0e-4ab5-9452-a43a87ffabdb)

https://mixedanalytics.com/blog/list-actually-free-open-no-auth-needed-apis/

![image](https://github.com/user-attachments/assets/4bf96e81-6668-4997-8292-f29cd6b1e332)


![image](https://github.com/user-attachments/assets/6cb7d08f-c7bd-4bd3-9d5c-5640d32cfa5a)

Another helpful example 

![image](https://github.com/user-attachments/assets/cb430f69-6bd6-47f7-8bf9-72d83bbed8c5)


Comments while following the workshop video. 



# Progress (Problem Solving/Code)
**Finding an API**

I started by finding an API to work on - looking through the list of free APIs I found the Pokemon one to be very interesting.

![image](https://github.com/user-attachments/assets/3da5d8b3-c659-4ff7-b4f5-01f22fdba796)

https://pokeapi.co/

Looking into specifically the characteristics of the pokemon 

![image](https://github.com/user-attachments/assets/6dc61987-50d0-4a85-8d53-302b9c81d08f)

https://pokeapi.co/docs/v2#characteristics

At first, when implementing the API information - it wouldn't load in the text. 

Despite following similar steps to the workshop video guide. 

![image](https://github.com/user-attachments/assets/a709f875-f3b4-4c5a-ab0c-b2f70ee7072f)

![image](https://github.com/user-attachments/assets/11c49d50-879f-4487-9261-af6ebc6ba955)

However, after checking out the url of the API I noticed that to reference the part I wanted, I had to refer to it differently. 

![image](https://github.com/user-attachments/assets/1440a2f2-7da2-41fe-bae3-eb3b8fcb9244)

Going from this 

```
pkm = jdata.descriptions[0];
```

Into this

```
pkm = jdata.descriptions[0].description;
```

![image](https://github.com/user-attachments/assets/2700d9e1-58ad-46ab-9e94-5620bd80f30a)

I was then able to get my description in japanese - changing the index to change the language

![image](https://github.com/user-attachments/assets/03e8bb02-e0b0-4ba9-b3c9-ea5d969af99f)


Then using the API based on pokemon itself I wanted to get the data such as name and weight 

![image](https://github.com/user-attachments/assets/498a3a2a-d466-4eb0-a02b-b9dacb062ada)

![image](https://github.com/user-attachments/assets/074d6d81-12af-41eb-8610-e53a6f1a2c0f)

I found the website to be heavy useful as the raw json file was a text nightmare


Implementing these in the same manner as before

![image](https://github.com/user-attachments/assets/0c0b9f4a-6ecb-4e21-a007-0c98f6db4546)


**Final coding comments**
- I was able to learn about APIs and implementing it
- I found a lot of trouble in displaying the data vs learning how to use the API. 

# Future development 
- I would like to implement more data about the Pokemon from the API
- I would love to also have an image of the Pokemon to show up as well to give a reference for the user. 

# Reflection
- I found this super fun to do - especially since it was about pokemon - making it interesting in topic. 
- I would love to experiment mroe with APIs - specifically with images since I didn't get to do that here. 
- I really found the usefulness of APIs from this workshop and found the experiments fun to do. 
